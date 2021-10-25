<script setup lang="ts">
import { reactive, computed } from 'vue'
import { FilmListItem } from '../types'

import ApiServices from '../services/ApiServices'
import FilmCard from './FilmCard.vue'
import FilmDetail from './FilmDetail.vue'
import FilmEdit from './FilmEdit.vue'

const props = defineProps<{
	searchQuery: string
}>()

const state = reactive({
	filmList: [] as FilmListItem[],
	showFilmDetail: false,
	showFilm: {} as FilmListItem,
	editFilmDetail: false,
	editFilm: {} as FilmListItem,
})

const getFilmList = () => {
	ApiServices.getList()
		.then((response) => {
			state.filmList = response.data
		})
		.catch((error) => {
			console.log(error)
		})
}

const filteredFilms = computed(() => {
	return state.filmList.filter((item: FilmListItem) => {
		return item?.name?.toLowerCase().includes(props.searchQuery)
	})
})

const showDetail = (showFilm: FilmListItem) => {
	state.showFilmDetail = !state.showFilmDetail
	state.showFilm = showFilm
}

const toggleModal = (filmEdit: FilmListItem | undefined) => {
	state.showFilmDetail = false
	state.editFilmDetail = false
	if (filmEdit !== undefined) {
		state.editFilmDetail = !state.editFilmDetail
		state.editFilm = filmEdit
	}
}

getFilmList()
</script>

<template>
	<FilmDetail
		v-if="state.showFilmDetail"
		:film="state.showFilm"
		v-on:hide="toggleModal($event)"
	/>
	<FilmEdit
		v-if="state.editFilmDetail"
		:film="state.editFilm"
		v-on:hide="toggleModal($event)"
	/>

	<main class="p-4 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4">
		<FilmCard
			v-for="film in filteredFilms"
			:key="film.id"
			:film="film"
			@click="showDetail(film)"
		/>
	</main>
</template>

<style></style>
