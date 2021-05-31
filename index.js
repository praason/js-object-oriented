//es6  way
class Person {
  constructor(name, lname, age) {
    this.name = name;
    this.lname = lname;
    this.age = age;
  }
  getName() {
    return `${this.name}`;
  }
}

let p = new Person('Prasad', 'Sonawane', '22');
console.log(p);
console.log(p.getName());

//trad way
function Person2(name, lname, age) {
  this.name = name;
  this.lname = lname;
  this.age = age;
}
Person2.prototype.getName2 = function() {
  return `my name is ${name}`;
};
let p2 = new Person2('Nikhil', 'Sonawane', '22');
console.log(p2);

//inheritance
class car {
  constructor(name) {
    this.name = name;
  }
  getCarName() {
    return `${this.name}`;
  }
}
class Carowner extends car {
  constructor(name, id) {
    super(name);
    this.id = id;
  }
  //method overrriding
  getCarName(name, id) {
    return `name: ${this.name}, id: ${this.id}`;
  }
}
let c = new Carowner('nexon', 11);
console.log(c.getCarName());

//data abstraction
function student(sname, marks) {
  let snames = sname;
  let markss = marks;

  let getSname = function() {
    return `${snames}`;
  };
  this.getMarks = function() {
    return `${markss}`;
  };
}
let s = new student('Rohan', 88);
console.log(s.getMarks());
//console.log(s.getSname()); //error beacse not accesiable

//encapsulation
class Country {
  constructor(ctname, population) {
    this.ctname = ctname;
    this.population = population;
  }
  getCountryDeatails() {
    return `${this.ctname} ,language is:  ${this.lang}`;
  }
  addLanguage(lang) {
    this.lang = lang;
  }
}

let ct = new Country('India', '10000');
console.log(ct.getCountryDeatails());
let al = ct.addLanguage('English');
console.log(ct.getCountryDeatails());
