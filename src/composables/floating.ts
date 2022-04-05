/*
 * @Author: Simon
 * @Date: 2022-04-03 15:42:40
 * @LastEditTime: 2022-04-05 21:06:39
 * @FilePath: \shareDom\src\composables\floating.ts
 */

import { Teleport, h } from 'vue'
import type { Component, StyleValue } from 'vue'

export function createFloating<T extends Component>(component: T) {
  const metadata = reactive<any>({
    props: {},
    attrs: {},
  })

  const proxyEl = ref<HTMLElement | null>()

  const container = defineComponent({
    setup() {
      let rect = $ref<DOMRect | undefined>()
      let landed = $ref(false)

      function update() {
        rect = useElementBounding(proxyEl)
      }

      const style = $(computed((): StyleValue => {
        return {
          transition: 'all .5s ease-in-out',
          position: 'fixed',
          top: `${rect?.top ?? 0}px`,
          left: `${rect?.left ?? 0}px`,
        }
      }))
      function land() {
        landed = true
      }
      function liftOff() {
        landed = false
      }

      watchEffect(land)
      watchEffect(update)
      useEventListener('resize', update)
      return () => h('div', {
        style,
        onTransitionEnd: () => liftOff(),
      }, h(Teleport, {
        to: landed && proxyEl.value ? '#image-container' : 'body',
        disabled: !!(landed && proxyEl.value),
      }, h(component, metadata.attrs)))
    },
  })
  const proxy = defineComponent({
    setup(props, ctx) {
      metadata.attrs = ctx.attrs
      const el = ref<HTMLElement>()
      onMounted(() => {
        proxyEl.value = el.value
      })
      onBeforeUnmount(() => {
        proxyEl.value = undefined
      })
      return () => h('div', { ref: el, id: 'image-container' }, [
        ctx.slots.default
          ? h(ctx.slots.default)
          : null,
      ])
    },
  })
  return {
    container,
    proxy,
  }
}
