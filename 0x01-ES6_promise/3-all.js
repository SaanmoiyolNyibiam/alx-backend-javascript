import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  // handle first promist
  const photo = uploadPhoto();
  const user = createUser();

  return Promise.all([photo, user]).then((result) => {
    console.log(`${result[0].body} ${result[1].firstName} ${result[1].lastName}`);
  }).catch(() => {
    console.log('Signup system offline');
  });
}
