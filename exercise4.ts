let myNumber:number = 5;
console.log("my number is: "+myNumber);
let x:boolean=true;

//testing boolean
if (x==true){

console.log("my number is: "+2);
}

//QUESTION 5 (A)
let list: any[]=[5,2,3,4,5];

for(let i=0;i<list.length;i++);
console.log("value is "+list[2]);

// or
//QUESTION 5 (A) best example
//gettin the lenght of a string ( including white spaces)
function string_lenght(value:string):number{

    return value.length;
}
console.log("the lenght of test 1 is: "
+string_lenght("test 1"));

//question 5 (B)
//code bellow is to find the lenght of a string without white spacing
function string_nospaces(value:string):number{

    return value.replace(" ","").length;
}
console.log("this is the lenght of test 1 without white spaces: "
+string_nospaces("test 1"));

//last question 
//the ? makes the parameter optional
function bothMethods(value:string, spaces?:boolean):number{
let count:number = 0;
    if (spaces){
        count = value.length;
}else {
    count = value.replace(" ","").length;
}
return count;
}

console.log(bothMethods("test 1"));