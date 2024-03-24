import { useEffect, useState } from "react";
import DetailView from "../views/DetailView";
import { useParams } from "react-router-dom";
import DetailModel from "../models/DetailModel";

const DetailController = () => {
  const [coin, setCoin] = useState(null); //!bunu yazdıktan sonra detailview e gidip return satırında div açıp ekrana basacaktık ama kod kabalığı olduğu için bu sayfada dizi açarak yapma kararı aldık ama veri ile alakalı herşeyi controllerde yapoamayız o yuzden modelde constructor yapısı oluşturmaya karar verdik.
  //1) detay sayfasında herbir coini görmek için urlden idyi al
  const { id } = useParams();

  //2) coinin detay verilerini ve fiyat geçmişini al
  useEffect(() => {
    DetailModel.getCoin(id).then((data) => setCoin(data)); //!bunu yazdıktan sonra usestate yazmakiçin yukarı çıktık.
  }, []);

  //clastan örnek al
  const model = new DetailModel(coin);

  // console.log(model);

  return <DetailView model={model} />;
};

export default DetailController;
