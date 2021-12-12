<template>
  <nav class="navbar">
    <div v-if="user">
      <p>{{user.displayName}}</p>
      <p class="email">Currently logged in as {{ user.email }}</p>
    </div>
    <button class="btn btn-primary" @click="handleClick">Logout</button>
  </nav>
</template>

<script>
import useLogout from '../composables/useLogout'
import getUser from '../composables/getUser'
export default {
  setup() {
    const { logout } = useLogout()
    const { user } = getUser()

    const handleClick = async () => {
      await logout()
    }

    return { handleClick, user }
  }
}
</script>

<style>
  .navbar {
    padding: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--clr-border);
  }
  .navbar p {
    color: #444;
  }
  .navbar p.email {
    color: #999;
    font-size: .8rem;
    display: none;
  }
  @media(min-width: 450px) {
    .navbar p.email {
      display: inline-block;
    }
  } 
</style>