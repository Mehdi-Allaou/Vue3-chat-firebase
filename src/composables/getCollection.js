import { ref, watchEffect } from 'vue'
import { db } from '../firebase/config'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'

const getCollection = (_collection) => {

  const documents = ref([])
  const error = ref(null)

  const colRef = collection(db, _collection)
  const q = query(colRef, orderBy('createdAt'))

  const unsub = onSnapshot(q, snapshot => {
    console.log('snapshot')
    let results = []
    snapshot.forEach(doc => {
      doc.data().createdAt && results.push({ ...doc.data(), id: doc.id })
    })

    documents.value = results
    error.value = null

  }, err => {
    console.log(err.message)
    documents.value = null,
    error.value = 'Could not fetch the data'
  })

  watchEffect((onInvalidate) => {
    onInvalidate(() => unsub())
  })

  return { error, documents }
}

export default getCollection