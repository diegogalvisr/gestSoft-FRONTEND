<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';

const desserts = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get("http://localhost:8000/api/v1/color/lista");
    desserts.value = response.data;
  } catch (error) {
    console.error("Error al obtener los colores:", error);
  }
});

function formatDate(dateString) {
  const date = new Date(dateString);
  const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZone: 'UTC'
  };
  return new Intl.DateTimeFormat('es-CO', options).format(date);
}
</script>

<template>
  <VTable
    height="500"
    fixed-header
  >
    <thead>
      <tr>
        <th>
          NOMBRE
        </th>
        <th>
          FECHA CREACION
        </th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="item in desserts" :key="item.id">
        <td class="text-center">
          {{ item.nombre }}
        </td>
        <td class="text-center">
          {{ formatDate(item.created_at) }}
        </td>
      </tr>
    </tbody>
  </VTable>
</template>
