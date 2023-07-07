// 定义抽象的日志存储接口
interface LogStorage {
  saveLog(log: string): void;
}

// 定义具体的日志存储类：数据库存储
class DatabaseLogStorage implements LogStorage {
  saveLog(log: string) {
    console.log(`将日志${log}保存到数据库中`);
    // 实际存储逻辑...
  }
}

// 定义具体的日志存储类：文件存储
class FileLogStorage implements LogStorage {
  saveLog(log: string) {
    console.log(`将日志${log}保存到文件中`);
    // 实际存储逻辑...
  }
}

// 日志记录类
class Logger {
  logStorage: LogStorage;
  constructor(logStorage: LogStorage) {
    this.logStorage = logStorage;
  }

  log(message: string) {
    // 记录日志逻辑...
    this.logStorage.saveLog(message);
    // 其他日志记录逻辑...
  }
}

// 使用示例
const databaseLogStorage = new DatabaseLogStorage();
const logger = new Logger(databaseLogStorage);

logger.log('Error occurred.');

const fileLogStorage = new FileLogStorage();
logger.logStorage = fileLogStorage;

logger.log('Warning: Invalid input.');