import { ref } from 'vue';
import { projectAuth } from '@/config/firebase'

const error = ref(null);
const pending = ref(false);

const login = async (email, password) => {
    error.value = null;
    pending.value = true; //porque empiezo a hacer un request

    try {
        const res = projectAuth.signInWithEmailAndPassword(email, password);

        if (!res) {
            //TODO literales de error multilenguaje
            throw new Error('No se ha podido completar el login.')
        }
        error.value = null;

        pending.value = false; //porque se ha completado la request
        return res;
    
    } catch(err) {
        //Pueden salir bad requests en la consola y no son un error de mi parte:
        //https://stackoverflow.com/questions/39581590/why-do-i-see-a-400-bad-request-in-my-developer-console-when-sign-in-to-fireb
        console.log(err.message);
        error.value = err.message;
        pending.value = false;
    }
};

const useLogin = () => {
    return { error, login, pending }
};

export default useLogin;