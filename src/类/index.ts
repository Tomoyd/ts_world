class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return "Hello" + this.greeting;
  }
}

let greeter = new Greeter("world");

// 继承

class Animal {
  name: string;
  move(distanceInMeters: number = 0) {
    console.log(`Animal moved ${distanceInMeters}`);
  }
  constructor(theName: string) {
    this.name = theName;
  }
}

class Dog extends Animal {
  bark() {
    console.log("Woof! Woof!");
  }
}

const dog = new Dog("小狗");
dog.bark();
dog.move();
dog.bark();

class Snake extends Animal {
  constructor(name: string) {
    super(name);
  }
  move(distanceInMeters = 5) {
    super.move(distanceInMeters);
  }
}

// 存储器
class Employee {
  fullName: string;
  get() {
    return this.fullName;
  }
  set(name: string) {
    if (name == "wangba") {
      console.log("Error:Unauthorized update of employee! ");
    } else {
      this.fullName = name;
    }
  }
}
let employee = new Employee();
employee.fullName = "123";
//

abstract class Animals {
  abstract makeSound(): void;
  move(): void {
    console.log("roaming the earth...");
  }
}
