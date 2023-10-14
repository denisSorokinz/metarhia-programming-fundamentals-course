const Car = class {
  maxSpeed = 60;

  constructor(maxSpeed) {
    this.maxSpeed = maxSpeed || this.maxSpeed;
  }
};

const BMW = class extends Car {
  constructor(maxSpeed) {
    super(maxSpeed);
    this.make = "BMW";
  }
};

const twoSeaterMixin = (CarType) =>
  class extends CarType {
    constructor(maxSpeed) {
      super(maxSpeed);
      this.body = "coupe";
    }
  };

const BMWTwoSeater = twoSeaterMixin(BMW);

const bmw4Er = new BMWTwoSeater(260);
