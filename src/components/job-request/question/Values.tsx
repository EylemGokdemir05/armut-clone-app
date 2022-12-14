import ImageRadioBox from "./ImageRadioBox";
import RadioBox from "./RadioBox";

const Values = ({
  typeId,
  values,
  placeHolder,
  validate,
}: {
  typeId: any;
  values: any;
  placeHolder: any;
  validate: any;
}) => {
  let valuesHTML;

  switch (typeId) {
    case 5:
      valuesHTML = (
        <div className="medium lh-18 type-5">
          {values.map((value: any) => (
            <ImageRadioBox questionValue={value} key={value.id}></ImageRadioBox>
          ))}
        </div>
      );
      break;
    case 6:
      valuesHTML = (
        <div className="medium lh-18 type-6">
          {values.map((value: any) => (
            <RadioBox value={value.value} key={value.id}></RadioBox>
          ))}
        </div>
      );
      break;
    case 8:
      valuesHTML = (
        <textarea placeholder={placeHolder} name="detail" className={!validate.isValid ? "error-input" : ""}></textarea>
      );
      break;
    default:
      valuesHTML = <div>There is no type id!</div>;
  }

  return (
    <div className="values">
      {valuesHTML}
      {!validate.isValid && <p className="error-text">{validate.message}</p>}
    </div>
  );
};

export default Values;
