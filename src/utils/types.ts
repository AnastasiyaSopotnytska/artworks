export interface Artwork {
  artist_id: number,
  id: number,
  image_id: string,
  artist_titles: string,
  category_titles: string,
  style_title?: string,
  department_title: string,
  title: string,
}

export interface Author {
  name: string,
  birth_date: number,
  death_date: number,
}