//1

//factorielle linéaire
//solution 1 
const factorielle=(n)=>{
    const tab=[]
    if(n===1 || n===0){
        return 1;
    }else if(n>1){
        for(i=1;i<=n;i++){
           tab.push(i)
        }
        const calcFact=tab.reduce((preventV,currentV)=>preventV*currentV)
        return calcFact;
    }else{
        return "le nombre est négatif!!!"
    }
}
console.log("factorielle linéaire soluc 1=> "+factorielle(1))

//solution 2
const factorielle2=(n)=>{
    let  result=1;
    for(i=1;i<=n;i++){
        result*=i;
    }
    return result;

}
console.log("factorielle linéaire soluc 2=> "+factorielle2(7))


//factorielle recursive 

const factorielleRecursive=(n)=>{
    if(n===1 || n===0){
        return 1;
    }else{
        return n*factorielleRecursive(n-1);
    }
}
  console.log("recursive factorielle=> "+factorielleRecursive(7))

  //2
  //fabonici linéaire

const fibonaci=(nbr)=>{
    if(nbr===1){
        return 0;
    }else{
        let number1 = 0;
        let number2 = 1;
        let number3;
        let i = 0;
        for (i = 2; i < nbr; i++) {
            number3= number1+ number2;
            number1 = number2;
            number2 = number3;
        }
        return  number2; 
    }
}
  console.log("fibonaci linéaire=> "+fibonaci(7))
   //le nbr représente un numéro d'index dans la liste de fabonici=> il sort le chiffre qui est positionné au nbr 


   //fabonici recursive
const fibonaciRecursive = (x)=>{
    if (x== 1){
    return 0;
    } else if(x== 2){
    return 1;
    }else{
    return fibonaciRecursive(x- 1) + fibonaciRecursive(x- 2);
    }
}
console.log("fibonaci recursive=> "+fibonaciRecursive(8))
