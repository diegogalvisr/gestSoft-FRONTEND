<script setup>
import DemoSimpleTableHeight from '@/views/pages/colores/DemoSimpleTableHeight.vue';
</script>

<template>
  <VRow>
  <!--
    <VCol cols="12">
      <VCard title="Clientes VIP">
        <VCardText>
         Aqui puedes visualizar a tus clientes.
        </VCardText>
        <DemoSimpleTableTheme />
      </VCard>
    </VCol>-->
    <VCol cols="12">
      <VCard title="Tallas Disponibles">
        <VCardText>
            <VBtn href="\dashboard">Nuevo Color</VBtn>
        </VCardText>

        <VCardText>
         Aqui puedes visualizar los colores registradas actualmente.
        </VCardText>
        <DemoSimpleTableHeight />
      </VCard>
    </VCol>
  </VRow>
</template>
