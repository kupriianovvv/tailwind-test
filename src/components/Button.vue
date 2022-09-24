<template>
    <button 
      class="text-white rounded bg-green-500 px-6 py-4 font-sans font-semibold shadow-lg hover:bg-green-400 outline-none active:outline-none focuse:outline-none"
    >
      {{text}}
    </button>
</template>

<script>


export default {
  name: 'button-button',
  components: {

  },
  props: ['text', 'color']
}
</script>

<style>

</style>