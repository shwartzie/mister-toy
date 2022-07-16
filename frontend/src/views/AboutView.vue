<template>
    <div class="about">
        <toy-map></toy-map>
    </div>
</template>

<script>
import toyMap from "../components/toy-map.vue"
export default {
    components: {
        toyMap,
    },
}
</script>
<style>
@media (min-width: 1024px) {
    .about {
        min-height: 100vh;
        display: flex;
        align-items: center;
    }
}
</style>
