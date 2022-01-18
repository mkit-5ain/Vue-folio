<template>
    <nav id="nav">
        <ul>
            <li class="scale hover"><router-link to="/">H</router-link></li>
            <li class="scale hover"><router-link to="/Experience">E</router-link></li>
            <li class="scale hover">GitHub</li>
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
    #nav { position: sticky; height: 1vw; padding: 4vw 6vw 0;
        &:hover {
            ul { overflow: inherit;}
        }
        ul { display: flex; position: relative; overflow: hidden;
            li { padding: 0px 5px; transform: translate(0px, 30px); animation: 1s navFadein forwards;
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
