import type { SortBy } from "~/types/search";

export const useQuerySearch = () => {
  const store = useSearchStore()
  const router = useRouter()

  const handleQueryParams = (query?: string, page?: number, sort?: SortBy, country?: string) => {
    if (country !== undefined) store.country = country
    if (query !== undefined) store.query = query
    if (page !== undefined) store.page = page
    if (sort) store.sortBy = sort

    router.push({
      query: {
        q: store.query.length === 0 ? undefined : store.query,
        page: store.page === 1 ? undefined : store.page,
        country: store.country === "all" ? undefined : store.country,
        ...(store.sortBy !== "RELEVANCE" && { sort: store.sortBy }),
      }
    })
  }

  return {
    handleQueryParams
  }
}