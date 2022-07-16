<template>
  
  <ul class="toy-list clean-list grid gap-1">
    <toy-preview @removeToy="removeToy" v-for="toy in toysToShow" :toy="toy" :key="toy._id" />
  </ul>
</template>

<script>
import toyPreview from './toy-preview.vue'

export default {
  props: {
    toysToShow: {
      type: Array,
      required: true,
    },
  },
  created() {
  },
  components: {
    toyPreview,
  },
  methods: {
    removeToy(toyId) {
      this.$emit('removeToy', toyId)
    },
  },
  computed: {
      
  }
}
</script>
