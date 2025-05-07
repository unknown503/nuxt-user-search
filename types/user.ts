export type User = {
  gender: string
  name: Name
  location: Location
  email: string
  dob: Dob
  registered: Registered
  phone: string
  cell: string
  id: Id
  picture: Picture
  nat: string
}

type Name = {
  title: string
  first: string
  last: string
}

type Location = {
  street: Street
  city: string
  state: string
  country: string
  postcode: number
  coordinates: Coordinates
  timezone: Timezone
}

type Street = {
  number: number
  name: string
}

type Coordinates = {
  latitude: string
  longitude: string
}

type Timezone = {
  offset: string
  description: string
}

type Dob = {
  date: string
  age: number
}

type Registered = {
  date: string
  age: number
}

type Id = {
  name: string
  value: string
}

type Picture = {
  large: string
  medium: string
  thumbnail: string
}
