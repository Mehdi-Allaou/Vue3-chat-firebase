<template>
  <div class="container welcome">
    <div v-if="showLogin">
      <h2>Login</h2>
      <LoginForm @login="enterChat" />
      <p>No account? <span @click="showLogin = false">Signup</span> instead.</p>
    </div>
    <div v-else>
      <h2>Sign up for an account</h2>
      <SignupForm @signup="enterChat" />
      <p>Already a member? <span @click="showLogin = true">Login</span> instead.</p>
    </div>
  </div>
</template>

<script>
import LoginForm from '../components/LoginForm.vue'
import SignupForm from '../components/SignupForm.vue'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
export default {
  components: { LoginForm, SignupForm },
  setup() {
    const showLogin = ref(true)
    const router = useRouter()

    const enterChat = () => {
      router.push({ name: 'Chat' })
    }

    return { showLogin, enterChat }
  }
}
</script>

<style>
  .welcome {
    text-align: center;
    padding: 2rem;
  }
  .welcome form {
    max-width: 400px;
    margin: 2rem auto;
  }
  input {
    width: 100%;
    display: block;
    padding: 10px;
    border: 1px solid #d3d3d3;
    border-radius: var(--border-radius);
    outline: none;
    color: #333;
    margin-bottom: 1rem;
  }
  .welcome .form-group {
    display: flex;
    column-gap: 1rem;
    flex-direction: column;
  }
  .welcome span {
    color: var(--clr-primary);
    font-weight: bold;
    cursor: pointer;
    text-decoration: underline;
  }

  @media (min-width: 500px) {
    .welcome .form-group {
      flex-direction: row;
    }
  }
</style>