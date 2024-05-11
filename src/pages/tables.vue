<script setup>
import DemoSimpleTableHeight from '@/views/pages/tables/DemoSimpleTableHeight.vue';
import DemoSimpleTableTheme from '@/views/pages/tables/DemoSimpleTableTheme.vue';
</script>

<template>
  <VRow>
    <VCol cols="12">
      <VCard title="Clientes VIP">
        <VCardText>
         Aqui puedes visualizar a tus clientes.
        </VCardText>
        <DemoSimpleTableTheme />
      </VCard>
    </VCol>
    <VCol cols="12">
      <VCard title="Clientes VIP">
        <VCardText>
         Aqui puedes visualizar a tus clientes.
        </VCardText>
        <DemoSimpleTableHeight />
      </VCard>
    </VCol>
  </VRow>
</template>
