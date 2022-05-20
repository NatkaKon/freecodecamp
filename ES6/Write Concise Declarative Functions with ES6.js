// Only change code below this line
//Refactor the function setGear inside the object bicycle to use the shorthand syntax described above.


const bicycle = {
    gear: 2,
    // setGear: function(newGear) {
    //   this.gear = newGear;
    // }
    setGear(newGear) {
        this.gear = newGear;
      }
  };
  // Only change code above this line
  bicycle.setGear(3);
  console.log(bicycle.gear);