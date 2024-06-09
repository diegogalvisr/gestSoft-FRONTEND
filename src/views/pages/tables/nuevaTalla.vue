<script setup>
import axios from 'axios';
import { ref } from 'vue';

const toast = useToast()

const reseteo = {
  talla: ''
}
const reseteoLocal = ref(structuredClone(reseteo))

const resetForm = () => {
  reseteoLocal.value = structuredClone(reseteo)
}

const guardarTalla = () => {
  const token = localStorage.getItem('accessToken')

  if (!token) {
    console.error("No se encontró el token de acceso.");
    return;
  }

  axios.post("http://192.168.80.10:8000/api/YKSecurity/register-talla", {
    nombre: reseteoLocal.value.talla
  }, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  })
  .then((response) => {
    console.log("Talla registrada exitosamente:", response.data)
    window.alert(response.data);
    resetForm()
    // Mostrar notificación de éxito
    toast.success('Talla registrada exitosamente')
  })
  .catch((error) => {
    console.error("Error al registrar la talla:", error)
    // Mostrar notificación de error
    toast.error('Error al registrar la talla')
  })
}
</script>

<template>
  <VRow>
    <VCol cols="12">
      <VCard title="Agregar una nueva Talla">
        <VCardText class="d-flex">
          <!-- 👉 Upload Photo -->
          <form class="d-flex flex-column justify-center gap-5">
            <p class="text-body-1 mb-0">
              Ingresa el nombre de la nueva talla a agregar.
            </p>
          </form>
        </VCardText>

        <VDivider />

        <VCardText>
          <!-- 👉 Form -->
          <VForm class="mt-6">
            <VRow>
              <!-- 👉 Aquí se ingresa el nombre de la nueva Talla -->
              <VCol
                md="6"
                cols="12"
              >
                <VTextField
                  v-model="reseteoLocal.talla"
                  label="Talla"
                />
              </VCol>

              <!-- 👉 Acciones del formulario -->
              <VCol
                cols="12"
                class="d-flex flex-wrap gap-4"
              >
                <VBtn @click="guardarTalla">Agregar</VBtn> <!-- Llama a la función guardarTalla cuando se hace clic en Agregar -->

                <VBtn
                  color="secondary"
                  variant="tonal"
                  type="reset"
                  @click.prevent="resetForm"
                >
                  Reset
                </VBtn>
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>
