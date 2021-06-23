var Listproducts=[];

function addproductToSystem(pcode, pproduct,pcount,pdescrip){
    var newproduct = {
        code: pcode,
        product : pproduct,
        count : pcount,
        descrip : pdescrip
    };
    //console.log(newproduct);
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