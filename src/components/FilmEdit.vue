<script setup lang="ts">
import { FilmListItem } from '../types'
import ApiServices from '../services/ApiServices'

const props = defineProps<{
	film: FilmListItem
}>()

const film: FilmListItem = props.film

const emit = defineEmits<{
	(e: 'hide'): void
}>()

const toggleModal = () => {
	emit('hide')
}

const changeToArray = (e: string) => e.split(',').map((e: string) => e.trim())

const changeActors = (event: any) => {
	film.actors = changeToArray(event.target.value)
}

const putFilmList = (id: any) => {
	ApiServices.putItem(id, film)
		.then(() => toggleModal())
		.catch((error) => {
			console.log(error)
		})
}
</script>

<template>
	<div
		@click.self="toggleModal"
		class="
			fixed
			top-0
			left-0
			z-50
			bg-dark-400 bg-opacity-95
			w-full
			h-full
			flex
			justify-center
			pt-8
			pb-18
		"
	>
		<div
			class="
				bg-white
				w-full
				md:w-4/5
				lg:w-3/5
				xl:w-1/2
				overflow-auto
				relative
				rounded-t-lg
			"
		>
			<header
				class="
					w-full
					p-4
					text-xl text-white
					font-bold
					bg-teal-900
					flex
					justify-between
				"
			>
				<h1>Film name:</h1>
				<input
					type="text"
					class="text-teal-900"
					:placeholder="film.name"
					v-model="film.name"
				/>
				<div class="hover:cursor-pointer px-2" @click="toggleModal">X</div>
			</header>
			<main class="flex items-stretch">
				<div class="flex-none h-full text-teal-900 p-4 pr-8">
					<div>
						<span class="font-bold block">Release date:</span>
						<span>{{ film['release-date'] || film.year }}</span>
						<input
							type="date"
							name="trip-start"
							v-model="film['release-date']"
							min="1900-01-01"
							max="2100-12-31"
							class="block"
						/>
						<input
							type="number"
							min="1900"
							max="2100"
							v-model.number="film.year"
							class="block"
						/>
					</div>
					<div class="pt-4">
						<span class="font-bold block">Film length:</span>
						<span>{{ film.runtime + ' minutes' }}</span>
					</div>
					<div class="pt-4">
						<span class="font-bold block">Categories:</span>
						<span v-for="categorie in film.categories" class="block">{{
							categorie
						}}</span>
					</div>
					<div class="pt-4">
						<span class="font-bold block">Director:</span>
						<span>{{ film.director }}</span>
					</div>
					<div class="pt-4">
						<span class="font-bold block">Writer/Writers:</span>
						<span v-if="Array.isArray(film.writer)">
							<span v-for="writer in film.writer" class="block">
								{{ writer }}
							</span>
						</span>
						<span v-else name="single">
							{{ film.writer }}
						</span>
					</div>
				</div>
				<div class="p-4">
					<div>
						{{
							film.description ||
							film.storyline ||
							'Missing description of the film.'
						}}
					</div>
					<div class="pt-4">
						<span class="font-bold block text-teal-900">Actors:</span>
						<span v-for="actor in film.actors" class="block">{{ actor }}</span>
						<textarea name="" id="" cols="50" rows="3" @keyup="changeActors">{{
							film.actors.join(', ')
						}}</textarea>
					</div>
				</div>
			</main>
			<footer
				@click="putFilmList(film.id)"
				class="
					hover:cursor-pointer
					w-full
					md:w-4/5
					lg:w-3/5
					xl:w-1/2
					font-bold
					fixed
					bottom-8
					text-center
					py-2
					border-t-2 border-red-500
					bg-red-200
					rounded-b-lg
				"
			>
				SAVE
			</footer>
		</div>
	</div>
</template>

<style></style>
