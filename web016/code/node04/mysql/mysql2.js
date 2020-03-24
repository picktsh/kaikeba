(async () => {
  console.log('log');
  const mysql = require('mysql2/promise')
  // 连接设置
  const config = {
    host: 'localhost',
    user: 'root',
    password: 'example',
    database: 'kaikeba',
  }
  const connection = await mysql.createConnection(config)
  
  let ret = await config.execute(`CREATE TABLE IF NOT EXISTS test (
  id INT NOT NULL AUTO_INCREMENT,
  message VARCHAR(45) NULL,
  PRIMARY KEY (id);)`)
  console.log(ret);
  
  ret = await connection.execute(`INSERT INTO test(message) VALUES(?)`, ['abc'])
  console.log('insert'.ret)
  
  const [rows, fields] = connection.execute(`SELECT * FROM test`);
  console.log('select :', JSON.stringify(rows))
})();
