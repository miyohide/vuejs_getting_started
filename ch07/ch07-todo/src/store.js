import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [
      {
        id: 1,
        name: '牛乳を買う',
        done: false
      },
      {
        id: 2,
        name: 'Vue.jsの本を買う',
        done: true
      }
    ],
    // 次に追加するタスクのID。実際にアプリではサーバーなどで生成する必要あり。
    nextTaskId: 3,
  },
  mutations: {
    // タスクを追加する
    addTask (state, { name }) {
      state.tasks.push({
        id: state.nextTaskId,
        name,
        done: false
      })
      // 次に追加するタスクのIDを更新する
      state.nextTaskId++
    },
    // タスクの完了状態を変更する
    toggleTaskStatus (state, { id }) {
      const filtered = state.tasks.filter(task => {
        return task.id === id
      })

      filtered.forEach(task => {
        task.done = !task.done
      })
    },

  },
  actions: {

  }
})
