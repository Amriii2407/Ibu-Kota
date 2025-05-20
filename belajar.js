// Data soal dan jawaban
const soalData = [
  {
    answer: "bandung",
    correctMessage: "Benar! Ibu kota Provinsi Jawa Barat adalah Bandung 🎉",
    image: "img/bandung.jpg"
  },
  {
    answer: "semarang",
    correctMessage: "Benar! Ibu kota Provinsi Jawa Tengah adalah Semarang 🎉",
    image: "img/semarang.jpg"
  },
  {
    answer: "surabaya",
    correctMessage: "Benar! Ibu kota Provinsi Jawa Timur adalah Surabaya 🎉",
    image: "img/surabaya.jpg"
  },
  {
    answer: "yogyakarta",
    correctMessage: "Benar! Ibu kota Provinsi DI Yogyakarta adalah Yogyakarta 🎉",
    image: "img/yogyakarta.jpg"
  }
];

// Mengambil semua elemen pertanyaan
const elemenPertanyaan = document.querySelectorAll('.pertanyaan');

// Menambahkan event listener untuk setiap pertanyaan
elemenPertanyaan.forEach((elemenSoal, index) => {
  const tombolPeriksa = elemenSoal.querySelector('.tombol-periksa');
  const hasil = elemenSoal.querySelector('.hasil');
  const Gambar = elemenSoal.querySelector('.gambar');
  const kotakJawaban = elemenSoal.querySelector('.kotak-jawaban');

  // Event ketika tombol ditekan
  tombolPeriksa.addEventListener('click', () => {
    const jawaban = kotakJawaban.value.trim().toLowerCase();
    
    if (jawaban === soalData[index].answer) {
      hasil.textContent = soalData[index].correctMessage;
      hasil.style.color = "green";

      // Tampilkan gambar
      const img = document.createElement("img");
      img.src = soalData[index].image;
      img.alt = soalData[index].answer;
      img.style.width = "300px";

      Gambar.innerHTML = "";
      Gambar.appendChild(img);

      // Nonaktifkan input dan tombol
      kotakJawaban.disabled = true;
      tombolPeriksa.disabled = true;
      tombolPeriksa.style.backgroundColor = "#888";
    } else {
      hasil.textContent = "Salah, coba lagi! 😔";
      hasil.style.color = "red";
      Gambar.innerHTML = "";
    }
  });
});