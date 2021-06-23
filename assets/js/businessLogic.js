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
}