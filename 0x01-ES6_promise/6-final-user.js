import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';
// this is a module that handleProfileSignup function

export default function handleProfileSignup(firstName, lastName, filename) {
  // calls the two imported functions and when settled returns an array
  const newUser = signUpUser(firstName, lastName);
  const newPhoto = uploadPhoto(filename);
  return Promise.allSettled([newUser, newPhoto]).then((res) => res);
}
