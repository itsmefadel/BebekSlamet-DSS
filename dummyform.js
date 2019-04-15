//Untuk dummy Input
//dummyInput();



function tampilRekomendasi(dicobaPengguna){
    if(dicobaPengguna){
    //Untuk Di coba pengguna
//menghapus segala div yang ada
    hapusDiv();
    //membuat segala div
    buatDiv();}
    
printDataAsli();
}

function buatDiv(){
    var divPrintHasil=document.createElement("DIV");
    divPrintHasil.id="divPrintHasil";
    var divTampilRekomendasi=document.createElement("DIV");
    divTampilRekomendasi.id="matriksRekomendasi";
    divTampilRekomendasi.appendChild(document.createElement("HR"));
    var h2=document.createElement("H2");
    h2.innerHTML="Hasil Rekomendasi";
    var tabelDiv=document.createElement("TABLE");
    tabelDiv.id="tabelRekomendasi";
    tabelDiv.setAttribute("style","width:100%");
    divTampilRekomendasi.appendChild(h2);
    divTampilRekomendasi.appendChild(tabelDiv);
    divPrintHasil.appendChild(divTampilRekomendasi);
    document.getElementById("divFormBobot").appendChild(divPrintHasil); 
}
function hapusDiv(){
    document.getElementById("divPrintHasil").remove();
}

function dummyInput(){
prosesSlider1(6);
prosesSlider2(4);
prosesSlider3(0);
prosesSlider4(6);
prosesSlider5(2);
prosesSlider6(6);}

//logika remove DIV
Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = this.length - 1; i >= 0; i--) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}