import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [dollar, setDollar] = useState("");
  const [coin, setCoin] = useState([]);
  const [convert, setConvert] = useState("");

  const onChange = (event) => {
    setDollar(event.target.value);
  };

  const onOptionChange = (event) => {
    setConvert(event.target.value);
  };

  useEffect(
    () =>
      fetch("https://api.coinpaprika.com/v1/tickers")
        .then((response) => response.json())
        .then((json) => {
          setCoin(json);
          setLoading(false);
        }),
    []
  );
  console.log(coin[0]);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h1>Coin Converter</h1>
          <hr />
          <input onChange={onChange} value={dollar} type="number" placeholder="0" />
          <span> $ --> </span>
          <input
            value={convert === "" ? "" : dollar * coin[convert].quotes.USD.price}
            placeholder={convert === "" ? "Select a crypto currency" : coin[convert].name}
            disabled
          />
          <hr />
          <select onChange={onOptionChange}>
            {coin.map((info) => (
              <option key={info.id} value={info.rank - 1}>
                {info.name}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
}

export default App;
