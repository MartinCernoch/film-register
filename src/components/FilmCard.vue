<script setup lang="ts">
import { FilmListItem } from '../types'

const props = defineProps<{
	film: FilmListItem
}>()

const film: FilmListItem = props.film
</script>

<template>
	<figure
		class="
			rounded-lg
			p-4
			pb-18
			@sm:pb-12
			lg:pb-12
			border-teal-500 border
			relative
			hover:bg-teal-900
			text-gray-900
			hover:text-emerald-50
			cursor-pointer
		"
		title="Film detail"
	>
		<h1 class="w-full text-xl font-bold">{{ film.name }}</h1>
		<div class="pt-4 text-left space-y-4">
			{{
				film.storyline || film.description || 'Missing description of the film.'
			}}
		</div>
		<figcaption
			class="
				-ml-4
				pl-4
				pr-10
				w-full
				font-medium
				absolute
				bottom-2
				flex-wrap
				@sm:flex
				lg:flex
			"
		>
			<div class="text-teal-500 flex-1">
				Film length: {{ film.runtime }} minutes
			</div>
			<div class="text-teal-500 flex-1">
				Release date: {{ film['release-date'] }}
			</div>
		</figcaption>
		<div class="font-bold absolute bottom-2 right-0 pr-4">...</div>
	</figure>
</template>

<style></style>
