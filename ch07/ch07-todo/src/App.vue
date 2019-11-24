<template>
  <div id="app">
    <h2>タスク一覧</h2>
    <ul>
      <li v-for="task in tasks" v-bind:key="task.id">
        <input type="checkbox" v-bind:checked="task.done"
          v-on:change="toggleTaskStatus(task)">
        {{ task.name }}
        -
        <span v-for="id in task.labelIds" v-bind:key="id">
          {{ getLabelText(id) }}
        </span>
      </li>
    </ul>

    <form v-on:submit.prevent="addTask">
      <input type="text" v-model="newTaskName" placeholder="新しいタスク">
    </form>

    <h2>ラベル一覧</h2>
    <ul>
      <li v-for="label in labels" v-bind:key="label.id">
        <input type="checkbox" v-bind:value="label.id" v-model="newTaskLabelIds">
        {{ label.text }}
      </li>
    </ul>

    <form v-on:submit.prevent="addLabel">
      <input type="text" v-model="newLabelText" placeholder="新しいラベル">
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 入力中の新しいタスク名を一時的に保持する
      newTaskName: '',
      // 新しいタスクに紐づくラベルを一時的に保持する
      newTaskLabelIds: [],
      // 入力中の新しいラベル名を一時的に保持する
      newLabelText: ''
    }
  },

  computed: {
    tasks () {
      return this.$store.state.tasks
    },

    labels () {
      return this.$store.state.labels
    }
  },

  methods: {
    // タスクを追加する
    addTask () {
      // `addTask`mutationをコミット
      this.$store.commit('addTask', {
        name: this.newTaskName,
        labelIds: this.newTaskLabelIds,
      })
      this.newTaskName = ''
      this.newTaskLabelIds = []
    },

    // タスクの完了状態を更新する
    toggleTaskStatus (task) {
      // `toggleTaskStatus`mutationをコミット
      this.$store.commit('toggleTaskStatus', {
        id: task.id
      })
    },

    // ラベルを追加する
    addLabel () {
      // `addLabel`mutationをコミット
      this.$store.commit('addLabel', {
        text: this.newLabelText
      })
      this.newLabelText = ''
    },

    // ラベルのIDからそのラベルのテキストを返す
    getLabelText (id) {
      const label = this.labels.filter(label => label.id === id)[0]
      return label ? label.text : ''
    }
  }
}
</script>
