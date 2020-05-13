const autoprefixer = require("autoprefixer");
module.exports = {
  plugins: [
    autoprefixer({
      // ios 14 13
      // 全球浏览器的市场份额 大于1%的浏览器
      overrideBrowserslist: ["last 2 versions", ">1%"],
    }),
  ],
};
