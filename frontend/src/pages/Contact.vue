<template>
    <section id="contact">
        <section class="object__animation">
            <div class="object">
                <div class="object__image"><img src="@/assets/image/common/cup.png" alt=""></div>
                <div class="object__text--rotate">
                    <div>010.5558.0087</div>
                </div>
            </div>
        </section>
    </section>
</template>
<script>
    export default {
        name: 'Contact'
    }
</script>
<style lang="scss" scoped>
    #contact { background: #e47881;}
    @keyframes cupMove {
        from {
            transform: rotateZ(25deg) translate(0px, 40px);
        }
        to {
            transform: rotateZ(25deg) translate(0px, 0px);
        }
    }
    @keyframes cupTextMarquee {
        from {
            transform: translate(100%);
        }
        99%,to {
            transform: translate(-100%);
        }
    }
    .object__animation {
        display: flex;
        width: 100vw;
        height: 100vh;
        justify-content: center;
        align-items: center;
        .object { display: inline-block; width: 400px; margin: 10vw 0px; animation: 2s ease-in-out cupMove infinite alternate;
            &:hover {
                .object__image img { transform: scale(1.04); }
            }
            .object__image img { width: 400px; transition: .5s ease-in-out; }
            .object__text--rotate {
                position: absolute;
                top: 42%;
                left: 7.7%;
                width: 84.5%;
                font-weight: bold;
                overflow: hidden;
                div {
                    width: 110%;
                    font-size: 50px;
                    color: #ffcdde;
                    text-shadow: 1px 1px 2px #ce1b33;
                    animation: 4s linear cupTextMarquee infinite;
                }
            }
        }
    }
</style>
