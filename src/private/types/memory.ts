export interface Memory {
	id: string
	title: string
	date: string
	isFavorite: boolean
	images: string[]
	videos: string[]
	description?: string
	location?: string
	tags?: string[]
	year?: string
	isDeleted?: boolean,
	createdAt?: string,
	updatedAt?: string
}