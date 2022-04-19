<template>
  <div>
    <Nuxt />
  </div>
</template>
<script>
// 查询接口
const getDate=()=>{}
const lists = [5,9,5,7,8,5]
// 分页接口
const getPage=(page)=>{}
// 删除接口
const deleteDate=(id)=>{}
// 新增接口
const addDate=(data)=>{}
// 修改接口
const updateDate=(data)=>{}

// 分页
const page = {
  page: 1,
  pageSize: 10,
  total: 0,
  pageCount: 0,
  pageList: [],
  pageStart: 0,
  pageEnd: 0,
  pagePrev: 0,
  pageNext: 0,
  pageFirst: 0,
  pageLast: 0,
  pageGoto: 0,
  pageInput: 0,
  pageInputText: '',
  pageInputDisabled: false,
  pageInputFocus: false,
  pageInputKeydown: false,
  pageInputKeyup: false,
  pageInputKeypress: false,
  pageInputKeydownEnter: false,
  pageInputKeydownArrow: false,
  pageInputKeydownHome: false,
  pageInputKeydownEnd: false,
  pageInputKeydownPageup: false,
  pageInputKeydownPagedown: false,
  pageInputKeydownTab: false,
  pageInputKeydownShift: false,
  pageInputKeydownCtrl: false,
  pageInputKeydownAlt: false,
  pageInputKeydownMeta: false,
  pageInputKeydownSpace: false,
  pageInputKeydownDelete: false,
  pageInputKeydownBackspace: false,
  pageInputKeydownEscape: false,
  pageInputKeydownArrowLeft: false,
  pageInputKeydownArrowUp: false,
  pageInputKeydownArrowRight: false,
  pageInputKeydownArrowDown: false,
  pageInputKeydownArrowPageup: false,
  pageInputKeydownArrowPagedown: false,
  pageInputKeydownArrowHome: false,
  pageInputKeydownArrowEnd: false,
  pageInputKeydownArrowInsert: false,
  pageInputKeydownArrowDelete: false,
  pageInputKeydownArrowF1: false,
  pageInputKeydownArrowF2: false,
  pageInputKeydownArrowF3: false,
  pageInputKeydownArrowF4: false,
  pageInputKeydownArrowF5: false
}
//根据用户名查询关联的文章
const getArticleByUserName=(username)=>{}
//根据用户名查询关联的评论
const getCommentByUserName=(username)=>{}
//根据用户名查询关联的回复
const getReplyByUserName=(username)=>{}
//根据用户名查询关联的收藏
const getCollectByUserName=(username)=>{}
//根据用户名查询关联的点赞
const getLikeByUserName=(username)=>{}
//根据用户名查询关联的关注
const getFollowByUserName=(username)=>{}
//根据用户名查询关联的粉丝
const getFansByUserName=(username)=>{}


</script>
<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
