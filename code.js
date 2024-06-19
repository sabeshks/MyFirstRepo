let a=10
let b=5
let c=a+b
let d=a-b
let e=a*b
let f=a/b
document.write(a+"+"+b+"="+ c +" ")
document.write(a+"-"+b+"="+ d+" ")

document.write(a+"*"+b+"="+ e+" ")

document.write(a+"/"+b+"="+ f+"   ")


let age=12
if(age >18){
    document.write("INVALID")
    
   
}

else
{
    document.write(age +"VALID")
}


let name="vsbengineeringcollege"
console.log(name)
let len=name.length
console.log(len)
let a1=name.slice(3,20)
console.log(a)
let sub=name.substring(5,11)
console.log(sub)
let str=name.substr(5,120)
console.log(str)
console.log(name.toUpperCase())
console.log(name.replace("Anna University"))
var Name=new Array("kumar","mathi","amosh ")
console.log(Name)
console.log(Name[1])
var Nam=new Array()
Nam[0]="kumar"
Nam[1]="amosh"
console.log(Nam)
console.log(Name[2])
console.log(Name.sort())
// Normal Function
function run()
{
    var food=["Puri","dosa","idly"]
    document.write(food[0])
    console.log(food[2])
}
run()
// Arrow Function
let myFun=()=>{
    var food=["Puri","dosa","idly"]
    document.write(food[0])
    console.log(food)
}
myFun()