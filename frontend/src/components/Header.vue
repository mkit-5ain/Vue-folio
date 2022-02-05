<template>
    <header id="header" class="header">
        <div class="email">
            <span>mkit5ain@gmail.com</span>
        </div>
        <div class="production next__line">
            <span class="text"><span>Directors</span></span>
            <span class="text"><span>Showreel</span></span>
            <span class="text"><span>2022</span></span>
        </div>
        <div class="name">
            <span>lim june su</span>
        </div>
        <div class="point">
            <span>*1991.11.04</span>
        </div>
        <div class="discription next__line">
            <span class="text"><span>Mkit5ain is a Webpage Director</span></span>
            <span class="text"><span>From Lim-Junesu</span></span>
            <span class="text"><span>Founder of Good People</span></span>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'Header'
    }
</script>
<style lang="scss">
    @keyframes nameFadein {
        to {
            transform: translate(0px, 0px);
        }
        from {
            transform: translate(0px, 307px);
        }
    }
    @keyframes pointFadein {
        to {
            transform: translate(0px, 0px);
        }
        from {
            transform: translate(0px, 21px);
        }
    }
    @keyframes discriptionFadein {
        to {
            transform: translate(0px, 0px);
        }
        from {
            transform: translate(0px, 26px);
        }
    }
    @keyframes emailFadein {
        to {
            transform: translate(0px, 0px);
        }
        from {
            transform: translate(0px, 26px);
        }
    }
    @keyframes productionFadein {
        to {
            transform: translate(0px, 0px);
        }
        from {
            transform: translate(0px, 50px);
        }
    }
    #header { position: relative; width: 100vw; height: 100vh;
        .email {
            position: absolute;
            left: 6vw;
            bottom: 14vw;
            font-size: 1vw;
            font-weight: bold;
            letter-spacing: -.5px;
            overflow: hidden;
            &:after {
                content: '';
                position: absolute;
                left: 0;
                bottom: -3px;
                z-index: 10;
                width: 100%;
                height: 1px;
                border-bottom: 1px solid #1d1d1b;
            }
            span {
                display: block;
                animation: .5s emailFadein forwards;
                animation-delay: 2s;
                transform: translate(0px, 26px);
            }
        }
        .production {
            position: absolute;
            bottom: 4vw;
            left: 6vw;
            font-size: 2.7vw;
            font-weight: bold;
            line-height: 2.6vw;
            letter-spacing: -1px;
            overflow: hidden;
            .text { overflow: hidden;
                &:nth-child(2) {
                    span { animation-delay: 2.2s; }
                }
                &:nth-child(3) {
                    span { animation-delay: 2.3s }
                }
                span {
                    animation: 1s productionFadein forwards; animation-delay: 2.1s;
                    transform: translate(0px, 2.3vw);
                }
            }
        }
        .name {
            position: absolute;
            top: 16vw;
            right: 6vw;
            font-size: 12vw;
            font-weight: 900;
            letter-spacing: -1px;
            overflow: hidden;
            span {
                display: block;
                line-height: 9vw;
                font-family: 'logo';
                text-transform: uppercase;
                animation: 1s nameFadein forwards;
                animation-delay: .5s;
                transform: translate(0px, 307px);
            }
        }
        .point {
            position: absolute;
            top: 25vw;
            right: 6vw;
            letter-spacing: -1px;
            overflow: hidden;
            span {
                display: block;
                animation: .5s pointFadein forwards;
                transform: translate(0px, 21px);
            }
        }
        .discription {
            position: absolute;
            bottom: 4vw;
            right: 6vw;
            font-size: 1vw;
            letter-spacing: -1px;
            overflow: hidden;
            .text { overflow: hidden;
                &:nth-child(2) {
                    span { animation-delay: 1.6s; }
                }
                &:nth-child(3) {
                    span { animation-delay: 1.7s }
                }
                span {
                    animation: 1s discriptionFadein forwards; animation-delay: 1.5s;
                    transform: translate(0px, 26px);
                }
            }
        }
    }
</style>
