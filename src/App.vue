<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useTheme } from 'vuetify';
import { hexToRgb } from './@layouts/utils';

const { global } = useTheme();
const router = useRouter();
const accessToken = ref(localStorage.getItem('accessToken'));

// Función para limpiar el accessToken y refrescar la pagina actual
const clearAccessToken = () => {
  alert('YKS SECURITY: Has estado logeado durante 30 segundos, logeate nuevamente');
  localStorage.removeItem('accessToken');
  accessToken.value = null;
  router.go();
};

onMounted(() => {
  if (localStorage.getItem('accessToken')) {
    setInterval(clearAccessToken, 3600000);/// 60 minutos
  }
});
</script>

<template>
  <VApp :style="`--v-global-theme-primary: ${hexToRgb(global.current.value.colors.primary)}`">
    <RouterView />
  </VApp>
</template>

<style lang="scss"></style>
