<script setup>
import axios from 'axios';
const desserts = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get("http://localhost:8000/api/v1/color/lista");
    desserts.value = response.data;
  } catch (error) {
    console.error("Error al obtener los colores:", error);
  }
});
</script>

<template>
  <VTable
    height="250"
    fixed-header
  >
    <thead>
      <tr>
        <th class="text-uppercase">
          ID
        </th>
        <th>
          NOMBRE
        </th>
        <th>
          FECHA CREACION
        </th>
        <th>
          FECHA ACTUALIZACION
        </th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="item in desserts" :key="item.id">
        <td>
          {{ item.idColor }}
        </td>
        <td class="text-center">
          {{ item.nombre }}
        </td>
        <td class="text-center">
          {{ item.created_at }}
        </td>
        <td class="text-center">
          {{ item.updated_at }}
        </td>
      </tr>
    </tbody>
  </VTable>
</template>
