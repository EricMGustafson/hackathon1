import { dev } from './env.js'
import { EventEmitter } from './Utils/EventEmitter.js'
import { isValidProp } from './Utils/isValidProp.js'
import { Post } from './Models/Post.js'

class AppState extends EventEmitter {
  user = {}
  account = {}
  /** @type {import('./Models/Post').Post[]} */
  posts = [
    new Post({
      title: 'GET OFF MY LAWN!!!!1!!',
      body: 'MY GRASS IS CUT TO 5 INCHES AND THESE BIKES AND KIDS RUIN IT DAILY',
      signature: 'GRANPA RAUL',
      upVote: 4,
      downVote: 1
    })
  ]

  socketData = []
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})

if (dev) {
  // @ts-ignore
  window.ProxyState = ProxyState
}
