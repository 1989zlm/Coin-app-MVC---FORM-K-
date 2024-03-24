import { useFormik } from "formik";
import { schema } from "../schema";
import LoginView from "../views/LoginView";
import { useNavigate } from "react-router-dom";

const LoginController = () => {
  const navigate = useNavigate();
  //formikin bütün özelliklerini kullanmamızı sağlayan hook
  const formik = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      passwordConfirm: "",
    },

    //validasyon şeması
    //inpurlatdaki verileri tanımladığımız şemadaki koşullara uygun mu diye kontrol eder.eğer geçerli değilse errpr state'ine hataları ekler
    validationSchema: schema,

    //form gönderilince çalışacak olan fonksiyon
    //! otomatik olarak sayfa yenilemeyi engeller prevent defaule gerek kalmaz
    //1.parametre inputlardaki veriyi alır
    //2.parametre olarak formda çalışılabilecek aksiyonları alır
    //? biz bu verileri form.data entries ile alabiliyoduk ama burada bunuu uygulamamızın sebebi hata yönetimidir.
    onSubmit: (values, actions) => {
      navigate("/home");
      // console.log(values);
      // console.log(actions);
    },
  });
  // const err = formik.errors;
  // const touched = formik.touched;
  // console.log(formik.errors);
  // console.log(formik.touched);

  return <LoginView formik={formik} />;
};

export default LoginController;

//login controller kısmını loginpageden buraya kopyaladık
