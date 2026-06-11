import type { SortBy } from "~/types/search"
import type { User } from "~/types/user"

const SEED = 12345
const COLS = 3
const ROWS = 2
export const RESULTS = 100
export const PAGESIZE = COLS * ROWS
export const users = ref<User[]>([])
export const pages = ref(0)

export const initialResultsSearch = async () => {
  const results = await fetchUsers()
  users.value.push(...results)
  pages.value = Math.ceil(results.length / PAGESIZE)
  console.log("Fetching initial data", results)
}

const fetchUsers = async () => {
  const endpoint = `https://randomuser.me/api/?results=${RESULTS}&noinfo&exc=login&seed=${SEED}`
  const res = await fetch(endpoint)
  const data = await res.json()
  return data.results as User[]
}

const paginate = (users: User[], page = 1) => {
  const start = (page - 1) * PAGESIZE
  return users.slice(start, start + PAGESIZE)
}

export const searchBy = async (page = 1, q: string, sortBy: SortBy) => {
  console.log({ page, q, sortBy, users: users.value })

  const filtered = users.value.filter(user =>
    user.name.first.toLowerCase().includes(q.toLowerCase()) ||
    user.name.last.toLowerCase().includes(q.toLowerCase()) ||
    user.email.toLowerCase().includes(q.toLowerCase())
  )

  const paginated = paginate(filtered, page)
  return paginated
}