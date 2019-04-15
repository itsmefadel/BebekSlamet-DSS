const dataRaw=[ 
[1,'The Fault in Our Stars (John Green)',4.24,27,260439,4.08,260474.32], 
[2,'Divergent (Veronica Roth)',4.22,18,313517,4.08,313543.3], 
[3,'Gone Girl (Gillian Flynn)',4.05,9,56162,4.01,56179.06], 
[4,'The Martian (Andy Weir)',4.4,8,19415,4.28,19431.68], 
[5,'All the Light We Cannot See (Anthony Doerr)',4.32,10,8248,4.3,8266.62], 
[6,'Ready Player One (Ernest Cline)',4.29,7,19089,4.2,19104.49], 
[7,'Clockwork Angel (Cassandra Clare)',4.33,8,164122,4.26,164138.59], 
[8,'Cinder (Marissa Meyer)',4.15,8,62506,4.24,62522.39], 
[9,'Me Before You (Jojo Moyes)',4.26,1,37075,4.08,37084.34], 
[10,'The Night Circus (Erin Morgenstern)',4.04,9,10585,4.04,10602.08], 
[11,'The Lost Hero (Rick Riordan)',4.35,3,241168,4.32,241179.67], 
[12,'The Selection (Kiera Cass)',4.14,1,39385,4.06,39394.2], 
[13,'Throne of Glass (Sarah J. Maas)',4.22,2,102798,4.41,102808.63], 
[14,'Eleanor & Park (Rainbow Rowell)',4.09,21,120016,4.03,120045.12], 
[15,'Miss Peregrines Home for Peculiar Children (Ransom Riggs)',3.9,4,17345,3.96,17356.86], 
[16,'Room (Emma Donoghue)',4.05,17,7237,3.96,7262.01], 
[17,'The Girl on the Train (Paula Hawkins)',3.9,5,20234,3.87,20246.77], 
[18,'11/22/63 (Stephen King)',4.3,8,520165,4.03,520181.33], 
[19,'Wonder (R.J. Palacio)',4.15,23,5503,4.44,5534.59], 
[20,'The Goldfinch (Donna Tartt)',3.89,6,11011,3.93,11024.82], 
[21,'Legend (Marie Lu)',4.18,8,85548,4.2,85564.38], 
[22,'Unbroken: A World War II Story of Survival, Resilience and Redemption (Rick Riordan)',4.38,5,2729,4.35,2742.73], 
[23,'Fangirl (Rainbow Rowell)',4.09,5,120050,4.03,120063.12], 
[24,'The Nightingale (Kristin Hannah)',4.56,3,86546,4.25,86557.81], 
[25,'The Ocean at the End of the Lane (Neil Gaiman)',3.99,6,153512,4.13,153526.12], 
[26,'Red Queen (Victoria Aveyard)',4.07,6,38203,4,38217.07], 
[27,'The Immortal Life of Henrietta Lacks (Rebecca Skloot)',4.05,5,3129,4.05,3142.1], 
[28,'Daughter of Smoke & Bone (Laini Taylor)',4.03,14,28144,4.11,28166.14], 
[29,'The Way of Kings (Brandon Sanderson)',4.65,4,88202,4.38,88215.03], 
[30,'A Court of Thorns and Roses (Sarah J. Maas) ',4.27,2,102902,4.41,102912.68], 
[31,'Shatter Me (Taherah Mafi)',3.99,1,23894,4.16,23903.15], 
[32,'Matched (Ally Condie)',3.67,9,12432,3.63,12448.3], 
[33,'And the Mountains Echoed (Khaled Hosseini)',4.04,3,129358,4.28,129369.32], 
[34,'Delirium (Lauren Oliver)',3.99,4,88293,3.9,88304.89], 
[35,'IQ84 (Haruki Murakami)',3.91,3,64664,3.95,64674.86], 
[36,'Anna and the French Kiss (Stephanie Perkins) ',4.03,7,25424,3.99,25439.02], 
[37,'The Light Between Oceans (M.L. Stedman)',4.02,5,2452,3.89,2464.91], 
[38,'The Rosie Project (Graeme Simison) ',4.01,4,3482,3.92,3493.93], 
[39,'Bossypants (Tina Fey)',3.95,3,3158,3.95,3168.9], 
[40,'Quiet: The Power of Introverts in a World That Cant Stop Talking (susan Cain)',4.05,3,10203,4.05,10214.1], 
[41,'Aristotle and Dante Discover the Secrets of the Universe (Benjamin Alire Sáenz)',4.34,9,6832,4.32,6849.66], 
[42,'Life After Life (Kate Atkinson) ',3.75,7,6148,3.81,6162.56], 
[43,'Fall of Giants (Ken Follett) ',4.27,1,26801,4.19,26810.46], 
[44,'Before I Fall (Lauren Oliver)',3.91,8,88293,3.9,88308.81], 
[45,'Whered You Go, Bernadette (Marie Semple)',3.9,3,3004,3.79,3014.69], 
[46,'The Cuckoos Calling (Robert Galbraith) ',3.85,3,18851,3.98,18861.83], 
[47,'Six of Crows (Leigh Bardugo)',4.46,8,39895,4.23,39911.69], 
[48,'The Red Pyramid (Rick Riordan) ',4.08,5,241391,4.32,241404.4], 
[49,'The Raven Boys (Maggie Stiefvater)',4.06,9,110881,3.98,110898.04], 
[50,'Between Shades of Gray (Ruta Sepetys)',4.22,11,9087,4.12,9106.34] 
];

//printDataAsli();

function printDataAsli(){
    //membuat header tabel
    var tr1=document.createElement("tr");
    var th1=document.createElement("th");
    th1.appendChild(document.createTextNode("No"));
    tr1.appendChild(th1);
    var th2=document.createElement("th");
    th2.appendChild(document.createTextNode("Judul"));
    tr1.appendChild(th2);
    var th3=document.createElement("th");
    th3.appendChild(document.createTextNode("Rating Novel"));
    tr1.appendChild(th3);
    var th4=document.createElement("th");
    th4.appendChild(document.createTextNode("Penghargaan"));
    tr1.appendChild(th4);
    var th5=document.createElement("th");
    th5.appendChild(document.createTextNode("Popularitas Penulis"));
    tr1.appendChild(th5);
    var th6=document.createElement("th");
    th6.appendChild(document.createTextNode("Rating Penulis"));
    tr1.appendChild(th6);
    var th7=document.createElement("th");
    th7.appendChild(document.createTextNode("Nilai Akhir"));
    tr1.appendChild(th7);
    ////document.getElementById("tabelDataAsli").appendChild(tr1);
    
    //deklarasi max min untuk tiap kolom
    var maxRatingNovel=dataRaw[0][2],maxPenghargaan=dataRaw[0][3],maxPopularitas=dataRaw[0][4],maxRatingPenulis=dataRaw[0][5];
    var minRatingNovel=dataRaw[0][2],minPenghargaan=dataRaw[0][3],minPopularitas=dataRaw[0][4],minRatingPenulis=dataRaw[0][5];
    
    //memprint isi tabel tiap baris
    for(var i=0;i<50;i++){
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
    ////document.getElementById("tabelDataAsli").appendChild(tr1);
        //membandingkan nilai max dan min
        //mencari nilai max
        if(dataRaw[i][2]>maxRatingNovel){maxRatingNovel=dataRaw[i][2];}
        if(dataRaw[i][3]>maxPenghargaan){maxPenghargaan=dataRaw[i][3];}
        if(dataRaw[i][4]>maxPopularitas){maxPopularitas=dataRaw[i][4];}
        if(dataRaw[i][5]>maxRatingPenulis){maxRatingPenulis=dataRaw[i][5];}
        //mencari nilai min
        if(dataRaw[i][2]<minRatingNovel){minRatingNovel=dataRaw[i][2];}
        if(dataRaw[i][3]<minPenghargaan){minPenghargaan=dataRaw[i][3];}
        if(dataRaw[i][4]<minPopularitas){minPopularitas=dataRaw[i][4];}
        if(dataRaw[i][5]<minRatingPenulis){minRatingPenulis=dataRaw[i][5];}
    }
    //print nilai max dan min tiap kolom
    //nilai max
    var tr1=document.createElement("tr");
    var th1=document.createElement("th");
    tr1.appendChild(th1);
    var th2=document.createElement("th");
    th2.appendChild(document.createTextNode("Max (Nilai Terbaik)"));
    th2.setAttribute("style","background-color:green");
    tr1.appendChild(th2);
    var th3=document.createElement("th");
    th3.appendChild(document.createTextNode(maxRatingNovel));
    th3.setAttribute("style","background-color:green");
    tr1.appendChild(th3);
    var th4=document.createElement("th");
    th4.appendChild(document.createTextNode(maxPenghargaan));
    th4.setAttribute("style","background-color:green");
    tr1.appendChild(th4);
    var th5=document.createElement("th");
    th5.appendChild(document.createTextNode(maxPopularitas));
    th5.setAttribute("style","background-color:green");
    tr1.appendChild(th5);
    var th6=document.createElement("th");
    th6.appendChild(document.createTextNode(maxRatingPenulis));
    th6.setAttribute("style","background-color:green");
    tr1.appendChild(th6);
    ////document.getElementById("tabelDataAsli").appendChild(tr1);
    //nilai min
    var tr1=document.createElement("tr");
    var th1=document.createElement("th");
    tr1.appendChild(th1);
    var th2=document.createElement("th");
    th2.appendChild(document.createTextNode("Min (Nilai Terendah)"));
    th2.setAttribute("style","background-color:yellow");
    tr1.appendChild(th2);
    var th3=document.createElement("th");
    th3.appendChild(document.createTextNode(minRatingNovel));
    th3.setAttribute("style","background-color:yellow");
    tr1.appendChild(th3);
    var th4=document.createElement("th");
    th4.appendChild(document.createTextNode(minPenghargaan));
    th4.setAttribute("style","background-color:yellow");
    tr1.appendChild(th4);
    var th5=document.createElement("th");
    th5.appendChild(document.createTextNode(minPopularitas));
    th5.setAttribute("style","background-color:yellow");
    tr1.appendChild(th5);
    var th6=document.createElement("th");
    th6.appendChild(document.createTextNode(minRatingPenulis));
    th6.setAttribute("style","background-color:yellow");
    tr1.appendChild(th6);
    ////document.getElementById("tabelDataAsli").appendChild(tr1);
    
    //membentuk matriks normalisasi
 membentukMatriksNormalisasi(maxRatingNovel,maxPenghargaan,maxPopularitas,maxRatingPenulis,minRatingNovel,minPenghargaan,minPopularitas,minRatingPenulis);
}

function membentukMatriksNormalisasi(maxRatingNovel,maxPenghargaan,maxPopularitas,maxRatingPenulis,minRatingNovel,minPenghargaan,minPopularitas,minRatingPenulis){
    var matriksNorm=cloningArray(dataRaw);
    /*var coba=(maxRatingNovel-matriksNorm[0][2])/(maxRatingNovel-minRatingNovel);
    console.log("("+maxRatingNovel+"-"+matriksNorm[0][2]+")-("+maxRatingNovel+"-"+minRatingNovel+") = "+coba);*/
    
    for(var i=0;i<50;i++){
    matriksNorm[i][2]=(maxRatingNovel-matriksNorm[i][2])/(maxRatingNovel-minRatingNovel);
    matriksNorm[i][3]=(maxPenghargaan-matriksNorm[i][3])/(maxPenghargaan-minPenghargaan);
    matriksNorm[i][4]=(maxPopularitas-matriksNorm[i][4])/(maxPopularitas-minPopularitas);
    matriksNorm[i][5]=(maxRatingPenulis-matriksNorm[i][5])/(maxRatingPenulis-minRatingPenulis);
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
    th3.appendChild(document.createTextNode("Rating Novel"));
    tr1.appendChild(th3);
    var th4=document.createElement("th");
    th4.appendChild(document.createTextNode("Penghargaan"));
    tr1.appendChild(th4);
    var th5=document.createElement("th");
    th5.appendChild(document.createTextNode("Popularitas Penulis"));
    tr1.appendChild(th5);
    var th6=document.createElement("th");
    th6.appendChild(document.createTextNode("Rating Penulis"));
    tr1.appendChild(th6);
    ////document.getElementById("tabelMatriksNormalisasi").appendChild(tr1);
    
    //memprint isi tabel tiap baris
    for(var i=0;i<50;i++){
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
    ////document.getElementById("tabelMatriksNormalisasi").appendChild(tr1);
    }
    
    normalisasiXbobot(matriksNorm);
}

function normalisasiXbobot(matriksNorm){
    /*
    //mengambil matriks prioritas relatif kriteria
    var prioritasRelatifKriteria=new Array(1,1,1,1);
 //prioritasRelatifKriteria[0]=////document.getElementById("barisNormRatingNovel6").innerHTML;
 //prioritasRelatifKriteria[1]=////document.getElementById("barisNormPenghargaan6").innerHTML;    //prioritasRelatifKriteria[2]=////document.getElementById("barisNormPopularitas6").innerHTML;
 //prioritasRelatifKriteria[3]=////document.getElementById("barisNormRatingPenulis6").innerHTML;*/
    
    //mengkalikan tiap matriks normalisasi dengan matriks prioritas relatif kriteria
    for(var i=0;i<50;i++){
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
    th3.appendChild(document.createTextNode("Rating Novel"));
    tr1.appendChild(th3);
    var th4=document.createElement("th");
    th4.appendChild(document.createTextNode("Penghargaan"));
    tr1.appendChild(th4);
    var th5=document.createElement("th");
    th5.appendChild(document.createTextNode("Popularitas Penulis"));
    tr1.appendChild(th5);
    var th6=document.createElement("th");
    th6.appendChild(document.createTextNode("Rating Penulis"));
    tr1.appendChild(th6);
    //////document.getElementById("tabelMatriksXBobot").appendChild(tr1);
    
    //memprint isi tabel tiap baris
    for(var i=0;i<50;i++){
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
    //////document.getElementById("tabelMatriksXBobot").appendChild(tr1);
    }
    menghitungSdanR(matriksNorm);
}

function menghitungSdanR(matriksNorm){
    var matriksSR=cloningArray(matriksNorm);
    var s,r,maxS,minS,maxR,minR;
       
    //mendapatkan sum dan max
    for(var i=0;i<50;i++){
        //mendapatkan sum
        s=matriksNorm[i][2]+matriksNorm[i][3]+matriksNorm[i][4]+matriksNorm[i][5];
     //mendapatkan max
         r=matriksNorm[i][2];
    for(var j=2;j<=5;j++){
    if(r<matriksNorm[i][j]){r=matriksNorm[i][j];} 
    }
        matriksSR[i][2]=s;
        matriksSR[i][3]=r;
    }
    maxS=s;minS=s;
    maxR=r;minR=r;
    //mendapatkan kolom maxS, kolom minS, kolom maxR, dan kolom minR
    for(var i=0;i<50;i++){
        if(maxS<matriksSR[i][2]){maxS=matriksSR[i][2];}
        if(minS>matriksSR[i][2]){minS=matriksSR[i][2];}
        if(maxR<matriksSR[i][3]){maxR=matriksSR[i][3];}
        if(minR>matriksSR[i][3]){minR=matriksSR[i][3];}
    }
    printMatriksSR(matriksSR,maxS,minS,maxR,minR);
}

function printMatriksSR(matriksSR,maxS,minS,maxR,minR){
    //membuat header tabel
    var tr1=document.createElement("tr");
    var th1=document.createElement("th");
    th1.appendChild(document.createTextNode("No"));
    tr1.appendChild(th1);
    var th2=document.createElement("th");
    th2.appendChild(document.createTextNode("Judul"));
    tr1.appendChild(th2);
    var th3=document.createElement("th");
    th3.appendChild(document.createTextNode("S (SUM)"));
    tr1.appendChild(th3);
    var th4=document.createElement("th");
    th4.appendChild(document.createTextNode("R (MAX)"));
    tr1.appendChild(th4);
    //////document.getElementById("tabelMatriksSR").appendChild(tr1);
    
    //memprint isi tabel tiap baris
    for(var i=0;i<50;i++){
    var tr1=document.createElement("tr");
    var th1=document.createElement("th");
    th1.appendChild(document.createTextNode(matriksSR[i][0]));
    tr1.appendChild(th1);
    var th2=document.createElement("th");
    th2.appendChild(document.createTextNode(matriksSR[i][1]));
    tr1.appendChild(th2);
    var th3=document.createElement("th");
    th3.appendChild(document.createTextNode(matriksSR[i][2]));
    tr1.appendChild(th3);
    var th4=document.createElement("th");
    th4.appendChild(document.createTextNode(matriksSR[i][3]));
    tr1.appendChild(th4);
    //////document.getElementById("tabelMatriksSR").appendChild(tr1);
    }
    //mengisi nilai max dan min tiap kolom
    //mengisi nilai max
    var tr1=document.createElement("tr");
    var th1=document.createElement("th");
    th1.appendChild(document.createTextNode(" "));
    tr1.appendChild(th1);
    var th2=document.createElement("th");
    th2.appendChild(document.createTextNode("MAX "));
    th2.setAttribute("style","background-color:green");
    tr1.appendChild(th2);
    var th3=document.createElement("th");
    th3.appendChild(document.createTextNode(maxS));
    th3.setAttribute("style","background-color:green");
    tr1.appendChild(th3);
    var th4=document.createElement("th");
    th4.appendChild(document.createTextNode(maxR));
    th4.setAttribute("style","background-color:green");
    tr1.appendChild(th4);
    //////document.getElementById("tabelMatriksSR").appendChild(tr1);
    //mengisi nilai min
    var tr1=document.createElement("tr");
    var th1=document.createElement("th");
    th1.appendChild(document.createTextNode(""));
    tr1.appendChild(th1);
    var th2=document.createElement("th");
    th2.appendChild(document.createTextNode("MIN "));
    th2.setAttribute("style","background-color:yellow");
    tr1.appendChild(th2);
    var th3=document.createElement("th");
    th3.appendChild(document.createTextNode(minS));
    th3.setAttribute("style","background-color:yellow");
    tr1.appendChild(th3);
    var th4=document.createElement("th");
    th4.appendChild(document.createTextNode(minR));
    th4.setAttribute("style","background-color:yellow");
    tr1.appendChild(th4);
    //////document.getElementById("tabelMatriksSR").appendChild(tr1);
    
    menghitungIndexViqor(matriksSR,maxS,minS,maxR,minR);
}

function menghitungIndexViqor(matriksSR,maxS,minS,maxR,minR){
    var matriksViqor=cloningArray(matriksSR);
    for(var i=0;i<50;i++){
        //Jika nilai V=0.5
    matriksViqor[i][2]=(((matriksSR[i][2]-minS)/(maxS-minS))*0.5)+(((matriksSR[i][3]-minR)/(maxR-minR))*(1-0.5));
        //Jika nilai V=0.4
        matriksViqor[i][3]=(((matriksSR[i][2]-minS)/(maxS-minS))*0.4)+(((matriksSR[i][3]-minR)/(maxR-minR))*(1-0.4));
        //Jika nilai V=0.6
        matriksViqor[i][4]=(((matriksSR[i][2]-minS)/(maxS-minS))*0.6)+(((matriksSR[i][3]-minR)/(maxR-minR))*(1-0.6));
    }
    printMatriksIndexViqor(matriksViqor,matriksSR);
}

function printMatriksIndexViqor(matriksViqor,matriksSR){
    //membuat header tabel
    var tr1=document.createElement("tr");
    var th1=document.createElement("th");
    th1.appendChild(document.createTextNode("No"));
    tr1.appendChild(th1);
    var th2=document.createElement("th");
    th2.appendChild(document.createTextNode("Judul"));
    tr1.appendChild(th2);
    var th3=document.createElement("th");
    th3.appendChild(document.createTextNode("Q"));
    tr1.appendChild(th3);
    var th4=document.createElement("th");
    th4.appendChild(document.createTextNode("V=0.4"));
    tr1.appendChild(th4);
    var th5=document.createElement("th");
    th5.appendChild(document.createTextNode("V=0.6"));
    tr1.appendChild(th5);
    ////document.getElementById("tabelMatriksViqor").appendChild(tr1);
    
    //memprint isi tabel tiap baris
    for(var i=0;i<50;i++){
    var tr1=document.createElement("tr");
    var th1=document.createElement("th");
    th1.appendChild(document.createTextNode(matriksViqor[i][0]));
    tr1.appendChild(th1);
    var th2=document.createElement("th");
    th2.appendChild(document.createTextNode(matriksViqor[i][1]));
    tr1.appendChild(th2);
    var th3=document.createElement("th");
    th3.appendChild(document.createTextNode(matriksViqor[i][2]));
    tr1.appendChild(th3);
    var th4=document.createElement("th");
    th4.appendChild(document.createTextNode(matriksViqor[i][3]));
    tr1.appendChild(th4);
    var th5=document.createElement("th");
    th5.appendChild(document.createTextNode(matriksViqor[i][4]));
    tr1.appendChild(th5);
    ////document.getElementById("tabelMatriksViqor").appendChild(tr1);
    }
    merangkingkan(matriksViqor,matriksSR);
}

function merangkingkan(matriksViqor,matriksSR){
    var matriksQ=cloningArray(matriksViqor);
    var matriks4=cloningArray(matriksViqor);
    var matriks6=cloningArray(matriksViqor);
    //merangkingkan
    matriksQ.sort(sortFunctionQ);
    matriks4.sort(sortFunction4);
    matriks6.sort(sortFunction6);


    printMatriksQ(matriksQ);
    printMatriks4(matriks4);
    printMatriks6(matriks6);
    //menentukan apakah C1 di terima
    var dq=mencariNilaiDq();
    var jumlahSolusi=mencariNilaiAmA1(matriksQ,dq);
    var c1=false,c2=false;
    
    //print Solusi
    //Jika c1 terpenuhi
    if((matriksQ[1][2]-matriksQ[0][2])>=dq){
        c1=true;
    var h3=document.createElement("h3");
    var z=document.createTextNode("C1 Terpenuhi");
    h3.appendChild(z);
    ////document.getElementById("nilaiAmA1").appendChild(h3);
    }else{
    var h3=document.createElement("h3");
    var z=document.createTextNode("C1 Tidak Terpenuhi karena nilai pengurangan = "+(matriksQ[1][2]-matriksQ[0][2]));
    h3.appendChild(z);
    ////document.getElementById("nilaiAmA1").appendChild(h3);
        
        //Jika c2 terpenuhi
    //sorting matriks S R
    matriksSR.sort(sortFunctionQ);
    //membandingkan apakah baris pertama merupakan baris pertama juga di matriks SR &/ matriks V=0.4 &/ matriks V=0.6
    if(matriksQ[0][1]===matriksSR[0][1]){
        if(matriksQ[0][1]===matriks4[0][1]){
            if(matriksQ[0][1]===matriks6[0][1]){
                var h3=document.createElement("h3");
    var z=document.createTextNode("C2 Terpenuhi dengan jumlah solusi sebanyak "+jumlahSolusi);
    h3.appendChild(z);
    ////document.getElementById("nilaiAmA1").appendChild(h3);
                c2=true;
        }}}
    }
    
    printRekomendasi(matriksQ,jumlahSolusi,c1,c2);
}

function printMatriksQ(matriksQ){
    //membuat header tabel
    var tr1=document.createElement("tr");
    var th1=document.createElement("th");
    th1.appendChild(document.createTextNode("No"));
    tr1.appendChild(th1);
    var th2=document.createElement("th");
    th2.appendChild(document.createTextNode("Judul"));
    tr1.appendChild(th2);
    var th3=document.createElement("th");
    th3.appendChild(document.createTextNode("Q"));
    tr1.appendChild(th3);
    ////document.getElementById("tabelMatriksQ").appendChild(tr1);
    
    //memprint isi tabel tiap baris
    for(var i=0;i<50;i++){
    var tr1=document.createElement("tr");
    var th1=document.createElement("th");
    th1.appendChild(document.createTextNode(matriksQ[i][0]));
    tr1.appendChild(th1);
    var th2=document.createElement("th");
    th2.appendChild(document.createTextNode(matriksQ[i][1]));
    tr1.appendChild(th2);
    var th3=document.createElement("th");
    th3.appendChild(document.createTextNode(matriksQ[i][2]));
    tr1.appendChild(th3);
    ////document.getElementById("tabelMatriksQ").appendChild(tr1);
    }
}
function printMatriks4(matriks4){
    //membuat header tabel
    var tr1=document.createElement("tr");
    var th1=document.createElement("th");
    th1.appendChild(document.createTextNode("No"));
    tr1.appendChild(th1);
    var th2=document.createElement("th");
    th2.appendChild(document.createTextNode("Judul"));
    tr1.appendChild(th2);
    var th3=document.createElement("th");
    th3.appendChild(document.createTextNode("v=0.4"));
    tr1.appendChild(th3);
    ////document.getElementById("tabelMatriks4").appendChild(tr1);
    
    //memprint isi tabel tiap baris
    for(var i=0;i<50;i++){
    var tr1=document.createElement("tr");
    var th1=document.createElement("th");
    th1.appendChild(document.createTextNode(matriks4[i][0]));
    tr1.appendChild(th1);
    var th2=document.createElement("th");
    th2.appendChild(document.createTextNode(matriks4[i][1]));
    tr1.appendChild(th2);
    var th3=document.createElement("th");
    th3.appendChild(document.createTextNode(matriks4[i][3]));
    tr1.appendChild(th3);
    ////document.getElementById("tabelMatriks4").appendChild(tr1);
    }
}
function printMatriks6(matriks6){
    //membuat header tabel
    var tr1=document.createElement("tr");
    var th1=document.createElement("th");
    th1.appendChild(document.createTextNode("No"));
    tr1.appendChild(th1);
    var th2=document.createElement("th");
    th2.appendChild(document.createTextNode("Judul"));
    tr1.appendChild(th2);
    var th3=document.createElement("th");
    th3.appendChild(document.createTextNode("v=0.6"));
    tr1.appendChild(th3);
    ////document.getElementById("tabelMatriks6").appendChild(tr1);
    
    //memprint isi tabel tiap baris
    for(var i=0;i<50;i++){
    var tr1=document.createElement("tr");
    var th1=document.createElement("th");
    th1.appendChild(document.createTextNode(matriks6[i][0]));
    tr1.appendChild(th1);
    var th2=document.createElement("th");
    th2.appendChild(document.createTextNode(matriks6[i][1]));
    tr1.appendChild(th2);
    var th3=document.createElement("th");
    th3.appendChild(document.createTextNode(matriks6[i][4]));
    tr1.appendChild(th3);
    ////document.getElementById("tabelMatriks6").appendChild(tr1);
    }
}
function mencariNilaiDq(){
    n=50;
    var dq=(1/(n-1));
    //////document.getElementById("dq").innerHTML=dq;
    return dq;
}
function mencariNilaiAmA1(matriksQ,dq){
    var jumlahSolusi=1;
    var nilaiPengurangan;
    for(var i=1;i<50;i++){
    nilaiPengurangan=matriksQ[i][2]-matriksQ[0][2];
    if(nilaiPengurangan<dq){
        jumlahSolusi++;
    /*var h3=document.createElement("h3");
    var z=document.createTextNode("nilai A"+(i+1)+"-A1 = "+nilaiPengurangan);
    h3.appendChild(z);
    ////document.getElementById("nilaiAmA1").appendChild(h3);*/
    }}
    
    return jumlahSolusi;
}

function printRekomendasi(matriksQ,jumlahSolusi,c1,c2){
    //c1 terpenuhi dan c2 tidak terpenuhi
    if(c1&&!c2){
    //membuat header tabel
    var tr1=document.createElement("tr");
    var th1=document.createElement("th");
    th1.appendChild(document.createTextNode("No"));
    tr1.appendChild(th1);
    var th2=document.createElement("th");
    th2.appendChild(document.createTextNode("Judul"));
    tr1.appendChild(th2);
    document.getElementById("tabelRekomendasi").appendChild(tr1);
    
    //memprint isi tabel tiap baris
    for(var i=0;i<2;i++){
    var tr1=document.createElement("tr");
    var th1=document.createElement("th");
    th1.appendChild(document.createTextNode(i+1));
    tr1.appendChild(th1);
    var th2=document.createElement("th");
    th2.appendChild(document.createTextNode(matriksQ[i][1]));
    tr1.appendChild(th2);
    document.getElementById("tabelRekomendasi").appendChild(tr1);
    }}
    //c1 tidak terpenuhi
    if(!c1){
       //membuat header tabel
    var tr1=document.createElement("tr");
    var th1=document.createElement("th");
    th1.appendChild(document.createTextNode("No"));
    tr1.appendChild(th1);
    var th2=document.createElement("th");
    th2.appendChild(document.createTextNode("Judul"));
    tr1.appendChild(th2);
    document.getElementById("tabelRekomendasi").appendChild(tr1);
    
    //memprint isi tabel tiap baris
    for(var i=0;i<jumlahSolusi;i++){
    var tr1=document.createElement("tr");
    var th1=document.createElement("th");
    th1.appendChild(document.createTextNode(i+1));
    tr1.appendChild(th1);
    var th2=document.createElement("th");
    th2.appendChild(document.createTextNode(matriksQ[i][1]));
    tr1.appendChild(th2);
    document.getElementById("tabelRekomendasi").appendChild(tr1);
    } 
    }
}




//cloning Array
function cloningArray(arrayAsli){
    var arrayCloning=new Array(50);
    for(var i=0;i<50;i++){
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
        return (a[2] < b[2]) ? -1 : 1;
    }
}
function sortFunction4(a, b) {
    if (a[3] === b[3]) {
        return 0;
    }
    else {
        return (a[3] < b[3]) ? -1 : 1;
    }
}
function sortFunction6(a, b) {
    if (a[4] === b[4]) {
        return 0;
    }
    else {
        return (a[4] < b[4]) ? -1 : 1;
    }
}
