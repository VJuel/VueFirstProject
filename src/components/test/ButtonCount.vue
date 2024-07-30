<script>
    export default {
        name: "ButtonCount",
        data() {
            return {
                count: 0
            }
        }
    }
</script>

<template>
    <button v-on:click="count++">Click Increment {{ count }}</button>
</template>