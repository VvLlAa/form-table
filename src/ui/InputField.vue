<script setup>

const props = defineProps({
  modelValue: String,
  type: String,
  error: Boolean,
  placeholder: String
});

const emit = defineEmits(["update:modelValue"]);

const handleInput = (event) => {
  let value = event.target.value;

  if (props.type === "tel") {
    value = value.replace(/\D/g, "").slice(0, 11);
    event.target.value = value;
  }

  emit("update:modelValue", value);
};
</script>

<template>
  <div class="input-field">
    <input
        class="input"
        :value="modelValue"
        :type="props.type"
        @input="handleInput"
        :placeholder="props.placeholder"
    >
    <p v-if="props.error" class="error">Пожалуйсто заполните поле</p>
  </div>
</template>

<style scoped>
.input-field {
  width: 100%;
}

.input {
  border: 1px solid #ccc; padding: 8px;
  border-radius: 6px;
  width: 100%;
}

.error {
  position: absolute;
  font-size: 12px;
  color: #5d77af;
}
</style>