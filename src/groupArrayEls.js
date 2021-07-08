const groupArrayElements = (array, n) => {
  if (!array || !n) {
    throw "Both 'array' and 'n' arguments are required";
  }
  if (Number.isNaN(n) || !Number.isInteger(n) || n < 1) {
    throw "n must be a positive integer";
  }
  if (!Array.isArray(array)) {
    throw "'array' must be an array";
  }
  const result = [];
  const groupSize = Math.ceil(array.length / n);
    for (let i = 0; i < array.length; i += groupSize) {
      result.push(array.slice(i, i + groupSize));
    }
  return result;
};

export default groupArrayElements;
