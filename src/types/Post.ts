export default interface Post {
  id: number
  avatar: string
  by: string
  at: string
  ageCountTitle?: string
  ageCount?: string
  location?: string
  with?: string
  content: string
  images?: string[]
  reaction?: number
  comments?: never[]
  canComment?: boolean
  countUpText?: string
  countUp?: string
}
