/*
 * @Author: Simon
 * @Date: 2022-04-04 14:46:15
 * @LastEditTime: 2022-04-04 14:50:57
 * @FilePath: \shareDom\src\composables\image.ts
 */

import MyImage from '../components/MyImage.vue'
import { createFloating } from './floating'
const {
  container: ImageContainer,
  proxy: ImageProxy,
} = createFloating(MyImage)

export {
  ImageContainer,
  ImageProxy,
}
