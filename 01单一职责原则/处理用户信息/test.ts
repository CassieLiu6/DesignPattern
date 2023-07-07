// 一个负责处理用户信息的类
class UserManager{
  getUser(id: number):User {
    // 从数据库中获取用户信息
    // .... 
    return {
      id:  id,
      name: 'xxxxx',
      email: 'xxxxx'
    }
  }

  saveUser(user:User): void{
    // 将用户保存到数据库
    // ....
  }

  deleteUser(id:number):void {
    // 从数据库中删除用户
    // ....
  }
}

// 一个负责处理用户界面交互的类
class UserInterface{
  showUser(user:User):void {
    // 显示用户信息到界面上
    // ....
  }

  showError(message: string): void{
    // 显示错误信息到界面上
    // ....
  }
}


class User{
  id: number;
  name: string;
  email: string;
  constructor(id: number, name: string, email: string) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}

// 使用示例
const userManager = new UserManager();
const userInterface = new UserInterface();

const user = userManager.getUser(1);
if (user) {
  userInterface.showUser(user);
} else {
  userInterface.showError('用户不存在');
}

/**上面的示例中， 我们将责任划分到不同的类中， “UserManager”类负责处理用户信息的存取，"UserInterface" 类负责处理用户界面的交互， 这样做可以使每个类的职责更加清晰明确
  * 并且可以更加容易的进行维护和扩展。 根据单一职责原则， 一个类应该只有一个引起他变化的原因。
*/