<template>
    <div class="foo">
        <h1 class="header">Fooコンポーネント</h1>
        <P>これはFooコンポーネントです</P>
    </div>
</template>

<!-- scopedがついていないので、以下のtext-decorationは全体に適用される -->
<style>
p { text-decoration: underline; }
</style>

<style scoped>
.foo { border: solid 1px green; margin: 4px; padding: 4px; }
.header { font-size: 150%; }
</style>
