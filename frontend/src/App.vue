<template>
    <ui-nav/>
    <ui-header/>
    <article id="container">
        <router-view/>
    </article>
    <ui-footer/>
    <ui-cursor/>
</template>
<script>
    import Header from '@/components/Header.vue';
    import Footer from '@/components/Footer.vue';
    import Cursor from '@/components/Cursor.vue';
    import Nav from '@/components/Nav.vue';
    export default {
        name: 'App',
        components: {
            'ui-header': Header,
            'ui-footer': Footer,
            'ui-cursor': Cursor,
            'ui-nav': Nav,
        }
    }
</script>
<style lang="scss">
    @import '@/assets/sass/common.scss';
</style>
