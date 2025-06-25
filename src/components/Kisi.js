import React from 'react'

function Kisi({data, friends}) {
 console.log(friends)
  return (
    <div>
      Kisi
      <div> ad: {data.ad}</div>
      <div> soyad: {data.soyad}</div>
      <div>sınf: {data.sınıf}</div>
       <hr/>
      <h3>Arkadaşlar</h3>
    {friends.map((friend, i) => (
        <div key={i}>{friend}</div>
))}
    </div>
  )
}

export default Kisi
//DİĞER YÖNTEM
//function Kisi({data}) {
 
// return (
//   <div>Kisi
//    <hr/>
//    <div> ad: {data.ad}</div>
//   <div> soyad: {data.soyad}</div>
//  <div>sınf: {data.sınıf}</div>
//   //</div>
// )
//}
