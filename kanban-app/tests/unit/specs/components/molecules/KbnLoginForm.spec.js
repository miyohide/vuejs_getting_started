import { shallowMount } from "@vue/test-utils"
import KbnLoginForm from '@/components/molecules/KbnLoginForm.vue'

describe('KbnLoginForm', () => {
  describe('プロパティ', () => {
    describe('validation', () => {
      let loginForm
      beforeEach(done => {
        loginForm = shallowMount(KbnLoginForm, {
          propsData: { onlogin: () => {} }
        })
        loginForm.vm.$nextTick(done)
      })

      describe('email', () => {
        describe('required', () => {
          describe('何も入力されていない', () => {
            it('validation.email.requiredがinvalidであること', () => {
              loginForm.setData({ email: '' })
              expect(loginForm.vm.validation.email.required).toEqual(false)
            })
          })

          describe('入力あり', () => {
            it('validation.email.requiredがvalidであること', () => {
              loginForm.setData({ email: 'foo@domain.com' })
              expect(loginForm.vm.validation.email.required).toEqual(true)
            })
          })
        })

        describe('format', () => {
          describe('メール形式でないフォーマット', () => {
            it('validation.email.formatがinvalidであること', () => {
              loginForm.setData({ email: 'foobar' })
              expect(loginForm.vm.validation.email.format).toEqual(false)
            })
          })

          describe('メール形式なフォーマット', () => {
            it('validation.email.formatがvalidであること', () => {
              loginForm.setData({ email: 'foobar@example.com' })
              expect(loginForm.vm.validation.email.format).toEqual(true)
            })
          })
        })
      })
    })
  })
})
