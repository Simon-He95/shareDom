/*
 * @Author: Simon
 * @Date: 2022-04-03 15:42:40
 * @LastEditTime: 2022-04-04 15:19:07
 * @FilePath: \shareDom\src\composables\floating.ts
 */

import { h } from 'vue'
import type { Component, StyleValue } from 'vue'

export function createFloating<T extends Component>(component: T) {
  const metadata = reactive<any>({
    props: {},
    attrs: {},
  })

  const proxyEl = ref<HTMLElement | null>()

  const container = defineComponent({
    setup() {
      const rect = $ref<DOMRect | undefined>()
      function update() {
        rect = useElementBounding(proxyEl)
      }

      const style = $(computed((): StyleValue => {
        const commonStyle: StyleValue = {
          transition: 'all .5s ease-in-out',
          position: 'fixed',
          transform: 'translateY(-100px)',
        }
        if (!rect || !proxyEl.value) {
          return {
            ...commonStyle,
            opacity: 0,
          }
        }
        return {
          ...commonStyle,
          top: `${rect?.top ?? 0}px`,
          left: `${rect?.left ?? 0}px`,
        }
      }))
      watchEffect(update)
      useEventListener('resize', update)
      return () => h('div', {
        style,
      }, h(component, metadata.attrs))
    },
  })
  const proxy = defineComponent({
    setup(props, ctx) {
      metadata.attrs = useAttrs()
      const el = ref<HTMLElement>()
      onMounted(() => {
        proxyEl.value = el.value
      })
      onBeforeUnmount(() => {
        if (proxyEl.value === el.value)
          proxyEl.value = undefined
      })
      return () => h('div', { ref: el }, [
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
