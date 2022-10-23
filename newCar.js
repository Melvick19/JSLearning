var cars = [
    { marca: "Jeep", modelo: "Grand Cherokee", annio: 2009},
    { marca: "Jeep", modelo: "Cherokee", annio: 2010},
    { marca: "Chevrolet", modelo: "Grand Vittara", annio: 2007},
    { marca: "Ford", modelo: "Explorer", annio: 2013},
    { marca: "Hyundai", modelo: "Tucson", annio: 2007},
    { marca: "Toyota", modelo: "Corolla", annio: 2012},
    { marca: "Kia", modelo: "Sportage", annio: 2011},
    { marca: "Mitsubishi", modelo: "Lanser", annio: 2008},
    { marca: "Toyota", modelo: "4 Runner", annio: 2018},
    { marca: "Nissan", modelo: "Patrol", annio: 2014},
];

cars.forEach(function(car){
    console.log(car.marca + " " + car.modelo + " " + car.annio);
});