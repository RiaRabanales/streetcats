import { ref } from 'vue'
import { projectStorage } from '@/config/firebase'
import { store } from '@/store/index'

const userUid = ref('');

if (store.state.logged) {
    userUid.value = store.state.user.uid;
}

const useStorage = () => {
    const error = ref(null);
    const url = ref(null);
    const filePath = ref(null); //ruta donde guardo el archivo en storage

    const uploadImage = async (file) => {
        filePath.value = `cats/${userUid.value}/${file.name}`;

        const storageRef = projectStorage.ref(filePath.value);

        try {
            const res = await storageRef.put(file);
            url.value = await res.ref.getDownloadURL();
        } catch(err) {
            console.log(err.message);
            error.value = err.message
        }
    }

    const deleteImage = async (filePath) => {
        const storageRef = projectStorage.ref(filePath.value);

        try {
            storageRef.delete();
        } catch(err) {
            console.log(err.message);
            error.value = err.message
        }
    }

    const uploadFile = async (file) => {
        filePath.value = `contracts/${file.name}`;

        const storageRef = projectStorage.ref(filePath.value);

        try {
            const res = await storageRef.put(file);
            url.value = await res.ref.getDownloadURL();
        } catch(err) {
            console.log(err.message);
            error.value = err.message
        }
    }

    return { url, filePath, uploadImage, deleteImage, uploadFile };
}

export default useStorage;