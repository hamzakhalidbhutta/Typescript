function concatenate(items:string[], sperator = ",", beginAt=0,endAt=items.length){
    let result = ''
    for ( let i = beginAt; i < endAt;i++)
    {
        result += items[i]
        if(i < endAt)
            result += sperator + " "
    }
    console.log(`The Sports items are ${result}`)
}

let list = ["Basketball", "Baseball", "Football"]

concatenate(list)

concatenate(list, "-")

/*
The JavaScript code generated by default parameters includes a type of check just as the one manually written 
assigns the default value if no argument is passed
In the case of default parameters, though, these checks only appear in the output, which keeps the TypeScript code listing short and succinct. 
Because the checks are moved inside the function body, we can use wide range of runtime values as default values
you aren’t restricted to compile-time constants as you are in other languages. 
The default value could be calculated, or even obtained from one of the parameters (as is the case for parameter
endAt or refer to any property, variable, constant, or other value that can be accessed from
within the function body
*/ 