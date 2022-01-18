<template>
    <section class="title">
        <p>SELECTED WORK</p>
    </section>
    <div>
        <!-- <ui-title/> -->
    </div>
</template>

<script>
    // import Title from '@/components/Title.vue';

    import gsap from 'gsap';
    import ScrollTrigger from "gsap/ScrollTrigger";
    gsap.registerPlugin(ScrollTrigger);

    export default {
        name: 'Home',
        // data () {
        //     return {
        //         title: '',
        //         nameTitle: ''
        //     }
        // },
        // components: {
        //     'ui-title': Title
        // },
        mounted:function () {
            window.addEventListener("scroll", this.sectionHandle); // 스크롤 섹션 접근시 클래스추가
            this.horizontalScroll(); // 가로 스크롤
            // this.textCrossAnimation(); // 텍스트 교차 애니메이션
        },
        methods: {
            sectionHandle: function () {
                let target = document.querySelectorAll(".scroll-handler");
                let targetPosition;
                for ( let i = 0; i < target.length; i++ ) {
                    targetPosition = target[i].getBoundingClientRect().top + 300;
                    let screenSize = window.innerHeight;
                    if ( targetPosition < screenSize && !target[i].classList.contains("active") ) {
                        target[i].classList.add("active");
                    }
                }
            },
            horizontalScroll: function () {
                const horizontalSections = gsap.utils.toArray('.horizontal__scroll')
                horizontalSections.forEach(function (sec) {
                    let thisPinWrap = sec.querySelector('.horizontal__scroll--pin');
                    let thisAnimWrap = thisPinWrap.querySelector('.horizontal__scroll__items');
                    let getToValue = () => - (thisAnimWrap.scrollWidth - window.innerWidth);

                    gsap.fromTo(thisAnimWrap, {
                        x: () => thisAnimWrap.classList.contains('to-right') ? 0 : getToValue()
                    }, {
                        x: () => thisAnimWrap.classList.contains('to-right') ? getToValue() : 0,
                        ease: "none",
                        scrollTrigger: {
                            trigger: sec,
                            start: "top top",
                            end: () => "+=" + ( thisAnimWrap.scrollWidth - window.innerWidth ),
                            pin: thisPinWrap,
                            invalidateOnRefresh: true,
                            scrub: true,
                        }
                    });
                });
            },
            textCrossAnimation: function () {
                gsap.to(".left--direction", {
                    xPercent: 20,
                    ease: "none",
                    scrollTrigger: {
                        trigger: ".appeal",
                        scrub: 2,
                        start: "top center"
                    },
                });

                gsap.to(".right--direction", {
                    xPercent: -20,
                    ease: "none",
                    scrollTrigger: {
                        trigger: ".appeal",
                        scrub: 2,
                        start: "top center"
                    },
                });
            }
        }
    }
</script>
