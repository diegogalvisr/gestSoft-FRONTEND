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
        .get("http://192.168.80.10:8000/api/YKSecurity/listaTallas", {
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
              NOMBRE
            </th>
            <th class="text-center">
              FECHA CREACION
            </th>
            <th class="text-center">
              FECHA ACTUALIZACION
            </th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="item in desserts" :key="item.id">
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
      </v-table>
    </v-col>
  </v-row>
</template>
