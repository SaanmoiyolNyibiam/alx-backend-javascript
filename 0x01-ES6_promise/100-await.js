import { uploadPhoto, createUser } from './utils';
// this is a module that defines an asyncUploadUser function

export default async function asyncUploadUser() {
  try {
    const newPhoto = await uploadPhoto();
    const newUser = await createUser();
    return {
      photo: newPhoto,
      user: newUser,
    };
  } catch (error) {
    return {
      photo: null,
      user: null,
    };
  }
}
