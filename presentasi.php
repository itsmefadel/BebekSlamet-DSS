<html>
    <head>
        <link rel="stylesheet" type="text/css" href="index.css">
        <script src="formPresentasi.js" type="text/javascript"></script>
        <script src="matematikaDasar.js" type="text/javascript"></script>
    </head>
<body>
    <div id="divFormBobot" class="formBobot">
        <div class="inputForm">
        <form autocomplete="off" method="post" enctype="multipart/form-data">
        <h1>Tentukan Prioritas Kriteria</h1>
            
        <h2>Antara Harga dengan Ketersediaan</h2>
        <h3 id="kataSlider1">Harga <span style='color:blue'>sama penting</span> dengan Ketersediaan</h3>
        <input id="slider1" name="inputJudulSkenario" type="range" value="8" min="0" max="16" class="slider" onmousemove="prosesSlider1(this.value)" onChange="prosesSlider1(this.value)">
        <span id="nilaiSlider1">1</span>
        
        <h2>Antara Harga dengan Ketepatan Pengiriman</h2>
            <h3 id="kataSlider2">Harga <span style='color:blue'>sama penting</span> dengan Ketepatan Pengiriman</h3>
        <input id="slider2" name="inputJudulSkenario" type="range" value="8" min="0" max="16" class="slider" onmousemove="prosesSlider2(this.value,2)" onChange="prosesSlider2(this.value,2)">
        <span id="nilaiSlider2">1</span>
        
        <h2>Antara Harga dengan Kualitas</h2>
            <h3 id="kataSlider3">Harga <span style='color:blue'>sama penting</span> dengan Kualitas</h3>
        <input id="slider3" name="inputJudulSkenario" type="range" value="8" min="0" max="16" class="slider" onmousemove="prosesSlider3(this.value,3)" onChange="prosesSlider3(this.value,3)">
        <span id="nilaiSlider3">1</span>
            
        <h2>Antara Ketersediaan dengan Ketepatan Pengiriman</h2>
            <h3 id="kataSlider4">Ketersediaan <span style='color:blue'>sama penting</span> dengan Ketepatan Pengiriman</h3>
        <input id="slider4" name="inputJudulSkenario" type="range" value="8" min="0" max="16" class="slider" onmousemove="prosesSlider4(this.value,4)" onChange="prosesSlider4(this.value,4)">
        <span id="nilaiSlider4">1</span>
            
        <h2>Antara Ketersediaan dengan Kualitas</h2>
            <h3 id="kataSlider5">Ketersediaan <span style='color:blue'>sama penting</span> dengan Kualitas</h3>
        <input id="slider5" name="inputJudulSkenario" type="range" value="8" min="0" max="16" class="slider" onmousemove="prosesSlider5(this.value,5)" onChange="prosesSlider5(this.value,5)">
        <span id="nilaiSlider5">1</span>
            
        <h2>Antara Ketepatan Pengiriman dengan Kualitas</h2>
            <h3 id="kataSlider6">Ketepatan Pengiriman <span style='color:blue'>sama penting</span> dengan Kualitas</h3>
        <input id="slider6" name="inputJudulSkenario" type="range" value="8" min="0" max="16" class="slider" onmousemove="prosesSlider6(this.value,6)" onChange="prosesSlider6(this.value,6)">
        <span id="nilaiSlider6">1</span>
        <p></p>
            <hr>
        </div>
            <div id="statusKonsistensi">
                <h2><span id="sK"></span></h2>
            <hr>
            </div>
            <input type="button" name="button" value="Tampilkan Rekomendasi" onclick="tampilRekomendasi(false)" id="buttonTampilrekomendasi">
            <div id="matriksRekomendasi" >
            <hr>
            <h2>Hasil Rekomendasi</h2>
            <table id="tabelRekomendasi" style="width:100%"></table>
            </div>
            <div id="matriksInput" >
                <h2>Matriks Pairwise Comparison</h2>
                <table style="width:100%">
                    <tr>
                    <th></th>
                    <th>Harga</th>
                    <th>Ketersediaan</th>
                    <th>Ketepatan Pengiriman</th>
                    <th>Kualitas</th>
                    </tr>
                    <tr>
                    <th>Harga</th>
                    <th bgcolor="yellow" id="BarisHarga1">1</th>
                    <th id="BarisHarga2">1</th>
                    <th id="BarisHarga3">1</th>
                    <th id="BarisHarga4">1</th>
                    </tr>
                    <tr>
                    <th>Ketersediaan</th>
                    <th id="BarisKetersediaan1">1</th>
                    <th bgcolor="yellow" id="BarisKetersediaan2">1</th>
                    <th id="BarisKetersediaan3">1</th>
                    <th id="BarisKetersediaan4">1</th>
                    </tr>
                    <tr>
                    <th>Ketepatan Pengiriman</th>
                    <th id="BarisKetepatanPengirimanPenulis1">1</th>
                    <th id="BarisKetepatanPengirimanPenulis2">1</th>
                    <th bgcolor="yellow" id="BarisKetepatanPengirimanPenulis3">1</th>
                    <th id="BarisKetepatanPengirimanPenulis4">1</th>
                    </tr>
                    <tr>
                    <th>Kualitas</th>
                    <th id="BarisKualitas1">1</th>
                    <th id="BarisKualitas2">1</th>
                    <th id="BarisKualitas3">1</th>
                    <th bgcolor="yellow" id="BarisKualitas4">1</th>
                    </tr>
                    <tr>
                    <th>Jumlah Kolom</th>
                    <th bgcolor="green" id="jumlahKolom1">1</th>
                    <th bgcolor="green" id="jumlahKolom2">1</th>
                    <th bgcolor="green" id="jumlahKolom3">1</th>
                    <th bgcolor="green" id="jumlahKolom4">1</th>
                    </tr>
                </table>
                <hr>
            </div>
            <div id="matriksInputNormalisasi" >
                <h2>Matriks Normalisasi Input</h2>
                <table style="width:100%">
                    <tr>
                    <th></th>
                    <th>Harga</th>
                    <th>Ketersediaan</th>
                    <th>Ketepatan Pengiriman</th>
                    <th>Kualitas</th>
                    <th>Jumlah Baris</th>
                    <th>Prioritas Relatif Kriteria</th>
                    </tr>
                    <tr>
                    <th>Harga</th>
                    <th id="barisNormHarga1">1</th>
                    <th id="barisNormHarga2">1</th>
                    <th id="barisNormHarga3">1</th>
                    <th id="barisNormHarga4">1</th>
                    <th id="barisNormHarga5">4</th>
                    <th id="barisNormHarga6">1</th>
                    </tr>
                    <tr>
                    <th>Ketersediaan</th>
                    <th id="barisNormKetersediaan1">1</th>
                    <th id="barisNormKetersediaan2">1</th>
                    <th id="barisNormKetersediaan3">1</th>
                    <th id="barisNormKetersediaan4">1</th>
                    <th id="barisNormKetersediaan5">4</th>
                    <th id="barisNormKetersediaan6">1</th>
                    </tr>
                    <tr>
                    <th>Ketepatan Pengiriman</th>
                    <th id="barisNormKetepatanPengiriman1">1</th>
                    <th id="barisNormKetepatanPengiriman2">1</th>
                    <th id="barisNormKetepatanPengiriman3">1</th>
                    <th id="barisNormKetepatanPengiriman4">1</th>
                    <th id="barisNormKetepatanPengiriman5">4</th>
                    <th id="barisNormKetepatanPengiriman6">1</th>
                    </tr>
                    <tr>
                    <th>Kualitas</th>
                    <th id="barisNormKualitas1">1</th>
                    <th id="barisNormKualitas2">1</th>
                    <th id="barisNormKualitas3">1</th>
                    <th id="barisNormKualitas4">1</th>
                        <th id="barisNormKualitas5">4</th>
                        <th id="barisNormKualitas6">1</th>
                    </tr>
                </table>
                <hr>
            </div>
            <div id="matriksKonsistensi" >
                <h2>Matriks Mengukur Konsistensi</h2>
                <table style="width:100%">
                    <tr>
                    <th></th>
                    <th>Harga</th>
                    <th>Ketersediaan</th>
                    <th>Ketepatan Pengiriman</th>
                    <th>Kualitas</th>
                    <th>Jumlah Baris</th>
                    <th>Sum / Relatif Kriteria</th>
                    </tr>
                    <tr>
                    <th>Harga</th>
                    <th id="barisKonsHarga1">1</th>
                    <th id="barisKonsHarga2">1</th>
                    <th id="barisKonsHarga3">1</th>
                    <th id="barisKonsHarga4">1</th>
                    <th id="barisKonsHarga5">4</th>
                    <th id="barisKonsHarga6">1</th>
                    </tr>
                    <tr>
                    <th>Ketersediaan</th>
                    <th id="barisKonsKetersediaan1">1</th>
                    <th id="barisKonsKetersediaan2">1</th>
                    <th id="barisKonsKetersediaan3">1</th>
                    <th id="barisKonsKetersediaan4">1</th>
                    <th id="barisKonsKetersediaan5">4</th>
                    <th id="barisKonsKetersediaan6">1</th>
                    </tr>
                    <tr>
                    <th>Ketepatan Pengiriman</th>
                    <th id="barisKonsKetepatanPengiriman1">1</th>
                    <th id="barisKonsKetepatanPengiriman2">1</th>
                    <th id="barisKonsKetepatanPengiriman3">1</th>
                    <th id="barisKonsKetepatanPengiriman4">1</th>
                    <th id="barisKonsKetepatanPengiriman5">4</th>
                    <th id="barisKonsKetepatanPengiriman6">1</th>
                    </tr>
                    <tr>
                    <th>Kualitas</th>
                    <th id="barisKonsKualitas1">1</th>
                    <th id="barisKonsKualitas2">1</th>
                    <th id="barisKonsKualitas3">1</th>
                    <th id="barisKonsKualitas4">1</th>
                        <th id="barisKonsKualitas5">4</th>
                        <th id="barisKonsKualitas6">1</th>
                    </tr>
                </table>
                <hr>
            </div>
            <div id="lambdaMaks" >
                <h2>Penjumlahan dari Perkalian Jumlah Kolom dengan Eigen Vektor</h2>
                <h2>(LamdaMaks)= <span id="lamdaMaks" style='color:blue'></span></h2>
            </div>
            <div id="konsistensiIndex" >
                <h2>Consistency Index (CI) = (LamdaMaks-n)/(n-1)</h2>
                <h2>(CI)= <span id="consistencyIndex" style='color:blue'></span></h2>
            </div>
            <div id="nilaiCR" >
                <h2>CR = CI/RI</h2>
                <h2>(CR)= <span id="cr" style='color:blue'></span> <span id="hasilPreferensiPembobotan"></span></h2>
            <hr>
            </div>
            <div id="matriksDataAsli" >
            <h2>Matriks Data Asli</h2>
            <table id="tabelDataAsli" style="width:100%"></table>
            <hr>
            </div>
            <div id="matriksNormData" >
            <h2>Normalisasi Matriks Dengan Normalisasi Linear</h2>
            <table id="tabelMatriksNormalisasi" style="width:100%"></table>
            <hr>
            </div>
            <div id="matriksNormXBobot" >
            <h2>Normalisasi X Bobot</h2>
            <table id="tabelMatriksXBobot" style="width:100%"></table>
            <hr>
            </div>
            <div id="matriksD" >
            <h2>Menghitung Nilai D+ dan D-</h2>
            <table id="tabelMatriksD" style="width:100%"></table>
            <hr>
            </div>
            <div id="matriksCci" >
            <h2>Menghitung Nilai CCI</h2>
            <table id="tabelMatriksCci" style="width:100%"></table>
            <hr>
            </div>
            <p></p>
        </form>
        </div>
    
        
</body>
    <tail>
    <script src="dummyform.js" type="text/javascript"></script>
    <script language="javascript" src="dataAsliPresentasi.js" type="text/javascript"></script>
    </tail>
</html>