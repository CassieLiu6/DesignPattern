class Cat {
  private name :string= '';
  private shoutNum :number= 3;
  constructor(name = '无名') {
    this.name = name;
  }
  shout() {
    let result = "";
    for (let i = 0; i < this.shoutNum; i++) {
      result += "喵---";
    }
     return `我的名字叫${this.name}, ${result}`
  }

  setShoutNum(num:number) {
    if (num <= 10) {
      this.shoutNum = num;
    } else {
      this.shoutNum = 10;
    }
  }

  getShoutNum() {
    return this.shoutNum;
  }
}



// function shout() {
//   console.log("喵---喵---喵");
// }


function Test() {
  // console.log("喵---喵---喵");
  // console.log(shout());
  // const cat = new Cat();
  const cat = new Cat('咪咪');
  cat.setShoutNum(5);
  console.log(cat.shout());
}


Test(); 