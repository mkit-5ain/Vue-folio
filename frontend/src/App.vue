<template>
    <ui-nav/>
    <article id="container" class="container">
        <router-view/>
    </article>
    <ui-footer/>
    <ui-cursor/>
</template>
<script>
    import Footer from '@/components/Footer.vue';
    import Cursor from '@/components/Cursor.vue';
    import Nav from '@/components/Nav.vue';

    export default {
        name: 'App',
        components: {
            'ui-footer': Footer,
            'ui-cursor': Cursor,
            'ui-nav': Nav,
        }
    }
</script>
<style lang="scss">
    @import '@/assets/sass/common.scss';
</style>
