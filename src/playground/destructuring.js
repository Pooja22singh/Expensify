//Object Destructuring


// const person={
//     name:"Pooja",
//     age:26,
//     location:{
//         city:'Gurgaon',
//         temperature:"25"
//     }
// }
// //const [name,age]=[person.name,person.age];
// const {name:firstName="Anonymous",age:newAge,location}=person;
// const {city,temperature:temp}=person.location;
// console.log(`${firstName} is of ${newAge} yr(s). and live in ${city} and the temperature is ${temp}`);

// const book={
//     title:"abcdef",
//     author:"rfergerfrf",
//     publisher:{
//         name:"dbkidfeiuw"
//     }
// };
// const {title,author}=book;
// const {name:firstNamme="fesfsfsdfsdfdsfdsd"}=book.publisher;
// console.log(`Hello I am ${title} and with author ${author} and publisher ${firstNamme}`)
//Array Destructuring
const address=["Pooja","U10\/42","Galli Number 10","U Block","DLF Phase 3"];
const [name,house,street,block,area,city="Gurugram"]=address;
console.log(`${name} lives in ${house}, ${street}, ${block}, ${area},${city}`);
const item=["Coffee","50","100","200"];
const [itName,regular,medium,large]=item;
console.log(`${itName} regular costs ${regular}`);
console.log(`${itName} medium costs ${medium}`);
console.log(`${itName} large costs ${large}`);






























