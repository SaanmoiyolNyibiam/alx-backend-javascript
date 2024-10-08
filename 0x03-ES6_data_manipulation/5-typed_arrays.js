export default function createInt8TypedArray(length, position, value) {
  // validate function input
  if (position >= length) throw new RangeError('Position outside range');
  if (value < -127 || value > 127) throw new RangeError('Value outside range for Int8TypedArray');

  // create the buffer and the typedArray
  const buffer = new ArrayBuffer(length);
  const data = new DataView(buffer);

  // set the value at the specified position
  data.setInt8(position, value);

  return data;
}
