export interface PageMetaType {
  page: number
  take: number
  itemsCount: number
  pageCount: number
  hasPreviousPage: boolean
  hasNextPage: boolean
}

export interface PageType<T> {
  data: T[]
  meta: PageMetaType
}
