import React, { Component } from 'react'
import './index.scss'

const menu = [
  { title: '首页', icon: 'home', link: '/', },
  { title: '购物车', icon: 'home', link: '/cart', },
  { title: '订单列表', icon: 'home', link: '/orderlist', },
  { title: '用户中心', icon: 'home', link: '/user', },
]

export default class BottomNav extends Component {
  render() {
    return (
      <div className="tab-bar">
        <div className="tab-nav">
          {menu.map((item, index) => {
            return (
              <MenuItem {...item} key={index}/>
            )
          })}
        </div>
      </div>
    )
  }
}

function MenuItem({ title, icon }) {
  return (
    <div className="menu-item">
      <span className={'iconfont icon-' + icon}/>
      <span className="title">{title}</span>
    </div>
  )

}
