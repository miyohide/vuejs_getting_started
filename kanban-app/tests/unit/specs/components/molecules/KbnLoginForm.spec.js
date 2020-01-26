import { shallowMount, mount } from "@vue/test-utils"
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

      describe('password', () => {
        describe('required', () => {
          describe('何も入力されていない', () => {
            it('validation.password.requiredがinvalidであること', () => {
              loginForm.setData({ password: '' })
              expect(loginForm.vm.validation.password.required).toEqual(false)
            })
          })

          describe('入力あり', () => {
            it('validation.email.requiredがvalidであること', () => {
              loginForm.setData({ password: 'hogehoge' })
              expect(loginForm.vm.validation.password.required).toEqual(true)
            })
          })
        })
      })

      describe('valid', () => {
        let loginForm
        beforeEach(done => {
          loginForm = shallowMount(KbnLoginForm, {
            propsData: { onlogin: () => {} }
          })
          loginForm.vm.$nextTick(done)
        })

        describe('バリデーション項目全てOK', () => {
          it('validになること', () => {
            loginForm.setData({
              email: 'foo@example.com',
              password: '12345678'
            })
            expect(loginForm.vm.valid).toEqual(true)
          })
        })

        describe('バリデーションNG項目あり', () => {
          it('invalidになること', () => {
            loginForm.setData({
              email: 'foo@example.com',
              password: ''
            })
            expect(loginForm.vm.valid).toEqual(false)
          })
        })
      })

      describe('disableLoginAction', () => {
        let loginForm
        beforeEach(done => {
          loginForm = shallowMount(KbnLoginForm, {
            propsData: { onlogin: () => {} }
          })
          loginForm.vm.$nextTick(done)
        })

        describe('バリデーションNG項目あり', () => {
          it('ログイン処理は無効', () => {
            loginForm.setData({
              email: 'foo@domain.com',
              password: ''
            })
            expect(loginForm.vm.disableLoginAction).toEqual(true)
          })
        }),

        describe('バリデーションOKで、ログイン処理中ではない', () => {
          it('ログイン処理は有効', () => {
            loginForm.setData({
              email: 'foo@domain.com',
              password: '12345678',
              progress: false
            })
            expect(loginForm.vm.disableLoginAction).toEqual(false)
          })
        }),

        describe('バリデーションOKで、ログイン処理中である', () => {
          it('ログイン処理は有効', () => {
            loginForm.setData({
              email: 'foo@domain.com',
              password: '12345678',
              progress: true
            })
            expect(loginForm.vm.disableLoginAction).toEqual(true)
          })
        })
      })

      describe('onlogin', () => {
        let loginForm
        let onloginStub
        beforeEach(done => {
          onloginStub = sinon.stub()
          loginForm = mount(KbnLoginForm, {
            propsData: { onlogin: onloginStub }
          })
          loginForm.setData({
            email: 'foo@domain.com',
            password: '12345678'
          })
          loginForm.vm.$nextTick(done)
        })

        // Promiseのテストを書くみたいであるが、書き方がよく分からない...
        describe('resolve', () => {})
        describe('reject', () => {})
      })
    })
  })
})
