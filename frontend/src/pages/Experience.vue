<!-- Use preprocessors via the lang attribute! e.g. <template lang="pug"> -->
<template>
  <div id="app">
    <div class="box">
      <h2 class="text1">Scroll trigger</h2>
      <h2 class="text2">This is my first one</h2>
      <h2 class="text3">How is it?</h2>

  </div>
    <div class="box2">
      <h2 class="text4">Let get out</h2>
      <h2 class="text5">of this town</h2>
      <h2 class="text6">Drive out the city</h2>
  </div>
  </div>
</template>

<script>
import { gsap } from 'gsap';
import { CSSPlugin } from 'gsap/CSSPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSPlugin);

export default {
    mounted: function() {
        this.scrollAnimation();
    },
    methods: {
        scrollAnimation() {
            gsap.timeline({
                scrollTrigger: {
                    trigger: ".box",
                    start: "center center",
                    end: "bottom top",
                    markers: true,
                    scrub: true,
                    pin: true,
                }
            })
            .from(".text1", { x : innerWidth * 1, opacity: 0 })
            .from(".text2", { x : innerWidth * 1, opacity: 0 })

            gsap.timeline({
                scrollTrigger: {
                    trigger: ".box2",
                    start: "center center",
                    end: "bottom top",
                    markers: true,
                    scrub: true,
                    pin: true,
                }
            })
            .from(".text4", { x : innerWidth * 1, opacity: 0 })
            .from(".text5", { x : innerWidth * 1, opacity: 0 })
        },
    }
};
</script>

<!-- Use preprocessors via the lang attribute! e.g. <style lang="scss"> -->
<style>
h2 {
  margin-top: 200px;
  margin-bottom: 200px;
}
</style>
