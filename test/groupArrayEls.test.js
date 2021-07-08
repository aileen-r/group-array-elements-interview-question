import groupArrayElements from "../src/groupArrayEls";

const testInputArray = [1, 2, 3, 4, 5];
const testOutputArray = [[1, 2], [3, 4], [5]];

describe("input validation", () => {
  test("throws if N is not a positive integer", () => {
    expect(() => {
      groupArrayElements(testInputArray, -1);
    }).toThrow("n must be a positive integer");
    expect(() => {
      groupArrayElements(testInputArray, 2.5);
    }).toThrow("n must be a positive integer");
  });

  test("throws if 'array' is not an array", () => {
    expect(() => {
      groupArrayElements("iAmNotAnArray", 4);
    }).toThrow("'array' must be an array");
  });

  test("throws if any method arguements are missing", () => {
    expect(() => {
      groupArrayElements(testInputArray);
    }).toThrow("Both 'array' and 'n' arguments are required");
    expect(() => {
      groupArrayElements();
    }).toThrow("Both 'array' and 'n' arguments are required");
  });
});

describe("expected outputs", () => {
  test("returns empty array if array length is 0", () => {
    expect(groupArrayElements([], 5)).toStrictEqual([]);
  });
  test("splits array according to example provided", () => {
    expect(groupArrayElements(testInputArray, 3)).toStrictEqual(
      testOutputArray
    );
  });
  test("another split test", () => {
    expect(groupArrayElements([1, 2, 3, 4, 5, 6], 2)).toStrictEqual([
      [1, 2, 3],
      [4, 5, 6],
    ]);
  });
});
