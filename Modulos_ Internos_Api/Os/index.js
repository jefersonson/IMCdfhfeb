//T1
const os= require("node:os")

console.log(os.platform());
console.log(os.arch());            
//-----------------------------------
//T2
console.log(os.cpus());
//-----------------------------------
//T3

const Bytes = (os.freemem) * 1

const BytesParaklyo = Bytes/100
console.log(BytesParaklyo)
//-----------------------------------



// console.log(os.cpus().length);

// console.log(os.cpus()[0].model);
// //
// console.log(os.freemem())
// //
// console.log(os.homedir());
// //
// console.log(os.type());
// //