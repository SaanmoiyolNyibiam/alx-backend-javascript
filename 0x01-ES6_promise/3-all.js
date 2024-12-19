import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  // handle first promist
  const promise1 = uploadPhoto();
  promise1.then((result) => {
    process.stdout.write(result.body);
  }).catch(() => {
    console.log('Signup system offline');
  });

  // handle second promise
  const promise2 = createUser();
  promise2.then((result) => {
    console.log(` ${result.firstName} ${result.lastName}`);
  }).catch(() => {
    console.log('Signup system offline');
  });
}
