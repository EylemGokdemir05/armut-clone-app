import RadioBox from "./RadioBox";

const ImageRadioBox = ({ questionValue }: { questionValue: any }) => {
  const { value, valueImageUrl } = questionValue;
  return (
    <label>
      <div className="image-radio-box">
        <div className="image-box">
          <img src={valueImageUrl}></img>
        </div>
        <RadioBox value={value}></RadioBox>
      </div>
    </label>
  );
};

export default ImageRadioBox;
