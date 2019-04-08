<template>
    <section>
        hello{{ author.name }}
    </section>
</template>

<script>
export default {
    data() {
        return {
            author: {
                name: 'GrayJay'
            }
        }
    }
}
</script>

<style lang='scss'>
    section {
        color: red;
    }
</style>
