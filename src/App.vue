<script setup lang="ts">
import { reactive } from 'vue'

import FilmList from './components/FilmList.vue'
import MyHeader from './components/MyHeader.vue'

const state = reactive({
	searchQuery: '',
})

const eBus = (e: string) => (state.searchQuery = e)
</script>

<template>
	<MyHeader v-on:change="eBus($event)" />
	<FilmList :searchQuery="state.searchQuery" />
</template>
