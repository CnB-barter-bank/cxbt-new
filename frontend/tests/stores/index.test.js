import { describe, it, expect } from 'vitest'
import pinia from '@/stores/index'

describe('Pinia Store', () => {
  it('экспортирует Pinia инстанс', () => {
    expect(pinia).toBeTruthy()
  })

  it('имеет метод install для Vue плагина', () => {
    expect(pinia).toHaveProperty('install')
    expect(typeof pinia.install).toBe('function')
  })

  it('является объектом', () => {
    expect(typeof pinia).toBe('object')
  })

  it('имеет свойство state', () => {
    expect(pinia).toHaveProperty('state')
  })

  it('имеет свойство _s для stores', () => {
    expect(pinia).toHaveProperty('_s')
  })

  it('имеет свойство install для интеграции с Vue', () => {
    expect(typeof pinia.install).toBe('function')
  })
})
