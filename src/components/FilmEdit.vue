<script setup lang="ts">
import { FilmListItem } from '../types'

const props = defineProps<{
	film: FilmListItem
}>()

const film: FilmListItem = { ...props.film }

const emit = defineEmits<{
	(e: 'hide', filmToPut?: FilmListItem): void
}>()

const toggleModal = () => {
	emit('hide')
}

const togglePut = () => {
	emit('hide', film)
}

const changeToArray = (e: string) => e.split(',').map((e: string) => e.trim())

const changeActors = (event: any) => {
	film.actors = changeToArray(event.target.value)
}
const changeWriters = (event: any) => {
	film.writer = changeToArray(event.target.value)
}
const changeCategories = (event: any) => {
	film.categories = changeToArray(event.target.value)
}
</script>

<template>
	<div
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
			<div
				class="
					hover:cursor-pointer
					rounded-full
					px-2
					pb-1
					fixed
					top-4
					left-1/2
					-ml-8
					w-16
					h-8
					text-xl
					font-bold
					text-center
					bg-teal-900
					text-white
				"
				title="Close"
				@click="toggleModal"
			>
				X
			</div>
			<div class="p-4 md:px-6 pb-2">
				<label
					class="text-teal-900 text-sm bg-white font-semibold"
					for="filmName"
				>
					Film name
				</label>
				<input
					class="
						focus:border-teal-500
						focus:ring-1
						focus:ring-teal-500
						focus:outline-none
						w-full
						text-sm text-black
						border border-teal-200
						rounded-md
						py-1
						pl-2
					"
					type="text"
					v-model="film.name"
					id="filmName"
				/>
			</div>
			<div class="px-4 md:px-6 pb-2" v-if="film.storyline">
				<label
					class="text-teal-900 text-sm bg-white font-semibold"
					for="filmStoryLine"
				>
					Film storyline
				</label>
				<textarea
					class="
						focus:border-teal-500
						focus:ring-1
						focus:ring-teal-500
						focus:outline-none
						w-full
						text-sm text-black
						border border-teal-200
						rounded-md
						py-1
						pl-2
					"
					rows="3"
					type="text"
					v-model="film.storyline"
					id="filmStoryLine"
				></textarea>
			</div>
			<div class="px-4 md:px-6 pb-2" v-if="film.description">
				<label
					class="text-teal-900 text-sm bg-white font-semibold"
					for="filmDesc"
				>
					Film description
				</label>
				<textarea
					class="
						focus:border-teal-500
						focus:ring-1
						focus:ring-teal-500
						focus:outline-none
						w-full
						text-sm text-black
						border border-teal-200
						rounded-md
						py-1
						pl-2
					"
					rows="3"
					type="text"
					v-model="film.description"
					id="filmDesc"
				></textarea>
			</div>
			<div
				v-if="!(film.storyline || film.description)"
				class="p-4 md:px-6 pt-3 bg-white text-teal-900 text-sm font-semibold"
			>
				Missing description or storyline of the film.
			</div>
			<div class="px-4 md:px-6 pb-2">
				<label
					class="text-teal-900 text-sm bg-white font-semibold"
					for="filmCategories"
				>
					Categories (separate by a comma)
				</label>
				<textarea
					class="
						focus:border-teal-500
						focus:ring-1
						focus:ring-teal-500
						focus:outline-none
						w-full
						text-sm text-black
						border border-teal-200
						rounded-md
						py-1
						pl-2
					"
					rows="1"
					type="text"
					@keyup="changeCategories"
					id="filmCategories"
					>{{ film.categories.join(', ') }}</textarea
				>
			</div>
			<div class="px-4 md:px-6 pb-2">
				<label
					class="text-teal-900 text-sm bg-white font-semibold"
					for="filmActors"
				>
					Actors (separate by a comma)
				</label>
				<textarea
					class="
						focus:border-teal-500
						focus:ring-1
						focus:ring-teal-500
						focus:outline-none
						w-full
						text-sm text-black
						border border-teal-200
						rounded-md
						py-1
						pl-2
					"
					rows="2"
					type="text"
					@keyup="changeActors"
					id="filmActors"
					>{{ film.actors.join(', ') }}</textarea
				>
			</div>
			<div class="px-4 md:px-6 pb-2" v-if="Array.isArray(film.writer)">
				<label
					class="text-teal-900 text-sm bg-white font-semibold"
					for="filmWrite"
				>
					Writers (separate by a comma)
				</label>
				<textarea
					class="
						focus:border-teal-500
						focus:ring-1
						focus:ring-teal-500
						focus:outline-none
						w-full
						text-sm text-black
						border border-teal-200
						rounded-md
						py-1
						pl-2
					"
					rows="1"
					type="text"
					@keyup="changeWriters"
					id="filmWrite"
					>{{ film.writer.join(', ') }}</textarea
				>
			</div>
			<div class="px-4 md:px-6 pb-2" v-else>
				<label
					class="text-teal-900 text-sm bg-white font-semibold"
					for="filmWrite"
				>
					Writer
				</label>
				<input
					class="
						focus:border-teal-500
						focus:ring-1
						focus:ring-teal-500
						focus:outline-none
						w-full
						text-sm text-black
						border border-teal-200
						rounded-md
						py-1
						pl-2
					"
					type="text"
					v-model="film.writer"
					id="filmWrite"
				/>
			</div>
			<div class="px-4 md:px-6 pb-2">
				<label
					class="text-teal-900 text-sm bg-white font-semibold"
					for="filmDirector"
				>
					Director
				</label>
				<input
					class="
						focus:border-teal-500
						focus:ring-1
						focus:ring-teal-500
						focus:outline-none
						w-full
						text-sm text-black
						border border-teal-200
						rounded-md
						py-1
						pl-2
					"
					type="text"
					v-model="film.director"
					id="filmDirector"
				/>
			</div>
			<div class="px-4 md:px-6 pb-2 flex gap-4">
				<div class="flex-1">
					<label
						class="text-teal-900 text-sm bg-white font-semibold"
						for="filmRelease"
					>
						Release date
					</label>
					<input
						class="
							focus:border-teal-500
							focus:ring-1
							focus:ring-teal-500
							focus:outline-none
							w-full
							text-sm text-black
							border border-teal-200
							rounded-md
							py-1
							pl-2
						"
						type="date"
						v-model="film['release-date']"
						min="1900-01-01"
						max="2100-12-31"
						id="filmRelease"
					/>
				</div>
				<div class="flex-1">
					<label
						class="text-teal-900 text-sm bg-white font-semibold"
						for="filmYear"
					>
						Year
					</label>
					<input
						class="
							focus:border-teal-500
							focus:ring-1
							focus:ring-teal-500
							focus:outline-none
							w-full
							text-sm text-black
							border border-teal-200
							rounded-md
							py-1
							pl-2
						"
						type="number"
						min="1900"
						max="2100"
						v-model.number="film.year"
						id="filmYear"
					/>
				</div>
			</div>
			<div class="px-4 md:px-6 pb-2">
				<label
					class="text-teal-900 text-sm bg-white font-semibold"
					for="filmLength"
				>
					Film length (in minutes)
				</label>
				<input
					class="
						focus:border-teal-500
						focus:ring-1
						focus:ring-teal-500
						focus:outline-none
						w-full
						text-sm text-black
						border border-teal-200
						rounded-md
						py-1
						pl-2
					"
					type="number"
					min="1"
					max="500"
					v-model="film.runtime"
					id="filmLength"
				/>
			</div>
			<footer
				@click="togglePut"
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
				title="Save and close"
			>
				SAVE
			</footer>
		</div>
	</div>
</template>

<style></style>
