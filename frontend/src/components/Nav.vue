<template>
    <nav id="nav">
        <ul>
            <li class="scale hover"><router-link to="/">Home</router-link></li>
            <li class="scale hover"><router-link to="/Experience">Experience</router-link></li>
            <li class="scale"><img src="@/assets/image/common/github.png" alt="github"></li>
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
        position: sticky;
        top: 0px;
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
                &:nth-child(2) { margin-left: 2vw; animation-delay: .2s; }
                &:nth-child(3) {
                    position: absolute;
                    top: 0px;
                    right: 0px;
                    z-index: 10;
                    animation-delay: .4s;
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
