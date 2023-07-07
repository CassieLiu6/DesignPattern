// 定义基类文件
abstract class Files{
  abstract getSize(): number;
}

// 定义子类文件：文本文件
class TextFile extends Files{
  content: string;
  constructor(content: string) {
    super();
    this.content = content;
  }

  getSize(): number {
    // 文本文件大小以字节数表示
    return this.content.length;
  }
}

// 定义子类文件：图像文件
class ImageFile extends Files{
  width: number;
  height: number;
  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }

  getSize(): number {
    // 图像文件大小以像素点表示
    return this.width * this.height;
  }
}

//计算文件总大小的函数
function calculateTotalSize(files: Files[]): number {
  let totalSize = 0;
  files.forEach(file => {
    totalSize += file.getSize();
  });
  return totalSize;
}

// 使用示例
const files: Files[] = [
  new TextFile('Hello World'),
  new ImageFile(100, 200),
  new TextFile("Lorem ipsum dolor sit amet.")
];

const totalSize = calculateTotalSize(files);
console.log("Total size:", totalSize);