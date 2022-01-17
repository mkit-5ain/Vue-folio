<template>
    <nav id="nav">
        <ul>
            <li class="scale hover"><router-link to="/">Home</router-link></li>
            <li class="scale hover"><router-link to="/Experience">Experience</router-link></li>
            <li class="scale hover">GitHub</li>
        </ul>
    </nav>
</template>
<script>
    export default {
        name: 'Navigation'
    }
</script>
<style lang="scss">
    #nav { position: sticky; padding: 4vw 6vw 0;
        ul { display: flex; position: relative;
            li { padding: 0px 5px;
                &:nth-child(2) { margin-left: 2vw;}
                &:last-child {
                    position: absolute;
                    top: 0px;
                    right: 0px;
                    z-index: 10;
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
