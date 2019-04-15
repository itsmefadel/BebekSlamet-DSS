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
            <p></p>
        </form>
        </div>
    
        
</body>
    <tail>
    <script src="dummyform.js" type="text/javascript"></script>
    <script language="javascript" src="dataAsli.js" type="text/javascript"></script>
    </tail>
</html>