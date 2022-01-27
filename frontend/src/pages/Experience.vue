<template>
    <section id="exp">
        <ui-prologue/>
        <section class="work__list component__style">
            <ul class="list__wrap">
                <li class="item">1</li>
                <li class="item">2</li>
                <li class="item">3</li>
                <li class="item">4</li>
            </ul>
            <ul class="list__wrap">
                <li class="item">5</li>
                <li class="item">6</li>
                <li class="item">7</li>
            </ul>
            <ul class="list__wrap">
                <li class="item">8</li>
                <li class="item">9</li>
                <li class="item">10</li>
                <li class="item">9</li>
                <li class="item">10</li>
            </ul>
        </section>
    </section>
</template>

<script>
    import Prologue from '@/components/Prologue.vue';

    export default {
        name: 'Experience',
        components: {
            'ui-prologue': Prologue
        }
    }
</script>
<style lang="scss" scoped>
    .work__list {
        .list__wrap { display: flex;
            .item { border-bottom: 1px solid #111; border-right: 1px solid #111; }
        }
    }

</style>
