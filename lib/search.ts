import type { SortBy } from "~/types/search"
import type { User } from "~/types/user"
import { slugify } from "./util"

const SEED = 12345
const COLS = 3
const ROWS = 4
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

export const getCountries = () => {
  const countries = new Set(users.value.map(user => user.location.country))
  return Array.from(countries).sort()
}

const paginate = (users: User[], page = 1) => {
  const start = (page - 1) * PAGESIZE
  return users.slice(start, start + PAGESIZE)
}

export const searchBy = async (page = 1, q: string, sortBy: SortBy, country: string) => {
  const filtered = users.value.filter(user => {
    const matchesSearch =
      user.name.first.toLowerCase().includes(q.toLowerCase()) ||
      user.name.last.toLowerCase().includes(q.toLowerCase()) ||
      user.email.toLowerCase().includes(q.toLowerCase())

    const matchesCountry =
      country === 'all' ||
      slugify(user.location.country) === country

    return matchesSearch && matchesCountry
  })

  if (sortBy === 'ASC') {
    filtered.sort((a, b) =>
      `${a.name.first} ${a.name.last}`.localeCompare(
        `${b.name.first} ${b.name.last}`
      )
    )
  }

  if (sortBy === 'DESC') {
    filtered.sort((a, b) =>
      `${b.name.first} ${b.name.last}`.localeCompare(
        `${a.name.first} ${a.name.last}`
      )
    )
  }

  const paginated = paginate(filtered, page)
  return { users: paginated, total: filtered.length }
}