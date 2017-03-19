export default class Theme {
  constructor(color) {
    this.color = color
    this.subscribers = []
  }

  setColor(color) {
    this.color = color
    this.subscribers.forEach(fnc => fnc())
  }

  subscribe(fnc) {
    this.subscribers.push(fnc)
  }
}