<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" required placeholder="Name" v-model="displayName">
    <input type="email" required placeholder="Email" v-model="email">
    <div class="form-group">
      <input type="password" required placeholder="Password" v-model="password">
      <input type="password" required placeholder="Repeat password" v-model="repeatPassword">
    </div>
    <div v-if="error" class="error">{{error}}</div>
    <button class="btn btn-primary">Sign up</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import useSignup from '../composables/useSignup'
export default {
  setup(props, context) {
    const displayName = ref('')
    const email = ref('')
    const password = ref('')
    const repeatPassword = ref('')

    const { error, signup } = useSignup()

    const handleSubmit = async () => {

      if(password.value === repeatPassword.value) {
        await signup(email.value, password.value, displayName.value)
        if(!error.value) {
          context.emit('signup')
        }
      }
    }


    return { displayName, email, password, repeatPassword, error, handleSubmit }
  }
}
</script>

<style>

</style>