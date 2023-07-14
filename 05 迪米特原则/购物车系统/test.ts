// 商品类
class Product{
  private name: string;
  private price: number;
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  getName(): string {
    return this.name;
  }
  getPrice():number {
    return this.price;
  }
}

// 购物车类
class ShoppingCart {
  private products: Product[];
  constructor() {
    this.products = [];
  }

  addProduct(product: Product): void {
    this.products.push(product);
  }

  getTotalPrice(): number {
    let totalPrice = 0;
    for (const product of this.products) {
      totalPrice += product.getPrice();
    }
    return totalPrice;
  }
}

class Users{
  private name: string;
  private shoppingCart: ShoppingCart;
  constructor(name: string ) {
    this.name = name;
    this.shoppingCart = new ShoppingCart();
  }

  getName(): string {
    return this.name;
  }

  getShoppingCart(): ShoppingCart {
    return this.shoppingCart;
  }
}

// 使用示例
const users = new Users('小明');

const product1 = new Product('商品1', 100);
const product2 = new Product('商品2', 200);
const product3 = new Product('商品3', 300);

users.getShoppingCart().addProduct(product1);
users.getShoppingCart().addProduct(product2);
users.getShoppingCart().addProduct(product3);

const total = users.getShoppingCart().getTotalPrice();
console.log(`Total price for ${users.getName()}: $${total}`);