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
        class="relative mx-auto w-auto max-w-2xxl"
      >
        <div class="bg-white w-full rounded shadow-2xl flex flex-col items-start pl-6 pr-6">
          <div class="text-2xl font-bold mt-3">Заказать звонок</div>
          <form class="flex justify-between mt-6">
            <label for="name">Имя*</label>
            <input id="name" class="border border-solid border-gray-300 w-1/6">
            <label for="phone">Телефон*</label>
            <input id="phone" class="border border-solid border-gray-300 w-1/6">         
            <label for="email">Email*</label>
            <input id="email" class="border border-solid border-gray-300 w-1/6">
            <label for="city">Город*</label>
            <select id="city" class="w-1/6">
              <option value="Moscow">Moscow</option>
              <option value="SaintPetersburg">Saint Petersburg</option>
            </select>
          </form>
          <button class="rounded bg-green-500 text-white px-6 mt-6 py-2 w-3/12 ml-auto  mb-6" @click="toggleModal=false">Close</button>
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