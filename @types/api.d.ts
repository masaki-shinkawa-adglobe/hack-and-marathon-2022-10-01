type Anime = {
  id: number
  rank: number
  title: string
  twitter_account: string
  twitter_image: string
  images: string[]
}

type AnimeDetail = {
  id: number
  rank: number
  title: string
  twitter_account: string
  twitter_image: string
  official_url: string
  location: string
  images: string[]
}

type Season = {
  year: number
  n: number
}
