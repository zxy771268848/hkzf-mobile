import React from 'react'
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import Home from './pages/Home'
import City from './pages/City'
import Map from './pages/Map'
import NoMatch from './pages/NoMatch'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="app">app组件</div>

        {/* 导航链接 */}
        <Link to="/home">首页</Link>
        <Link to="/map">地图找房</Link>
        <Link to="/city">城市选择</Link>

        {/* 路由的规则 */}
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route path="/home" component={Home} />
          <Route path="/city" component={City} />
          <Route path="/map" component={Map} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    )
  }
}
export default App
