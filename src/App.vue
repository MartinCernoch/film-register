<script setup lang="ts">
import { ref } from 'vue'

import FilmList from './components/FilmList.vue'
import MyHeader from './components/MyHeader.vue'

let searchQuery = ref('')

const eBus = (e: string) => (searchQuery.value = e)
</script>

<template>
	<MyHeader v-on:change="eBus($event)" />
	<FilmList :searchQuery="searchQuery" />
</template>
