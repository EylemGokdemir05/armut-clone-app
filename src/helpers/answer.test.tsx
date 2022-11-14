import { validateAnswer, getMeaninglessAnswer } from "./answer";

test("validate answer required", () => {
  expect(validateAnswer("", true)).toEqual({
    isValid: false,
    message: "Bu alan zorunlu",
  });

  expect(validateAnswer("deneme", true)).toEqual({
    isValid: true,
  });

  expect(validateAnswer("deneme", false)).toEqual({
    isValid: true,
  });

  expect(validateAnswer("", false)).toEqual({
    isValid: true,
  });
});

test("get meaningless answer", () => {
  expect(getMeaninglessAnswer("asdasd ase asdsa ead")).toBeTruthy();

  expect(
    getMeaninglessAnswer(
      "Evimizin bahçe kapısını değiştirmek istiyoruz. Eskidiği için artık paslandı ve kırıklar oluştu"
    )
  ).toBeFalsy();

  expect("selaaaam, işin hızlı yapılması çoooookkk önemli").toBeTruthy();
});
