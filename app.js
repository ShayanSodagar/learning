// ------------------------Array-----------------------
// var arr = ['a','b','c','d'];
// ------Its Like-----
// var 0 = a;
// var 1 = b;
// var 2 = c;
// var 3 = d;
// console.log(arr.length)
// console.log(arr[2])

// arr.push("7");To Add Any Element From End On Array..
// arr.pop("")To Remove Any Element From End On Array..
// arr.shift("")To Remove Any Element From Start On Array..
// arr.unshift("6")To Add Any Element From Start On Array..
// arr[2] = '2'To Add Any Elemet Anywhere Just Call Them By Their Index..

// var arr = ['a','b','c','d','e','f','g','h','i','j','k','l','m'];
// var list = arr.splice(2,3)To Copy Any Index From One Array To Another Array..
// arr.splice(2,3);To Remove Any Index From Array..
// console.log(arr)

// -------------------------------Loop------------------------------
// for(var i =0;i<900;i++){
//     console.log(i)
// }
// for(var i =0;i<20;i++){
//     console.log("17" + " X " + i + "=" + 17*i)
// }Table Multiplication

// var arr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n'];
// for ( var i = 0; i< arr.length;i++){
//     console.log(arr[i])
// }

// var a = ["Hello"]
// var b = ['furqan' , 'usman', 'hammad','shahzaib','sammad','anda']

// for ( var i = 0; i< a.length ; i++){
//      console.log(b.indexOf())
// }
// var month = ['December','January', 'February', 'March', 'April', 'May', 'June', 'July','August', 'September', 'October', 'November','December']
// let date = new Date()
// var mon4 = date.getMonth()+1

// console.log(month[mon4])


// month.splice(8,0, "furqan");
// console.log(month)

var p = prompt("tabale ka name bata")
var o = prompt("kahan tak chalana ha number bata")
for(var i = 1; i <=o ;i++){
    console.log(p + " X " + i + " = " + p*i)

}


function yo(){
    var kk = 900
    let mm = 800
console.log(mm,kk)

}