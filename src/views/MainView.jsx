import { FaBitcoin } from "react-icons/fa";
import CardView from "./CardView";
import millify from "millify";
import { useNavigate } from "react-router-dom";

const MainView = ({ coins, setPage }) => {
  // console.log(coins[0]);
  const navigate = useNavigate();

  return (
    <div className=" container-xl mt-5 ">
      <h4 className="d-flex align-items-center gap-3">
        <FaBitcoin />
        <span>HoşGeldiniz, Coin Listesi</span>
      </h4>

      <p>
        Coin Listesi, dünya genelindeki kripto para birimlerini ve dijital
        varlıkları takip etmek için mükemmel bir kaynaktır
      </p>
      <div className="d-flex gap-4 justify-content-around my-5">
        {coins?.slice(0, 3)?.map((data) => (
          <CardView key={data.id} data={data} />
        ))}
        {/* burada map yapıp boş div açtıktan sonta cardview.jsx bileşeni oluturduk boş divi kaldırıp cardview bişleşeni bastık */}
      </div>

      {/* tablo */}
      <table className="table table-dark table-striped table-hover table-responsive mt-5">
        <thead>
          <th>#</th>
          <th>coin</th>
          <th>fiyat</th>
          <th>market hacmi</th>
          <th>işlem hacmi</th>
          <th>%değişim (24s)</th>
        </thead>

        <tbody>
          {coins.map((coin) => (
            // burada coinı tklayınca coinin detaylarını görmek için yönlerdirme yaptık. link ve a etiketi kulnmadık çunku tablo şeklinde bozulma oluyordu.bu yuzden onclick ile navigate kullandık
            <tr onClick={() => navigate(`/coin/${coin.id}`)} key={coin.id}>
              <td>{coin.rank}</td>
              <td>
                <span className="text-warning me-2">{coin.symbol}</span>
                <span>{coin.name}</span>
              </td>
              <td>${millify(coin.priceUsd)}</td>
              <td>${millify(coin.marketCapUsd)}</td>
              <td>${millify(coin.volumeUsd24Hr)}</td>
              <td className={coin.changePercent24Hr >= 0 ? "up" : "down"}>
                %{Number(coin.changePercent24Hr).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* dha fazla butonu */}
      <div className="d-flex justify-content-center my-5">
        {/* maincontrollerde page'i prop olarak yollamadık onun yerine prev methodunu kullandık ikiside aynı bu daha kısa */}
        <button
          onClick={() => setPage((prev) => prev + 1)}
          className="more-btn"
        >
          Daha Fazla
        </button>
      </div>
    </div>
  );
};

export default MainView;
