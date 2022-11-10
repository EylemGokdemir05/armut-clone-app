const PriceDetail = ({ price }: { price: any }) => {
  const { min, max, currency } = price;
  return (
    <div className="price-detail">
      <label className="small lh-16">Ortalama Fiyat Aralığı:</label>
      <div>
        <label className="large lh-20">
          {min} - {max}
        </label>
        <label className="currency small lh-16">{currency}</label>
      </div>
    </div>
  );
};

export default PriceDetail;
