<template>
    <GMapMap :center="center" :zoom="13" map-type-id="terrain" style="width: 500px; height: 300px">
        <GMapCluster>
            <GMapMarker :key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true"
                :draggable="true" @click="center = m.position" />
        </GMapCluster>
    </GMapMap>
</template>
<script>
export default {
    name: 'toy-map',
    data() {
        return {
            center: { lat: 32.088179, lng: 34.790144 },
            markers: [
                {
                    position: {
                        lat: 32.088179, lng: 34.790144
                    },
                },
                {
                    position: {
                        lat: 32.066278, lng: 34.830301
                    },
                },
                {
                    position: {
                        lat: 32.093869, lng: 34.882401
                    },
                }
            ]
        }
    }
}
</script>