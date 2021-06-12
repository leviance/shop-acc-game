<template>
    <section>
        <RechargeOnline />
        <div class="list-game-account">

        </div>
        <div class="hot-mini-game"></div>
    </section>
</template>

<script>
import RechargeOnline from './HomeComponents/RechargeOnline';

export default {
    components: {RechargeOnline}
}
</script>

<style lang="scss">
    section {
        max-width: var(--max-width);
        margin: 30px auto 0px auto;
    }
</style>