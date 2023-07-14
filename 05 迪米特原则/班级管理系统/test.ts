// 学生类
class Student{
  private name: string;
  constructor(name: string) {
    this.name = name;
  }

  getName(): string{
    return this.name;
  }
}

// 班级类
class Class{
  private students: Student[];
  constructor(students: Student[]) {
     this.students = students;
  }

  getStudents(): Student[] {
    return this.students;
  }
}

// 班级管理类
class ClassManager {
  private classes: Class[];
  constructor(classes: Class[]) {
    this.classes = classes;
  }
  getAllStudents(): Student[] {
    let students: Student[] = [];
    for (let i = 0; i < this.classes.length; i++) {
      students = students.concat(this.classes[i].getStudents());
    }
    return students;
  }
}

// 使用示例
const student1 = new Student('小明');
const student2 = new Student('小红');
const student3 = new Student('小刚');

const class1 = new Class([student1, student2]);
const class2 = new Class([student3]);

const classManager = new ClassManager([class1, class2]);

const allStudents = classManager.getAllStudents();
for (const student of allStudents) {
  console.log(student.getName());
}

/** 根据迪米特原则，ClassManager 类只与 Class 类进行交互，并通过 Class 类来获取学生信息。
它不直接访问 Student 类的成员。这样 ClassManager 类只与直接朋友 Class 类进行交互，减少了耦合度。
ClassManager 类只需要知道 Class 类即可，不需要了解 Student 类的内部细节
当我们需要对学生信息进行修改或添加新的功能时，可以在 Student 类内部进行修改，而不需要修改 ClassManager 类的代码
*/