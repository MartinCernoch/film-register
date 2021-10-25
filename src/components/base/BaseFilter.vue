<script setup lang="ts">
const emit = defineEmits<{
	(e: 'change', searchQuery: string): void
}>()

const searchQuery = (event: any) => {
	emit('change', event.target.value)
}
</script>

<template>
	<form class="relative">
		<svg
			width="20"
			height="20"
			class="
				absolute
				left-3
				top-1/2
				transform
				-translate-y-1/2
				fill-current
				text-gray-400
			"
		>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
			/>
		</svg>
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
				py-2
				pl-10
			"
			@keyup="searchQuery"
			type="text"
			aria-label="Filter by name"
			placeholder="Filter by name"
		/>
	</form>
</template>

<style></style>
