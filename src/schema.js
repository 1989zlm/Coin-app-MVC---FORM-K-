// yuptaki bütün fonksiyonları import et
import * as yup from 'yup';


// validasyon şeması
// fomrdaki inputların geçerli olması için gerekli koşulları tanımladığımız alan

// 1 büyük harf
// 1 küçük harf
// 1 sayı
// 1 özel karakter
// min 5 karakter
const regex = '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,}$';





//bir alan için  koşulları yazarken ilk olarak o alanın tipinin tanımlayan yup fonksiyonunuu çağırırız
export const schema = yup.object().shape({

    // email'geçerli  olması için koşullar
    email: yup.string()
        .email('Email geçerli bir formatta olmalı')
        .required('Email zorunlu bir alan'),

    //yaşın geçerli olması için koşullar
    age: yup.number()
        .min(18, "yaş 18'den küçük olamaz")
        .max(100, "Yaş 100'den büyük olamaz")
        .integer('Lütfen tam sayı değeri giriniz')
        .required('Yaş zorunlu bir alan'),

    //şifrenin geçerli olması için koşullar
    password: yup.string().min(5, 'şifreniz en az 5 karakter olmalı')
        //şifre regex tanımlarına uygunmu diye kontrol eder.
        .matches(regex, 'Şifreniz yeterince güçlü değil')
        .required('şifre zorunlu alan'),

    //şifre onay alanının geçerli olması için koşuullar
    passwordConfirm: yup
        .string()
        //oneof kontrol ettiğimiz inputtaki verinin verdiğimi değerele eşit olup olamadığını kontrol eder
        //ref() farklı bir inputtaki veriye erişmemizi sağlar 
        .oneOf([yup.ref('password')], 'Onay Şİfreniz eşleşmiyor')
        .required('Lütfen şifrenizi onaylayın'),

});