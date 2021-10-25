<script setup lang="ts">
import BaseFilter from './base/BaseFilter.vue'

const emit = defineEmits<{
	(e: 'change', searchQuery: string): void
}>()

const eBus = (event: string) => {
	emit('change', event)
}
</script>

<template>
	<header class="text-2xl p-4 flex flex-wrap">
		<h1 class="text-teal-500 w-full pb-4">Film register</h1>
		<BaseFilter v-on:change="eBus($event)" class="w-full" />
	</header>
</template>

<style></style>
