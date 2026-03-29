import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import LandingPage from '@/pages/LandingPage.vue'

describe('LandingPage', () => {
  it('рендерится корректно', () => {
    const wrapper = mount(LandingPage)
    expect(wrapper.exists()).toBe(true)
  })

  it('является Vue компонентом', () => {
    const wrapper = mount(LandingPage)
    expect(wrapper.vm).toBeTruthy()
  })

  it('имеет корневой элемент', () => {
    const wrapper = mount(LandingPage)
    expect(wrapper.element.tagName).toBeTruthy()
  })

  it('имеет корневой элемент div с классами flex и flex-center', () => {
    const wrapper = mount(LandingPage)
    // q-page заменяется на div в заглушке
    const rootElement = wrapper.find('div')
    expect(rootElement.exists()).toBe(true)
    expect(rootElement.classes()).toContain('flex')
    expect(rootElement.classes()).toContain('flex-center')
  })

  it('имеет правильную структуру шаблона', () => {
    const wrapper = mount(LandingPage)
    expect(wrapper.html()).toContain('flex')
    expect(wrapper.html()).toContain('flex-center')
  })
})
