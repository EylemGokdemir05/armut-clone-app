import ImageRadioBox from "./ImageRadioBox";

const Values = ({ values }: { values: any }) => {
  return (
    <div className="values medium lh-18 type-5">
      {values.map((value: any) => (
        <ImageRadioBox questionValue={value} key={value.id}></ImageRadioBox>
      ))}
    </div>
  );
};

export default Values;
