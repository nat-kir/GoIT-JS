class User {
  constructor(name, age, followers) {
    this._name = name;
    this._age = age;
    this._followers = followers;
  }

  getInfo() {
    console.log(
      `User ${this._name} is ${this._age} years old and has ${this._followers} followers`,
    );
  }
}
const mango = new User('Mango', 2, 20);

mango.getInfo();

const poly = new User('Poly', 3, 17);

poly.getInfo();
