import millify from "millify";
import { Link } from "react-router-dom";

const CardView = ({ data }) => {
  // console.log(data);
  return (
    <Link
      to={`/coin/${data.id}`}
      className="coin-card d-flex flex-column justify-content-between border rounded p-3 text-decoration-none text-white"
    >
      <div>
        <h3>{data.name}</h3>
        <h6>{data.symbol}</h6>
        <p>${millify(data.priceUsd)}</p>
      </div>

      <p>
        <span>Günlük Değişim: </span>
        {/* günlük değişimi 0 ın üzerindeyse yeşil, altındaysa kırmızı yapmak için spanın classını aktif olarak yazdık, sonra css e geçtik  */}
        <span className={data.changePercent24Hr >= 0 ? "up" : "down"}>
          %{Number(data.changePercent24Hr).toFixed(2)}
        </span>
      </p>
    </Link>
  );
};

export default CardView;

//! changePercent24Hr bu consolda görunen gunluk değişim verisi yazıldığında ekrandaki butun veriler kayboldu ve consolda 'data.changePercent24Hr.toFixed not is a function' diye uyarı verdi bunun sebebi biz changePercent24Hr bu bilginin verisinin tipidir.bize veri string geliyor.to fixed metodu bir sayı methodudur, sayı metodunu string uzerinde çalıştırmaya çalışınca buunun bir fonksyon olmadığını söylüyor ve hata veriyor bu yuzden data.changePercent24Hr bunu number olarak tanıttık .
