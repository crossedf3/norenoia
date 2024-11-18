window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }  // force scroll position to top after refresh

  document.addEventListener('DOMContentLoaded', () => {
    // Get references to the menu toggle button and navigation menu
    const menuToggle = document.getElementById('navbar-drop');
    const navMenu = document.getElementById('dropbutton');

      // Add click event listener to the menu toggle button
      menuToggle.addEventListener('click', () => {
        // Toggle the 'active' class to show/hide the menu
        navMenu.classList.toggle('active');
    });

      // Add a click event listener to the document to handle closing the menu
      document.addEventListener('click', (event) => {
        // Check if the click is outside both the menu toggle and the menu itself
        if (!menuToggle.contains(event.target) && !navMenu.contains(event.target)) {
            // Remove the 'active' class to hide the menu
            console.log('Click outside menu');
            navMenu.classList.remove('active');
        }
    });
});

// call name for the button and display
const linoButton = document.getElementById('lino');
const bielButton = document.getElementById('biel');
const feliButton = document.getElementById('feli');
const bhagaButton = document.getElementById('bhaga');
const tinaButton = document.getElementById('seftia');
const display = document.getElementById('exp');
const profilers = document.getElementById('profile');
// a function to change the content
function changeToLino(){
  display.innerHTML = '<p>Name: Eulogius Ravelino C. F <br> Role: Game Developer <br> C++ sudah menjadi makanan sehari-hari game developer, yang bertanggung jawab atas pemrograman aplikasi yang sewajarnya memberikan hiburan (to entertain) sekaligus interaktif dengan mempertimbangkan input dari pengguna (user/player) dan output yang akan di hasilkan dari setiap aksi yang dilakukan player. Selain itu, game developer juga perlu mempertimbangkan optimisasi perangkat keras (hardware) dengan perangkat lunak (software) sehingga dapat menjalankan game dengan mulus. Seorang game developer harus bisa mengembangkan konsep (yang biasanya dilakukan oleh tim narasi) dan membentuk prototipe untuk setiap ide yang ada. Selain itu, mereka juga perlu mengatur lingkungan kerja game engine untuk membuat dunia game sendiri dan mendesainnya bersama tim design. Dan yang terpenting adalah mengatur control input-output, balancing, dan optimisasi serta debug kode. Hal-hal ini dibutuhkan kesabaran yang cukup untuk menanganinya, namun akan sangat memuaskan bila terdapat keberhasilan.</p>';
  profilers.src="lino.jpeg"
  profilers.alt="lino"
}
function changeToBiel(){
  display.innerHTML = '<p>Name: Gabriel Rainhard W. <br> Role: Content Writer <br> Sebagai seorang content writer tentu nya kita bertugas sebagai orang yang menulis konten untuk menyampaikan informasi atau ide kepada audiens. Keterampilan yang harus dimiliki content writer adalah kita harus bisa menulis isi konten agar terlihat menarik agar pembaca mau membaca artikel atau web yang kita buat</p>'
  profilers.src="biel.jpeg";
  profilers.alt="biel"
}
function changeToFeli(){
  display.innerHTML = '<p>Name: Felicia Ceysa Putri <br> Role: Web Programmer <br> Web programmer adalah membangun dan mengembangkan website, mulai dari awal hingga tahap pengujian. Bertanggung jawab untuk memastikan website mudah digunakan, memiliki sistem input dan output data yang jelas, dan performanya stabil. Keterampilan dalam bidang web programmer perlu memiliki berbagai keterampilan, baik hard skills maupun soft skills, untuk dapat melakukan tugasnya dengan baik.</p>'
  profilers.src="feli.jpeg";
  profilers.alt="feli"
}
function changeToBhaga(){
  display.innerHTML = '<p>Name: D. G. A. Bhagawanta Rajasa <br> Role: Graphic Designer <br> Seorang Graphics Designer bertanggung jawab dalam merancang visual untuk berbagai kebutuhan, mulai dari logo, ilustrasi, poster, hingga desain web dan aplikasi. Tugas utama seorang graphics designer adalah menciptakan desain yang menarik, komunikatif, dan sesuai dengan tujuan brand atau pesan yang ingin disampaikan. Mereka juga harus memastikan setiap elemen desain mendukung user experience yang baik dan menyampaikan pesan dengan jelas. Seorang graphics designer harus menguasai berbagai keterampilan, baik hard skills seperti penguasaan software desain (Adobe Photoshop, Illustrator, dan lainnya), maupun soft skills seperti kreativitas, komunikasi, dan kemampuan untuk bekerja dalam tim. Dalam dunia yang semakin bergantung pada visual, seorang graphics designer memiliki peran penting dalam menciptakan karya yang tidak hanya estetis, tetapi juga efektif dan fungsional.</p>'
  profilers.src="bhaga.jpeg";
  profilers.alt="bhaga"
}
function changeToTina(){
  display.innerHTML = '<p>Name: Seftia Rahmadani <br> Role: Programmer <br> Profesi dengan keterampilan luas dalam berbagai bahasa pemrograman dan teknologi. Mereka dapat mengerjakan berbagai tahap pengembangan perangkat lunak, mulai dari analisis, desain, pengkodean, hingga pengujian dan pemeliharaan. Memiliki pengetahuan tentang algoritma, struktur data, dan prinsip rekayasa perangkat lunak, serta kemampuan untuk cepat belajar dan beradaptasi dengan teknologi baru. Mereka dapat bekerja di berbagai domain, seperti aplikasi web, seluler, dan sistem tertanam.</p>'
  profilers.src="tina.jpeg";
  profilers.alt="tina"
}
//triggers on click
bielButton.addEventListener('click', changeToBiel);
linoButton.addEventListener('click', changeToLino);
feliButton.addEventListener('click',changeToFeli);
bhagaButton.addEventListener('click',changeToBhaga);
tinaButton.addEventListener('click', changeToTina);
