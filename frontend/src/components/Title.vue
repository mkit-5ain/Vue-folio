<template>
    <section class="title">
        <p>{{ titleText }}</p>
    </section>
</template>
<script>
    export default {
        name: 'Title',
        props: {
            titleText: {
                type: String,
                default: () => "Selected work"
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
    	}
    }
</style>
