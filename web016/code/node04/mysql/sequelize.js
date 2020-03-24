(async () => {
  const Sequelize = require('sequelize')
  const sequelize = new Sequelize('kaikeba', 'root', 'example', {
    host: 'localhost',
    dialect: 'mysql',
  })
  
  // 定义模型
  const Fruit = sequelize.define('Fruit', {
    // id: {
    //   type: Sequelize.DateType.UUID
    // },
    name: {type: Sequelize.STRING(20), allowNull: false},
    price: {type: Sequelize.FLOAT, allowNull: false},
    stock: {type: Sequelize.INTEGER, defaultValue: 0},
  })
  
  // let ret = await Fruit.sync()
  let ret = await Fruit.sync({force: true})
  
  // 加入一条数据
  ret = await Fruit.create({
    name: '香蕉',
    price: 3.5,
  });
  // 变更价格,更新操作
  ret = await Fruit.update({
    price: 4
  }, {
    where: {name: '香蕉'}
  })
  // 查询
  const Op = Sequelize.Op; // 操作符
  ret = await Fruit.findAll({
    where: {price: {[Op.lt]: 5, [Op.gt]: 2}}
  })
  console.log(JSON.stringify(ret))
})();
