import CoreEditor from '@core-editor/components/core/editor/index.js'
import loadPluginMixin from '@core-editor/mixins/load-plugins.js'
// import '@core-editor/components/core/support/index.js'
// import store from '../store'
// import i18n from '../locales'

export default {
  name: 'CoreEditor',
  // store,
  // i18n,
  extends: CoreEditor,
  mixins: [loadPluginMixin]
}
