/**当我们设计一个动物园应用程序时，可以使用里氏替换原则来确保不同种类的动物都能够无缝替换基类动物，而不破坏程序的正确性 */
abstract class Animal {
  abstract makeSound(): void;
}

class Dog extends Animal {
  makeSound() {
    console.log('汪汪汪');
  }
}

class Duck extends Animal {
  makeSound() {
    console.log('嘎嘎嘎');
  }
}

function performOperation(animal: Animal[]) {
  animal.forEach(a => a.makeSound());
}

const animals: Animal[] = [
  new Dog(),
  new Duck(),
  new Dog(),
  new Duck(),
]

performOperation(animals);


/**
根据里氏替换原则，子类（如 Dog 和 Cat）应该能够无缝替换基类（如 Animal），而不会导致程序错误或行为异常。
在这个示例中，Dog 和 Cat 都是能够替换 Animal 类的，因为它们继承自 Animal 并实现了相同的抽象方法。
 */