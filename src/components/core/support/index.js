// register-global-support-component
import Vue from 'vue'
import PropMultiTextItemsEditor from '@core-editor/components/core/support/prop-multi-items-editor/text.js'
import ImageGallery from '@core-editor/components/core/support/image-gallery/gallery.js'
import VideoGallery from '@core-editor/components/core/support/video-gallery/gallery'
import LbpTextAlign from '@luban-h5/lbs-text-align'

Vue.component(PropMultiTextItemsEditor.name, PropMultiTextItemsEditor)
Vue.component(ImageGallery.name, ImageGallery)
Vue.component(VideoGallery.name, VideoGallery)
Vue.component('lbs-text-align', LbpTextAlign)
