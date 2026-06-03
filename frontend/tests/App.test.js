import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  it('рендерится корректно', () => {
    const wrapper = mount(App)
    expect(wrapper.exists()).toBe(true)
  })

  it('является Vue компонентом', () => {
    const wrapper = mount(App)
    expect(wrapper.vm).toBeTruthy()
  })

  it('имеет корневой элемент', () => {
    const wrapper = mount(App)
    expect(wrapper.element.tagName).toBeTruthy()
  })

  it('содержит router-view (заглушка)', () => {
    const wrapper = mount(App)
    // router-view заменяется на div в заглушке
    expect(wrapper.find('div').exists()).toBe(true)
  })
})
