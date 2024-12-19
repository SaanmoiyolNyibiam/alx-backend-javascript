import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  // handle first promist
  const promise1 = await uploadPhoto().catch(() => {
    console.log('Signup system offline');
  });
  process.stdout.write(promise1.body);

  // handle second promise
  const promise2 = await createUser().catch(() => {
    console.log('Signup system offline');
  });
  console.log(` ${promise2.firstName} ${promise2.lastName}`);
}
