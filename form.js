// deklarasi matriks input pengguna
var BarisHarga=new Array(1,1,1,1);
var BarisKetersediaan=new Array(1,1,1,1);
var BarisKetepatanPengiriman=new Array(1,1,1,1);
var BarisKualitas=new Array(1,1,1,1);
// deklarasi matriks prioritas relatif kriteria
var prioritasRelatifKriteria=new Array(1,1,1,1);
var el1,el2;
//string perbandingan
var iK1="<span style='color:blue'>sama penting </span>";
var iK3="<span style='color:blue'>sedikit lebih penting </span>";
var iK5="<span style='color:blue'>lebih penting </span>";
var iK7="<span style='color:blue'>kuat penting </span>";
var iK9="<span style='color:blue'>sangat penting </span>";
var iK2="antara "+iK1+"dan "+iK3;
var iK4="antara "+iK3+"dan "+iK5;
var iK6="antara "+iK5+"dan "+iK7;
var iK8="antara "+iK7+"dan "+iK9;


function prosesSlider1(value){
    var nilai;
    var stringPerbandingan;
    el1="Harga ";
    el2="Ketersediaan ";
    if(value==8){
        nilai=1;
        stringPerbandingan=el1+iK1+"dengan "+el2;
        BarisHarga[1]=1;
        BarisKetersediaan[0]=1;
    }else{
        if(value<8){
            //lebih mementingkan Harga
        nilai=9-value;
        if(nilai==2){
            stringPerbandingan=el1+iK2+"daripada "+el2;
            BarisHarga[1]=2;            
        }
            if(nilai==3){
                BarisHarga[1]=3;
            stringPerbandingan=el1+iK3+"daripada "+el2;
        }
            if(nilai==4){
                BarisHarga[1]=4;
            stringPerbandingan=el1+iK4+"daripada "+el2;
        }
            if(nilai==5){
                BarisHarga[1]=5;
            stringPerbandingan=el1+iK5+"daripada "+el2;
        }
            if(nilai==6){
                BarisHarga[1]=6;
            stringPerbandingan=el1+iK6+"daripada "+el2;
        }
            if(nilai==7){
                BarisHarga[1]=7;
            stringPerbandingan=el1+iK7+"daripada "+el2;
        }
            if(nilai==8){
                BarisHarga[1]=8;
            stringPerbandingan=el1+iK8+"daripada "+el2;
        }
            if(nilai==9){
                BarisHarga[1]=9;
            stringPerbandingan=el1+iK9+"daripada "+el2;
        }
        BarisKetersediaan[0]=BarisHarga[0]/BarisHarga[1];
        }else{
            //lebih mementingkan Ketersediaan
        nilai=value-7;
            if(nilai==2){
            BarisKetersediaan[0]=2;
            stringPerbandingan=el2+iK2+"daripada "+el1;                
        }
            if(nilai==3){
                BarisKetersediaan[0]=3;
            stringPerbandingan=el2+iK3+"daripada "+el1;
        }
            if(nilai==4){
                BarisKetersediaan[0]=4;
            stringPerbandingan=el2+iK4+"daripada "+el1;
        }
            if(nilai==5){
                BarisKetersediaan[0]=5;
            stringPerbandingan=el2+iK5+"daripada "+el1;
        }
            if(nilai==6){
                BarisKetersediaan[0]=6;
            stringPerbandingan=el2+iK6+"daripada "+el1;
        }
            if(nilai==7){
                BarisKetersediaan[0]=7;
            stringPerbandingan=el2+iK7+"daripada "+el1;
        }
            if(nilai==8){
                BarisKetersediaan[0]=8;
            stringPerbandingan=el2+iK8+"daripada "+el1;
        }
            if(nilai==9){
                BarisKetersediaan[0]=9;
            stringPerbandingan=el2+iK9+"daripada "+el1;
        }
      BarisHarga[1]=BarisHarga[0]/BarisKetersediaan[0];
        }
    }
    document.getElementById("nilaiSlider1").innerHTML=nilai.toString();
    document.getElementById("kataSlider1").innerHTML=stringPerbandingan;
    printMatriks();
}

function prosesSlider2(value){
    var nilai;
    var stringPerbandingan;
    el1="Harga ";
    el2="Ketepatan Pengiriman ";
    if(value==8){
        nilai=1;
        stringPerbandingan=el1+iK1+"dengan "+el2;
        BarisHarga[2]=1;
        BarisKetepatanPengiriman[0]=1;
    }else{
        if(value<8){
            //lebih mementingkan Harga
        nilai=9-value;
        if(nilai==2){
            stringPerbandingan=el1+iK2+"daripada "+el2;
            BarisHarga[2]=2;            
        }
            if(nilai==3){
                BarisHarga[2]=3;
            stringPerbandingan=el1+iK3+"daripada "+el2;
        }
            if(nilai==4){
                BarisHarga[2]=4;
            stringPerbandingan=el1+iK4+"daripada "+el2;
        }
            if(nilai==5){
                BarisHarga[2]=5;
            stringPerbandingan=el1+iK5+"daripada "+el2;
        }
            if(nilai==6){
                BarisHarga[2]=6;
            stringPerbandingan=el1+iK6+"daripada "+el2;
        }
            if(nilai==7){
                BarisHarga[2]=7;
            stringPerbandingan=el1+iK7+"daripada "+el2;
        }
            if(nilai==8){
                BarisHarga[2]=8;
            stringPerbandingan=el1+iK8+"daripada "+el2;
        }
            if(nilai==9){
                BarisHarga[2]=9;
            stringPerbandingan=el1+iK9+"daripada "+el2;
        }
        BarisKetepatanPengiriman[0]=BarisHarga[0]/BarisHarga[2];
        }else{
            //lebih mementingkan Ketepatan Pengiriman
        nilai=value-7;
            if(nilai==2){
            BarisKetepatanPengiriman[0]=2;
            stringPerbandingan=el2+iK2+"daripada "+el1;                
        }
            if(nilai==3){
                BarisKetepatanPengiriman[0]=3;
            stringPerbandingan=el2+iK3+"daripada "+el1;
        }
            if(nilai==4){
                BarisKetepatanPengiriman[0]=4;
            stringPerbandingan=el2+iK4+"daripada "+el1;
        }
            if(nilai==5){
                BarisKetepatanPengiriman[0]=5;
            stringPerbandingan=el2+iK5+"daripada "+el1;
        }
            if(nilai==6){
                BarisKetepatanPengiriman[0]=6;
            stringPerbandingan=el2+iK6+"daripada "+el1;
        }
            if(nilai==7){
                BarisKetepatanPengiriman[0]=7;
            stringPerbandingan=el2+iK7+"daripada "+el1;
        }
            if(nilai==8){
                BarisKetepatanPengiriman[0]=8;
            stringPerbandingan=el2+iK8+"daripada "+el1;
        }
            if(nilai==9){
                BarisKetepatanPengiriman[0]=9;
            stringPerbandingan=el2+iK9+"daripada "+el1;
        }
      BarisHarga[2]=BarisHarga[0]/BarisKetepatanPengiriman[0];
        }
    }
    document.getElementById("nilaiSlider2").innerHTML=nilai.toString();
    document.getElementById("kataSlider2").innerHTML=stringPerbandingan;
    printMatriks();
}

function prosesSlider3(value){
    var nilai;
    var stringPerbandingan;
    el1="Harga ";
    el2="Kualitas ";
    if(value==8){
        nilai=1;
        stringPerbandingan=el1+iK1+"dengan "+el2;
        BarisHarga[3]=1;
        BarisKualitas[0]=1;
    }else{
        if(value<8){
            //lebih mementingkan Harga
        nilai=9-value;
        if(nilai==2){
            stringPerbandingan=el1+iK2+"daripada "+el2;
            BarisHarga[3]=2;            
        }
            if(nilai==3){
                BarisHarga[3]=3;
            stringPerbandingan=el1+iK3+"daripada "+el2;
        }
            if(nilai==4){
                BarisHarga[3]=4;
            stringPerbandingan=el1+iK4+"daripada "+el2;
        }
            if(nilai==5){
                BarisHarga[3]=5;
            stringPerbandingan=el1+iK5+"daripada "+el2;
        }
            if(nilai==6){
                BarisHarga[3]=6;
            stringPerbandingan=el1+iK6+"daripada "+el2;
        }
            if(nilai==7){
                BarisHarga[3]=7;
            stringPerbandingan=el1+iK7+"daripada "+el2;
        }
            if(nilai==8){
                BarisHarga[3]=8;
            stringPerbandingan=el1+iK8+"daripada "+el2;
        }
            if(nilai==9){
                BarisHarga[3]=9;
            stringPerbandingan=el1+iK9+"daripada "+el2;
        }
        BarisKualitas[0]=BarisHarga[0]/BarisHarga[3];
        }else{
            //lebih mementingkan Ketepatan Pengiriman
        nilai=value-7;
            if(nilai==2){
            BarisKualitas[0]=2;
            stringPerbandingan=el2+iK2+"daripada "+el1;                
        }
            if(nilai==3){
                BarisKualitas[0]=3;
            stringPerbandingan=el2+iK3+"daripada "+el1;
        }
            if(nilai==4){
                BarisKualitas[0]=4;
            stringPerbandingan=el2+iK4+"daripada "+el1;
        }
            if(nilai==5){
                BarisKualitas[0]=5;
            stringPerbandingan=el2+iK5+"daripada "+el1;
        }
            if(nilai==6){
                BarisKualitas[0]=6;
            stringPerbandingan=el2+iK6+"daripada "+el1;
        }
            if(nilai==7){
                BarisKualitas[0]=7;
            stringPerbandingan=el2+iK7+"daripada "+el1;
        }
            if(nilai==8){
                BarisKualitas[0]=8;
            stringPerbandingan=el2+iK8+"daripada "+el1;
        }
            if(nilai==9){
                BarisKualitas[0]=9;
            stringPerbandingan=el2+iK9+"daripada "+el1;
        }
      BarisHarga[3]=BarisHarga[0]/BarisKualitas[0];
        }
    }
    document.getElementById("nilaiSlider3").innerHTML=nilai.toString();
    document.getElementById("kataSlider3").innerHTML=stringPerbandingan;
    printMatriks();
}

function prosesSlider4(value){
    var nilai;
    var stringPerbandingan;
    el1="Ketersediaan ";
    el2="Ketepatan Pengiriman ";
    if(value==8){
        nilai=1;
        stringPerbandingan=el1+iK1+"dengan "+el2;
        BarisKetersediaan[2]=1;
        BarisKetepatanPengiriman[1]=1;
    }else{
        if(value<8){
            //lebih mementingkan Ketersediaan
        nilai=9-value;
        if(nilai==2){
            stringPerbandingan=el1+iK2+"daripada "+el2;
            BarisKetersediaan[2]=2;            
        }
            if(nilai==3){
                BarisKetersediaan[2]=3;
            stringPerbandingan=el1+iK3+"daripada "+el2;
        }
            if(nilai==4){
                BarisKetersediaan[2]=4;
            stringPerbandingan=el1+iK4+"daripada "+el2;
        }
            if(nilai==5){
                BarisKetersediaan[2]=5;
            stringPerbandingan=el1+iK5+"daripada "+el2;
        }
            if(nilai==6){
                BarisKetersediaan[2]=6;
            stringPerbandingan=el1+iK6+"daripada "+el2;
        }
            if(nilai==7){
                BarisKetersediaan[2]=7;
            stringPerbandingan=el1+iK7+"daripada "+el2;
        }
            if(nilai==8){
                BarisKetersediaan[2]=8;
            stringPerbandingan=el1+iK8+"daripada "+el2;
        }
            if(nilai==9){
                BarisKetersediaan[2]=9;
            stringPerbandingan=el1+iK9+"daripada "+el2;
        }
        BarisKetepatanPengiriman[1]=BarisKetersediaan[1]/BarisKetersediaan[2];
        }else{
            //lebih mementingkan Ketepatan Pengiriman
        nilai=value-7;
            if(nilai==2){
            BarisKetepatanPengiriman[1]=2;
            stringPerbandingan=el2+iK2+"daripada "+el1;                
        }
            if(nilai==3){
                BarisKetepatanPengiriman[1]=3;
            stringPerbandingan=el2+iK3+"daripada "+el1;
        }
            if(nilai==4){
                BarisKetepatanPengiriman[1]=4;
            stringPerbandingan=el2+iK4+"daripada "+el1;
        }
            if(nilai==5){
                BarisKetepatanPengiriman[1]=5;
            stringPerbandingan=el2+iK5+"daripada "+el1;
        }
            if(nilai==6){
                BarisKetepatanPengiriman[1]=6;
            stringPerbandingan=el2+iK6+"daripada "+el1;
        }
            if(nilai==7){
                BarisKetepatanPengiriman[1]=7;
            stringPerbandingan=el2+iK7+"daripada "+el1;
        }
            if(nilai==8){
                BarisKetepatanPengiriman[1]=8;
            stringPerbandingan=el2+iK8+"daripada "+el1;
        }
            if(nilai==9){
                BarisKetepatanPengiriman[1]=9;
            stringPerbandingan=el2+iK9+"daripada "+el1;
        }
      BarisKetersediaan[2]=BarisKetepatanPengiriman[2]/BarisKetepatanPengiriman[1];
        }
    }
    document.getElementById("nilaiSlider4").innerHTML=nilai.toString();
    document.getElementById("kataSlider4").innerHTML=stringPerbandingan;
    printMatriks();
}

function prosesSlider5(value){
    var nilai;
    var stringPerbandingan;
    el1="Ketersediaan ";
    el2="Kualitas ";
    if(value==8){
        nilai=1;
        stringPerbandingan=el1+iK1+"dengan "+el2;
        BarisKetersediaan[3]=1;
        BarisKualitas[1]=1;
    }else{
        if(value<8){
            //lebih mementingkan Ketersediaan
        nilai=9-value;
        if(nilai==2){
            stringPerbandingan=el1+iK2+"daripada "+el2;
            BarisKetersediaan[3]=2;            
        }
            if(nilai==3){
                BarisKetersediaan[3]=3;
            stringPerbandingan=el1+iK3+"daripada "+el2;
        }
            if(nilai==4){
                BarisKetersediaan[3]=4;
            stringPerbandingan=el1+iK4+"daripada "+el2;
        }
            if(nilai==5){
                BarisKetersediaan[3]=5;
            stringPerbandingan=el1+iK5+"daripada "+el2;
        }
            if(nilai==6){
                BarisKetersediaan[3]=6;
            stringPerbandingan=el1+iK6+"daripada "+el2;
        }
            if(nilai==7){
                BarisKetersediaan[3]=7;
            stringPerbandingan=el1+iK7+"daripada "+el2;
        }
            if(nilai==8){
                BarisKetersediaan[3]=8;
            stringPerbandingan=el1+iK8+"daripada "+el2;
        }
            if(nilai==9){
                BarisKetersediaan[3]=9;
            stringPerbandingan=el1+iK9+"daripada "+el2;
        }
        BarisKualitas[1]=BarisKetersediaan[1]/BarisKetersediaan[3];
        }else{
            //lebih mementingkan Kualitas
        nilai=value-7;
            if(nilai==2){
            BarisKualitas[1]=2;
            stringPerbandingan=el2+iK2+"daripada "+el1;                
        }
            if(nilai==3){
                BarisKualitas[1]=3;
            stringPerbandingan=el2+iK3+"daripada "+el1;
        }
            if(nilai==4){
                BarisKualitas[1]=4;
            stringPerbandingan=el2+iK4+"daripada "+el1;
        }
            if(nilai==5){
                BarisKualitas[1]=5;
            stringPerbandingan=el2+iK5+"daripada "+el1;
        }
            if(nilai==6){
                BarisKualitas[1]=6;
            stringPerbandingan=el2+iK6+"daripada "+el1;
        }
            if(nilai==7){
                BarisKualitas[1]=7;
            stringPerbandingan=el2+iK7+"daripada "+el1;
        }
            if(nilai==8){
                BarisKualitas[1]=8;
            stringPerbandingan=el2+iK8+"daripada "+el1;
        }
            if(nilai==9){
                BarisKualitas[1]=9;
            stringPerbandingan=el2+iK9+"daripada "+el1;
        }
      BarisKetersediaan[3]=BarisKualitas[2]/BarisKualitas[1];
        }
    }
    document.getElementById("nilaiSlider5").innerHTML=nilai.toString();
    document.getElementById("kataSlider5").innerHTML=stringPerbandingan;
    printMatriks();
}

function prosesSlider6(value){
    var nilai;
    var stringPerbandingan;
    el1="Ketepatan Pengiriman ";
    el2="Kualitas ";
    if(value==8){
        nilai=1;
        stringPerbandingan=el1+iK1+"dengan "+el2;
        BarisKetepatanPengiriman[3]=1;
        BarisKualitas[2]=1;
    }else{
        if(value<8){
            //lebih mementingkan Ketepatan Pengiriman
        nilai=9-value;
        if(nilai==2){
            stringPerbandingan=el1+iK2+"daripada "+el2;
            BarisKetepatanPengiriman[3]=2;            
        }
            if(nilai==3){
                BarisKetepatanPengiriman[3]=3;
            stringPerbandingan=el1+iK3+"daripada "+el2;
        }
            if(nilai==4){
                BarisKetepatanPengiriman[3]=4;
            stringPerbandingan=el1+iK4+"daripada "+el2;
        }
            if(nilai==5){
                BarisKetepatanPengiriman[3]=5;
            stringPerbandingan=el1+iK5+"daripada "+el2;
        }
            if(nilai==6){
                BarisKetepatanPengiriman[3]=6;
            stringPerbandingan=el1+iK6+"daripada "+el2;
        }
            if(nilai==7){
                BarisKetepatanPengiriman[3]=7;
            stringPerbandingan=el1+iK7+"daripada "+el2;
        }
            if(nilai==8){
                BarisKetepatanPengiriman[3]=8;
            stringPerbandingan=el1+iK8+"daripada "+el2;
        }
            if(nilai==9){
                BarisKetepatanPengiriman[3]=9;
            stringPerbandingan=el1+iK9+"daripada "+el2;
        }
        BarisKualitas[2]=BarisKetepatanPengiriman[2]/BarisKetepatanPengiriman[3];
        }else{
            //lebih mementingkan Kualitas
        nilai=value-7;
            if(nilai==2){
            BarisKualitas[2]=2;
            stringPerbandingan=el2+iK2+"daripada "+el1;                
        }
            if(nilai==3){
                BarisKualitas[2]=3;
            stringPerbandingan=el2+iK3+"daripada "+el1;
        }
            if(nilai==4){
                BarisKualitas[2]=4;
            stringPerbandingan=el2+iK4+"daripada "+el1;
        }
            if(nilai==5){
                BarisKualitas[2]=5;
            stringPerbandingan=el2+iK5+"daripada "+el1;
        }
            if(nilai==6){
                BarisKualitas[2]=6;
            stringPerbandingan=el2+iK6+"daripada "+el1;
        }
            if(nilai==7){
                BarisKualitas[2]=7;
            stringPerbandingan=el2+iK7+"daripada "+el1;
        }
            if(nilai==8){
                BarisKualitas[2]=8;
            stringPerbandingan=el2+iK8+"daripada "+el1;
        }
            if(nilai==9){
                BarisKualitas[2]=9;
            stringPerbandingan=el2+iK9+"daripada "+el1;
        }
      BarisKetepatanPengiriman[3]=BarisKualitas[3]/BarisKualitas[2];
        }
    }
    document.getElementById("nilaiSlider6").innerHTML=nilai.toString();
    document.getElementById("kataSlider6").innerHTML=stringPerbandingan;
    printMatriks();
}

function printMatriks(){
    for(var i=0;i<4;i++){
       var index=i+1;

       //document.getElementById("BarisHarga"+(i+1)).innerHTML=BarisHarga[i];
//document.getElementById("BarisKetersediaan"+(i+1)).innerHTML=BarisKetersediaan[i];
       //document.getElementById("BarisKetepatanPengirimanPenulis"+(i+1)).innerHTML=BarisKetepatanPengiriman[i];
       //document.getElementById("BarisKualitas"+(i+1)).innerHTML=BarisKualitas[i];
   }
    menjumlahKolom();
}

function menjumlahKolom(){
    //menghitung jumlah tiap kolom
var jumlahTiapKolom=new Array(1,1,1,1);
       for(var i=0;i<4;i++){
jumlahTiapKolom[i]=BarisHarga[i]+BarisKetersediaan[i]+BarisKetepatanPengiriman[i]+BarisKualitas[i];
       }
    //document.getElementById("jumlahKolom1").innerHTML=jumlahTiapKolom[0];
    //document.getElementById("jumlahKolom2").innerHTML=jumlahTiapKolom[1];
    //document.getElementById("jumlahKolom3").innerHTML=jumlahTiapKolom[2];
    //document.getElementById("jumlahKolom4").innerHTML=jumlahTiapKolom[3];
    menormalisasiMatriksInput(jumlahTiapKolom);
}

function menormalisasiMatriksInput(jumlahTiapKolom){
var normBarisHarga=new Array(1,1,1,1);
var normBarisKetersediaan=new Array(1,1,1,1);
var normBarisKetepatanPengiriman=new Array(1,1,1,1);
var normBarisKualitas=new Array(1,1,1,1);
    
    for(var i=0;i<4;i++){
normBarisHarga[i]=BarisHarga[i]/jumlahTiapKolom[i];
//document.getElementById("barisNormHarga"+(i+1)).innerHTML=normBarisHarga[i];
normBarisKetersediaan[i]=BarisKetersediaan[i]/jumlahTiapKolom[i];
//document.getElementById("barisNormKetersediaan"+(i+1)).innerHTML=normBarisKetersediaan[i];   
normBarisKetepatanPengiriman[i]=BarisKetepatanPengiriman[i]/jumlahTiapKolom[i];
//document.getElementById("barisNormKetepatanPengiriman"+(i+1)).innerHTML=normBarisKetepatanPengiriman[i];
normBarisKualitas[i]=BarisKualitas[i]/jumlahTiapKolom[i];
//document.getElementById("barisNormKualitas"+(i+1)).innerHTML=normBarisKualitas[i];
    }
    
menjumlahBarisNorm(normBarisHarga,normBarisKetersediaan,normBarisKetepatanPengiriman,normBarisKualitas);
}

function menjumlahBarisNorm(normBarisHarga,normBarisKetersediaan,normBarisKetepatanPengiriman,normBarisKualitas){
    var jumlahTiapBaris=new Array(1,1,1,1);
    jumlahTiapBaris[0]=normBarisHarga.reduce(totalSum);
    jumlahTiapBaris[1]=normBarisKetersediaan.reduce(totalSum);
    jumlahTiapBaris[2]=normBarisKetepatanPengiriman.reduce(totalSum);
    jumlahTiapBaris[3]=normBarisKualitas.reduce(totalSum);
 //document.getElementById("barisNormHarga5").innerHTML=jumlahTiapBaris[0];
//document.getElementById("barisNormKetersediaan5").innerHTML=jumlahTiapBaris[1];
    //document.getElementById("barisNormKetepatanPengiriman5").innerHTML=jumlahTiapBaris[2];
    //document.getElementById("barisNormKualitas5").innerHTML=jumlahTiapBaris[3];
    menghitungPrioritasRelatifKriteria(jumlahTiapBaris);
}

function menghitungPrioritasRelatifKriteria(jumlahTiapBaris){
    for(var i=0;i<4;i++){
    prioritasRelatifKriteria[i]=jumlahTiapBaris[i]/4;}
//document.getElementById("barisNormHarga6").innerHTML=prioritasRelatifKriteria[0];    //document.getElementById("barisNormKetersediaan6").innerHTML=prioritasRelatifKriteria[1];    //document.getElementById("barisNormKetepatanPengiriman6").innerHTML=prioritasRelatifKriteria[2];    //document.getElementById("barisNormKualitas6").innerHTML=prioritasRelatifKriteria[3];
    mengukurKonsistensi();
}

function mengukurKonsistensi(){
var konsBarisHarga=new Array(1,1,1,1);
var konsBarisKetersediaan=new Array(1,1,1,1);
var konsBarisKetepatanPengiriman=new Array(1,1,1,1);
var konsBarisKualitas=new Array(1,1,1,1);
    for(var i=0;i<4;i++){
        konsBarisHarga[i]=BarisHarga[i]*prioritasRelatifKriteria[i];
        //document.getElementById("barisKonsHarga"+(i+1)).innerHTML=konsBarisHarga[i];
        konsBarisKetersediaan[i]=BarisKetersediaan[i]*prioritasRelatifKriteria[i];
        //document.getElementById("barisKonsKetersediaan"+(i+1)).innerHTML=konsBarisKetersediaan[i];
        konsBarisKetepatanPengiriman[i]=BarisKetepatanPengiriman[i]*prioritasRelatifKriteria[i];
        //document.getElementById("barisKonsKetepatanPengiriman"+(i+1)).innerHTML=konsBarisKetepatanPengiriman[i];
        konsBarisKualitas[i]=BarisKualitas[i]*prioritasRelatifKriteria[i];
        //document.getElementById("barisKonsKualitas"+(i+1)).innerHTML=konsBarisKualitas[i];
    }
 menjumlahBarisKons(konsBarisHarga,konsBarisKetersediaan,konsBarisKetepatanPengiriman,konsBarisKualitas);
}

function menjumlahBarisKons(konsBarisHarga,konsBarisKetersediaan,konsBarisKetepatanPengiriman,konsBarisKualitas){
    var jumlahTiapBaris=new Array(1,1,1,1);
    jumlahTiapBaris[0]=konsBarisHarga.reduce(totalSum);
    jumlahTiapBaris[1]=konsBarisKetersediaan.reduce(totalSum);
    jumlahTiapBaris[2]=konsBarisKetepatanPengiriman.reduce(totalSum);
    jumlahTiapBaris[3]=konsBarisKualitas.reduce(totalSum);
 ////document.getElementById("barisKonsHarga5").innerHTML=jumlahTiapBaris[0];
////document.getElementById("barisKonsKetersediaan5").innerHTML=jumlahTiapBaris[1];
    //document.getElementById("barisKonsKetepatanPengiriman5").innerHTML=jumlahTiapBaris[2];
    //document.getElementById("barisKonsKualitas5").innerHTML=jumlahTiapBaris[3];
    sumRelatifKriteria(jumlahTiapBaris);
}
function sumRelatifKriteria(jumlahTiapBaris){
    var totalRelatifKriteria=new Array(1,1,1,1);
    for(var i=0;i<4;i++){
        totalRelatifKriteria[i]=jumlahTiapBaris[i]/prioritasRelatifKriteria[i];
    }
    //document.getElementById("barisKonsHarga6").innerHTML=totalRelatifKriteria[0];
    //document.getElementById("barisKonsKetersediaan6").innerHTML=totalRelatifKriteria[1];
    //document.getElementById("barisKonsKetepatanPengiriman6").innerHTML=totalRelatifKriteria[2];
    //document.getElementById("barisKonsKualitas6").innerHTML=totalRelatifKriteria[3];
    menghitungLamdaMaks(totalRelatifKriteria);
}

function menghitungLamdaMaks(totalRelatifKriteria){
    var lamdaMaks=totalRelatifKriteria.reduce(totalSum)/4;
    //document.getElementById("lamdaMaks").innerHTML=lamdaMaks;
    menghitungConsistencyIndex(lamdaMaks);
}
function menghitungConsistencyIndex(lamdaMaks){
    var n=4;
    var ci=(lamdaMaks-n)/(n-1);
    //document.getElementById("consistencyIndex").innerHTML=ci;
    menghitungCr(ci,n);
}
function menghitungCr(ci,n){
    var ri;
    n=n-1;
    if(n==1){ri=0.00;}
    if(n==2){ri=0.00;}
    if(n==3){ri=0.58;}
    if(n==4){ri=0.90;}
    if(n==5){ri=1.12;}
    if(n==6){ri=1.24;}
    if(n==7){ri=1.32;}
    if(n==8){ri=1.41;}
    if(n==9){ri=1.45;}
    if(n==10){ri=1.51;}
    
    var cr=ci/ri;
    //document.getElementById("cr").innerHTML=cr;
    if(cr<=0.1){
        //document.getElementById("hasilPreferensiPembobotan").innerHTML="<span style='color:green'>|CR<=0.1</span>";
        document.getElementById("sK").innerHTML="<span style='color:green'>Pembobotan Konsisten</span>";
        document.getElementById("buttonTampilrekomendasi").disabled=false;
    }else{
        //document.getElementById("hasilPreferensiPembobotan").innerHTML="<span style='color:red'>|CR>0.1</span>";
        document.getElementById("sK").innerHTML="<span style='color:red'>Pembobotan Tidak Konsisten</span>";
        document.getElementById("buttonTampilrekomendasi").disabled=true;
    }
}