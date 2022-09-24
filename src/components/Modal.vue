<template>
  <div>
    <button 
      class="text-white rounded bg-pink-500 px-6 py-4 font-sans font-semibold shadow-lg hover:bg-pink-400 outline-none active:outline-none focuse:outline-none"
      @click="toggleModal = !toggleModal">
        open modal
    </button>
    {{toggleModal}}

    <div
      class="fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center z-50"
      v-if="toggleModal"
    >
      <div
        class="relative mx-auto w-auto max-w-2xl"
      >
        <div class="bg-white w-full rounded shadow-2xl flex flex-col">
          <div class="text-2xl font-bold">Hello from modal</div>
          <span>asd asd asd sadasd asd asd sad asd asd sa asd asdasdsa dsad asd sadsad asd asd adas dasdasd asdas dasd ad sdasd sadsad asdas dasdsa da sdasdasd asd asasd asd asd sadasd asd asd sad asd asd sa asd asdasdsa dsad asd sadsad asd asd adas dasdasd asdas dasd ad sdasd sadsad asdas dasdsa da sdasdasd asd as</span>
          <button class="rounded bg-green-500 text-white px-6 mt-1 py-2 w-3/12 m-auto mb-3" @click="toggleModal=false">Close</button>
        </div>
      </div>
    </div>
    <div 
      v-if="toggleModal"
      class="absolute z-40 inset-0 opacity-25 bg-black">
    </div>
  </div>
</template>

<script>


export default {
  name: 'modal-modal',
  data() {
    return {
      toggleModal: false
    }
  }
}
</script>

<style>

</style>