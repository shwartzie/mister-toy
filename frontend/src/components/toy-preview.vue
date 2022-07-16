<template>
    <li class="toy-preview">
        <custom-card>
            <template #header>
                <p><span class="fw-bold">Name:</span> {{ toy.name }}</p>
                <img :src="getImg" />
            </template>

            <template #footer>
                <div class="btn-group" v-if="user">
                    <button @click="goToEdit" class="btn btn-primary">
                        edit
                    </button>
                    <button @click="goToDetail" class="btn btn-info">
                        details
                    </button>
                    <button @click="removeToy(toy._id)" class="btn btn-danger">
                        delete
                    </button>
                </div>
                <div v-else>
                    <button @click="goToDetail" class="btn btn-info">
                        details
                    </button>
                </div>
            </template>
        </custom-card>
    </li>
</template>

<script>
import customCard from "./custom-card.vue"

export default {
    name: "toy-preview",
    props: {
        toy: Object,
        user: Object,
    },
    components: {
        customCard,
    },
    created() {
        console.log(this.user)
    },
    methods: {
        goToDetail() {
            this.$router.push(`/toy/${this.toy._id}`)
        },
        goToEdit() {
            this.$router.push(`/toy/edit/${this.toy._id}`)
        },
        removeToy(toyId) {
            this.$emit("removeToy", toyId)
        },
    },
    computed: {
        getImg() {
            return "http://localhost:3000/src/assets/images/" + this.toy.imgUrl
        },
    },
}
</script>
