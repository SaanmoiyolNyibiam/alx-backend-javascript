import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';
// this is a module that handleProfileSignup function

export default function handleProfileSignup(firstName, lastName, filename) {
  // calls the two imported functions and when settled returns an array
  const newUser = signUpUser(firstName, lastName);
  const newPhoto = uploadPhoto(filename);

  return Promise.allSettled([newUser, newPhoto]).then((res) => {
    const result = [];
    res.forEach((idv) => {
      if (idv.status === 'fulfilled') {
        result.push({ status: idv.status, value: idv.value });
      } else {
        result.push({ status: idv.status, value: `${idv.reason}` });
      }
    });
    return result;
  });
}
