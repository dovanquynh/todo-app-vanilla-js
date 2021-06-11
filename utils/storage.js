const TODOS = 'TODOS'

export default {
  get() {
    return JSON.parse(localStorage.getItem(TODOS)) || []
  },
  set(todos) {
    localStorage.setItem(TODOS, JSON.stringify(todos))
  }
}