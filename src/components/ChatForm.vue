<template>
  <form class="chat-form" @submit.prevent="handleSubmit">
    <input type="text" placeholder="Type a new message" v-model="message">
    <button class="btn btn-primary">Send</button>
    <div v-if="error" class="error">{{error}}</div>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import getUser from '../composables/getUser'
import useCollection from '../composables/useCollection'
export default {
  setup() {
    const message = ref('')
    const { user } = getUser()

    const { addMessage, error } = useCollection('messages')

    const handleSubmit = async () => {
      if(message.value.trim() !== '') {
        const doc = {
          name: user.value.displayName,
          message: message.value,
          uid: user.value.uid
        }

        await addMessage(doc)
        if(!error.value) {
          message.value = ''
        }
      }
    }

    return { message, error, handleSubmit }
  }
}
</script>

<style>
  .chat-form {
    padding: 1rem;
    border-top: 1px solid var(--clr-border);
  }
  .chat-form button {
    display: block;
    width: 100%;
    margin-block: 1rem;
  }
</style>