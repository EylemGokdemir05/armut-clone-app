import ImageRadioBox from "./ImageRadioBox";
import RadioBox from "./RadioBox";

const Values = ({ typeId, values, placeHolder }: { typeId: any; values: any; placeHolder: any }) => {
  let valuesHTML;

  console.log("values: ", values);

  switch (typeId) {
    case 5:
      valuesHTML = (
        <div className="values medium lh-18 type-5">
          {values.map((value: any) => (
            <ImageRadioBox questionValue={value} key={value.id}></ImageRadioBox>
          ))}
        </div>
      );
      break;
    case 6:
      valuesHTML = (
        <div className="values medium lh-18 type-6">
          {values.map((value: any) => (
            <RadioBox value={value.value} key={value.id}></RadioBox>
          ))}
        </div>
      );
      break;
    case 8:
      valuesHTML = (
        <div className="values medium lh-22 type-8">
          <textarea placeholder={placeHolder} name="detail"></textarea>
        </div>
      );
      break;
    default:
      valuesHTML = <div>Default</div>;
  }
  return <>{valuesHTML}</>;
};

export default Values;
