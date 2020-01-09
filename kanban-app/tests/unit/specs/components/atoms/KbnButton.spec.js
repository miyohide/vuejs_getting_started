import { shallowMount } from '@vue/test-utils'
import KbnButton from '@/components/atoms/KbnButton.vue'

describe('KbnButton', () => {
  describe('プロパティ', () => {
    describe('type', () => {
      describe('デフォルト', () => {
        it('kbn-buttonクラスを持つbutton要素で構成されること', () => {
          const button = shallowMount(KbnButton)
          expect(button.is('button')).toBe(true)
          expect(button.classes()).toContain('kbn-button')
        })
      })

      describe('button', () => {
        it('kbn-buttonクラスを持つbutton要素で構成されること', () => {
          const button = shallowMount(KbnButton, {
            propsData: { type: 'button' }
          })
          expect(button.is('button')).toBe(true)
          expect(button.classes()).toContain('kbn-button')
        })
      })

      describe('text', () => {
        it('kbn-button-textクラスを持つbutton要素で構成されること', () => {
          const button = shallowMount(KbnButton, {
            propsData: { type: 'text' }
          })
          expect(button.is('button')).toBe(true)
          expect(button.classes()).toContain('kbn-button-text')
        })
      })
    })
  })
})
