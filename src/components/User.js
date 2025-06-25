import React from "react";
//Listeyi dinamik hale nasıl getirebilirim? Props oluşturmak
function User(props) {
    console.log(props);
    return <div>User
        <div>İsim: {props.isim}</div>
        <div>Yaş: {props.yas}</div>
        <div>Şehir: {props.sehir}</div>
        <hr/>
    </div>
}

export default User;
