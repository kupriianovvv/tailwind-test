<template>
  <div>

    <div
      class="fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center z-50"
      v-if="getIsOpened"
      id="overlay"
      @click="onClose"
    >
      <div
        class="relative mx-auto w-auto max-w-2xxl"
      >
        <div class="bg-white w-full rounded shadow-2xl flex flex-col items-start pl-6 pr-6">
          <div v-if="!getData" class="text-2xl font-bold mt-3">Заказать звонок</div>
          <form v-if="!getData" class="flex justify-between mt-6" @submit="onSubmit">
            <label for="name">Имя*</label>
            <input id="name" class="border border-solid border-gray-300 w-1/6" :value="getName" @change="onChangeName">
            <label for="phone">Телефон*</label>
            <input id="phone" class="border border-solid border-gray-300 w-1/6" :value="getPhone" @change="onChangePhone">         
            <label for="email">Email*</label>
            <input id="email" class="border border-solid border-gray-300 w-1/6" :value="getEmail" @change="onChangeEmail">
            <label for="city">Город*</label>
            <select id="city" class="w-1/6" :value="getCity" @change="onChangeCity">
              <option value="1">Moscow</option>
              <option value="2">Saint Petersburg</option>
            </select>
          </form>
          <div v-if="getData" v-html="getData" class="min0width: 600px" >
          </div>
          <button v-if="!getData" class="rounded bg-green-500 text-white px-6 mt-6 py-2 w-3/12 ml-auto  mb-6" @click="onSubmit">Close</button>
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
  computed: mapGetters(["getIsOpened", "getData", "getName", "getPhone", "getEmail", "getCity"]),
  methods: {
    ...mapActions(['toggleModal', 'fetchData', 'changeName', 'changePhone', 'changeEmail', 'changeCity', 'changeData']),
    onSubmit(e) {
      e.preventDefault();
      this.fetchData({name: this.getName, email: this.getEmail, phone: this.getPhone, city_id: this.getCity});
      this.toggleModal();
    },
    onChangeName(e) {
      this.changeName(e.target.value)
    },
    onChangePhone(e) {
      this.changePhone(e.target.value)
    },
    onChangeEmail(e) {
      this.changeEmail(e.target.value)
    },
    onChangeCity(e) {
      this.changeCity(e.target.value)
    },
    onClose(e) {
      if (e.target.id !== "overlay") return;
      this.toggleModal();
      this.changeData("");
      this.changeName("");
      this.changePhone("");
      this.changeEmail("");
      this.changeCity("");
    }
  },
  
}
</script>

<style>

</style>