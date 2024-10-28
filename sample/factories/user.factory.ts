import { Faker } from '@faker-js/faker'
import { define } from '../../src/typeorm-seeding'
import { User } from '../entities/User.entity'

define(User, (faker: Faker) => {
  const gender = faker.number.int(1) === 0 ? 'male' : 'female';
  const firstName = faker.person.firstName(gender)
  const lastName = faker.person.lastName(gender)
  const email = faker.internet.email({ firstName, lastName })

  const user = new User()
  user.firstName = firstName
  user.lastName = lastName
  user.middleName = null
  user.email = email
  user.password = faker.internet.password();
  return user
})
