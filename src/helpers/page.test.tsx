import { checkIsLastPage, calculateWidthOfProgress } from "./page";

test("check is last page", () => {
  expect(checkIsLastPage(2, 3)).toBeFalsy();

  expect(checkIsLastPage(3, 3)).toBeTruthy();

  expect(checkIsLastPage(5, 4)).toBeFalsy();
});

test("calculate width of progress", () => {
  expect(calculateWidthOfProgress(1, 3)).toBe(33);

  expect(calculateWidthOfProgress(4, 5)).toBe(80);

  expect(calculateWidthOfProgress(3, 3)).toBe(100);

  expect(calculateWidthOfProgress(0, 5)).toBe(0);
});
