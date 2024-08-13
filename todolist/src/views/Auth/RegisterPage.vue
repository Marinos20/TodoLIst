<template>
  <div class="flex items-center justify-center min-h-screen ">
    <div class="bg-white p-8 rounded-lg shadow-lg w-96">
      <h2 class="text-2xl font-bold mb-6 text-center">Inscription</h2>
      <form @submit.prevent="register">
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700" for="name">Nom</label>
          <div class="relative">
            <svg class="absolute left-3 top-[40%] text-gray-400" height="1em" viewBox="0 0 24 24" width="1em"
                 xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="6" fill="currentColor" r="4"/>
              <path d="M20 17.5c0 2.485 0 4.5-8 4.5s-8-2.015-8-4.5S7.582 13 12 13s8 2.015 8 4.5" fill="currentColor"/>
            </svg>
            <input
                id="name"
                v-model="form.name"
                :class="{'border-red-500': nameError}"
                class="mt-1 block w-full border-gray-300 py-2 pl-10 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                required
                type="text"
            />
          </div>
          <p v-if="nameError" class="text-red-500 text-sm">Le nom doit avoir au moins 3 caractères et ne doit pas
            contenir de caractères spéciaux.</p>
        </div>

        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700" for="email">Email</label>
          <div class="relative">
            <svg class="absolute left-3 top-[40%] text-gray-400" height="1em" viewBox="0 0 24 24" width="1em"
                 xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M7.29 4.908a54.4 54.4 0 0 1 9.42 0l1.511.13a2.89 2.89 0 0 1 2.313 1.546a.236.236 0 0 1-.091.307l-6.266 3.88a4.25 4.25 0 0 1-4.4.045L3.47 7.088a.236.236 0 0 1-.103-.293A2.89 2.89 0 0 1 5.78 5.039z"
                  fill="currentColor"/>
              <path
                  d="M3.362 8.767a.248.248 0 0 0-.373.187a30.4 30.4 0 0 0 .184 7.56A2.89 2.89 0 0 0 5.78 18.96l1.51.131c3.135.273 6.287.273 9.422 0l1.51-.13a2.89 2.89 0 0 0 2.606-2.449a30.4 30.4 0 0 0 .161-7.779a.248.248 0 0 0-.377-.182l-5.645 3.494a5.75 5.75 0 0 1-5.951.061z"
                  fill="currentColor"/>
            </svg>
            <input
                id="email"
                v-model="form.email"
                :class="{'border-red-500': emailError}"
                class="mt-1 block w-full border-gray-300 py-2 pl-10 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                required
                type="email"
            />
          </div>
          <p v-if="emailError" class="text-red-500 text-sm">Email invalide ou déjà utilisé.</p>
        </div>

        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700" for="birthdate">Date de naissance</label>
          <div class="relative">
            <svg class="absolute left-3 top-[40%] text-gray-400" height="1em" viewBox="0 0 48 48" width="1em"
                 xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M6 12.25A6.25 6.25 0 0 1 12.25 6h23.5A6.25 6.25 0 0 1 42 12.25V14H6zm0 4.25v19.25A6.25 6.25 0 0 0 12.25 42h23.5A6.25 6.25 0 0 0 42 35.75V16.5zm12 7a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m6 2.5a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5m11-2.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0M15.5 34a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5m11-2.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"
                  fill="currentColor"/>
            </svg>
          </div>
        </div>
           

        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700" for="password">Mot de passe</label>
          <div class="relative">
            <svg class="absolute left-3 top-[40%] text-gray-400" height="1em" viewBox="0 0 24 24" width="1em"
                 xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M17 9V7c0-2.8-2.2-5-5-5S7 4.2 7 7v2c-1.7 0-3 1.3-3 3v7c0 1.7 1.3 3 3 3h10c1.7 0 3-1.3 3-3v-7c0-1.7-1.3-3-3-3M9 7c0-1.7 1.3-3 3-3s3 1.3 3 3v2H9z"
                  fill="currentColor"/>
            </svg>
            <input
                id="password"
                v-model="form.password"
                :class="{'border-red-500': passwordError}"
                :type="showPassword ? 'text' : 'password'"
                class="mt-1 block w-full border-gray-300 py-2 pl-10 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                required
            />
            <button class="absolute right-3 top-2.5 text-gray-400" type="button" @click="togglePassword">
              <svg v-if="showPassword" height="1em" viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.75 12a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0" fill="currentColor"/>
                <path clip-rule="evenodd"
                      d="M2 12c0 1.64.425 2.191 1.275 3.296C4.972 17.5 7.818 20 12 20s7.028-2.5 8.725-4.704C21.575 14.192 22 13.639 22 12c0-1.64-.425-2.191-1.275-3.296C19.028 6.5 16.182 4 12 4S4.972 6.5 3.275 8.704C2.425 9.81 2 10.361 2 12m10-3.75a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5"
                      fill="currentColor"
                      fill-rule="evenodd"/>
              </svg>
              <svg v-if="!showPassword" height="1em" viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
                <g fill="none">
                  <path d="m3 3l18 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2"/>
                  <path clip-rule="evenodd"
                        d="M5.4 6.23c-.44.33-.843.678-1.21 1.032a15.1 15.1 0 0 0-3.001 4.11a1.44 1.44 0 0 0 0 1.255a15.1 15.1 0 0 0 3 4.111C5.94 18.423 8.518 20 12 20c2.236 0 4.1-.65 5.61-1.562l-3.944-3.943a3 3 0 0 1-4.161-4.161L5.401 6.229zm15.266 9.608a15 15 0 0 0 2.145-3.21a1.44 1.44 0 0 0 0-1.255a15.1 15.1 0 0 0-3-4.111C18.06 5.577 15.483 4 12 4a10.8 10.8 0 0 0-2.808.363z"
                        fill="currentColor"
                        fill-rule="evenodd"/>
                </g>
              </svg>
            </button>
          </div>
          <p v-if="passwordError" class="text-red-500 text-sm">Le mot de passe doit avoir au moins 8 caractères et être
            identique à la confirmation.</p>
        </div>

        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700" for="password_confirmation">Confirmer le mot de
            passe</label>
          <div class="relative">
            <svg class="absolute left-3 top-[40%] text-gray-400" height="1em" viewBox="0 0 24 24" width="1em"
                 xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M17 9V7c0-2.8-2.2-5-5-5S7 4.2 7 7v2c-1.7 0-3 1.3-3 3v7c0 1.7 1.3 3 3 3h10c1.7 0 3-1.3 3-3v-7c0-1.7-1.3-3-3-3M9 7c0-1.7 1.3-3 3-3s3 1.3 3 3v2H9z"
                  fill="currentColor"/>
            </svg>
            <input
                id="password_confirmation"
                v-model="form.password_confirmation"
                :class="{'border-red-500': passwordError}"
                :type="showPasswordConfirmation ? 'text' : 'password'"
                class="mt-1 block w-full border-gray-300 py-2 pl-10 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                required
            />
            <button class="absolute right-3 top-2.5 text-gray-400" type="button" @click="togglePasswordConfirmation">
              <svg v-if="showPasswordConfirmation" height="1em" viewBox="0 0 24 24" width="1em"
                   xmlns="http://www.w3.org/2000/svg">
                <path d="M9.75 12a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0" fill="currentColor"/>
                <path clip-rule="evenodd"
                      d="M2 12c0 1.64.425 2.191 1.275 3.296C4.972 17.5 7.818 20 12 20s7.028-2.5 8.725-4.704C21.575 14.192 22 13.639 22 12c0-1.64-.425-2.191-1.275-3.296C19.028 6.5 16.182 4 12 4S4.972 6.5 3.275 8.704C2.425 9.81 2 10.361 2 12m10-3.75a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5"
                      fill="currentColor"
                      fill-rule="evenodd"/>
              </svg>
              <svg v-if="!showPasswordConfirmation" height="1em" viewBox="0 0 24 24" width="1em"
                   xmlns="http://www.w3.org/2000/svg">
                <g fill="none">
                  <path d="m3 3l18 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2"/>
                  <path clip-rule="evenodd"
                        d="M5.4 6.23c-.44.33-.843.678-1.21 1.032a15.1 15.1 0 0 0-3.001 4.11a1.44 1.44 0 0 0 0 1.255a15.1 15.1 0 0 0 3 4.111C5.94 18.423 8.518 20 12 20c2.236 0 4.1-.65 5.61-1.562l-3.944-3.943a3 3 0 0 1-4.161-4.161L5.401 6.229zm15.266 9.608a15 15 0 0 0 2.145-3.21a1.44 1.44 0 0 0 0-1.255a15.1 15.1 0 0 0-3-4.111C18.06 5.577 15.483 4 12 4a10.8 10.8 0 0 0-2.808.363z"
                        fill="currentColor"
                        fill-rule="evenodd"/>
                </g>
              </svg>
            </button>
          </div>
        </div>

        <button class="w-full bg-blue-500 text-white font-bold py-2 rounded hover:bg-blue-600 transition duration-200"
                type="submit">
          S'inscrire
        </button>

        <p class="mt-4 text-sm text-center">
          Déjà un compte?
          <router-link class="text-blue-500 hover:underline" to="/login">Se connecter</router-link>
        </p>

        <div v-if="errorMessage" class="mt-4 text-red-500 text-center">{{ errorMessage }}</div>
        <input name="_token" type="hidden" value="123456789009876543">
      </form>
    </div>
  </div>

</template>

<script>
import {ref} from 'vue';
import axios from 'axios';
import router from "@/router/index.js";

export default {
  setup() {
    const form = ref({
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
    
    });
    const errorMessage = ref('');
    const nameError = ref(false);
    const emailError = ref(false);
    
    const passwordError = ref(false);
    const showPassword = ref(false);
    const showPasswordConfirmation = ref(false);

    const togglePassword = () => {
      showPassword.value = !showPassword.value;
    };

    const togglePasswordConfirmation = () => {
      showPasswordConfirmation.value = !showPasswordConfirmation.value;
    };

    const validateForm = () => {
      nameError.value = form.value.name.length < 3 || /[^a-zA-Z0-9 ]/.test(form.value.name);
      emailError.value = !validEmail(form.value.email);
     
      passwordError.value = form.value.password.length < 8 || form.value.password !== form.value.password_confirmation;

      return !(nameError.value || emailError.value || passwordError.value);
    };

    const validEmail = (email) => {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(String(email).toLowerCase());
    };

    const register = async () => {
      errorMessage.value = '';
      if (!validateForm()) {
        return;
      }
      try {
        const response = await axios.get(`${BASE_URL}/api/register`, {
          params: form.value,
        });

        sessionStorage.setItem('token', response.data.access_token);
        sessionStorage.setItem('userId', response.data.user.uuid);
        router.push("/Home");
      } catch (error) {
        if (error.response && error.response.data) {
          errorMessage.value = error.response.data.error || 'Erreur lors de l\'inscription';
        }
      }
    };


    return {
      form,
      errorMessage,
      nameError,
      emailError,
      passwordError,
      showPassword,
      showPasswordConfirmation,
      togglePassword,
      togglePasswordConfirmation,
      register,
    };
  },
};
</script>

<style scoped>

</style>
