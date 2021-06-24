var Listproducts=[];

function addproductToSystem(pcode, pproduct,pcount,pdescrip){
    var newproduct = {
        code: pcode,
        product : pproduct,
        count : pcount,
        descrip : pdescrip
    };
    console.log(newproduct);
    Listproducts.push(newproduct);
    LocalStorageListproducts(Listproducts);
}

function getListproducts(){
    var storedList=localStorage.getItem('LocalListproducts');
    if(storedList==null){
        Listproducts=[];
    }else{
        Listproducts= JSON.parse(storedList);
    }
    return Listproducts;
}

function LocalStorageListproducts(plist){
    localStorage.setItem('LocalListproducts', JSON.stringify(plist));
}

function searchList(){
    let busqueda = Listproducts.find(elemento => elemento == formulario.value);
    //console.log(Listproducts);
    var list = getListproducts();
    tbody = document.querySelector('#listas tbody');
    tbody.innerHTML="";
    for(var i=0; i<list.length;i++){
    var row = tbody.insertRow(i),
            codeCell = row.insertCell(0),
            productCell = row.insertCell(1),
            countCell = row.insertCell(2),
            descripCell = row.insertCell(3);
            selectCell = row.insertCell(4);

            codeCell.innerHTML = list[i].code;
            productCell.innerHTML = list[i].product;
            countCell.innerHTML = list[i].count ;
            descripCell.innerHTML = list[i].descrip;
    }
}


function totales() {
    const totalAcum = JSON.parse(Listproducts);
    console.log(totalAcum);
}
