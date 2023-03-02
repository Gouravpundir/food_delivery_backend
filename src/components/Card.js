export default function Card(props) {
  let options = props.options || {};
  let priceOption = props.options.map((option) => ({ name: option.name, price: option.price }));
  const handleAddToCart= ()=>{

  }
  return (
    <div>
      <div className="card mt-3" style={{ width: "15rem", maxHeight: "360px" }}>
      <img src={props.imageSrc} className="card-img-top m-3" alt="..." style={{ height: "60px",width:"170px", objectFit: "cover" }} />

        <div className="card-body">
          <h5 className="card-title">{props.foodName}</h5>
          <div className="container w-100">
            <select className="m-2 h-100 bg-success rounded">
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>

            <select className="m-2 h-100 bg-success rounded">
              {priceOption.map((option) => {
                return (
                  <option key={option.name} value={option.price}>
                    {`${option.name} - ${option.price}`}
                  </option>
                );
              })}
            </select>
            <div className="d-inline h-100 fs-5">TotalPrice</div>
          </div>
          <hr />
          <button className={"btn btn-success justify-center mx-2"} onClick={handleAddToCart}> Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
