import axios from "axios";


//anasayfanın model katmanı
export default class MainModel {
    //apiden coin verielerini alır
    static async getCoins(page) {
        try {
            //offset bir sayfada kaç coin bilgisinin yazacağını belirlediğimiz istektir.
            const params = {
                offset: (page - 1) * 15,// kaç veri atlanacak
                limit: 15,// kaç veri alınacak
            }


            const res = await axios.get('https://api.coincap.io/v2/assets', { params, })//isteğin içerisine offset isteği yazıp çağırabilirdik ama yönetmesi zor olduğu için params olarak tanuıtıp yaptık//buradan conrollere geçip coinsleri prop yaptık return satrıında
            console.log(res.data)
            return res.data.data
        } catch (err) {
            console.log(err);

        }
    }
}

//!modelden örnek almak için  
//! MainModel.getCoins()
//! const model = new MainModel();
//! model.getCoins(); bu işlemi yapardık ama async in başına static yazınca artık bunu bu şekilde değilde aşağıdaki gibi yazabiliriz.class ismi uzerinden erişebiliyoruz.