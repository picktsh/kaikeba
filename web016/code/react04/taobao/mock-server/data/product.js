var Mock = require('mockjs');

const getProductList = []
let productImg = ['//img10.360buyimg.com/n2/s240x240_jfs/t1/50018/39/8127/229510/5d5b5043E66769ff0/8907776f7bd66d57.jpg!q70.jpg',
]
for (let i = 0; i < 12; i++) {
  getProductList.push({
    id: i,
    //img: productImg[0],
    img: Mock.Random.image('120x120'),
    title: Mock.Random.ctitle(5, 50),
    price: (Math.random() * 1000).toFixed(2),
    link: "",
    tags: [Mock.Random.ctitle(3, 6), Mock.Random.ctitle(3, 6)]
  })
}
module.exports = () => {
  return {
    getProductList,
  }
}