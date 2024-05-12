import {App} from 'vue'
import chooseArea from './chooseArea'
import chooseIcon from './chooseIcon'
import trend from './trend'
import notification from './notification'
import list from './list'
import menu from './menu'
import infiniteMenu from './menu'
import progress from './progress'

const components = [
  chooseArea,
  chooseIcon,
  trend,
  notification,
  list,
  menu,
  infiniteMenu,
  progress
]

export default {
  install(app: App) {
    components.map(item => {
      app.use(item)
    })
  }
}
