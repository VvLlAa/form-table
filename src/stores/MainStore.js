import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useMainStore = defineStore('MainStore', () => {
  const dataList = ref([]);

  const addDataList = (data) => {
    dataList.value.push(data);
    localStorage.setItem('dataList', JSON.stringify(dataList.value));
  };

  const removeDataList = (id) => {
    dataList.value = dataList.value.filter(item => item.id !== id);
    localStorage.setItem('dataList', JSON.stringify(dataList.value));
  }

  return { dataList, addDataList, removeDataList }
})
