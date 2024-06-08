<script setup>
import { VDataTable } from 'vuetify/labs/VDataTable'
import DemoSimpleTableHeight from '@/views/pages/tables/consumoApiTallas.vue';

</script>

<template>
    <VRow>
    <VCol cols="12">
      <VCard title="Tallas Disponibles">
        <VCardText>
         Aqui puedes visualizar las tallas registradas actualmente.
        </VCardText>
        <DemoSimpleTableHeight />
      </VCard>
    </VCol>
  </VRow>
</template>
