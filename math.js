/* const Math ={}; */


const add =(x1,x2)=>(x1+x2);

/* function add (x1,x2){
    return x1+x2;
} */
function  substract (x1,x2){
    return x1-x2;
}
function multiply (x1,x2){
    return x1*x2;
}
function  divide (x1,x2){

        if(x2==0){
            return console.log("No se puede dividir por cero ")
    }else{
        return x1/x2;
    }
    

   
}

function giga(numero){

const numero_giga=(numero/Math.pow(10,9))
return numero_giga
}




/* Math.add=add;
Math.substract=substract;
Math.multiply=multiply;
Math.divide=divide; */
exports.giga=giga;
/* module.exports=giga; */

/* exports.add=add;
exports.substract=substract;
exports.multiply=multiply;
exports.divide=divide; */
