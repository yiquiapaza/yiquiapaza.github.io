export interface publication {
  title: string
  event: string
  authors: string[]
  image: string
  year: number
  doi: string
  url: string
  pdf: string
  video: string
  alt: string
  acronym: string
}

export interface metadata {
  author: string
  title: string
  description: string
  image: string
  url: string
  photo: string
}

export interface link {
  href: string
  text: string
}
