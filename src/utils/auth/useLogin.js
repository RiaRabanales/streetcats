import { ref } from 'vue';
import { projectAuth } from '@/config/firebase'

const pending = ref(false);

const login = async (email, password) => {
    pending.value = true; //porque empiezo a hacer un request
    const res = projectAuth.signInWithEmailAndPassword(email, password);
    pending.value = false; //porque se ha completado la request
    return res;

};

const useLogin = () => {
    return { login, pending }
};

export default useLogin;