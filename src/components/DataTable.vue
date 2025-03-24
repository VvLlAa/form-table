<script setup>
import {useMainStore} from "@/stores/MainStore.js";

const MainStore = useMainStore();
const TableThead = ['ФИО', 'Дата рождения', 'Телефон', 'Email', 'Действия'];
</script>

<template>
  <table>
    <thead>
      <tr>
        <th v-for="thead in TableThead" :key="thead">
          {{thead}}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in MainStore.dataList" :key="item.id">
        <td>{{item.name}}</td>
        <td>{{item.birthDate}}</td>
        <td>{{item.phone}}</td>
        <td>{{item.email}}</td>
        <td class="remove" title="Хотите удалить?" @click="MainStore.removeDataList(item.id)">
          <button class="btn-remove">X</button>
          <button class="btn-remove full-text">Удалить</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

thead th {
  background-color: #FAF9F9;
  text-align: center;
}

tbody td {
  text-align: center;
}

tbody tr:hover {
  background-color: #FAF9F9;
}

th, td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #333333;
}

button {
  border: none;
  background: none;
}

.remove {
  width: 50px;
  cursor: pointer;
}

.full-text {
  width: 100%;
  display: none;
  cursor: pointer;
}

.remove:hover .btn-remove {
  display: none;
}

.remove:hover .full-text {
  display: block;
}
</style>