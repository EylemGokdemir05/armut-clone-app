const DiscountBanner = ({ discountRateText }: { discountRateText: any }) => {
  return (
    <div className="discount-banner">
      <p className="medium lh-22">{discountRateText}</p>
    </div>
  );
};

export default DiscountBanner;
