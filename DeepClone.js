let object ={
    name: "Htachi MGRM NET",
    city:"Gurgaon",
    country: "India",

}
function deepClone(object){
    let testObject = object;
    console.log(testObject.city);
    console.log(testObject.country);
    console.log(testObject.name);
}


deepClone(object);
