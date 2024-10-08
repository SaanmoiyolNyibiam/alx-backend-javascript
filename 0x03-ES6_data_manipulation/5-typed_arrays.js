export default function createInt8TypedArray(length, position, value) {
  if (position >= length) throw new RangeError('Position outside range');
  if (value < -127 || value > 127) throw new RangeError('Value outside range for Int8TypedArray');
  const newTypedArray = new Int8Array(length);
  newTypedArray[position] = value;

  return newTypedArray.buffer;
}
