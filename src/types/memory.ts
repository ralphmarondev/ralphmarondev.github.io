export interface Memory {
  id: string
  image: string
  title: string
  date: string
  isFavorite: boolean
  images: string[]
  videos: string[]
  description?: string
  location?: string
  tags?: string[]
  year?: string
  isDeleted?: boolean
}