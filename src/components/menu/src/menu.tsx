/**
 * @jsxRuntime classic
 * @jsxImportSource vue
 */
import { defineComponent, PropType, useAttrs } from 'vue'
// import { MenuItem } from './types'
import * as Icons from '@element-plus/icons'
import './styles/index.scss'

export default defineComponent({
  props: {
    // 导航菜单的数据
    data: {
      type: Array as PropType<any[]>,
      required: true
    },
    // 默认选中的菜单
    defaultActive: {
      type: String,
      default: ''
    },
    // 是否是路由模式
    router: {
      type: Boolean,
      default: false
    },
    // 键名
    // 菜单标题的键名
    name: {
      type: String,
      default: 'name'
    },
    // 菜单标识的键名
    index: {
      type: String,
      default: 'index'
    },
    // 菜单图标的键名
    icon: {
      type: String,
      default: 'icon'
    },
    // 菜单子菜单的键名
    children: {
      type: String,
      default: 'children'
    }
  },
  setup(props) {
    // 封装一个渲染无限层次菜单的方法
    // 函数会返回一段jsx的代码
    let renderMenu = (data: any[]) => {
      return data.map(item => {
        // 每个菜单的图标
        item.i = (Icons as any)[item.icon!]
        // 处理sub-menu的插槽
        let slots = {
          title: () => {
            return (
              <>
                <item.i />
                <span>{item[props.name]}</span>
              </>
            )
          }
        }
        if (item[props.children!] && item[props.children!].length) {
          // 递归渲染children
          return (
            <el-sub-menu index={item[props.index]} v-slots={slots}>
              {renderMenu(item[props.children!])}
            </el-sub-menu>
          )
        } else {
          // 正常渲染普通的菜单
          return (
            <el-menu-item index={item[props.index]}>
              <item.i />
              <span>{item[props.name]}</span>
            </el-menu-item>
          )
        }
      })
    }
    let attrs = useAttrs()
    return () => {
      return (
        <el-menu
          default-active={props.defaultActive}
          router={props.router}
          {...attrs}>
          {renderMenu(props.data)}
        </el-menu>
      )
    }
  }
})
