<template>
    <button 
      class="text-white rounded bg-green-500 px-6 py-4 font-sans font-semibold shadow-lg hover:bg-green-400 outline-none active:outline-none focuse:outline-none"
      @click="onToggleModal"
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
    ...mapActions(['toggleModal', 'changeCity']),
    onToggleModal() {
      if (this.city === "Moscow") {
        this.changeCity(1)
      } else if (this.city === "Saint Petersburg") {
        this.changeCity(2)
      }
      this.toggleModal();
    }
  },
  props: ['text', 'color', 'city']
}
</script>

<style>

</style>