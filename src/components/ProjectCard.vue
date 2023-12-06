<template>
    <div class="max-w-md mx-auto bg-white shadow-lg overflow-hidden rounded-md transition-transform hover:scale-105">
      <img :src="project.image" alt="Project Image" class="w-full h-40 object-cover">
      <div class="p-4">
        <h2 class="text-xl font-semibold mb-2">{{ project.title }}</h2>
        <p class="text-gray-600">{{ project.description }}</p>
  
        <div class="flex mt-4">
          <div v-for="tool in project.tools" :key="tool" class="mr-2 flex items-center">
            <div class="w-3 h-3 bg-blue-500 rounded-full mr-1"></div>
            <p class="text-xs text-gray-600">{{ tool }}</p>
          </div>
        </div>
  
        <button class="btn mt-4">View Project</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      project: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add scoped styles as needed */
  </style>
  