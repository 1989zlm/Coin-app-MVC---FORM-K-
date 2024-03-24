import { SiCoinmarketcap } from "react-icons/si";
import { MdEventAvailable, MdPriceChange } from "react-icons/md";
import { FaPercent } from "react-icons/fa";
import { RiStockFill } from "react-icons/ri";
import axios from "axios";

export default class DetailModel {
  //!açıklama aşağıda
  //coin verilerini classtan alınacak verilerin içine gönder
  constructor(coin) {
    //?iki tane this tanımladık bilgiler hemconsolda hem ekranda ayrı ayrı görünsün

    this.coin = coin;

    console.log(coin);
    //detay verilerinden oluşacak bir dizi
    this.infoFields = [
      {
        icon: <SiCoinmarketcap />,
        label: "Market Hacmi",
        value: coin?.detail.marketCapUsd,
      },
      {
        icon: <MdEventAvailable />,
        label: "Tedarik",
        value: coin?.detail.maxSupply,
      },
      {
        icon: <MdPriceChange />,
        label: "Fiyat",
        value: coin?.detail.priceUsd,
      },
      {
        icon: <FaPercent />,
        label: "24s Değişim(%)",
        value: coin?.detail.changePercent24Hr,
      },
      {
        icon: <RiStockFill />,
        label: "24 Hacim",
        value: coin?.detail.volumeUsd24Hr,
      },
    ];
    // console.log(coin.history);
    //grafik için kullanılacak veri
    this.graphicData = {
      //coinin içerisinde eğerki history verisi geldiyse bu history versini map ile dön, histoory verisindeki her bir eleman için buradaki(consolda görünen) tarih değerini al ve buradaki labels a aktar.
      labels: coin?.history?.map((i) => new Date(i.date).toLocaleDateString()),
      datasets: [
        {
          id: 1,
          label: "Fiyat",
          data: coin?.history.map((i) => i.priceUsd),
          borderColor: "red",
          backgroundColor: "orange",
        },
      ],
    };
    //console.log(this.Data);
  }

  //api'den hem fiyat hemde detay verisi al
  static async getCoin(id) {
    //birden fazla api istegi aynı anda atma
    const response = await Promise.all([
      axios.get(`https://api.coincap.io/v2/assets/${id}`),
      //gün gün veri akışı için

      axios.get(`https://api.coincap.io/v2/assets/${id}/history?interval=d1`),
    ]);
    return {
      detail: response[0].data.data,
      history: response[1].data.data,
      //!istekleri yazıp returnude yazdıktan sonra detailcontrollere gidip useeffectte .then((res) ile çağırdık
    };

    //! normalde aynı anda iki isteği ayrı ayrı atıp await ile bekleyip ikinci cevabı alıyoruz hiö bir sorun yok ama bu bize zaman kaybettriyor bu yuzden istekleri aynı anda atıp 2 ceavbı tek seferde alabiliyoruz. bunun için aşağıdakini yorum satırı yapıp yukarıda promise all yöntemi kullandık
    // const detailRes = await axios.get(`https://api.coincap.io/v2/assets/${id}`);
    //gün gün veri akışı için

    // const historyRes = await axios.get(`https://api.coincap.io/v2/assets/${id}/history?interval=d1`);

    // console.log('1.cevap', detailRes.data.data);
    // console.log('2.cevap', historyRes.data.data);
  }
}

//! static classtan model almadan işi yapmamıza yarıyor.. işi kısaltıyor.

//! constructor inşa edici yapıdır. classlardan alacağımız örneklerden elde edeceğimiz veriyi temsil eder.
//! detailcontrolere yazdık clas örneğini sonra yine buraya gelip contructor yapısının içine coin yaxdık ve this ile tanıttık
