import { useEffect, useState } from "react";
import MainView from "../views/MainView";
import MainModel from "../models/MainModel";

const MainController = () => {
  const [coins, setCoins] = useState([]);
  const [page, setPage] = useState(1);
  console.log(page);

  useEffect(() => {
    //concati daha fazla butonuna tıklayınca varolan 15 adet coin verisinin üzerine bi onbeş daha gelsindiye yazdık
    MainModel.getCoins(page).then((data) => setCoins(coins.concat(data)));
  }, [page]); // daha fazla butonuna her bastığımızda bir sonraki verileri alsın diye bağımlılık dizisini doldurduk ve getcoins metonuna page i yolladık
  // console.log(coins);
  return <MainView coins={coins} setPage={setPage} />; //coinsleri ekrana basıyoruz.buradan viewe geçtık
};

export default MainController;
