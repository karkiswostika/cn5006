const DiscountCalculator = ({ productName, price }) => {
 
  const calculateDiscount = () => {
 
    const discountRate = document.getElementById("discountRate").value;
 
    const discountedPrice =
      Number(price) - (Number(price) * Number(discountRate) / 100);
 
    document.getElementById("discountMessage").innerHTML =
      `<b style="color:green">Discounted Price: £${discountedPrice.toFixed(2)}</b>`;
  };
 
  return (
    <div>
      <h2>{productName}</h2>
 
      <p>Price: £{price}</p>
 
      <label>Enter Discount Percentage (%): </label>
 
      <input
        type="number"
        id="discountRate"
        min="0"
        max="100"
      />
 
      <br /><br />
 
      <button onClick={calculateDiscount}>
        Calculate Discount
      </button>
 
      <p id="discountMessage"></p>
 
    </div>
  );
};
 
export default DiscountCalculator;