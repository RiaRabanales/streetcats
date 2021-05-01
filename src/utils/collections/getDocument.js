import { watchEffect, ref } from 'vue'
import { projectFirestore } from '@/config/firebase'

const getDocument = (collection, id) => {

  let document = ref(null);
  let error = ref(null);

  // conecto con firestore y registro la referencia a la colección
  let documentRef = projectFirestore.collection(collection).doc(id);
  //con .doc(id) paso el documento concreto que quiero de la colección

  //cada vez que cambia el estado recibo el documento de nuevo
  const unsub = documentRef.onSnapshot(doc => {
    // compruebo que existe y tiene datos
    if(doc.data()) {
      document.value = {...doc.data(), id: doc.id};
      error.value = null;
    }
    else {
      error.value = 'Error: document does not exist'
    }
  }, err => {
    console.log(err.message)
    error.value = 'Error: problem fetching the document'
  })

  watchEffect((onInvalidate) => {
    onInvalidate(() => unsub());
  });

  return { error, document };

}

export default getDocument;