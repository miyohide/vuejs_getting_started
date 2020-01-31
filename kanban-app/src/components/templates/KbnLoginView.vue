<template>
  <div class="login-view">
    <h1>Kanban App</h1>
    <KbnLoginForm :onlogin="handleLogin" />
  </div>
</template>

<script>
import KbnLoginForm from '@/components/molecules/KbnLoginForm.vue'

export default {
  name: 'KbnLoginView',

  components: {
    KbnLoginForm
  },

  methods: {
    handleLogin (authInfo) {
    }
  }
}
</script>
