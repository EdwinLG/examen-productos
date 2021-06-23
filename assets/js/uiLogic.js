document.querySelector('#btnadd').addEventListener('click',productadd);
printProducts();
function productadd(){
    var scode = document.querySelector('#txtcode').value,
    sproduct = document.querySelector('#txtproduct').value,
    scount = document.querySelector('#txtcount').value,
    sdescrip = document.querySelector('#txtdescrip').value;
    addproductToSystem(scode,sproduct,scount,sdescrip);
    printProducts();
}

function printProducts(){
    var list = getListproducts(),
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
            countCell.innerHTML = list[i].count;
            descripCell.innerHTML = list[i].descrip;

            var inputSelect= document.createElement('button');
            inputSelect.type ='button';
            inputSelect.innerHTML="X";
            inputSelect.value= list[i].code;
            inputSelect.style = 'border: 1px solid blue; background-color: #008CBA; color:white;';
            selectCell.appendChild(inputSelect);

        tbody.appendChild(row);
    }

}