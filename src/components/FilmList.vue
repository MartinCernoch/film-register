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

const filteredFilms = computed(() => {
	return state.filmList.filter((item: FilmListItem) => {
		return item?.name?.toLowerCase().includes(props.searchQuery)
	})
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

const putFilmToDatabase = (putFilm: FilmListItem) => {
	ApiServices.putItem(putFilm.id, putFilm)
		.catch((error) => {
			console.log(error)
		})
		.finally(() => {
			getFilmList()
			state.editFilmDetail = false
		})
}

const showDetail = (showFilm: FilmListItem) => {
	state.showFilmDetail = true
	state.showFilm = showFilm
}

const toggleModalFalse = () => {
	state.showFilmDetail = false
	state.editFilmDetail = false
}

const toggleEdit = (filmEdit: FilmListItem) => {
	state.showFilmDetail = false
	state.editFilmDetail = true
	state.editFilm = filmEdit
}

getFilmList()
</script>

<template>
	<FilmDetail
		v-if="state.showFilmDetail"
		:film="state.showFilm"
		v-on:hide="toggleModalFalse"
		v-on:edit="toggleEdit($event)"
	/>
	<FilmEdit
		v-if="state.editFilmDetail"
		:film="state.editFilm"
		v-on:hide="toggleModalFalse"
		v-on:save="putFilmToDatabase($event)"
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
