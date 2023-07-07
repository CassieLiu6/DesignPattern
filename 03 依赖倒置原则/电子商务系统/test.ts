/** 当我们设计电子商务系统时， 可以使用依赖倒置原则来解耦订单处理模块和支付模块 */

// 定义抽象的支付接口
interface PaymentProvider {
  processPayment(amount:number): void;
}

// 定义具体的支付方式类： 支付宝
class Alipay1 implements PaymentProvider {
  processPayment(amount: number) {
    console.log(`支付宝支付了${amount}元`);
    // 实际支付逻辑...
  }
}

// 定义具体的支付方式类： 信用卡支付
class CreditCardPayment implements PaymentProvider {
  processPayment(amount: number) {
    console.log(`信用卡支付了${amount}元`);
    // 实际支付逻辑...
  }
}

// 订单处理类

class OrderProcessor {
  paymentProvider: PaymentProvider;
  constructor(paymentProvider: PaymentProvider) {
    this.paymentProvider = paymentProvider;
  }

  processOrder(amount: number) {
    // 处理订单逻辑...
    this.paymentProvider.processPayment(amount);
    // 其他订单处理逻辑...
  }
}

// 使用示例
const alipay = new Alipay1();
const orderProcessor = new OrderProcessor(alipay);

orderProcessor.processOrder(100);

const creditCard = new CreditCardPayment();
orderProcessor.paymentProvider = creditCard;

orderProcessor.processOrder(200);

/**
在上述示例中，我们定义了一个抽象的 PaymentProvider 接口，表示支付提供者，并声明了一个 processPayment() 方法。然后，我们通过实现 PaymentProvider 接口来创建具体的支付实现类 Alipay1 和 CreditCard，它们分别实现了支付的具体逻辑。

在 OrderProcessor 类中，我们将支付提供者作为构造函数的参数传入，通过依赖注入的方式将具体的支付实现类与订单处理模块解耦。在处理订单的过程中，我们调用支付提供者的 processPayment() 方法来处理支付操作，而不需要直接依赖于具体的支付实现类。

通过使用依赖倒置原则，我们可以轻松地替换支付实现类，例如从支付宝切换到信用卡支付，而不需要修改订单处理类的代码。这种松耦合的设计使得系统更加灵活、可扩展和可维护。 */
