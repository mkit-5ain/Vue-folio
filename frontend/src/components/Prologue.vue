<template>
    <section class="prologue scroll-handler">
        <div class="prologue--text text-stroke effect-dot">
            hello
            <span class="inner-dot"></span>
        </div>
        <div class="prologue--text text-stroke effect-line">
            <span>my style</span>
        </div>
        <div class="prologue--text text-stroke effect-blur">
            <span>trust me.</span>
        </div>
    </section>
</template>
<script>
    export default {
        name: 'Prologue'
    }
</script>
<style lang="scss">
@keyframes introTextAnimation {
    from { opacity: 0; transform: translate(-500px, -100px); }
    to { opacity: 1; transform: translate(-80px, 0px); }
}
@media screen and ( max-width: 1250px ) {
	@keyframes introTextAnimation {
		from { opacity: 0; transform: translate(-700px, -150px); }
		to { opacity: 1; transform: translate(-5vw, 0px); }
	}
}
@keyframes TopBottomAnimation {
	from { opacity: 0; transition: 1s ease-in-out; }
	to { opacity: 1; transition: 1s ease-in-out; }
}
@keyframes dotAnimation {
	10% { transform: translate(1100px, 0px); opacity: 0; }
	100% { transform: translate(0px, 0px); opacity: 1;}
}

.prologue { margin-top: 15vw;
    .prologue--text {
        position: relative;
        height: 13vw;
        line-height: 13vw;
        font-size: 15vw;
        font-family: 'logo';
        color: #111;
        letter-spacing: 15px;
        text-transform: uppercase;
        transition: 1s cubic-bezier(0.74, 0.51, 0.51, 1.26);
        animation: 0.8s introTextAnimation forwards;
        opacity: 0;
        &.effect-dot { width: 52vw;
            .inner-dot {
                position: absolute;
                bottom: 0.9vw;
                right: -6.5vw;
                width: 4vw;
                height: 3.4vw;
                border-radius: 100%;
                background: #f00;
                transition: 1s cubic-bezier(0.32, 0.18, 0.26, 0.84);
                opacity: 0;
                box-shadow: 1px 1px 10px 0px #151414;
                animation: 1.5s dotAnimation forwards; animation-delay: 1s;
            }
        }
        &.effect-blur { animation-delay: 0.4s; }
        &.effect-line { animation-delay: 0.2s;
            &:after {
                content: '';
                position: absolute;
                bottom: -4vw;
                left: 29vw;
                width: 30vw;
                height: 8vw;
                border-radius: 100px;
                background: #ff0a01e6;
                box-shadow: 1px 1px 1px 0px #151414;
                transition: 1s ease-in-out;
                opacity: 0;
                animation: 0.5s TopBottomAnimation forwards; animation-delay: 2s;
            }
        }
    }
}
</style>
