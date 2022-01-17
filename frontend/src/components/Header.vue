<template>
    <header id="header">
        <ul>
            <li>Work</li>
            <li>Exp</li>
            <li>GitHub</li>
        </ul>
    </header>
</template>

<script>
    export default {
        name: 'Header'
    }
</script>
<style lang="scss">
    #header { position: sticky; padding: 4vw 8vw 0;
        ul { display: flex; position: relative; overflow: hidden;
            li {
                &:nth-child(2) { padding-left: 2vw;}
                &:last-child {
                    position: absolute;
                    top: 0px;
                    right: 0px;
                    z-index: 10;
                }
            }
        }
    }
</style>
