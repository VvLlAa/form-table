<script setup>
defineProps({
  isFormValid: Boolean,
})
</script>

<template>
  <button :disabled="isFormValid">
    <slot></slot>
  </button>
</template>

<style scoped>
button {
  background: linear-gradient(to right, #e6f4e6, #d4ebd4);
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  color: #333;
  cursor: pointer;
  transition: background 0.3s ease-in-out;
}

button:hover:not(:disabled) {
  background: linear-gradient(to right, #C7E5C7, #95D393);
  color: #fff;
}

button:active:not(:disabled) {
  background: #95D393;
}

button:disabled {
  background: #ddd;
  color: #aaa;
  cursor: not-allowed;
}
</style>