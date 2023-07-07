// 不同类型的支付方式
abstract class PaymentMethod{
  abstract pay(money: number): void;
}

// 定义具体的支付方式类： 支付宝
class Alipay extends PaymentMethod {
  pay(amount: number) {
    console.log(`支付宝支付了${amount}元`);
    // 实际支付逻辑...
  }
}

// 定义具体的支付方式类： 微信支付
class WechatPay extends PaymentMethod {
  pay(amount: number) {
    console.log(`微信支付了${amount}元`);
    // 实际支付逻辑...
  }
}

// 定义具体的支付方式类： 银联支付
class UnionPay extends PaymentMethod {
  pay(amount: number) {
    console.log(`银联支付了${amount}元`);
    // 实际支付逻辑...
  }
}

// 定义订单类
class PayOrder {
  amount: number;
  paymentMethod: PaymentMethod;
  constructor(amount: number, paymentMethod: PaymentMethod) {
    this.amount = amount;
    this.paymentMethod = paymentMethod;
  }

  processPayment() {
    this.paymentMethod.pay(this.amount);
  }
}
// 使用示例
const order1 = new PayOrder(100, new Alipay());
order1.processPayment();

const order2 = new PayOrder(200, new WechatPay());
order2.processPayment();

const order3 = new PayOrder(300, new UnionPay());
order3.processPayment();

/** 在上面的示例中， 我们定义了一个抽象类“PaymentMethod”， 它表示不同的支付方式， 然后还有具体的支付方式类， Alipay、 WechatPay 和 UnionPay， 她们继承自 PaymentMethod 并实现了 pay 方法
  * 根据开闭原则， 我们应该对修改关闭， 对扩展开放
  * 在这个示例中， 我们通过创建新的支付方式类来扩展程序的功能， 而不需要修改现有的代码。 我们只需要轻松的添加新的支付方式类， 只需确保她们继承自 PaymentMethod 并实现了 pay 方法即可
  * 最后， 定义了一个 PayOrder 类， 它接收一个 PaymentMethod 类型的参数， 并调用 pay 方法完成支付。 这个类不需要知道具体的支付方式， 只依赖于抽象的 PaymentMethod 类， 这样，
  * 当我们添加新的支付方式类时， PayOrder 类不需要做任何修改， 也就是说， 我们对修改关闭了
*/