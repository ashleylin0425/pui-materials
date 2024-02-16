/* A class representing a car that can start and stop moving. */
class Car {
  model;
  year;
  element;
  isMoving = false;

  constructor(model, year, element) {
    this.model = model;
    // "this" is refering to this particular object
    // this.model is a property, and then it takes the value of the parameter model from constructor
    this.year = year;
    this.element = element;
    // add event listener, this is inside the constructor so that whenever we create more new objects, we can still capture the user action
    const btnDrive = this.element.querySelector(".btnDrive");
    const btnBrake = this.element.querySelector(".btnBrake")
    btnDrive.onClick = this.drive.bind(this)
    btnBrake.onclick = this.brake.bind(this)

  }

  updateElement() {
    this.element.innerText = this.model + ' ' + this.year;





    if (this.isMoving) {
      this.element.classList.add('moving-car');
      this.element.innerText += ' is driving.';
    } else {
      this.element.classList.remove('moving-car');
    }
  }

  drive() {
    this.isMoving = true;
    this.updateElement();
  }

  brake() {
    this.isMoving = false;
    this.updateElement();
  }
}

let carElement = document.querySelector('.car');
let theCar = new Car('Chevy Corvette', '2022', carElement);




theCar.updateElement();
