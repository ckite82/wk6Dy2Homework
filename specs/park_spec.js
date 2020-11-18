const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;

  beforeEach(function () {
    park = new Park("Jurassic Park", 25);
  });

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, "Jurassic Park");
  });

  it('should have a ticket price', function(){
    const actual = park.price;
    assert.strictEqual(actual, 25);
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [])
  });

  it("should be able to count dinosaurs", function(){
    const actual = park.numberOfDinosaurs();
    assert.strictEqual(actual, 0);
  })

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur("Raptor");
    const actual = park.numberOfDinosaurs();
    assert.strictEqual(actual, 1);
  });

  // it('should be able to remove a dinosaur from its collection', function(){
  //   park.addDinosaur("Triceratops");
  //   park.addDinosaur("Raptor");
  //   park.removeDinosaur("Raptor");
  //   const actual = park.numberOfDinosaurs();
  //   assert.strictEqual(actual, 1);
  // });

  it('should be able to remove a dinosaur from its collection', function(){
    park.addDinosaur("Triceratops", "herbivore", 15);
    park.addDinosaur("Raptor", "carnivore", 25);
    park.removeDinosaurByName("Raptor");
    const actual = park.numberOfDinosaurs();
    assert.strictEqual(actual, 1);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    park.addDinosaur("Triceratops", "herbivore", 15);
    park.addDinosaur("Raptor", "carnivore", 25);
    park.addDinosaur("T-rex", "carnivore", 50);
    const expected = [50]
    const actual = park.dinosaurWithMostVisits();
    assert.deepStrictEqual(actual, expected)
  });

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
