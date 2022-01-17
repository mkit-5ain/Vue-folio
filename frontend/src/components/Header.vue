<template>
    <header id="header" class="header">
        <div class="email">
            <span>Mkit5ain@gmail.com</span>
        </div>
        <div class="production next__line">
            <span>Directors</span>
            <span>Showreel</span>
            <span>2022</span>
        </div>
        <div class="name">
            <span>Lorem</span>
        </div>
        <div class="point">
            <span>*(Living)</span>
        </div>
        <div class="discription next__line">
            <span>Mkit5ain is a Webpage Director</span>
            <span>From Lim-Junesu</span>
            <span>Founder of Good People</span>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'Header'
    }
</script>
<style lang="scss">
    #header { position: relative; width: 100vw; height: calc( 100vh - 97.8px );
        .email {
            position: absolute;
            left: 6vw;
            bottom: 14vw;
            font-size: 1vw;
            font-weight: bold;
            letter-spacing: -.5px;
            &:after {
                content: '';
                position: absolute;
                left: 0;
                bottom: -3px;
                z-index: 10;
                width: 100%;
                height: 1px;
                border-bottom: 1px solid #111;
            }
        }
        .production {
            position: absolute;
            bottom: 4vw;
            left: 6vw;
            font-size: 2.7vw;
            font-weight: bold;
            line-height: 50px;
            letter-spacing: -1px;
        }
        .name {
            position: absolute;
            top: 8vw;
            right: 6vw;
            font-size: 12vw;
            font-weight: 900;
            letter-spacing: -1px;
        }
        .point {
            position: absolute;
            top: 22.5vw;
            right: 7vw;
            letter-spacing: -1px;
        }
        .discription {
            position: absolute;
            bottom: 4vw;
            right: 6vw;
            font-size: 1vw;
            letter-spacing: -1px;
        }
    }
</style>
