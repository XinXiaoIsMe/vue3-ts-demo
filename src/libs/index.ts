import { App, Component } from 'vue'
import * as Vant from './vant'

const libs: Component[] = [Vant]

export function registerComponent (app: App): void {
  libs.forEach(lib => Object.values(lib).forEach(component => app.use(component)))
}
