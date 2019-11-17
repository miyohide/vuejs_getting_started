var PullDownMenu = {
    data: function () {
        return {
            isShown: false,
            name: 'メニュー',
            items: [
                '1-1',
                '1-2',
                '1-3'
            ]
        }
    },
    template: `
      <div @mouseleave="isShown = false">
        <p @mouseover="isShown = true"><a href="#" class="menu">{{ name }}</a></p>
        <transition
          @before-enter="beforeEnter"
          @enter="enter"
          @leave="leave"
          :css="false"
        >
          <ul v-if="isShown">
            <li v-for="item in items" :key="item">
              <a href="#" class="menu-item">{{ item }}</a>
            </li>
          </ul>
        </transition>
      </div>
    `,
    methods: {
        // 要素が挿入される前のフック
        beforeEnter: function (el) {
            // el: トランジションの対象となるDOM要素
            // アニメーションの初期状態を設定する
            el.style.height = '0px'
            el.style.opacity = '0'
        },
        // 挿入されてからアニメーションされる前のフック
        enter: function (el, done) {
            // el: トランジションの対象となるDOM要素
            // 要素の高さを取得し、Anime.jsを用いてメニューを下に展開する
            anime({
                targets: el,
                opacity: 1,
                height: el.scrollHeight + 'px',
                duration: 10000,
                complete: done
            })
        },
        // 削除アニメーションが実行される前でbefore-leaveの後
        leave: function (el, done) {
            // el: トランジションの対象となるDOM要素
            anime({
                targets: el,
                opacity: 0,
                height: '0px',
                duration: 30000,
                complete: done
            })
        }
    }
}

new Vue({
    el: '#app',
    components: {
        PullDownMenu: PullDownMenu
    }
})
