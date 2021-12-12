<template>
  <div class="single" :class="user.uid === doc.uid ? 'own' : ''">
    <span class="created-at">{{doc.createdAt}}</span>
    <div class="single-message">
      <span class="name">{{doc.name}}</span>
      <span class="message">{{doc.message}}</span>
    </div>
  </div>
</template>

<script>
import getUser from '../composables/getUser'
export default {
  props: ['doc'],
  setup() {
    const { user } = getUser()

    return { user }
  }
}
</script>

<style>

</style>