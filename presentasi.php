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
            
        <h2>Antara Rating Novel dengan Penghargaan</h2>
        <h3 id="kataSlider1">Rating Novel <span style='color:blue'>sama penting</span> dengan Penghargaan</h3>
        <input id="slider1" name="inputJudulSkenario" type="range" value="8" min="0" max="16" class="slider" onmousemove="prosesSlider1(this.value)" onChange="prosesSlider1(this.value)">
        <span id="nilaiSlider1">1</span>
        
        <h2>Antara Rating Novel dengan Popularitas Penulis</h2>
            <h3 id="kataSlider2">Rating Novel <span style='color:blue'>sama penting</span> dengan Popularitas Penulis</h3>
        <input id="slider2" name="inputJudulSkenario" type="range" value="8" min="0" max="16" class="slider" onmousemove="prosesSlider2(this.value,2)" onChange="prosesSlider2(this.value,2)">
        <span id="nilaiSlider2">1</span>
        
        <h2>Antara Rating Novel dengan Rating Penulis</h2>
            <h3 id="kataSlider3">Rating Novel <span style='color:blue'>sama penting</span> dengan Rating Penulis</h3>
        <input id="slider3" name="inputJudulSkenario" type="range" value="8" min="0" max="16" class="slider" onmousemove="prosesSlider3(this.value,3)" onChange="prosesSlider3(this.value,3)">
        <span id="nilaiSlider3">1</span>
            
        <h2>Antara Penghargaan dengan Popularitas Penulis</h2>
            <h3 id="kataSlider4">Penghargaan <span style='color:blue'>sama penting</span> dengan Popularitas Penulis</h3>
        <input id="slider4" name="inputJudulSkenario" type="range" value="8" min="0" max="16" class="slider" onmousemove="prosesSlider4(this.value,4)" onChange="prosesSlider4(this.value,4)">
        <span id="nilaiSlider4">1</span>
            
        <h2>Antara Penghargaan dengan Rating Penulis</h2>
            <h3 id="kataSlider5">Penghargaan <span style='color:blue'>sama penting</span> dengan Rating Penulis</h3>
        <input id="slider5" name="inputJudulSkenario" type="range" value="8" min="0" max="16" class="slider" onmousemove="prosesSlider5(this.value,5)" onChange="prosesSlider5(this.value,5)">
        <span id="nilaiSlider5">1</span>
            
        <h2>Antara Popularitas Penulis dengan Rating Penulis</h2>
            <h3 id="kataSlider6">Popularitas Penulis <span style='color:blue'>sama penting</span> dengan Rating Penulis</h3>
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
                    <th>Rating Novel</th>
                    <th>Penghargaan</th>
                    <th>Popularitas Penulis</th>
                    <th>Rating Penulis</th>
                    </tr>
                    <tr>
                    <th>Rating Novel</th>
                    <th bgcolor="yellow" id="barisRatingNovel1">1</th>
                    <th id="barisRatingNovel2">1</th>
                    <th id="barisRatingNovel3">1</th>
                    <th id="barisRatingNovel4">1</th>
                    </tr>
                    <tr>
                    <th>Penghargaan</th>
                    <th id="barisPenghargaan1">1</th>
                    <th bgcolor="yellow" id="barisPenghargaan2">1</th>
                    <th id="barisPenghargaan3">1</th>
                    <th id="barisPenghargaan4">1</th>
                    </tr>
                    <tr>
                    <th>Popularitas Penulis</th>
                    <th id="barisPopularitasPenulis1">1</th>
                    <th id="barisPopularitasPenulis2">1</th>
                    <th bgcolor="yellow" id="barisPopularitasPenulis3">1</th>
                    <th id="barisPopularitasPenulis4">1</th>
                    </tr>
                    <tr>
                    <th>Rating Penulis</th>
                    <th id="barisRatingPenulis1">1</th>
                    <th id="barisRatingPenulis2">1</th>
                    <th id="barisRatingPenulis3">1</th>
                    <th bgcolor="yellow" id="barisRatingPenulis4">1</th>
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
                    <th>Rating Novel</th>
                    <th>Penghargaan</th>
                    <th>Popularitas Penulis</th>
                    <th>Rating Penulis</th>
                    <th>Jumlah Baris</th>
                    <th>Prioritas Relatif Kriteria</th>
                    </tr>
                    <tr>
                    <th>Rating Novel</th>
                    <th id="barisNormRatingNovel1">1</th>
                    <th id="barisNormRatingNovel2">1</th>
                    <th id="barisNormRatingNovel3">1</th>
                    <th id="barisNormRatingNovel4">1</th>
                    <th id="barisNormRatingNovel5">4</th>
                    <th id="barisNormRatingNovel6">1</th>
                    </tr>
                    <tr>
                    <th>Penghargaan</th>
                    <th id="barisNormPenghargaan1">1</th>
                    <th id="barisNormPenghargaan2">1</th>
                    <th id="barisNormPenghargaan3">1</th>
                    <th id="barisNormPenghargaan4">1</th>
                    <th id="barisNormPenghargaan5">4</th>
                    <th id="barisNormPenghargaan6">1</th>
                    </tr>
                    <tr>
                    <th>Popularitas Penulis</th>
                    <th id="barisNormPopularitas1">1</th>
                    <th id="barisNormPopularitas2">1</th>
                    <th id="barisNormPopularitas3">1</th>
                    <th id="barisNormPopularitas4">1</th>
                    <th id="barisNormPopularitas5">4</th>
                    <th id="barisNormPopularitas6">1</th>
                    </tr>
                    <tr>
                    <th>Rating Penulis</th>
                    <th id="barisNormRatingPenulis1">1</th>
                    <th id="barisNormRatingPenulis2">1</th>
                    <th id="barisNormRatingPenulis3">1</th>
                    <th id="barisNormRatingPenulis4">1</th>
                        <th id="barisNormRatingPenulis5">4</th>
                        <th id="barisNormRatingPenulis6">1</th>
                    </tr>
                </table>
                <hr>
            </div>
            <div id="matriksKonsistensi" >
                <h2>Matriks Mengukur Konsistensi</h2>
                <table style="width:100%">
                    <tr>
                    <th></th>
                    <th>Rating Novel</th>
                    <th>Penghargaan</th>
                    <th>Popularitas Penulis</th>
                    <th>Rating Penulis</th>
                    <th>Jumlah Baris</th>
                    <th>Sum / Relatif Kriteria</th>
                    </tr>
                    <tr>
                    <th>Rating Novel</th>
                    <th id="barisKonsRatingNovel1">1</th>
                    <th id="barisKonsRatingNovel2">1</th>
                    <th id="barisKonsRatingNovel3">1</th>
                    <th id="barisKonsRatingNovel4">1</th>
                    <th id="barisKonsRatingNovel5">4</th>
                    <th id="barisKonsRatingNovel6">1</th>
                    </tr>
                    <tr>
                    <th>Penghargaan</th>
                    <th id="barisKonsPenghargaan1">1</th>
                    <th id="barisKonsPenghargaan2">1</th>
                    <th id="barisKonsPenghargaan3">1</th>
                    <th id="barisKonsPenghargaan4">1</th>
                    <th id="barisKonsPenghargaan5">4</th>
                    <th id="barisKonsPenghargaan6">1</th>
                    </tr>
                    <tr>
                    <th>Popularitas Penulis</th>
                    <th id="barisKonsPopularitas1">1</th>
                    <th id="barisKonsPopularitas2">1</th>
                    <th id="barisKonsPopularitas3">1</th>
                    <th id="barisKonsPopularitas4">1</th>
                    <th id="barisKonsPopularitas5">4</th>
                    <th id="barisKonsPopularitas6">1</th>
                    </tr>
                    <tr>
                    <th>Rating Penulis</th>
                    <th id="barisKonsRatingPenulis1">1</th>
                    <th id="barisKonsRatingPenulis2">1</th>
                    <th id="barisKonsRatingPenulis3">1</th>
                    <th id="barisKonsRatingPenulis4">1</th>
                        <th id="barisKonsRatingPenulis5">4</th>
                        <th id="barisKonsRatingPenulis6">1</th>
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
            <div id="matriksSR" >
            <h2>Menghitung Nilai S dan R</h2>
            <table id="tabelMatriksSR" style="width:100%"></table>
            <hr>
            <h2>Dengan nilai sensitifitas(V) =0.5</h2>
            </div>
            <div id="matriksIndexViqor" >
            <h2>Index Viqor (Q)</h2>
            <table id="tabelMatriksViqor" style="width:100%"></table>
            <hr>
            </div>
            <div id="matriksIndexQ" >
            <h2>Perankingan Berdasarkan Index Viqor (Q)</h2>
            <table id="tabelMatriksQ" style="width:100%"></table>
            <hr>
            </div>
            <div id="matriksIndex4" >
            <h2>Perankingan Berdasarkan Index V=0.4 </h2>
            <table id="tabelMatriks4" style="width:100%"></table>
            <hr>
            </div>
            <div id="matriksIndex6" >
            <h2>Perankingan Berdasarkan Index V=0.6 </h2>
            <table id="tabelMatriks6" style="width:100%"></table>
            <hr>
            </div>
            <div id="nilaiDq" >
                <h2>Nilai DQ = 1/(n-1)  = <span id="dq" style='color:blue'></span></h2>
            <hr>
            </div>
            <div id="nilaiAmA1" ></div>
            <p></p>
        </form>
        </div>
    
        
</body>
    <tail>
    <script src="dummyform.js" type="text/javascript"></script>
    <script language="javascript" src="dataAsliPresentasi.js" type="text/javascript"></script>
    </tail>
</html>