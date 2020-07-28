import React from 'react'
import IndexPage from './pages/IndexPage'
import CartPage from './pages/CartPage'
import LoginPage from './pages/LoginPage'
import OrderListPage from './pages/OrderListPage'
import UserPage from './pages/UserPage'
import BottomNav from './components/BottomNav'

function App() {
  const [ tab, setTab ] = React.useState(0)
  return (
    <div className="App">
      {tab === 0 && <IndexPage/>}
      {tab === 1 && <CartPage/>}
      {tab === 2 && <OrderListPage/>}
      {tab === 3 && <UserPage/>}
      <BottomNav setTab={setTab} tab={tab}/>
    </div>
  )
}

export default App
