function areAnagrams(s1,s2){
    var Str1= s1.split('').sort().join('').trim();
    var Str2= s2.split('').sort().join('').trim();
    if(Str1==Str2){
        console.log("true");
    }else{
        console.log("false");
    }
}

areAnagrams("Fried","Fired");