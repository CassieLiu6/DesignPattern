function Test() {
  // console.log("喵---喵---喵");
  // console.log(shout());
  const cat = new Cat();
  // const cat = new Cat('咪咪');
  console.log(cat.shout());
}


function shout() {
  console.log("喵---喵---喵");
}


class Cat {
  name = '';
  shoutNum = 3;
  constructor(name = '无名') {
    this.name = name;
  }
  shout() {
    return `我的名字叫${this.name}, 喵---喵---喵`
  }
}

Test();