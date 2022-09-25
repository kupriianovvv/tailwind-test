<template>
  <div id="app">
    <Button text="Заказать в Москву" class="bg-blue-500 hover:bg-blue-400" city="Moscow"/>
    <Button text="Заказать в Санкт-Петербург" class="bg-emerald-500 hover:bg-emerald-400" city="Saint Petersburg"/>
    <Modal />
  </div>
</template>

<script>

import Modal from "./components/Modal"
import Button from "./components/Button"

export default {
  name: 'App',
  components: {
    Modal,
    Button
  }
}
</script>

<style>

</style>
