
<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-md w-96">
      <h2 class="text-2xl font-bold mb-6">Connexion</h2>
      <form @submit.prevent="login">
        
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700" for="email">Email</label>
          <input
              id="email"
              v-model="form.email"
              :class="{'border-red-500': emailError}"
              class="mt-1 block w-full border-gray-300 py-2 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
              required
              type="email"
          />
          <p v-if="emailError" class="text-red-500 text-sm">Email invalide.</p>
        </div>

        <div class="mb-4 relative">
          <label class="block text-sm font-medium text-gray-700" for="password">Mot de passe</label>
          <input
              id="password"
              v-model="form.password"
              :class="{'border-red-500': passwordError}"
              :type="showPassword ? 'text' : 'password'"
              class="mt-1 block w-full border-gray-300 py-2 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
              required
          />
          <button
              class="absolute right-3 top-[75%] transform -translate-y-1/2 text-gray-500 focus:outline-none"
              type="button"
              @click="togglePasswordVisibility"
          >
            <span v-if="showPassword"><svg height="1em" viewBox="0 0 24 24" width="1em"
                                           xmlns="http://www.w3.org/2000/svg">
                <path d="M9.75 12a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0" fill="currentColor"/>
                <path clip-rule="evenodd"
                      d="M2 12c0 1.64.425 2.191 1.275 3.296C4.972 17.5 7.818 20 12 20s7.028-2.5 8.725-4.704C21.575 14.192 22 13.639 22 12c0-1.64-.425-2.191-1.275-3.296C19.028 6.5 16.182 4 12 4S4.972 6.5 3.275 8.704C2.425 9.81 2 10.361 2 12m10-3.75a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5"
                      fill="currentColor"
                      fill-rule="evenodd"/>
              </svg></span>
            <span v-else><svg height="1em" viewBox="0 0 24 24" width="1em"
                              xmlns="http://www.w3.org/2000/svg">
                <g fill="none">
                  <path d="m3 3l18 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2"/>
                  <path clip-rule="evenodd"
                        d="M5.4 6.23c-.44.33-.843.678-1.21 1.032a15.1 15.1 0 0 0-3.001 4.11a1.44 1.44 0 0 0 0 1.255a15.1 15.1 0 0 0 3 4.111C5.94 18.423 8.518 20 12 20c2.236 0 4.1-.65 5.61-1.562l-3.944-3.943a3 3 0 0 1-4.161-4.161L5.401 6.229zm15.266 9.608a15 15 0 0 0 2.145-3.21a1.44 1.44 0 0 0 0-1.255a15.1 15.1 0 0 0-3-4.111C18.06 5.577 15.483 4 12 4a10.8 10.8 0 0 0-2.808.363z"
                        fill="currentColor"
                        fill-rule="evenodd"/>
                </g>
              </svg></span>
          </button>
          <p v-if="passwordError" class="text-red-500 text-sm">Le mot de passe est requis.</p>
        </div>

        <button class="w-full bg-blue-500 text-white font-bold py-2 rounded hover:bg-blue-600" type="submit">Se
          connecter
        </button>

        <p class="mt-4 text-sm text-center">
          Pas de compte?
          <router-link class="text-blue-500" to="/register">S'inscrire</router-link>
        </p>

        <div v-if="errorMessage" class="mt-4 text-red-500 text-center">{{ errorMessage }}</div>
        
      </form>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import axios from 'axios';
import {useRouter} from 'vue-router';


const form = ref({
  email: '',
  password: '',
});
const errorMessage = ref('');
const emailError = ref(false);
const passwordError = ref(false);
const showPassword = ref(false);
const router = useRouter();

const validateForm = () => {
  emailError.value = !validEmail(form.value.email);
  passwordError.value = form.value.password.trim() === '';

  return !(emailError.value || passwordError.value);
};

const validEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};


const login = async () => {
  errorMessage.value = '';

  if (!validateForm()) {
    return;
  }

  try {
    const response = await axios.get(`${BASE_URL}/api/login`, {
      params: form.value
    });

    sessionStorage.setItem('token', response.data.access_token);
    sessionStorage.setItem('userId', response.data.user.uuid);
    router.push("/dashboard");
  } catch (error) {
    if (error.response && error.response.data) {
      errorMessage.value = error.response.data.error || 'Erreur lors de la connexion';
    }
  }
};

</script>

<style scoped>
</style>