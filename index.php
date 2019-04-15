<html>
    <head>
        <link rel="stylesheet" type="text/css" href="index.css">
        <script src="form.js" type="text/javascript"></script>
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
            <input type="button" name="button" value="Tampilkan Rekomendasi" onclick="tampilRekomendasi(true)" id="buttonTampilrekomendasi">
            <div id="divPrintHasil">
            
            </div>
        </form>
        </div>
    
        
</body>
    <tail>
    <script src="dummyform.js" type="text/javascript"></script>
    <script language="javascript" src="dataAsli.js" type="text/javascript"></script>
    </tail>
</html>