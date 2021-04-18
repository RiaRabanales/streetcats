import { ref } from 'vue';
import { projectAuth } from '@/config/firebase'

const error = ref(null);
const pending = ref(false);

const logout = async () => {

    error.value = null;
    pending.value = true;
    
    try {
        await projectAuth.signOut();
        pending.value = false;
    } catch(err) {
        console.log(err.message);
        error.value = err.message;
        pending.value = false;
    }
};

const useLogout = () => {
    return { logout, error, pending };
};

export default useLogout;