export const addAnswer = (setAnswers: any, answer: any, label: any) => {
  setAnswers((prevAnswers: any) => [...prevAnswers, { question: label, answer }]);
};

export const getCheckedRadioValue = () => {
  return document.querySelector('input[type="radio"]:checked')
    ? (document.querySelector('input[type="radio"]:checked') as HTMLInputElement)!.value
    : null;
};

const getDetail = () => {
  return document.querySelector("textarea")!.value ? document.querySelector("textarea")!.value : null;
};

export const takeAnswerValue = (questionType: number) => {
  console.log("questionType: ", questionType);
  switch (questionType) {
    case 5:
    case 6:
      return getCheckedRadioValue();
    case 8:
      return getDetail();
    default:
      return null;
  }
};

export const validateAnswer = (answer: any, required: any) => {
  if (required && !answer) {
    return { isValid: false, message: "Bu alan zorunlu" };
  }
  return { isValid: true };
};
