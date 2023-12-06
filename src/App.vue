<script setup>

import Navbar from "./components/Header/Navbar.vue";
</script>

<template>

  <Navbar></Navbar>
  <!-- <router-link to="/">Home</router-link> |
  <router-link to="/About">About</router-link> |
  <router-link to="/Skills">Skills</router-link> |
  <router-link to="/Project">Project</router-link> |
  <router-link to="/Contact">Contact</router-link> -->
  <router-view></router-view>
</template>

<style lang=""></style>
