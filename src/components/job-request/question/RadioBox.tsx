const RadioBox = ({ value }: { value: any }) => {
  return (
    <label>
      <div className="radio-box">
        <input type="radio" name="answer" value={value}></input>
        <span>{value}</span>
      </div>
    </label>
  );
};

export default RadioBox;
