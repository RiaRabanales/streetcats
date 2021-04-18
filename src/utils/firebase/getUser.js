import { ref } from 'vue';
import { projectAuth } from '@/config/firebase'

const user = ref(projectAuth.currentUser);

projectAuth.onAuthStateChanged(changedUser => {
    //así actualizo mi usario con login/logout
    user.value = changedUser;
});

const getUser = () => {
    return { user };
}

export default getUser;