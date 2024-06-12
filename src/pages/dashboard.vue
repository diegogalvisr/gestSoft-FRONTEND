<script setup>
import chart from '@images/cards/chart-success.png';
import wallet from '@images/cards/wallet-info.png';
import axios from 'axios';

const accessToken = localStorage.getItem('accessToken');

if (!accessToken) {
  console.error("No se encontró el token de acceso.");
}

const data = reactive({
  totalTallas: null,
  totalColores: null,
  totalPersonas: null,
  totalProductos: null
});

const fetchConteos = () => {
  axios
    .get("http://localhost:8000/api/YKSecurity/conteos", {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then((response) => {
      const { totalTallas, totalColores, totalPersonas, totalProductos } = response.data;
      data.totalTallas = totalTallas;
      data.totalColores = totalColores;
      data.totalPersonas = totalPersonas;
      data.totalProductos = totalProductos;
    })
    .catch((error) => {
      console.error("Error al obtener los conteos:", error);
    });
};

fetchConteos();
</script>

<template>
  <VRow>
    <VCol cols="12" sm="8">
      <VRow>
        <!-- 👉 Total Tallas -->
        <VCol cols="2" md="8">
          <CardStatisticsVertical v-bind="{
            title: 'Total Tallas',
            image: chart,
            stats: data.totalTallas != null ? data.totalTallas.toString() : 'Cargando...'
          }" />
        </VCol>
        <!-- 👉 Total Colores -->
        <VCol cols="2" md="8">
          <CardStatisticsVertical v-bind="{
            title: 'Total Colores',
            image: chart,
            stats: data.totalColores != null ? data.totalColores.toString() : 'Cargando...'
          }" />
        </VCol>
        <!-- 👉 Total Solicitudes -->
        <VCol cols="2" md="8">
          <CardStatisticsVertical v-bind="{
            title: 'Total Solicitudes',
            image: chart,
            stats: data.totalPersonas != null ? data.totalPersonas.toString() : 'Cargando...'
          }" />
        </VCol>
        <!-- 👉 Total Productos -->
        <VCol cols="2" md="8">
          <CardStatisticsVertical v-bind="{
            title: 'Total Productos',
            image: wallet,
            stats: data.totalProductos != null ? data.totalProductos.toString() : 'Cargando...'
          }" />
        </VCol>
      </VRow>
    </VCol>
    <VCol cols="2" sm="8" md="8" order="1" order-md="2">
      <!-- Otros componentes aquí -->
    </VCol>
  </VRow>
</template>
