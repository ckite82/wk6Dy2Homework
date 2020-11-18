const Dinosaur = require("./dinosaur")

const Park = function(name, price){
    this.name = name;
    this.price = price;
    this.dinosaurs = []
}

Park.prototype.numberOfDinosaurs = function(){
    return this.dinosaurs.length
}

Park.prototype.addDinosaur = function(dinosaur){
    this.dinosaurs.push(dinosaur);
}

// Park.prototype.removeDinosaur = function(dinosaur){
//     this.dinosaurs.pop(dinosaur);
// }

Park.prototype.removeDinosaurByName = function(dinosaur){
    const indexOfDinosaur = this.dinosaurs.indexOf(dinosaur);
    this.dinosaurs.splice(indexOfDinosaur, 1);
}

Park.prototype.dinosaurWithMostVisits = function(){
    for (var dinosaur in dinosaurs)
    return Math.max.apply(Math, this.dinosaurs.dinosaurWithMostVisits)
};

module.exports = Park;