<template>
    <section class="toy-app">
        <el-button class="add-toy-btn" type="primary" @click="goToEdit">
            Add a new toy
        </el-button>
        <toy-filter @setFilter="setFilter" />
        <toy-list @removeToy="removeToy" :toysToShow="toysToShow" :user="user" />
        <toy-chart v-if="mappedLabels" :mappedLabels="mappedLabels" />
    </section>
</template>

<script>
import toyList from "../components/toy-list.vue"
import toyFilter from "../components/toy-filter.vue"
import toyChart from "../components/toy-chart.vue"
import { toyService } from "../services/toy-service.js"
export default {
    name: "toy-app",
   created() {
    this.getMapLabels()
   },
   date() {
        return {
            mappedLabels: null
        }
   },
    computed: {
        toysToShow() {
            return this.$store.getters.filteredToys
        },
        toys() {
            return this.$store.getters.toys
        },
        user() {
            return this.$store.getters.user
        }
    },

    methods: {
        setFilter(filterBy) {
            this.$store.commit({ type: "setFilter", filterBy })
        },
        goToEdit() {
            this.$router.push(`/toy/edit`)
        },
        removeToy(toyId) {
            this.$store.dispatch({ type: "removeToy", id: toyId })
        },
        getMapLabels() {
            this.mappedLabels = toyService.mapLabels()
        },
      
    },
    components: {
        toyList,
        toyFilter,
        toyChart,
    },
}
</script>
