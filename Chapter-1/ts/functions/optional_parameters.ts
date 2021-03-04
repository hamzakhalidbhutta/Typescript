function getAverage(a:number,b:number,c?:number):string{
     let avg;
    if(typeof c  != "undefined")
        avg = a + b + c;
    else
        avg = a+b
    return "The average is "+ avg;
}
console.log(getAverage(1,2))