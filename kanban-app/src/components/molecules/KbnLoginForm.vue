<template>
  <form novalidate>
    <div class="form-item">
      <label for="email">メールアドレス</label>
      <input
        id="email"
        v-model="email"
        type="text"
        autocomplete="off"
        placeholder="例： kanban@domain.com"
      >
      <ul class="validation-errors">
        <li v-if="!validation.email.format">
          メールアドレスの形式が不正です。
        </li>
        <li v-if="!validation.email.required">
          メールアドレスが入力されていません
        </li>
      </ul>
    </div>
  </form>
</template>

<script>
import KbnButton from '@/components/atoms/KbnButton.vue'
const required = val => !!val.trim()
export default {
  name: 'KbnLoginForm',

  components: {
    KbnButton
  },

  props: {
    onlogin: {
      type: Function,
      required: true
    }
  },

  data () {
    return {
      email: '',
    }
  },

  computed: {
    validation () {
      return {
        email: {
          required: required(this.email),
        },
      }
    },
  },
}
</script>
