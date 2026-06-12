import type { SortBy } from "~/types/search";

export const useQuerySearch = () => {
  const store = useSearchStore()
  const router = useRouter()

  console.log(123)

  const handleQueryParams = (query?: string, page?: number, sort?: SortBy) => {
    if (query !== undefined) store.query = query
    if (page !== undefined) store.page = page
    if (sort) store.sortBy = sort

    router.push({
      query: {
        q: store.query.length === 0 ? undefined : store.query,
        page: store.page === 1 ? undefined : store.page,
        ...(store.sortBy !== "RELEVANCE" && { sort: store.sortBy })
      }
    })
  }

  return {
    handleQueryParams
  }
}