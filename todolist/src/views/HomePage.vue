<template>
    <div class="flex flex-col min-h-screen">
      <header class="bg-white shadow-md sticky top-0 z-50">
        <div class="container mx-auto px-4 py-4 flex justify-between items-center bg-gray-900">
          <div class="flex items-center space-x-4">
            <a href="/home"><h1 class="text-2xl font-bold text-blue-600">Marinos</h1></a>
          </div>
          <nav class="hidden md:flex space-x-4 text-white">
            <router-link to="/" class="hover:text-blue-600">ACCUEIL</router-link>
            <router-link to="/Login" class="hover:text-blue-600 rounded">Connexion</router-link>
            <router-link to="/Todo" class="hover:text-blue-600 rounded">CREATE TODO</router-link>
            <router-link to="/logout" class="hover:text-blue-600 rounded">LOGOUT</router-link>
          </nav>
          
        </div>
      </header>
 
  
    </div>

  
  </template>
  
  <script setup>

  </script>