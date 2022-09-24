<template>
    <button 
      class="text-white rounded bg-green-500 px-6 py-4 font-sans font-semibold shadow-lg hover:bg-green-400 outline-none active:outline-none focuse:outline-none"
      @click="toggleModal()"
    >
      {{text}}
    </button>

</template>

<script>
import { mapGetters, mapActions } from "vuex";


export default {
  name: 'button-button',
  computed: mapGetters(["getIsOpened"]),
  components: {

  },
  methods: {
    ...mapActions(['toggleModal'])
  },
  props: ['text', 'color']
}
</script>

<style>

</style>