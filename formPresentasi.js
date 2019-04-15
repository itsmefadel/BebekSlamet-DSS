// deklarasi matriks input pengguna
var barisRatingNovel=new Array(1,1,1,1);
var barisPenghargaan=new Array(1,1,1,1);
var barisPopularitas=new Array(1,1,1,1);
var barisRatingPenulis=new Array(1,1,1,1);
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
    el1="Rating Novel ";
    el2="Penghargaan ";
    if(value==8){
        nilai=1;
        stringPerbandingan=el1+iK1+"dengan "+el2;
        barisRatingNovel[1]=1;
        barisPenghargaan[0]=1;
    }else{
        if(value<8){
            //lebih mementingkan rating novel
        nilai=9-value;
        if(nilai==2){
            stringPerbandingan=el1+iK2+"daripada "+el2;
            barisRatingNovel[1]=2;            
        }
            if(nilai==3){
                barisRatingNovel[1]=3;
            stringPerbandingan=el1+iK3+"daripada "+el2;
        }
            if(nilai==4){
                barisRatingNovel[1]=4;
            stringPerbandingan=el1+iK4+"daripada "+el2;
        }
            if(nilai==5){
                barisRatingNovel[1]=5;
            stringPerbandingan=el1+iK5+"daripada "+el2;
        }
            if(nilai==6){
                barisRatingNovel[1]=6;
            stringPerbandingan=el1+iK6+"daripada "+el2;
        }
            if(nilai==7){
                barisRatingNovel[1]=7;
            stringPerbandingan=el1+iK7+"daripada "+el2;
        }
            if(nilai==8){
                barisRatingNovel[1]=8;
            stringPerbandingan=el1+iK8+"daripada "+el2;
        }
            if(nilai==9){
                barisRatingNovel[1]=9;
            stringPerbandingan=el1+iK9+"daripada "+el2;
        }
        barisPenghargaan[0]=barisRatingNovel[0]/barisRatingNovel[1];
        }else{
            //lebih mementingkan penghargaan
        nilai=value-7;
            if(nilai==2){
            barisPenghargaan[0]=2;
            stringPerbandingan=el2+iK2+"daripada "+el1;                
        }
            if(nilai==3){
                barisPenghargaan[0]=3;
            stringPerbandingan=el2+iK3+"daripada "+el1;
        }
            if(nilai==4){
                barisPenghargaan[0]=4;
            stringPerbandingan=el2+iK4+"daripada "+el1;
        }
            if(nilai==5){
                barisPenghargaan[0]=5;
            stringPerbandingan=el2+iK5+"daripada "+el1;
        }
            if(nilai==6){
                barisPenghargaan[0]=6;
            stringPerbandingan=el2+iK6+"daripada "+el1;
        }
            if(nilai==7){
                barisPenghargaan[0]=7;
            stringPerbandingan=el2+iK7+"daripada "+el1;
        }
            if(nilai==8){
                barisPenghargaan[0]=8;
            stringPerbandingan=el2+iK8+"daripada "+el1;
        }
            if(nilai==9){
                barisPenghargaan[0]=9;
            stringPerbandingan=el2+iK9+"daripada "+el1;
        }
      barisRatingNovel[1]=barisRatingNovel[0]/barisPenghargaan[0];
        }
    }
    document.getElementById("nilaiSlider1").innerHTML=nilai.toString();
    document.getElementById("kataSlider1").innerHTML=stringPerbandingan;
    printMatriks();
}

function prosesSlider2(value){
    var nilai;
    var stringPerbandingan;
    el1="Rating Novel ";
    el2="Popularitas Penulis ";
    if(value==8){
        nilai=1;
        stringPerbandingan=el1+iK1+"dengan "+el2;
        barisRatingNovel[2]=1;
        barisPopularitas[0]=1;
    }else{
        if(value<8){
            //lebih mementingkan rating novel
        nilai=9-value;
        if(nilai==2){
            stringPerbandingan=el1+iK2+"daripada "+el2;
            barisRatingNovel[2]=2;            
        }
            if(nilai==3){
                barisRatingNovel[2]=3;
            stringPerbandingan=el1+iK3+"daripada "+el2;
        }
            if(nilai==4){
                barisRatingNovel[2]=4;
            stringPerbandingan=el1+iK4+"daripada "+el2;
        }
            if(nilai==5){
                barisRatingNovel[2]=5;
            stringPerbandingan=el1+iK5+"daripada "+el2;
        }
            if(nilai==6){
                barisRatingNovel[2]=6;
            stringPerbandingan=el1+iK6+"daripada "+el2;
        }
            if(nilai==7){
                barisRatingNovel[2]=7;
            stringPerbandingan=el1+iK7+"daripada "+el2;
        }
            if(nilai==8){
                barisRatingNovel[2]=8;
            stringPerbandingan=el1+iK8+"daripada "+el2;
        }
            if(nilai==9){
                barisRatingNovel[2]=9;
            stringPerbandingan=el1+iK9+"daripada "+el2;
        }
        barisPopularitas[0]=barisRatingNovel[0]/barisRatingNovel[2];
        }else{
            //lebih mementingkan popularitas penulis
        nilai=value-7;
            if(nilai==2){
            barisPopularitas[0]=2;
            stringPerbandingan=el2+iK2+"daripada "+el1;                
        }
            if(nilai==3){
                barisPopularitas[0]=3;
            stringPerbandingan=el2+iK3+"daripada "+el1;
        }
            if(nilai==4){
                barisPopularitas[0]=4;
            stringPerbandingan=el2+iK4+"daripada "+el1;
        }
            if(nilai==5){
                barisPopularitas[0]=5;
            stringPerbandingan=el2+iK5+"daripada "+el1;
        }
            if(nilai==6){
                barisPopularitas[0]=6;
            stringPerbandingan=el2+iK6+"daripada "+el1;
        }
            if(nilai==7){
                barisPopularitas[0]=7;
            stringPerbandingan=el2+iK7+"daripada "+el1;
        }
            if(nilai==8){
                barisPopularitas[0]=8;
            stringPerbandingan=el2+iK8+"daripada "+el1;
        }
            if(nilai==9){
                barisPopularitas[0]=9;
            stringPerbandingan=el2+iK9+"daripada "+el1;
        }
      barisRatingNovel[2]=barisRatingNovel[0]/barisPopularitas[0];
        }
    }
    document.getElementById("nilaiSlider2").innerHTML=nilai.toString();
    document.getElementById("kataSlider2").innerHTML=stringPerbandingan;
    printMatriks();
}

function prosesSlider3(value){
    var nilai;
    var stringPerbandingan;
    el1="Rating Novel ";
    el2="Rating Penulis ";
    if(value==8){
        nilai=1;
        stringPerbandingan=el1+iK1+"dengan "+el2;
        barisRatingNovel[3]=1;
        barisRatingPenulis[0]=1;
    }else{
        if(value<8){
            //lebih mementingkan rating novel
        nilai=9-value;
        if(nilai==2){
            stringPerbandingan=el1+iK2+"daripada "+el2;
            barisRatingNovel[3]=2;            
        }
            if(nilai==3){
                barisRatingNovel[3]=3;
            stringPerbandingan=el1+iK3+"daripada "+el2;
        }
            if(nilai==4){
                barisRatingNovel[3]=4;
            stringPerbandingan=el1+iK4+"daripada "+el2;
        }
            if(nilai==5){
                barisRatingNovel[3]=5;
            stringPerbandingan=el1+iK5+"daripada "+el2;
        }
            if(nilai==6){
                barisRatingNovel[3]=6;
            stringPerbandingan=el1+iK6+"daripada "+el2;
        }
            if(nilai==7){
                barisRatingNovel[3]=7;
            stringPerbandingan=el1+iK7+"daripada "+el2;
        }
            if(nilai==8){
                barisRatingNovel[3]=8;
            stringPerbandingan=el1+iK8+"daripada "+el2;
        }
            if(nilai==9){
                barisRatingNovel[3]=9;
            stringPerbandingan=el1+iK9+"daripada "+el2;
        }
        barisRatingPenulis[0]=barisRatingNovel[0]/barisRatingNovel[3];
        }else{
            //lebih mementingkan popularitas penulis
        nilai=value-7;
            if(nilai==2){
            barisRatingPenulis[0]=2;
            stringPerbandingan=el2+iK2+"daripada "+el1;                
        }
            if(nilai==3){
                barisRatingPenulis[0]=3;
            stringPerbandingan=el2+iK3+"daripada "+el1;
        }
            if(nilai==4){
                barisRatingPenulis[0]=4;
            stringPerbandingan=el2+iK4+"daripada "+el1;
        }
            if(nilai==5){
                barisRatingPenulis[0]=5;
            stringPerbandingan=el2+iK5+"daripada "+el1;
        }
            if(nilai==6){
                barisRatingPenulis[0]=6;
            stringPerbandingan=el2+iK6+"daripada "+el1;
        }
            if(nilai==7){
                barisRatingPenulis[0]=7;
            stringPerbandingan=el2+iK7+"daripada "+el1;
        }
            if(nilai==8){
                barisRatingPenulis[0]=8;
            stringPerbandingan=el2+iK8+"daripada "+el1;
        }
            if(nilai==9){
                barisRatingPenulis[0]=9;
            stringPerbandingan=el2+iK9+"daripada "+el1;
        }
      barisRatingNovel[3]=barisRatingNovel[0]/barisRatingPenulis[0];
        }
    }
    document.getElementById("nilaiSlider3").innerHTML=nilai.toString();
    document.getElementById("kataSlider3").innerHTML=stringPerbandingan;
    printMatriks();
}

function prosesSlider4(value){
    var nilai;
    var stringPerbandingan;
    el1="Penghargaan ";
    el2="Popularitas Penulis ";
    if(value==8){
        nilai=1;
        stringPerbandingan=el1+iK1+"dengan "+el2;
        barisPenghargaan[2]=1;
        barisPopularitas[1]=1;
    }else{
        if(value<8){
            //lebih mementingkan Penghargaan
        nilai=9-value;
        if(nilai==2){
            stringPerbandingan=el1+iK2+"daripada "+el2;
            barisPenghargaan[2]=2;            
        }
            if(nilai==3){
                barisPenghargaan[2]=3;
            stringPerbandingan=el1+iK3+"daripada "+el2;
        }
            if(nilai==4){
                barisPenghargaan[2]=4;
            stringPerbandingan=el1+iK4+"daripada "+el2;
        }
            if(nilai==5){
                barisPenghargaan[2]=5;
            stringPerbandingan=el1+iK5+"daripada "+el2;
        }
            if(nilai==6){
                barisPenghargaan[2]=6;
            stringPerbandingan=el1+iK6+"daripada "+el2;
        }
            if(nilai==7){
                barisPenghargaan[2]=7;
            stringPerbandingan=el1+iK7+"daripada "+el2;
        }
            if(nilai==8){
                barisPenghargaan[2]=8;
            stringPerbandingan=el1+iK8+"daripada "+el2;
        }
            if(nilai==9){
                barisPenghargaan[2]=9;
            stringPerbandingan=el1+iK9+"daripada "+el2;
        }
        barisPopularitas[1]=barisPenghargaan[1]/barisPenghargaan[2];
        }else{
            //lebih mementingkan popularitas penulis
        nilai=value-7;
            if(nilai==2){
            barisPopularitas[1]=2;
            stringPerbandingan=el2+iK2+"daripada "+el1;                
        }
            if(nilai==3){
                barisPopularitas[1]=3;
            stringPerbandingan=el2+iK3+"daripada "+el1;
        }
            if(nilai==4){
                barisPopularitas[1]=4;
            stringPerbandingan=el2+iK4+"daripada "+el1;
        }
            if(nilai==5){
                barisPopularitas[1]=5;
            stringPerbandingan=el2+iK5+"daripada "+el1;
        }
            if(nilai==6){
                barisPopularitas[1]=6;
            stringPerbandingan=el2+iK6+"daripada "+el1;
        }
            if(nilai==7){
                barisPopularitas[1]=7;
            stringPerbandingan=el2+iK7+"daripada "+el1;
        }
            if(nilai==8){
                barisPopularitas[1]=8;
            stringPerbandingan=el2+iK8+"daripada "+el1;
        }
            if(nilai==9){
                barisPopularitas[1]=9;
            stringPerbandingan=el2+iK9+"daripada "+el1;
        }
      barisPenghargaan[2]=barisPopularitas[2]/barisPopularitas[1];
        }
    }
    document.getElementById("nilaiSlider4").innerHTML=nilai.toString();
    document.getElementById("kataSlider4").innerHTML=stringPerbandingan;
    printMatriks();
}

function prosesSlider5(value){
    var nilai;
    var stringPerbandingan;
    el1="Penghargaan ";
    el2="Rating Penulis ";
    if(value==8){
        nilai=1;
        stringPerbandingan=el1+iK1+"dengan "+el2;
        barisPenghargaan[3]=1;
        barisRatingPenulis[1]=1;
    }else{
        if(value<8){
            //lebih mementingkan Penghargaan
        nilai=9-value;
        if(nilai==2){
            stringPerbandingan=el1+iK2+"daripada "+el2;
            barisPenghargaan[3]=2;            
        }
            if(nilai==3){
                barisPenghargaan[3]=3;
            stringPerbandingan=el1+iK3+"daripada "+el2;
        }
            if(nilai==4){
                barisPenghargaan[3]=4;
            stringPerbandingan=el1+iK4+"daripada "+el2;
        }
            if(nilai==5){
                barisPenghargaan[3]=5;
            stringPerbandingan=el1+iK5+"daripada "+el2;
        }
            if(nilai==6){
                barisPenghargaan[3]=6;
            stringPerbandingan=el1+iK6+"daripada "+el2;
        }
            if(nilai==7){
                barisPenghargaan[3]=7;
            stringPerbandingan=el1+iK7+"daripada "+el2;
        }
            if(nilai==8){
                barisPenghargaan[3]=8;
            stringPerbandingan=el1+iK8+"daripada "+el2;
        }
            if(nilai==9){
                barisPenghargaan[3]=9;
            stringPerbandingan=el1+iK9+"daripada "+el2;
        }
        barisRatingPenulis[1]=barisPenghargaan[1]/barisPenghargaan[3];
        }else{
            //lebih mementingkan rating penulis
        nilai=value-7;
            if(nilai==2){
            barisRatingPenulis[1]=2;
            stringPerbandingan=el2+iK2+"daripada "+el1;                
        }
            if(nilai==3){
                barisRatingPenulis[1]=3;
            stringPerbandingan=el2+iK3+"daripada "+el1;
        }
            if(nilai==4){
                barisRatingPenulis[1]=4;
            stringPerbandingan=el2+iK4+"daripada "+el1;
        }
            if(nilai==5){
                barisRatingPenulis[1]=5;
            stringPerbandingan=el2+iK5+"daripada "+el1;
        }
            if(nilai==6){
                barisRatingPenulis[1]=6;
            stringPerbandingan=el2+iK6+"daripada "+el1;
        }
            if(nilai==7){
                barisRatingPenulis[1]=7;
            stringPerbandingan=el2+iK7+"daripada "+el1;
        }
            if(nilai==8){
                barisRatingPenulis[1]=8;
            stringPerbandingan=el2+iK8+"daripada "+el1;
        }
            if(nilai==9){
                barisRatingPenulis[1]=9;
            stringPerbandingan=el2+iK9+"daripada "+el1;
        }
      barisPenghargaan[3]=barisRatingPenulis[2]/barisRatingPenulis[1];
        }
    }
    document.getElementById("nilaiSlider5").innerHTML=nilai.toString();
    document.getElementById("kataSlider5").innerHTML=stringPerbandingan;
    printMatriks();
}

function prosesSlider6(value){
    var nilai;
    var stringPerbandingan;
    el1="Popularitas Penulis ";
    el2="Rating Penulis ";
    if(value==8){
        nilai=1;
        stringPerbandingan=el1+iK1+"dengan "+el2;
        barisPopularitas[3]=1;
        barisRatingPenulis[2]=1;
    }else{
        if(value<8){
            //lebih mementingkan popularitas penulis
        nilai=9-value;
        if(nilai==2){
            stringPerbandingan=el1+iK2+"daripada "+el2;
            barisPopularitas[3]=2;            
        }
            if(nilai==3){
                barisPopularitas[3]=3;
            stringPerbandingan=el1+iK3+"daripada "+el2;
        }
            if(nilai==4){
                barisPopularitas[3]=4;
            stringPerbandingan=el1+iK4+"daripada "+el2;
        }
            if(nilai==5){
                barisPopularitas[3]=5;
            stringPerbandingan=el1+iK5+"daripada "+el2;
        }
            if(nilai==6){
                barisPopularitas[3]=6;
            stringPerbandingan=el1+iK6+"daripada "+el2;
        }
            if(nilai==7){
                barisPopularitas[3]=7;
            stringPerbandingan=el1+iK7+"daripada "+el2;
        }
            if(nilai==8){
                barisPopularitas[3]=8;
            stringPerbandingan=el1+iK8+"daripada "+el2;
        }
            if(nilai==9){
                barisPopularitas[3]=9;
            stringPerbandingan=el1+iK9+"daripada "+el2;
        }
        barisRatingPenulis[2]=barisPopularitas[2]/barisPopularitas[3];
        }else{
            //lebih mementingkan rating penulis
        nilai=value-7;
            if(nilai==2){
            barisRatingPenulis[2]=2;
            stringPerbandingan=el2+iK2+"daripada "+el1;                
        }
            if(nilai==3){
                barisRatingPenulis[2]=3;
            stringPerbandingan=el2+iK3+"daripada "+el1;
        }
            if(nilai==4){
                barisRatingPenulis[2]=4;
            stringPerbandingan=el2+iK4+"daripada "+el1;
        }
            if(nilai==5){
                barisRatingPenulis[2]=5;
            stringPerbandingan=el2+iK5+"daripada "+el1;
        }
            if(nilai==6){
                barisRatingPenulis[2]=6;
            stringPerbandingan=el2+iK6+"daripada "+el1;
        }
            if(nilai==7){
                barisRatingPenulis[2]=7;
            stringPerbandingan=el2+iK7+"daripada "+el1;
        }
            if(nilai==8){
                barisRatingPenulis[2]=8;
            stringPerbandingan=el2+iK8+"daripada "+el1;
        }
            if(nilai==9){
                barisRatingPenulis[2]=9;
            stringPerbandingan=el2+iK9+"daripada "+el1;
        }
      barisPopularitas[3]=barisRatingPenulis[3]/barisRatingPenulis[2];
        }
    }
    document.getElementById("nilaiSlider6").innerHTML=nilai.toString();
    document.getElementById("kataSlider6").innerHTML=stringPerbandingan;
    printMatriks();
}

function printMatriks(){
    for(var i=0;i<4;i++){
       var index=i+1;

       document.getElementById("barisRatingNovel"+(i+1)).innerHTML=barisRatingNovel[i];
document.getElementById("barisPenghargaan"+(i+1)).innerHTML=barisPenghargaan[i];
       document.getElementById("barisPopularitasPenulis"+(i+1)).innerHTML=barisPopularitas[i];
       document.getElementById("barisRatingPenulis"+(i+1)).innerHTML=barisRatingPenulis[i];
   }
    menjumlahKolom();
}

function menjumlahKolom(){
    //menghitung jumlah tiap kolom
var jumlahTiapKolom=new Array(1,1,1,1);
       for(var i=0;i<4;i++){
jumlahTiapKolom[i]=barisRatingNovel[i]+barisPenghargaan[i]+barisPopularitas[i]+barisRatingPenulis[i];
       }
    document.getElementById("jumlahKolom1").innerHTML=jumlahTiapKolom[0];
    document.getElementById("jumlahKolom2").innerHTML=jumlahTiapKolom[1];
    document.getElementById("jumlahKolom3").innerHTML=jumlahTiapKolom[2];
    document.getElementById("jumlahKolom4").innerHTML=jumlahTiapKolom[3];
    menormalisasiMatriksInput(jumlahTiapKolom);
}

function menormalisasiMatriksInput(jumlahTiapKolom){
var normBarisRatingNovel=new Array(1,1,1,1);
var normBarisPenghargaan=new Array(1,1,1,1);
var normBarisPopularitas=new Array(1,1,1,1);
var normBarisRatingPenulis=new Array(1,1,1,1);
    
    for(var i=0;i<4;i++){
normBarisRatingNovel[i]=barisRatingNovel[i]/jumlahTiapKolom[i];
document.getElementById("barisNormRatingNovel"+(i+1)).innerHTML=normBarisRatingNovel[i];
normBarisPenghargaan[i]=barisPenghargaan[i]/jumlahTiapKolom[i];
document.getElementById("barisNormPenghargaan"+(i+1)).innerHTML=normBarisPenghargaan[i];   
normBarisPopularitas[i]=barisPopularitas[i]/jumlahTiapKolom[i];
document.getElementById("barisNormPopularitas"+(i+1)).innerHTML=normBarisPopularitas[i];
normBarisRatingPenulis[i]=barisRatingPenulis[i]/jumlahTiapKolom[i];
document.getElementById("barisNormRatingPenulis"+(i+1)).innerHTML=normBarisRatingPenulis[i];
    }
    
menjumlahBarisNorm(normBarisRatingNovel,normBarisPenghargaan,normBarisPopularitas,normBarisRatingPenulis);
}

function menjumlahBarisNorm(normBarisRatingNovel,normBarisPenghargaan,normBarisPopularitas,normBarisRatingPenulis){
    var jumlahTiapBaris=new Array(1,1,1,1);
    jumlahTiapBaris[0]=normBarisRatingNovel.reduce(totalSum);
    jumlahTiapBaris[1]=normBarisPenghargaan.reduce(totalSum);
    jumlahTiapBaris[2]=normBarisPopularitas.reduce(totalSum);
    jumlahTiapBaris[3]=normBarisRatingPenulis.reduce(totalSum);
 document.getElementById("barisNormRatingNovel5").innerHTML=jumlahTiapBaris[0];
document.getElementById("barisNormPenghargaan5").innerHTML=jumlahTiapBaris[1];
    document.getElementById("barisNormPopularitas5").innerHTML=jumlahTiapBaris[2];
    document.getElementById("barisNormRatingPenulis5").innerHTML=jumlahTiapBaris[3];
    menghitungPrioritasRelatifKriteria(jumlahTiapBaris);
}

function menghitungPrioritasRelatifKriteria(jumlahTiapBaris){
    for(var i=0;i<4;i++){
    prioritasRelatifKriteria[i]=jumlahTiapBaris[i]/4;}
document.getElementById("barisNormRatingNovel6").innerHTML=prioritasRelatifKriteria[0];    document.getElementById("barisNormPenghargaan6").innerHTML=prioritasRelatifKriteria[1];    document.getElementById("barisNormPopularitas6").innerHTML=prioritasRelatifKriteria[2];    document.getElementById("barisNormRatingPenulis6").innerHTML=prioritasRelatifKriteria[3];
    mengukurKonsistensi();
}

function mengukurKonsistensi(){
var konsBarisRatingNovel=new Array(1,1,1,1);
var konsBarisPenghargaan=new Array(1,1,1,1);
var konsBarisPopularitas=new Array(1,1,1,1);
var konsBarisRatingPenulis=new Array(1,1,1,1);
    for(var i=0;i<4;i++){
        konsBarisRatingNovel[i]=barisRatingNovel[i]*prioritasRelatifKriteria[i];
        document.getElementById("barisKonsRatingNovel"+(i+1)).innerHTML=konsBarisRatingNovel[i];
        konsBarisPenghargaan[i]=barisPenghargaan[i]*prioritasRelatifKriteria[i];
        document.getElementById("barisKonsPenghargaan"+(i+1)).innerHTML=konsBarisPenghargaan[i];
        konsBarisPopularitas[i]=barisPopularitas[i]*prioritasRelatifKriteria[i];
        document.getElementById("barisKonsPopularitas"+(i+1)).innerHTML=konsBarisPopularitas[i];
        konsBarisRatingPenulis[i]=barisRatingPenulis[i]*prioritasRelatifKriteria[i];
        document.getElementById("barisKonsRatingPenulis"+(i+1)).innerHTML=konsBarisRatingPenulis[i];
    }
 menjumlahBarisKons(konsBarisRatingNovel,konsBarisPenghargaan,konsBarisPopularitas,konsBarisRatingPenulis);
}

function menjumlahBarisKons(konsBarisRatingNovel,konsBarisPenghargaan,konsBarisPopularitas,konsBarisRatingPenulis){
    var jumlahTiapBaris=new Array(1,1,1,1);
    jumlahTiapBaris[0]=konsBarisRatingNovel.reduce(totalSum);
    jumlahTiapBaris[1]=konsBarisPenghargaan.reduce(totalSum);
    jumlahTiapBaris[2]=konsBarisPopularitas.reduce(totalSum);
    jumlahTiapBaris[3]=konsBarisRatingPenulis.reduce(totalSum);
 document.getElementById("barisKonsRatingNovel5").innerHTML=jumlahTiapBaris[0];
document.getElementById("barisKonsPenghargaan5").innerHTML=jumlahTiapBaris[1];
    document.getElementById("barisKonsPopularitas5").innerHTML=jumlahTiapBaris[2];
    document.getElementById("barisKonsRatingPenulis5").innerHTML=jumlahTiapBaris[3];
    sumRelatifKriteria(jumlahTiapBaris);
}
function sumRelatifKriteria(jumlahTiapBaris){
    var totalRelatifKriteria=new Array(1,1,1,1);
    for(var i=0;i<4;i++){
        totalRelatifKriteria[i]=jumlahTiapBaris[i]/prioritasRelatifKriteria[i];
    }
    document.getElementById("barisKonsRatingNovel6").innerHTML=totalRelatifKriteria[0];
    document.getElementById("barisKonsPenghargaan6").innerHTML=totalRelatifKriteria[1];
    document.getElementById("barisKonsPopularitas6").innerHTML=totalRelatifKriteria[2];
    document.getElementById("barisKonsRatingPenulis6").innerHTML=totalRelatifKriteria[3];
    menghitungLamdaMaks(totalRelatifKriteria);
}

function menghitungLamdaMaks(totalRelatifKriteria){
    var lamdaMaks=totalRelatifKriteria.reduce(totalSum)/4;
    document.getElementById("lamdaMaks").innerHTML=lamdaMaks;
    menghitungConsistencyIndex(lamdaMaks);
}
function menghitungConsistencyIndex(lamdaMaks){
    var n=4;
    var ci=(lamdaMaks-n)/(n-1);
    document.getElementById("consistencyIndex").innerHTML=ci;
    menghitungCr(ci,n);
}
function menghitungCr(ci,n){
    var ri;
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
    document.getElementById("cr").innerHTML=cr;
    if(cr<=0.1){
        document.getElementById("hasilPreferensiPembobotan").innerHTML="<span style='color:green'>|CR<=0.1</span>";
        document.getElementById("sK").innerHTML="<span style='color:green'>Pembobotan Konsisten</span>";
        document.getElementById("buttonTampilrekomendasi").disabled=false;
    }else{
        document.getElementById("hasilPreferensiPembobotan").innerHTML="<span style='color:red'>|CR>0.1</span>";
        document.getElementById("sK").innerHTML="<span style='color:red'>Pembobotan Tidak Konsisten</span>";
        document.getElementById("buttonTampilrekomendasi").disabled=true;
    }
}