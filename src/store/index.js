/*
 * @Author: yongming.bai(git: 花裤衩)
 * @Date: 2022-06-30 16:20:52
 * @LastEditors: yongming.bai(git: 花裤衩)
 * @LastEditTime: 2022-07-07 17:27:42
 * @FilePath: /vue-vite-element-admin/src/store/index.js
 * @Description: 状态管理
 */

import { createPinia } from 'pinia'

export function setupStore(app) {
  app.use(createPinia())
}
