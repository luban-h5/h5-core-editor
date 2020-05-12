// import Vue from 'vue'
// import App from './App.vue'
import Editor from './views/Editor.js'
import editorModule from '@core-editor/store/modules/editor'
// import router from './router'
// import store from './store/'
// import i18n from './locales'
// import './registerServiceWorker'
// import ElementUI from 'element-ui'
import { ColorPicker, Button } from 'element-ui'
import Antd from 'ant-design-vue'

// import 'element-ui/lib/theme-chalk/index.css'
import 'ant-design-vue/dist/antd.css'
// !#zh 请注意，务必使用 font-awesome@4.7.0 版本
import 'font-awesome/css/font-awesome.min.css'
import vClickOutside from 'v-click-outside'
import { pluginsList } from '@core-editor/mixins/load-plugins'

import PropMultiTextItemsEditor from '@core-editor/components/core/support/prop-multi-items-editor/text.js'
import ImageGallery from '@core-editor/components/core/support/image-gallery/gallery.js'
import VideoGallery from '@core-editor/components/core/support/video-gallery/gallery'
import LbpTextAlign from '@luban-h5/lbs-text-align'


// export default new Vue({
//   // router,
//   store,
//   i18n,
//   render: h => h(App)
// }).$mount('#app')


function registerPlugins2Editor (Vue) {
  pluginsList.forEach(plugin => {
    // 全局注册组件，便于以后扩展自定义脚本，注释原来的局部注册：this.$options.components[plugin.name] = plugin.component
    Vue.component(plugin.name, plugin.component)
    var Ctor = Vue.component(plugin.name)
    console.log(new Ctor(), plugin.name)
    console.log(Vue.options.components)
  })
}

function registerSupportPlugin2Editor(Vue) {
  Vue.component(PropMultiTextItemsEditor.name, PropMultiTextItemsEditor)
  Vue.component(ImageGallery.name, ImageGallery)
  Vue.component(VideoGallery.name, VideoGallery)
  Vue.component('lbs-text-align', LbpTextAlign)
}

const install = function (Vue, options) {
  console.log('editor install', Vue.config.xxxx)
  if (!options.store) {
    throw new Error('Please provide vuex store.')
  }
  window.getEditorApp = new Vue()

  registerPlugins2Editor(Vue)
  registerSupportPlugin2Editor(Vue)

  Vue.config.productionTip = false
  Vue.use(Antd)
  Vue.use(vClickOutside)

  /**
   * #!en import element-ui color picker for bgcolor、color, because a-input(ant-design-vue) component do not support alpha
   * #!zh 引入 element-ui 颜色选择器，因为 ant-design-vue 没有提供颜色选择器，默认的 <a-input type="color" /> 不支持选择透明度
   *
   * https://github.com/ly525/luban-h5/issues/105
   */
  Vue.component(Button.name, Button)
  Vue.component(ColorPicker.name, ColorPicker)

  // Register toasts vuex module
  options.store.registerModule('editor', editorModule)

  Vue.component('CoreEditor', Editor)
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  Editor
}