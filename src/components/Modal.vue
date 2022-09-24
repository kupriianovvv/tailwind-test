<template>
  <div>

    <div
      class="fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center z-50"
      v-if="getIsOpened"
    >
      <div
        class="relative mx-auto w-auto max-w-2xxl"
      >
        <div class="bg-white w-full rounded shadow-2xl flex flex-col items-start pl-6 pr-6">
          <div class="text-2xl font-bold mt-3">Заказать звонок</div>
          <form class="flex justify-between mt-6" @submit="onSubmit">
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
          <button class="rounded bg-green-500 text-white px-6 mt-6 py-2 w-3/12 ml-auto  mb-6" @click="onSubmit">Close</button>
        </div>
      </div>
    </div>
    <div 
      v-if="getIsOpened"
      class="absolute z-40 inset-0 opacity-25 bg-black">
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: 'modal-modal',
  computed: mapGetters(["getIsOpened"]),
  methods: {
    ...mapActions(['toggleModal', 'fetchData']),
    onSubmit(e) {
      e.preventDefault();
      this.fetchData({name: "aaa", email:"piu@mail.ru", phone:"+79111233243", city_id: 1});
      this.toggleModal();
    }
  },
  
}
</script>

<style>

</style>