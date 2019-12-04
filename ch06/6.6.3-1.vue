<template>
    <!-- スコープ付きCSSとはclassの指定の仕方が異なることに注意 -->
    <p :class="$style.message">こんにちは</p>
</template>

<script>
export default {
    created () {
        // ESLintのno-consoleルールを無視するために以下のコメントをつけている
        // eslint-disable-next-line no-console
        console.log('css modules: $style', this.$style) // CSSモジュールでは$styleでJavaScriptからも参照できる
    }
}
</script>

<style module>
.message { color: #42b983; }
</style>
