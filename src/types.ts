export interface FilmListItem {
	id: number
	name: string
	year: number
	runtime: number
	categories: string[]
	'release-date': string
	director: string
	writer: string | string[]
	actors: string[]
	storyline: string
	description: string
}
