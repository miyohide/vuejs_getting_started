<template>
  <button
    :class="classes"
    type="button"
  >
  </button>
</template>

<script>
export default {
  name: 'KbnButton',

  props: {
    type: {
      type: String,
      default: 'button'
    }
  },

  computed: {
    // 参考 https://jp.vuejs.org/v2/guide/class-and-style.html#%E3%82%AA%E3%83%96%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E6%A7%8B%E6%96%87
    classes () {
      const cls = this.type === 'text' ? ('-' + this.type) : ''
      return [`kbn-button${cls}`]
    }
  }
}
</script>
