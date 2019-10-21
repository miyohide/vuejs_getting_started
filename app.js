var items = [
    {
        name: '鉛筆',
        price: 300,
        quantity: 0
    },
    {
        name: 'ノート',
        price: 400,
        quantity: 0
    },
    {
        name: '消しゴム',
        price: 500,
        quantity: 0
    },
]

var vm = new Vue({
    el: '#app',
    data: {
        items: items
    }
})
// 書籍では書かれていたがブラウザで試す上では不要
//window.vm = vm
