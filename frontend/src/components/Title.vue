<template>
    <section class="title">
        <p>{{ title }}</p>
    </section>
</template>
<script>
    export default {
        name: 'Title',
        data () {
            return {
                title: 'selected work',
            }
        }
    }
</script>
<style lang="scss" scoped>
    .title {
        position: absolute;
        top: 0px;
        left: 0px;
        font-weight: bold;
        text-transform: uppercase;
    	&:after {
    		content: '';
    		position: absolute;
    		bottom: -5px;
    		left: 0px;
    		width: 20px;
    		height: 1px;
    		background: #111;
    	}
    }
</style>
