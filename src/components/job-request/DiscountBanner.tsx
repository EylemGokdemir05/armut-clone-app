const DiscountBanner = ({ discountRateText }: { discountRateText: any }) => {
  const percentNumberPattern = /%\d+/;
  const percentNumber = discountRateText?.match(percentNumberPattern)[0];
  const emphasizedPercentNumber = <span className="emphasized-text">{percentNumber}</span>;
  const withoutPercentNumber = discountRateText.split(percentNumber);

  return (
    <div className="discount-banner">
      <p className="medium lh-22">
        {withoutPercentNumber[0]}
        {emphasizedPercentNumber}
        {withoutPercentNumber[1]}
      </p>
    </div>
  );
};

export default DiscountBanner;
