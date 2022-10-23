var auto1 = ["Ford", " Explorer", " 2013\n"]
var auto2 = ["Jeep", " Cherokee", " 2009\n"]
var auto3 = ["Hyundai", " Tucson", " 2007\n"]
 
var autos = [auto1, auto2, auto3]

function tusCarros(autos) {
    console.log(`Tienes: ${autos}`);
}

for (var i = 0; i < autos.length; i++) {
    tusCarros(autos[i]);
}