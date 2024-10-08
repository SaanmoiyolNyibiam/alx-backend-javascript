export default function createInt8TypedArray(length, position, value) {
    if (position >= length) throw new RangeError('Position outside range');
    const newTypedArray = new Int8Array(length);
    newTypedArray[position] = value;

    return newTypedArray;
}