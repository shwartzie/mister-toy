<template>
    <section v-if="toyToEdit" class="toy-edit py-2">
        <form @submit.prevent="saveToy" class="form">
            <div class="form-control">
                <label for="txt" class="form-label">Toy Name</label>
                <input
                    required
                    v-model="toyToEdit.name"
                    id="txt"
                    type="text"
                    class="form-input"
                    placeholder="Enter your toy name here..."
                />
            </div>
            <div class="form-control">
                <label for="price" class="form-label">Toy Price</label>
                <input
                    required
                    v-model.number="toyToEdit.price"
                    id="price"
                    type="number"
                    class="form-input"
                />
            </div>
            <div class="form-control">
                <label for="labels" class="form-label">Toy Labels</label>
                <input
                    required
                    v-model="toyToEdit.labels"
                    id="labels"
                    type="txt"
                    class="form-input"
                />
            </div>
            <div class="btn-group">
                <button class="btn btn-info">Save</button>
                <button @click="goBack" class="btn btn-danger-text">
                    Go Back
                </button>
            </div>
        </form>
    </section>
</template>

<script>
import { toyService } from "../services/toy-service.js"

export default {
    name: "toy-edit",
    data() {
        return {
            toyToEdit: null,
        }
    },
    created() {
        const { id } = this.$route.params
        if (id) {
            toyService.getById(id).then((toy) => {
                this.toyToEdit = toy
            })
        } else {
            this.toyToEdit = toyService.getEmptyToy()
        }
    },
    methods: {
        goBack() {
            this.$router.push("/toy")
        },
        saveToy() {
            this.$store
                .dispatch({ type: "saveToy", toy: this.toyToEdit })
                .then(() => {
                    this.$router.push("/toy")
                })
        },
    },
}
</script>
