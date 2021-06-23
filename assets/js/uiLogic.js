document.querySelector('#btnadd').addEventListener('click',productadd);

function productadd(){
    var scode = document.querySelector('#txtcode').value,
    sproduct = document.querySelector('#txtproduct').value,
    scount = document.querySelector('#txtcount').value,
    sdescrip = document.querySelector('#txtdescrip').value;
    addproductToSystem(scode,sproduct,scount,sdescrip);
}