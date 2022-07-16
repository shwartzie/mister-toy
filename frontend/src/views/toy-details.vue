<template>
  <section v-if="toy" class="toy-details flex flex-col items-center gap-2">
    <article>
      <p><span class="fw-bold">ID:</span> {{ toy.id }}</p>
      <p><span class="fw-bold">Name:</span> {{ toy.name }}</p>
      <p><span class="fw-bold">Price:</span> {{ toy.price }}</p>
      <p><span class="fw-bold">Labels:</span> {{ toy.labels }}</p>
      <p><span class="fw-bold">Created At:</span> {{ toy.createdAt }}</p>
    </article>
    <button @click="goBack" class="btn btn-primary">go back</button>
  </section>
</template>

<script>
import { toyService } from '../services/toy-service.js'

export default {
  name: 'toy-details',
  data() {
    return {
      toy: null,
    }
  },
  created() {
    const { id } = this.$route.params
    toyService.getById(id).then((toy) => {
      this.toy = toy
    })
  },
  methods: {
    goBack() {
      this.$router.push('/toy')
    },
  },
}
</script>
