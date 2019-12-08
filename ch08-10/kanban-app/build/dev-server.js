const bodyParser = require('body-parser')

module.exports = app => {
    app.use(bodpParser.json())

    // TODO ここ以降にAPIの実装内容を追加していく
}
