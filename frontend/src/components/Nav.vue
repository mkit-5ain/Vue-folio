<template>
    <nav id="nav">
        <ul>
            <li class="scale hover"><router-link to="/">Home</router-link></li>
            <li class="scale hover"><router-link to="/Experience">Experience</router-link></li>
            <li class="scale hover"><router-link to="/Contact">Contact</router-link></li>
            <li class="scale"><a href="https://github.com/mkit-5ain" target="_blank"><img src="@/assets/image/common/github.png" alt="github"></a></li>
        </ul>
    </nav>
</template>
<script>
    export default {
        name: 'Navigation'
    }
</script>
<style lang="scss" scoped>
    @keyframes navFadein {
        to {
            transform: translate(0px, 0px);
        }
        from {
            transform: translate(0px, 30px);
        }
    }
    #nav {
        position: fixed;
        top: 0px;
        width: calc(100% - 12vw);
        height: 29px;
        z-index: 10;
        padding: 100px 6vw 0;
        overflow: hidden;
        &:hover {
            ul { overflow: inherit;}
        }
        ul {
            display: flex;
            position: relative;
            height: 29px;
            align-items: center;
            li { padding: 0px 5px; transform: translate(0px, 1.6vw); animation: 1s navFadein forwards;
                a { font-weight: bold; letter-spacing: -1px; }
                &:nth-child(2) { margin-left: 2vw; animation-delay: .2s; }
                &:nth-child(3) { margin-left: 2vw; animation-delay: .4s; }
                &:nth-child(4) {
                    position: absolute;
                    top: 0px;
                    right: 0px;
                    z-index: 10;
                    animation-delay: .6s;
                }
                .router-link-active {
                    &:before {
                        content: '';
                        position: absolute;
                        top: 0px;
                        left: 0px;
                        width: 4px;
                        height: 4px;
                        background: #f00;
                        border-radius: 100%;
                    }
                }
            }
        }
    }
</style>
