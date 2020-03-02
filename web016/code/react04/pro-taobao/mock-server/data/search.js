var Mock = require('mockjs');

const getFirstCatgories = [
  {
    "id": 0,
    "title": "热门推荐"
  },
  {
    "id": 1,
    "title": "手机数码"
  },
  {
    "id": 2,
    "title": "家用电器"
  },
  {
    "id": 3,
    "title": "电脑办公"
  },
  {
    "id": 4,
    "title": "美妆护肤"
  },
  {
    "id": 5,
    "title": "个护清洁"
  },
  {
    "id": 6,
    "title": "汽车生活"
  },
  {
    "id": 7,
    "title": "京东超市"
  },
  {
    "id": 8,
    "title": "男装"
  },
  {
    "id": 9,
    "title": "女装"
  }
]
const getSecondCatgories = [
  {
    "title": "热门分类",
    "children": [
      {
        "title": "手机",
        "id": "",
        "image": "https://img14.360buyimg.com/focus/s140x140_jfs/t27136/183/1628977274/31007/a6f7ed55/5be6ebd8Nb07ef492.png"
      },
      {
        "title": "耳机",
        "id": "",
        "image": "https://img30.360buyimg.com/focus/s140x140_jfs/t1/21233/40/7634/13890/5c6d039bE8a65d667/aef9581abcc85725.png"
      },
      {
        "title": "华为",
        "id": "",
        "image": "https://img30.360buyimg.com/focus/s140x140_jfs/t1/1446/14/631/8500/5b9237e5E0d1f9e16/b1a627b92323b5ed.png"
      },
      {
        "title": "电磁炉",
        "id": "",
        "image": "https://img11.360buyimg.com/focus/s140x140_jfs/t1/26217/19/7605/22816/5c6d03a3E4f263c9d/d6fc27b51078358c.png"
      },
      {
        "title": "路由器",
        "id": "",
        "image": "https://img14.360buyimg.com/focus/s140x140_jfs/t27400/283/1600620667/15106/a935e7bd/5be6f2e1Nfa8d9d6e.png"
      },
      {
        "title": "吹风机",
        "id": "",
        "image": "https://img12.360buyimg.com/focus/s140x140_jfs/t1/25144/37/2370/7617/5c1cae45Ea0ec5a85/f7ba433b5d1e072f.png"
      }
    ]
  },
  {
    "title": "专场推荐",
    "children": [
      {
        "title": "三只松鼠",
        "id": "",
        "image": "https://img11.360buyimg.com/focus/s140x140_jfs/t1/30718/32/2643/9923/5c6d03ecEabd2d664/aaee556800519e1f.png"
      },
      {
        "title": "洗发水",
        "id": "",
        "image": "https://img13.360buyimg.com/focus/s140x140_jfs/t1/25168/27/9848/15397/5c822507E35d2ad16/384983a98758f8f8.png"
      },
      {
        "title": "女装",
        "id": "",
        "image": "https://img11.360buyimg.com/focus/s140x140_jfs/t19732/6/697088077/2894/2788a72/5a9fbfd2Ncc01c1b5.jpg"
      },
      {
        "title": "冰箱",
        "id": "",
        "image": "https://img20.360buyimg.com/focus/s140x140_jfs/t21115/83/225125274/13856/5473fb3f/5b0567c1N59d53b27.png"
      },
      {
        "title": "洗衣机",
        "id": "",
        "image": "https://img14.360buyimg.com/focus/s140x140_jfs/t21664/15/237213959/24996/a3c6c7d6/5b0567c7N9cc1c355.png"
      },
      {
        "title": "保温杯",
        "id": "",
        "image": "https://img11.360buyimg.com/focus/s140x140_jfs/t1/11731/9/10730/9518/5c822298Eb50b3275/33f88663e1c0284e.png"
      }
    ]
  },
  {
    "title": "热门分类",
    "children": [
      {
        "title": "蓝月亮",
        "id": "",
        "image": "https://img13.360buyimg.com/focus/s140x140_jfs/t1/23312/39/9884/7280/5c822292E65f3929b/78ba741d321954b0.png"
      },
      {
        "title": "微波炉",
        "id": "",
        "image": "https://img10.360buyimg.com/focus/s140x140_jfs/t1/21353/14/7486/17896/5c6d03c0Eb9c58d49/9210736682f59e39.png"
      }
    ]
  }
]

module.exports = () => {
  return {
    getFirstCatgories,
    getSecondCatgories: getSecondCatgories,
  }
}