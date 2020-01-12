<template>
  <button
    :class="classes"
    type="button"
    @click="handleClick"
  >
    <slot />
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
  },

  methods: {
    handleClick (ev) {
      this.$emit('click', ev)
    }
  }
}
</script>

<style scoped>
.kbn-button {
  padding: .6em 1.3em;
}

.kbn-button-text {
  border: none;
  padding-right: 0;
  padding-left: 0;
}
</style>
