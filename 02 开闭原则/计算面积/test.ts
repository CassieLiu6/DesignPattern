// 抽象类或接口，表示不同类型的形状
abstract class Shape{
  abstract calculateArea(): number;
}

// 具体的形状类：圆形
class Circle extends Shape {
  radius: number;
  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  calculateArea(): number {
    return Math.PI * this.radius ** 2;
  }
}

// 具体的形状类：矩形
class Rectangle extends Shape {
  width: number;
  height: number;
  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }

  calculateArea(): number {
    return this.width * this.height;
  }
}

// 计算形状的总面积
function calculateTotalArea(shapes: Shape[]): number {
  let totalArea = 0;
  shapes.forEach(shape => {
    totalArea += shape.calculateArea();
  });
  return totalArea;
}

// 使用示例
const shapes: Shape[] = [
  new Circle(5),
  new Rectangle(3, 4),
  new Circle(2.5)
];

const totalArea = calculateTotalArea(shapes);
console.log("Total area:", totalArea);

/** 在上面的示例中， 我们定义了一个抽象类“Shape”， 它表示不同的形状， 然后还有具体的形状类， Circle 和 Rectangle， 她们继承自 Shape 并实现了calculateArea 方法
 * 根据开闭原则， 我们应该对修改关闭， 对扩展开放
 * 在这个示例中， 我们通过创建新的形状类来扩展程序的功能， 而不需要修改现有的代码。 我们只需要轻松的添加新的形状类， 只需确保她们继承自 Shape 并实现了 calculateArea 方法即可
 * 最后， 定义了一个 calculateTotalArea 函数， 它接收一个 Shape 类型的数组， 并计算出所有形状的总面积。 这个函数不需要知道具体的形状类型， 只依赖于抽象的 Shape 类， 这样， 
 * 当我们添加新的形状类时， calculateTotalArea 函数不需要做任何修改， 也就是说， 我们对修改关闭了
*/