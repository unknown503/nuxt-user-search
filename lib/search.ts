import type { SortBy } from "~/types/search"
import type { User } from "~/types/user"

const RESULTS = 100
const SEED = 12345
const PAGESIZE = 21

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
  console.log({page,q,sortBy})
  const results = await fetchUsers()

  const filtered = results.filter(user =>
    user.name.first.toLowerCase().includes(q.toLowerCase())||
    user.name.last.toLowerCase().includes(q.toLowerCase())||
    user.email.toLowerCase().includes(q.toLowerCase())
  )

  const paginated = paginate(filtered, page)
  return paginated
}