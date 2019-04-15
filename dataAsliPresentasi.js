const dataRaw=[ 
[1,'Supplier 1',5,2,3,3,13], 
[2,'Supplier 2',3,3,5,4,15], 
[3,'Supplier 3',4,3,5,5,17], 
[4,'Supplier 4',2,5,4,5,16], 
[5,'Supplier 5',5,1,2,4,12], 
[6,'Supplier 6',4,4,3,3,14],
];
var jumlahBaris=dataRaw.length;

printDataAsli();

function printDataAsli(){
    //membuat header tabel
    var tr1=document.createElement("tr");
    var th1=document.createElement("th");
    th1.appendChild(document.createTextNode("No"));
    tr1.appendChild(th1);
    var th2=document.createElement("th");
    th2.appendChild(document.createTextNode("Nama Supplier"));
    tr1.appendChild(th2);
    var th3=document.createElement("th");
    th3.appendChild(document.createTextNode("Harga"));
    tr1.appendChild(th3);
    var th4=document.createElement("th");
    th4.appendChild(document.createTextNode("Ketersediaan"));
    tr1.appendChild(th4);
    var th5=document.createElement("th");
    th5.appendChild(document.createTextNode("Ketepatan Pengiriman"));
    tr1.appendChild(th5);
    var th6=document.createElement("th");
    th6.appendChild(document.createTextNode("Kualitas"));
    tr1.appendChild(th6);
    var th7=document.createElement("th");
    th7.appendChild(document.createTextNode("Nilai Akhir"));
    tr1.appendChild(th7);
    document.getElementById("tabelDataAsli").appendChild(tr1);
    
    //deklarasi Jumlah Tiap Kolom
    var sumKolomHarga=0,sumKolomKetersediaan=0,sumKolomKetepatan=0,sumKolomKualitas=0;
    
    //memprint isi tabel tiap baris
    for(var i=0;i<jumlahBaris;i++){
    var tr1=document.createElement("tr");
    var th1=document.createElement("th");
    th1.appendChild(document.createTextNode(dataRaw[i][0]));
    tr1.appendChild(th1);
    var th2=document.createElement("th");
    th2.appendChild(document.createTextNode(dataRaw[i][1]));
    tr1.appendChild(th2);
    var th3=document.createElement("th");
    th3.appendChild(document.createTextNode(dataRaw[i][2]));
    tr1.appendChild(th3);
    var th4=document.createElement("th");
    th4.appendChild(document.createTextNode(dataRaw[i][3]));
    tr1.appendChild(th4);
    var th5=document.createElement("th");
    th5.appendChild(document.createTextNode(dataRaw[i][4]));
    tr1.appendChild(th5);
    var th6=document.createElement("th");
    th6.appendChild(document.createTextNode(dataRaw[i][5]));
    tr1.appendChild(th6);
    var th7=document.createElement("th");
    th7.appendChild(document.createTextNode(dataRaw[i][6]));
    tr1.appendChild(th7);
    document.getElementById("tabelDataAsli").appendChild(tr1);
    
        sumKolomHarga=sumKolomHarga+dataRaw[i][2];
        sumKolomKetersediaan=sumKolomKetersediaan+dataRaw[i][3];
        sumKolomKetepatan=sumKolomKetepatan+dataRaw[i][4];
        sumKolomKualitas=sumKolomKualitas+dataRaw[i][5];
    }
    //deklarasi akar untuk tiap kolom
    var akarHarga=Math.sqrt(sumKolomHarga),akarKetersediaan=Math.sqrt(sumKolomKetersediaan),akarKetepatanPengiriman=Math.sqrt(sumKolomKetepatan),akarKualitas=Math.sqrt(sumKolomKualitas);
    //print nilai akar tiap kolom
    
    
    //nilai Sum tiap Kolom
    var tr1=document.createElement("tr");
    var th1=document.createElement("th");
    tr1.appendChild(th1);
    var th2=document.createElement("th");
    th2.appendChild(document.createTextNode("SUM"));
    th2.setAttribute("style","background-color:green");
    tr1.appendChild(th2);
    var th3=document.createElement("th");
    th3.appendChild(document.createTextNode(sumKolomHarga));
    th3.setAttribute("style","background-color:green");
    tr1.appendChild(th3);
    var th4=document.createElement("th");
    th4.appendChild(document.createTextNode(sumKolomKetersediaan));
    th4.setAttribute("style","background-color:green");
    tr1.appendChild(th4);
    var th5=document.createElement("th");
    th5.appendChild(document.createTextNode(sumKolomKetepatan));
    th5.setAttribute("style","background-color:green");
    tr1.appendChild(th5);
    var th6=document.createElement("th");
    th6.appendChild(document.createTextNode(sumKolomKualitas));
    th6.setAttribute("style","background-color:green");
    tr1.appendChild(th6);
    document.getElementById("tabelDataAsli").appendChild(tr1);
    //nilai akar
    var tr1=document.createElement("tr");
    var th1=document.createElement("th");
    tr1.appendChild(th1);
    var th2=document.createElement("th");
    th2.appendChild(document.createTextNode("Akar"));
    th2.setAttribute("style","background-color:yellow");
    tr1.appendChild(th2);
    var th3=document.createElement("th");
    th3.appendChild(document.createTextNode(akarHarga));
    th3.setAttribute("style","background-color:yellow");
    tr1.appendChild(th3);
    var th4=document.createElement("th");
    th4.appendChild(document.createTextNode(akarKetersediaan));
    th4.setAttribute("style","background-color:yellow");
    tr1.appendChild(th4);
    var th5=document.createElement("th");
    th5.appendChild(document.createTextNode(akarKetepatanPengiriman));
    th5.setAttribute("style","background-color:yellow");
    tr1.appendChild(th5);
    var th6=document.createElement("th");
    th6.appendChild(document.createTextNode(akarKualitas));
    th6.setAttribute("style","background-color:yellow");
    tr1.appendChild(th6);
    document.getElementById("tabelDataAsli").appendChild(tr1);
    
    //membentuk matriks normalisasi
 membentukMatriksNormalisasi(akarHarga,akarKetersediaan,akarKetepatanPengiriman,akarKualitas);
}

function membentukMatriksNormalisasi(akarHarga,akarKetersediaan,akarKetepatanPengiriman,akarKualitas){
    var matriksNorm=cloningArray(dataRaw);
    /*var coba=(maxHarga-matriksNorm[0][2])/(maxHarga-minHarga);
    console.log("("+maxHarga+"-"+matriksNorm[0][2]+")-("+maxHarga+"-"+minHarga+") = "+coba);*/
    
    for(var i=0;i<jumlahBaris;i++){
    matriksNorm[i][2]=(matriksNorm[i][2]/akarHarga);
    matriksNorm[i][3]=(matriksNorm[i][3]/akarKetersediaan);
    matriksNorm[i][4]=(matriksNorm[i][4]/akarKetepatanPengiriman);
    matriksNorm[i][5]=(matriksNorm[i][5]/akarKualitas);
    }
    printMatriksNormalisasi(matriksNorm);
}

function printMatriksNormalisasi(matriksNorm){
    //membuat header tabel
    var tr1=document.createElement("tr");
    var th1=document.createElement("th");
    th1.appendChild(document.createTextNode("No"));
    tr1.appendChild(th1);
    var th2=document.createElement("th");
    th2.appendChild(document.createTextNode("Judul"));
    tr1.appendChild(th2);
    var th3=document.createElement("th");
    th3.appendChild(document.createTextNode("Harga"));
    tr1.appendChild(th3);
    var th4=document.createElement("th");
    th4.appendChild(document.createTextNode("Ketersediaan"));
    tr1.appendChild(th4);
    var th5=document.createElement("th");
    th5.appendChild(document.createTextNode("Ketepatan Pengiriman"));
    tr1.appendChild(th5);
    var th6=document.createElement("th");
    th6.appendChild(document.createTextNode("Kualitas"));
    tr1.appendChild(th6);
    document.getElementById("tabelMatriksNormalisasi").appendChild(tr1);
    
    //memprint isi tabel tiap baris
    for(var i=0;i<jumlahBaris;i++){
    var tr1=document.createElement("tr");
    var th1=document.createElement("th");
    th1.appendChild(document.createTextNode(matriksNorm[i][0]));
    tr1.appendChild(th1);
    var th2=document.createElement("th");
    th2.appendChild(document.createTextNode(matriksNorm[i][1]));
    tr1.appendChild(th2);
    var th3=document.createElement("th");
    th3.appendChild(document.createTextNode(matriksNorm[i][2]));
    tr1.appendChild(th3);
    var th4=document.createElement("th");
    th4.appendChild(document.createTextNode(matriksNorm[i][3]));
    tr1.appendChild(th4);
    var th5=document.createElement("th");
    th5.appendChild(document.createTextNode(matriksNorm[i][4]));
    tr1.appendChild(th5);
    var th6=document.createElement("th");
    th6.appendChild(document.createTextNode(matriksNorm[i][5]));
    tr1.appendChild(th6);
    document.getElementById("tabelMatriksNormalisasi").appendChild(tr1);
    }
    
    normalisasiXbobot(matriksNorm);
}

function normalisasiXbobot(matriksNorm){
    
    //mengkalikan tiap matriks normalisasi dengan matriks prioritas relatif kriteria
    for(var i=0;i<jumlahBaris;i++){
    matriksNorm[i][2]=matriksNorm[i][2]*prioritasRelatifKriteria[0];
    matriksNorm[i][3]=matriksNorm[i][3]*prioritasRelatifKriteria[1];
    matriksNorm[i][4]=matriksNorm[i][4]*prioritasRelatifKriteria[2];
    matriksNorm[i][5]=matriksNorm[i][5]*prioritasRelatifKriteria[3];
    }
    
    
    printMatriksNormalisasiXBobot(matriksNorm);
}

function printMatriksNormalisasiXBobot(matriksNorm){
    //membuat header tabel
    var tr1=document.createElement("tr");
    var th1=document.createElement("th");
    th1.appendChild(document.createTextNode("No"));
    tr1.appendChild(th1);
    var th2=document.createElement("th");
    th2.appendChild(document.createTextNode("Judul"));
    tr1.appendChild(th2);
    var th3=document.createElement("th");
    th3.appendChild(document.createTextNode("Harga"));
    tr1.appendChild(th3);
    var th4=document.createElement("th");
    th4.appendChild(document.createTextNode("Ketersediaan"));
    tr1.appendChild(th4);
    var th5=document.createElement("th");
    th5.appendChild(document.createTextNode("Ketepatan Pengiriman"));
    tr1.appendChild(th5);
    var th6=document.createElement("th");
    th6.appendChild(document.createTextNode("Kualitas"));
    tr1.appendChild(th6);
    document.getElementById("tabelMatriksXBobot").appendChild(tr1);
    
    //mencari nilai max dan min tiap kolom
    var maxHarga=matriksNorm[0][2],maxKetersediaan=matriksNorm[0][3],maxKetepatanPengiriman=matriksNorm[0][4],maxKualitas=matriksNorm[0][5];
    var minHarga=matriksNorm[0][2],minKetersediaan=matriksNorm[0][3],minKetepatanPengiriman=matriksNorm[0][4],minKualitas=matriksNorm[0][5];
    
    //memprint isi tabel tiap baris
    for(var i=0;i<jumlahBaris;i++){
    var tr1=document.createElement("tr");
    var th1=document.createElement("th");
    th1.appendChild(document.createTextNode(matriksNorm[i][0]));
    tr1.appendChild(th1);
    var th2=document.createElement("th");
    th2.appendChild(document.createTextNode(matriksNorm[i][1]));
    tr1.appendChild(th2);
    var th3=document.createElement("th");
    th3.appendChild(document.createTextNode(matriksNorm[i][2]));
    tr1.appendChild(th3);
    var th4=document.createElement("th");
    th4.appendChild(document.createTextNode(matriksNorm[i][3]));
    tr1.appendChild(th4);
    var th5=document.createElement("th");
    th5.appendChild(document.createTextNode(matriksNorm[i][4]));
    tr1.appendChild(th5);
    var th6=document.createElement("th");
    th6.appendChild(document.createTextNode(matriksNorm[i][5]));
    tr1.appendChild(th6);
    document.getElementById("tabelMatriksXBobot").appendChild(tr1);
    
    //membandingkan nilai max dan min
        //mencari nilai max
        if(matriksNorm[i][2]>maxHarga){maxHarga=matriksNorm[i][2];}
        if(matriksNorm[i][3]>maxKetersediaan){maxKetersediaan=matriksNorm[i][3];}
        if(matriksNorm[i][4]>maxKetepatanPengiriman){maxKetepatanPengiriman=matriksNorm[i][4];}
        if(matriksNorm[i][5]>maxKualitas){maxKualitas=matriksNorm[i][5];}
        //mencari nilai min
        if(matriksNorm[i][2]<minHarga){minHarga=matriksNorm[i][2];}
        if(matriksNorm[i][3]<minKetersediaan){minKetersediaan=matriksNorm[i][3];}
        if(matriksNorm[i][4]<minKetepatanPengiriman){minKetepatanPengiriman=matriksNorm[i][4];}
        if(matriksNorm[i][5]<minKualitas){minKualitas=matriksNorm[i][5];}
    }
    
    //print nilai max dan min tiap kolom
    //nilai max
    var tr1=document.createElement("tr");
    var th1=document.createElement("th");
    tr1.appendChild(th1);
    var th2=document.createElement("th");
    th2.appendChild(document.createTextNode("Max (A+)"));
    th2.setAttribute("style","background-color:green");
    tr1.appendChild(th2);
    var th3=document.createElement("th");
    th3.appendChild(document.createTextNode(maxHarga));
    th3.setAttribute("style","background-color:green");
    tr1.appendChild(th3);
    var th4=document.createElement("th");
    th4.appendChild(document.createTextNode(maxKetersediaan));
    th4.setAttribute("style","background-color:green");
    tr1.appendChild(th4);
    var th5=document.createElement("th");
    th5.appendChild(document.createTextNode(maxKetepatanPengiriman));
    th5.setAttribute("style","background-color:green");
    tr1.appendChild(th5);
    var th6=document.createElement("th");
    th6.appendChild(document.createTextNode(maxKualitas));
    th6.setAttribute("style","background-color:green");
    tr1.appendChild(th6);
    document.getElementById("tabelMatriksXBobot").appendChild(tr1);
    //nilai min
    var tr1=document.createElement("tr");
    var th1=document.createElement("th");
    tr1.appendChild(th1);
    var th2=document.createElement("th");
    th2.appendChild(document.createTextNode("Min (A-)"));
    th2.setAttribute("style","background-color:yellow");
    tr1.appendChild(th2);
    var th3=document.createElement("th");
    th3.appendChild(document.createTextNode(minHarga));
    th3.setAttribute("style","background-color:yellow");
    tr1.appendChild(th3);
    var th4=document.createElement("th");
    th4.appendChild(document.createTextNode(minKetersediaan));
    th4.setAttribute("style","background-color:yellow");
    tr1.appendChild(th4);
    var th5=document.createElement("th");
    th5.appendChild(document.createTextNode(minKetepatanPengiriman));
    th5.setAttribute("style","background-color:yellow");
    tr1.appendChild(th5);
    var th6=document.createElement("th");
    th6.appendChild(document.createTextNode(minKualitas));
    th6.setAttribute("style","background-color:yellow");
    tr1.appendChild(th6);
    document.getElementById("tabelMatriksXBobot").appendChild(tr1);
    
    
    menghitungD(matriksNorm,maxHarga,maxKetersediaan,maxKetepatanPengiriman,maxKualitas,minHarga,minKetersediaan,minKetepatanPengiriman,minKualitas);
}

function menghitungD(matriksNorm,maxHarga,maxKetersediaan,maxKetepatanPengiriman,maxKualitas,minHarga,minKetersediaan,minKetepatanPengiriman,minKualitas){
    var matriksD=cloningArray(matriksNorm);
    
    //kolom ke 3 = Dplus, kolom ke 4 = Dminus
    for(var i=0;i<jumlahBaris;i++){
        //Dplus
       matriksD[i][2]=Math.pow((Math.pow(matriksNorm[i][2]-maxHarga,2))+(Math.pow(matriksNorm[i][3]-maxKetersediaan,2))+(Math.pow(matriksNorm[i][4]-maxKetepatanPengiriman,2))+(Math.pow(matriksNorm[i][5]-maxKualitas,2)),0.5);
        console.log()
        //Dminus
        matriksD[i][3]=Math.pow((Math.pow(matriksNorm[i][2]-minHarga,2))+(Math.pow(matriksNorm[i][3]-minKetersediaan,2))+(Math.pow(matriksNorm[i][4]-minKetepatanPengiriman,2))+(Math.pow(matriksNorm[i][5]-minKualitas,2)),0.5); 
    }
     printMatriksD(matriksD);
}
   

function printMatriksD(matriksD){
    //membuat header tabel
    var tr1=document.createElement("tr");
    var th1=document.createElement("th");
    th1.appendChild(document.createTextNode("No"));
    tr1.appendChild(th1);
    var th2=document.createElement("th");
    th2.appendChild(document.createTextNode("Supplier"));
    tr1.appendChild(th2);
    var th3=document.createElement("th");
    th3.appendChild(document.createTextNode("D+"));
    tr1.appendChild(th3);
    var th4=document.createElement("th");
    th4.appendChild(document.createTextNode("D-"));
    tr1.appendChild(th4);
    document.getElementById("tabelMatriksD").appendChild(tr1);
    
    //memprint isi tabel tiap baris
    for(var i=0;i<jumlahBaris;i++){
    var tr1=document.createElement("tr");
    var th1=document.createElement("th");
    th1.appendChild(document.createTextNode(matriksD[i][0]));
    tr1.appendChild(th1);
    var th2=document.createElement("th");
    th2.appendChild(document.createTextNode(matriksD[i][1]));
    tr1.appendChild(th2);
    var th3=document.createElement("th");
    th3.appendChild(document.createTextNode(matriksD[i][2]));
    tr1.appendChild(th3);
    var th4=document.createElement("th");
    th4.appendChild(document.createTextNode(matriksD[i][3]));
    tr1.appendChild(th4);
    document.getElementById("tabelMatriksD").appendChild(tr1);
    }
    
    menghitungNilaiCci(matriksD);
}

function menghitungNilaiCci(matriksD){
    var matriksCci=cloningArray(matriksD);
    for(var i=0;i<jumlahBaris;i++){
        matriksCci[i][2]=matriksCci[i][3]/(matriksCci[i][2]+matriksCci[i][3]);
    }
    printNilaiCci(matriksCci);
}

function printNilaiCci(matriksCci){
    //membuat header tabel
    var tr1=document.createElement("tr");
    var th1=document.createElement("th");
    th1.appendChild(document.createTextNode("No"));
    tr1.appendChild(th1);
    var th2=document.createElement("th");
    th2.appendChild(document.createTextNode("Supplier"));
    tr1.appendChild(th2);
    var th3=document.createElement("th");
    th3.appendChild(document.createTextNode("CCI"));
    tr1.appendChild(th3);
    document.getElementById("tabelMatriksCci").appendChild(tr1);
    
    //memprint isi tabel tiap baris
    for(var i=0;i<jumlahBaris;i++){
    var tr1=document.createElement("tr");
    var th1=document.createElement("th");
    th1.appendChild(document.createTextNode(matriksCci[i][0]));
    tr1.appendChild(th1);
    var th2=document.createElement("th");
    th2.appendChild(document.createTextNode(matriksCci[i][1]));
    tr1.appendChild(th2);
    var th3=document.createElement("th");
    th3.appendChild(document.createTextNode(matriksCci[i][2]));
    tr1.appendChild(th3);
    document.getElementById("tabelMatriksCci").appendChild(tr1);
    }
    merangkingkan(matriksCci);
}

function merangkingkan(matriksCci){
    matriksCci.sort(sortFunctionQ);
    printRekomendasi(matriksCci);
}

function printRekomendasi(matriksCci){
    //membuat header tabel
    var tr1=document.createElement("tr");
    var th1=document.createElement("th");
    th1.appendChild(document.createTextNode("No"));
    tr1.appendChild(th1);
    var th2=document.createElement("th");
    th2.appendChild(document.createTextNode("Supplier"));
    tr1.appendChild(th2);
    var th3=document.createElement("th");
    th3.appendChild(document.createTextNode("CI"));
    tr1.appendChild(th3);
    document.getElementById("tabelRekomendasi").appendChild(tr1);
    
    //memprint isi tabel tiap baris
    for(var i=0;i<jumlahBaris;i++){
    var tr1=document.createElement("tr");
    var th1=document.createElement("th");
    th1.appendChild(document.createTextNode(i+1));
    tr1.appendChild(th1);
    var th2=document.createElement("th");
    th2.appendChild(document.createTextNode(matriksCci[i][1]));
    tr1.appendChild(th2);
    var th3=document.createElement("th");
    th3.appendChild(document.createTextNode(matriksCci[i][2]));
    tr1.appendChild(th3);
    document.getElementById("tabelRekomendasi").appendChild(tr1);
    }
    
}




//cloning Array
function cloningArray(arrayAsli){
    var arrayCloning=new Array(jumlahBaris);
    for(var i=0;i<jumlahBaris;i++){
        arrayCloning[i]=new Array(7);
        for(var j=0;j<6;j++){
        arrayCloning[i][j]=arrayAsli[i][j];
        }
    }
    return arrayCloning;
}
//algoritma sorting
function sortFunctionQ(a, b) {
    if (a[2] === b[2]) {
        return 0;
    }
    else {
        return (a[2] > b[2]) ? -1 : 1;
    }
}
