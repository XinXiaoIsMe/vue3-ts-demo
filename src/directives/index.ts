import { App } from 'vue'
import { focus } from './focus'

export function registerDirectives (app: App<Element>): void {
  app.directive('focus', focus)
}