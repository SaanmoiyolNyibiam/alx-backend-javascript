export default function getListStudentIds(objsArray) {
  if (!Array.isArray(objsArray)) return [];

  return (objsArray.map((item) => item.id));
}
