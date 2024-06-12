<script>
import axios from 'axios';

export default {
  data() {
    return {
      desserts: []
    };
  },
  mounted() {
    this.fetchStudents();
  },
  methods: {
    fetchStudents() {
      // Recuperar el token desde localStorage (o sessionStorage)
      const token = localStorage.getItem('accessToken');

      // Si no hay token, mostrar un error
      if (!token) {
        console.error("No se encontró el token de acceso.");
        return;
      }

      axios
        .get("http://localhost:8000/api/YKSecurity/listaProductos", {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        })
        .then((response) => {
          this.desserts = response.data;
        })
        .catch((error) => {
          console.error("Error al obtener las tallas:", error);
        });
    },
  }
};
</script>

<template>
  <v-row justify="center">
    <v-col cols="12">
      <v-table density="compact">
        <thead>
          <tr>
            <th class="text-center">
              Nombre
            </th>
            <th class="text-center">
              Descripcion
            </th>
            <th class="text-center">
              Precio
            </th>
            <th class="text-center">
              Stock
            </th>
            <th class="text-center">
              Talla
            </th>
            <th class="text-center">
              Color
            </th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="item in desserts" :key="item.id">
            <td class="text-center">
              {{ item.nombre }}
            </td>
            <td class="text-center">
              {{ item.descripcion }}
            </td>
            <td class="text-center">
              {{ item.precio }}
            </td>
            <td class="text-center">
              {{ item.stock }}
            </td>
            <td class="text-center">
              {{ item.talla.nombre }}
            </td>
            <td class="text-center">
              {{ item.color.nombre }}
            </td>
          </tr>
        </tbody>
      </v-table>
    </v-col>
  </v-row>
</template>
