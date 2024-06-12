<script setup>
import { ref } from 'vue';

const accountData = {
  nombre: '',
  descripcion: '',
  precio: '',
  stock: '',
  talla: '',
  color: ''
};

const accountDataLocal = ref({ ...accountData });

const resetForm = () => {
  accountDataLocal.value = { ...accountData };
};
const token = localStorage.getItem('accessToken');
const saveProduct = async () => {
  const response = await fetch('http://localhost:8000/api/YKSecurity/register-product', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(accountDataLocal.value)
  });

  if (response.ok) {
    // Producto guardado exitosamente
    alert('Producto guardado exitosamente');
    resetForm();
  } else {
    // Error al guardar el producto
    alert('Error al guardar el producto');
  }
};
</script>

<template>
  <VRow>
    <VCol cols="12">
      <VCard title="Agregar nuevo producto">

        <VCardText>
          <!-- 👉 Form -->
          <VForm class="mt-6">
            <VRow>
              <!-- 👉 Nombre -->
              <VCol md="6" cols="12">
                <VTextField v-model="accountDataLocal.nombre" placeholder="Nombre" label="Nombre" />
              </VCol>
              <!-- 👉 Descripción -->
              <VCol md="6" cols="12">
                <VTextField v-model="accountDataLocal.descripcion" placeholder="Descripción" label="Descripción" />
              </VCol>
              <!-- 👉 Precio -->
              <VCol md="6" cols="12">
                <VTextField v-model="accountDataLocal.precio" placeholder="Precio" label="Precio" />
              </VCol>
              <!-- 👉 Stock -->
              <VCol md="6" cols="12">
                <VTextField v-model="accountDataLocal.stock" placeholder="Stock" label="Stock" />
              </VCol>
              <!-- 👉 Talla -->
              <VCol md="6" cols="12">
                <v-select v-model="accountDataLocal.talla" label="Talla" :items="['S', 'XL', 'L', 'M']"></v-select>
              </VCol>
              <!-- 👉 Color -->
              <VCol md="6" cols="12">
                <v-select v-model="accountDataLocal.color" label="Color"
                  :items="['Azul', 'Amarillo', 'Rojo']"></v-select>
              </VCol>

              <!-- 👉 Form Actions -->
              <VCol cols="12" class="d-flex flex-wrap gap-4">
                <VBtn @click="saveProduct">Agregar</VBtn>
                <VBtn color="secondary" variant="tonal" @click="resetForm">Limpiar</VBtn>
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>
