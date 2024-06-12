<script setup>
import { ref } from 'vue';

const accountData = {
  firstName: ''
}

const refInputEl = ref()
const accountDataLocal = ref(JSON.parse(JSON.stringify(accountData)))
const isAccountDeactivated = ref(false)

const resetForm = () => {
  accountDataLocal.value = JSON.parse(JSON.stringify(accountData))
}

const changeAvatar = file => {
  const fileReader = new FileReader()
  const { files } = file.target
  if (files && files.length) {
    fileReader.readAsDataURL(files[0])
    fileReader.onload = () => {
      if (typeof fileReader.result === 'string')
        accountDataLocal.value.avatarImg = fileReader.result
    }
  }
}

// reset avatar image
const resetAvatar = () => {
  accountDataLocal.value.avatarImg = accountData.avatarImg
}

const token = localStorage.getItem('accessToken');
const agregarTalla = async () => {
  try {
    const response = await fetch('http://localhost:8000/api/YKSecurity/register-color', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ nombre: accountDataLocal.value.firstName })
    })
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    // Puedes agregar aquí lógica adicional si es necesario después de hacer la solicitud
    console.log('Color agregado exitosamente')
    alert('Color agregado Exitosamente')
    this.accountDataLocal.value.firstName = ''
  } catch (error) {
    console.error('Hubo un problema al agregar el color:', error)
  }
}
</script>

<template>
  <VRow>
    <VCol cols="12">
      <VCard title="Agregar nuevo color">

        <VCardText>
          <!-- 👉 Form -->
          <VForm class="mt-6">
            <VRow>
              <!-- 👉 First Name -->
              <VCol md="6" cols="12">
                <VTextField v-model="accountDataLocal.firstName" placeholder="example" label="Color" />
              </VCol>

              <!-- 👉 Form Actions -->
              <VCol cols="12" class="d-flex flex-wrap gap-4">
                <VBtn @click="agregarTalla('inserte aquí su token de acceso')">Agregar</VBtn>

                <VBtn color="secondary" variant="tonal" type="reset" @click.prevent="resetForm">
                  Limpiar
                </VBtn>
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>
