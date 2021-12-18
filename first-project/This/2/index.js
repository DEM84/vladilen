const dog = {
  name: "Чарли",
  type: "Собака",
  makeSound() {
    return "Гав-Гав";
  },
};

const bird = {
  name: "Петя",
  type: "Воробей",
  makeSound() {
    return "Чик-чирик";
  },
};

function makeDomestic(status) {
  console.log(`${this.type} по имени ${this.name} говорит ${this.makeSound()}`);
  console.log("obj", Object.assign({}, { isDomestic: status }, this));
}

makeDomestic.bind(dog, true)();
makeDomestic.call(bird, false);
makeDomestic.apply(bird, [true]);
