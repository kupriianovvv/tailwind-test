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
          <form v-if="!getData" class="flex justify-between mt-6 flex-wrap" @submit="onSubmit">
           <div class="md:w-1/6 mr-3">
            <label for="name" class="mr-3 relative">Имя*</label>
            <input id="name" class="border border-solid border-gray-300 indent-2.5" :value="getName" @change="onChangeName" placeholder="Иван Иванов">
            <div v-if="nameError" class="text-rose-600">Обязательное поле</div>
           </div>
           <div class="md:w-1/6 mr-3">
            <label for="phone" relative>Телефон*</label>
            <input id="phone" class="border border-solid border-gray-300 indent-2.5" :value="getPhone" @change="onChangePhone" placeholder="+7 (___) ___-__-__">
            <div v-if="phoneError" class="text-rose-600">Обязательное поле</div>
           </div>
           <div class="md:w-1/6 mr-3">         
            <label for="email" class="mr-3 relative">Email*</label>
            <input id="email" class="border border-solid border-gray-300 indent-2.5" :value="getEmail" @change="onChangeEmail" placeholder="you@example.com">
            <div v-if="emailError" class="text-rose-600">Обязательное поле</div>
           </div>
           <div class="md:w-1/6 mr-3">
            <label for="city" class="mr-3 relative">Город*</label>
            <select id="city" class="text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded focus:text-gray-700 focus:bg-white focus:outline-none" :value="getCity" @change="onChangeCity" >
              <option value="1">Москва</option>
              <option value="2">Санкт-Петербург</option>
            </select>
           </div>
          </form>
          <div v-if="getData" v-html="getData" class="min0width: 600px" >
          </div>
          <button v-if="!getData" class="rounded bg-green-500 text-white px-6 mt-6 py-2 md:w-3/12 md:ml-auto  mb-6" @click="onSubmit">Отправить</button>

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
  data() {
    return {
      nameError: false,
      phoneError: false,
      emailError: false,
    }
  },
  computed: mapGetters(["getIsOpened", "getData", "getName", "getPhone", "getEmail", "getCity"]),
  methods: {
    ...mapActions(['toggleModal', 'fetchData', 'changeName', 'changePhone', 'changeEmail', 'changeCity', 'changeData']),
    onSubmit(e) {
      this.nameError = false;
      this.phoneError = false;
      this.emailError = false;

      // eslint-disable-next-line
      const PHONE_REGEXP = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
      // eslint-disable-next-line
      const EMAIL_REGEXP = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      e.preventDefault();
      if (this.getName === "") {
        this.nameError = true;
      }
      if (!this.getPhone.match(PHONE_REGEXP)) {
        this.phoneError = true;
      }
      if (!this.getEmail.match(EMAIL_REGEXP)) {
        this.emailError = true;
        return;
      }
      if (this.nameError || this.phoneError || this.emailError) return;


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

      this.nameError = false;
      this.phoneError = false;
      this.emailError = false;
    }
  },
  
}
</script>

<style>

</style>