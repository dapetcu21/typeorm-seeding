import { Faker } from '@faker-js/faker'
import { define, factory } from '../../src/typeorm-seeding'
import { Pet } from '../entities/Pet.entity'
import { User } from '../entities/User.entity'

define(Pet, (faker: Faker) => {
  const gender = faker.number.int(1) === 0 ? 'male' : 'female'
  const name = faker.person.firstName(gender)

  const pet = new Pet()
  pet.name = name
  pet.age = faker.number.int()
  pet.user = factory(User)({ roles: ['admin'] }) as any
  return pet
})
