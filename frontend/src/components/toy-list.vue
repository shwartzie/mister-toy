<template>
  <ul class="toy-list clean-list grid gap-1">
    <toy-preview @removeToy="removeToy" v-for="toy in toysToShow" :toy="toy" :user="user" :key="toy._id" />
  </ul>
</template>

<script>
import toyPreview from './toy-preview.vue'

export default {
  emits: ['removeToy'],
  props: {
    toysToShow: {
      type: Array,
      required: true,
    },
    user: {
      type: Object,
      required: true
    }
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
