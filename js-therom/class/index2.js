class Meta {
  constructor(name, age, birthday) {
    this.name = name;
    this.age = age;
    this.birthday = new Date();
  }
  speak() {
    console.log(`생일이 오늘(${this.birthday})이야?`);
  }
}

var poss = new Meta(`ellie`, 21, Date());
console.log(poss);
poss.speak();
console.log(poss.name);
console.log(poss.age);
console.log(poss.birthday);
console.log(poss.birthday.getDate());

// getter and setter
{
  class GetSet {
    constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
    get age() {
      return this._age;
    }
    set age(value) {
      this._age = value < 0 ? 0 : value;
    }
  }
  let maet = new GetSet(`soso`, `nono`, -11);
  console.log(maet);
  console.log(maet.age);
}

// static properties
class Print {
  static oioi = `dream coder`;

  static goverment() {
    console.log(`print : ${Print.oioi}`);
  }
}

console.log(Print.oioi);
Print.goverment();

//
{
  class Shape {
    constructor(width, heigh, color) {
      this.width = width;
      this.heigh = heigh;
      this.color = color;
    }

    draw() {
      console.log(`draw ${this.color}`);
    }
    getArea() {
      return this.width * this.heigh;
    }
  }
  var see = new Shape(12, 21, `red`);
  see.draw();
  console.log(see.getArea());

  class Triangle extends Shape {
    draw() {
      super.draw();
    }
    getArea() {
      return (this.width * this.heigh) / 2;
    }
  }

  var triangle = new Triangle(10, 4, `blue`);
  console.log(triangle.getArea());
  triangle.draw();

  console.log(shape instanceof Shape);
}
