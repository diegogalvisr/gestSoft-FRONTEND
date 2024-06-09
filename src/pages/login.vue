<template>
  <div class="auth-wrapper d-flex align-center justify-center pa-4">
    <VCard
      class="auth-card pa-4 pt-7"
      max-width="448"
    >
      <VCardItem class="justify-center">
        <template #prepend>
          <div class="d-flex">
            <div
              class="d-flex text-primary"
              v-html="logo"
            />
          </div>
        </template>

        <VCardTitle class="text-2xl font-weight-bold">
          YKSOGEID
        </VCardTitle>
      </VCardItem>

      <VCardText class="pt-2">
        <h5 class="text-h5 mb-1">
          Bienvenido a GestSoft! 👋🏻
        </h5>
        <p class="mb-0">
          Porfavor ingresa tus credenciales para que inicies la aventura!
        </p>
      </VCardText>

      <VCardText>
        <VForm @submit.prevent="login">
          <VRow>
            <!-- email -->
            <VCol cols="12">
              <VTextField
                v-model="form.email"
                autofocus
                placeholder="johndoe@email.com"
                label="Correo"
                type="email"
              />
            </VCol>

            <!-- password -->
            <VCol cols="12">
              <VTextField
                v-model="form.password"
                label="Contraseña"
                placeholder="············"
                :type="isPasswordVisible ? 'text' : 'password'"
                :append-inner-icon="isPasswordVisible ? 'bx-hide' : 'bx-show'"
                @click:append-inner="isPasswordVisible = !isPasswordVisible"
              />

              <!-- remember me checkbox -->
              <div class="d-flex align-center justify-space-between flex-wrap mt-1 mb-4">
                <VCheckbox
                  v-model="form.remember"
                  label="Recordarme"
                />

                <RouterLink
                  class="text-primary ms-2 mb-1"
                  to="javascript:void(0)"
                >
                  Olvido su contraseña?
                </RouterLink>
              </div>

              <!-- login button -->
              <VBtn
                block
                type="submit"
              >
                Iniciar Sesion
              </VBtn>
            </VCol>

            <!-- create account -->
            <VCol
              cols="12"
              class="text-center text-base"
            >
              <span>Nuevo en la plataforma?</span>
              <RouterLink
                class="text-primary ms-2"
                to="/register"
              >
                Registrate aqui!
              </RouterLink>
            </VCol>

            <!-- auth providers -->
            <VCol
              cols="12"
              class="text-center"
            >
              <AuthProvider />
            </VCol>
          </VRow>
        </VForm>
      </VCardText>
    </VCard>

  </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const form = ref({
  email: '',
  password: '',
  remember: false,
});

const isPasswordVisible = ref(false);

const login = async () => {
  try {
    const response = await axios.post('http://192.168.80.10:8000/api/YKSecurity/login', {
      email: form.value.email,
      password: form.value.password,
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    });
    alert('YKS SECURITY: Te has logeado correctamente.');
    localStorage.setItem('accessToken', response.data.access_token);
    localStorage.setItem('expiraEn', response.data.expires_in);
    router.push('/dashboard');

    // Solicitud para obtener los datos del usuario autenticado
    const userResponse = await axios.post('http://192.168.80.10:8000/api/YKSecurity/me', {}, {
      headers: {
        'Authorization': `Bearer ${response.data.access_token}`,
        'Content-Type': 'application/json',
      },
    });
    localStorage.setItem('name', userResponse.data.name);
    localStorage.setItem('email', userResponse.data.email);
  } catch (error) {
    alert('Usuario o contraseña incorrecta');
  }
};

</script>

<style lang="scss">
@use "@core/scss/template/pages/page-auth.scss";
</style>
