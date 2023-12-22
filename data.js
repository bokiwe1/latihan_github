const nama = "mhmd fiqri";
let usia = 19;

let biodata = document.getElementById('biodata');

function generateBiodata() {
   let generasi;

   if (usia >= 10 && usia < 18) {
      generasi = "generasi remaja";
   } else if (usia > 18 && usia < 30) {
      generasi = "generasi dewasa";
   } else if (usia >= 30) {
      generasi = "generasi tua";
   } else if (usia > 2 && usia <= 9) {
      generasi = "generasi anak anak";
   }
   else {
      generasi = "generasi batita";
   }
   return biodata.innerHTML = generasi
}

console.log(nama);
console.log(usia);

generateBiodata();