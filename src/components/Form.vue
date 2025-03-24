<script setup>
import {computed, ref} from "vue";
import InputField from "@/ui/InputField.vue";
import {useMainStore} from "../stores/MainStore.js"
import {validateForm} from "@/utils/validation.js";
import Btn from "@/ui/Btn.vue";

const MainStore = useMainStore();

const formData = ref({
  name: "",
  birthDate: "",
  phone: "",
  email: "",
})

const validation = computed(() => validateForm(formData.value));
const isInpErrors = computed(() => validation.value.errors);
const isFormValid = computed(() => validation.value.isValid);
const data = computed(() => validation.value.data);

const addForm = () => {
  if (isFormValid.value) {
    MainStore.addDataList(data.value)
    Object.assign(formData.value, {
      name: "",
      birthDate: "",
      phone: "",
      email: "",
    })
  }
};
</script>

<template>
  <form @submit.prevent="addForm">
    <InputField v-model="formData.name" :error="isInpErrors.name" type="text" placeholder="ФИО"/>
    <InputField v-model="formData.birthDate" :error="isInpErrors.birthDate" type="date" placeholder="Дата рождения"/>
    <InputField v-model="formData.phone" :error="isInpErrors.phone" type="tel" placeholder="Номер телефона"/>
    <InputField v-model="formData.email" :error="isInpErrors.email" type="email" placeholder="Email"/>
    <Btn :isFormValid="!isFormValid">Добавить</Btn>
  </form>
</template>

<style scoped>
form {
  display: flex;
  width: 300px;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
}
</style>