import { ref } from 'vue'
import { projectFirestore } from '@/config/firebase'

const useCollection = (collection) => {
    const error = ref(null);

    const addDocument = async (doc) => {
        //aquí intento añadir un documento nuevo a la colección
        error.value = null;

        try {
            await projectFirestore.collection(collection).add(doc);
        } catch(err) {
            console.log(err.message);
            error.value = 'The message could not be sent';
        }
    }

    return { error, addDocument };
};

export default useCollection;