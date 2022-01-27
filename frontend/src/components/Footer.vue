<template>
    <section class="footer--sticky">
        <div class="inner">
            <p>All Rights Reserved © 2022</p>
            <p class="scale scroll--top">Back To Top</p>
        </div>
    </section>
    <section class="footer">
        <div class="widget">
            <p><span>L</span>ike</p>
            <p><span>I</span>deas</p>
            <p><span>M</span>ake</p>
        </div>
        <div class="widget">
            <p><span>J</span>oin</p>
            <p><span>U</span>sually</p>
            <p><span>N</span>otion</p>
            <p><span>E</span>ver</p>
        </div>
        <div class="widget">
            <p><span>S</span>hiny</p>
            <p><span>U</span>nderline</p>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Footer',
        mounted:function () {
            this.scrollTop();
        },
        methods: {
            scrollTop: function () {
                let element = document.getElementsByClassName('scroll--top');
                element[0].addEventListener('click', ()=> {
                    window.scrollTo(0,0);
                });
            }
        }
    }
</script>

<style lang="scss" scoped>
    .footer--sticky {
        position: sticky;
        bottom: 1vw;
        margin: 4vw 6vw;
        font-weight: bold;
        .inner { display: flex; justify-content: space-between; }
    }
    .footer {
        display: flex;
        position: relative;
        margin: 0 6vw 6vw;
        justify-content: space-between;
        .widget {
            p { font-weight: bold;
                span { position: relative; font-size: 20px;
                    &:before {
                        content: '';
                        display: block;
                        position: absolute;
                        bottom: 0px;
                        left: 0px;
                        width: 100%;
                        height: 1px;
                        border-bottom: 1px solid #1d1d1b;
                    }
                }
            }
        }
    }
</style>
