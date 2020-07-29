import React, { Component } from 'react'
import './index.scss'

const menu = [
  { title: '首页', icon: 'home', link: '/', },
  { title: '购物车', icon: 'cart', link: '/cart', },
  { title: '订单列表', icon: 'form', link: '/orderlist', },
  { title: '用户中心', icon: 'emoji', link: '/user', },
]

export default class BottomNav extends Component {

  render() {
    const { tab, setTab } = this.props
    return (
      <div className="tab-bar">
        <div className="tab-nav">
          {menu.map((item, index) => {
            return (
              <MenuItem {...item} key={index} active={tab === index} onClick={() => setTab(index)}/>
            )
          })}
        </div>
      </div>
    )
  }
}

function MenuItem({ title, icon, onClick, active }) {
  return (
    <div className={`menu-item ${active ? 'active' : ''}`} onClick={onClick}>
      <span className={'iconfont icon-' + icon}/>
      <span className="title">{title}</span>
    </div>
  )

}
