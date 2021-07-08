import groupArrayElements from "../src/groupArrayEls";

test("returns an empty array", () => {
  expect(groupArrayElements()).toStrictEqual([]);
});
