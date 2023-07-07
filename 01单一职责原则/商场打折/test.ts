
interface DiscountStrategy {
  calculateDiscount(price: number): number;
}

class BronzeMemberDiscount implements DiscountStrategy {
  calculateDiscount(price: number): number {
    return price * 0.95; // 5% discount for bronze members
  }
}

class SilverMemberDiscount implements DiscountStrategy {
  calculateDiscount(price: number): number {
    return price * 0.9; // 10% discount for silver members
  }
}

class GoldMemberDiscount implements DiscountStrategy {
  calculateDiscount(price: number): number {
    return price * 0.8; // 20% discount for gold members
  }
}

class Order {
  private discountStrategy: DiscountStrategy;

  constructor(discountStrategy: DiscountStrategy) {
    this.discountStrategy = discountStrategy;
  }

  calculateTotalPrice(price: number): number {
    const discountedPrice = this.discountStrategy.calculateDiscount(price);
    // Perform additional calculations or apply taxes, shipping, etc.
    // ...

    return discountedPrice;
  }
}

// Example usage
const order = new Order(new BronzeMemberDiscount());
const totalPrice = order.calculateTotalPrice(100);
console.log(totalPrice); // Output: 95 (5% discount for bronze members)