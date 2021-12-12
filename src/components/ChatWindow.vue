<template>
  <div class="chat-window">
    <div v-if="error" class="error">{{error}}</div>
    <div class="messages" ref="messages" v-if="formattedDocuments.length">
      <SingleMessage v-for="doc in formattedDocuments" :key="doc.id" :doc="doc" />
    </div>
  </div>
</template>


<script>
import SingleMessage from './SingleMessage.vue'
import getCollection from '../composables/getCollection'
import { computed, ref } from '@vue/reactivity'
import { formatDistanceToNow } from 'date-fns'
import { onUpdated } from '@vue/runtime-core'
export default {
  components: { SingleMessage },
  setup() {
    const { error, documents } = getCollection('messages')

    const formattedDocuments = computed(() => {
      if(documents.value.length) {
        return documents.value.map(doc => {
          let time = formatDistanceToNow(doc.createdAt.toDate())
          return { ...doc, createdAt: time }
        })
      } else return []

    })

    const messages = ref(null)
    onUpdated(() => {
      messages.value.scrollTop = messages.value.scrollHeight
    })

    return { error, documents, formattedDocuments, messages }
  }
}
</script>


<style>
  .chat-window {
    background: var(--clr-chat-bg);
  }
  .messages {
    max-height: 65vh;
    overflow: auto;
    padding: 0 2rem;
  }
  .single {
    max-width: 70%;
    margin: 1rem 0;
  }
  .created-at {
    display: block;
    color: #999;
    font-size: .8rem;
    margin-left: 1rem;
  }
  .single-message {
    background: var(--clr-message-others);
    padding: 1rem 1.5rem;
    border-radius: var(--border-radius);
  }
  .name {
    font-weight: bold;
    color: var(--clr-primary);
    margin-right: .5rem;
  }
  .own {
    margin-left: auto;
  }
  .own .single-message {
    background: var(--clr-message-own);
  }
  .own .name {
    display: none;
  }
</style>