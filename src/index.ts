import { createConnection, Connection } from 'typeorm';
import { User } from './entities/User';

async function test() {
  const connection: Connection = await createConnection();
  await connection.synchronize();

  const repository = connection.getRepository(User);

  const user = new User();
  user.firstName = 'Timber';
  user.lastName = 'Saw';
  user.age = 25;

  await repository.save(user);

  const allUsers = await repository.find();
  console.log(allUsers);
  const firstUser = await repository.findOne(1); // find by id
  console.log(firstUser);
  const timber = await repository.findOne({
    firstName: 'Timber',
    lastName: 'Saw'
  });

  // await repository.remove(timber);
}

test();
