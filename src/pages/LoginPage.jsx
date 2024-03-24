// import { useFormik } from "formik";
// import { schema } from "../schema";
// import InputFieldView from "../views/InputFieldView";
// import { inputs } from "../constants";

// const LoginPage = () => {
//   //formikin bütün özelliklerini kullanmamızı sağlayan hook
//   const formik = useFormik({
//     initialValues: {
//       email: "",
//       age: "",
//       password: "",
//       passwordConfirm: "",
//     },

//     //validasyon şeması
//     //inpurlatdaki verileri tanımladığımız şemadaki koşullara uygun mu diye kontrol eder.eğer geçerli değilse errpr state'ine hataları ekler
//     validationSchema: schema,

//     //form gönderilince çalışacak olan fonksiyon
//     //! otomatik olarak sayfa yenilemeyi engeller prevent defaule gerek kalmaz
//     //1.parametre inputlardaki veriyi alır
//     //2.parametre olarak formda çalışılabilecek aksiyonları alır
//     //? biz bu verileri form.data entries ile alabiliyoduk ama burada bunuu uygulamamızın sebebi hata yönetimidir.
//     onSubmit: (values, actions) => {
//       console.log(values);
//       console.log(actions);
//     },
//   });
//   // const err = formik.errors;
//   // const touched = formik.touched;
//   // console.log(formik.errors);
//   // console.log(formik.touched);
//   return (
//     // burada yup kütüphanelerini kullandık
//     <div className="login-page">
//       <div className="container my-5">
//         <h2 className="d-flex gap-3 justify-content-center align-items-center">
//           <img height={60} src="/c-logo.png" />
//           <span>Coinmania</span>
//         </h2>
//         {/* burada formun bazı özelliklerini formik.org taki dökğmana göre yazdık yukarıdaki inizialstate ile aynı yazdık */}
//         <form
//           onSubmit={formik.handleSubmit}
//           className="d-flex flex-column gap-3 mt-5"
//         >
//           {inputs?.map((data) => (
//             <InputFieldView formik={formik} data={data} />
//           ))}

//           {/* <InputFieldView
//             formik={formik}
//             data={{ label: "Email", name: "email", type: "email" }}
//           />

//           <InputFieldView
//             formik={formik}
//             data={{ label: "Yaşınız", name: "age", type: "number" }}
//           /> */}

//           {/*  //!bu işlemden sonra
//           //!inputfieltviewe gidip prop olarak data atadık */}
//           {/* <div>
//             <label className="form-label">Email</label>
//             <input
//               onBlur={formik.handleBlur}
//               onChange={formik.handleChange}
//               name="email"
//               type="email"
//               className={`form-control ${
//                 err.email && touched.email ? "is-invalid" : ""
//               }`}
//             />
//             <div className="feedback">{err.email} &nbsp;</div>
//           </div> */}
//           {/* eğerki formikin içersindeki hataların içerisinde age ile ilgili bir hata varsa o zaman kapsayıcıya error clası ver */}
//           {/* <div>
//             <label className="form-label">Yaşınız</label>
//             <input
//               onBlur={formik.handleBlur}
//               onChange={formik.handleChange}
//               name="age"
//               type="number"
//               className={`form-control ${
//                 err.age && touched.age ? "is-invalid" : ""
//               }`}
//             />
//             <div className="feedback">{err.age} &nbsp;</div>
//           </div>

//           <div>
//             <label className="form-label">Şifre</label>
//             <input
//               name="password"
//               onBlur={formik.handleBlur}
//               onChange={formik.handleChange}
//               className={`form-control ${
//                 err.password && touched.password ? "is-invalid" : ""
//               }`}
//               type="text"
//             />
//             <div className="feedback">{err.password} &nbsp;</div>
//           </div>

//           <div>
//             <label className="form-label">Şifre Onay</label>
//             <input
//               name="passwordConfirm"
//               onBlur={formik.handleBlur}
//               onChange={formik.handleChange}
//               className={`form-control ${
//                 err.passwordConfirm && touched.passwordConfirm
//                   ? "is-invalid"
//                   : ""
//               }`}
//               type="text"
//             />
//             <div className="feedback">{err.passwordConfirm} &nbsp;</div>
//           </div>
// */}
//           <button className="btn btn-primary" type="submit">
//             Gönder
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;

// //!  &nbsp; bu inputların kaymasını engellemek için verildi.

// //! onBlur imlec input odağını kaybederse yani input dışında bi yere tıklarsa çalışır.. focusun tersi
