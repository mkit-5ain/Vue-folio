<template>
    <section class="section-title">
        {{ title }}
        <div>{{ nameTitle }}</div>
    </section>
</template>
<script>
    export default {
        name: 'Title',
        data () {
            return {
                title: 'discover',
                nameTitle: '#discover'
            }
        }
    }
</script>
<style scope lang="scss">
    $black-color: #1d1d1b;
    .section-title {
        width: 35vw;
    	padding: 10vw 0vw;
        margin: 0 auto;
    	font-size: 5.56vw;
    	font-weight: bold;
    	color: #1d1d1b;
    	text-align: center;
    	letter-spacing: -7px;
    	text-transform: uppercase;
        opacity: 0;
        transform: translate( 0px, 50px);
        transition: 1s ease;
        &.active { transform: translate( 0px, 0px); opacity: 1;
            div {
                color: #cdc6be;
                transform: rotate(2deg);
            }
        }
    	div {
            position: relative;
            color: #fff;
            text-shadow: 3px 3px 5px #000;
            transition: .5s ease-in-out;
            transform: rotate(0deg);
            transform-origin: 0 0;
    		&:after {
    			content: '';
    			position: absolute;
    			top: 0px;
    			left: 0px;
    			width: 100%;
    			height: 100%;
    			background: $black-color;
    			z-index: -1;
                transition: .5s ease-in-out;
    		}
    	}
    }
</style>
