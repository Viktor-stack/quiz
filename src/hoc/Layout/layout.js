import React, {Component} from "react";
import style from './layout.module.scss'
import MenuToggle from "../../components/Naviation/MenuToggle/MenuToggle";
import Drawer from "../../components/Naviation/Drawer/Drawer";

class Layout extends Component {

  state = {
    menu: false,
  }

  toggleMenuHandler = () => {
    this.setState({
      menu: !this.state.menu,
    })
  }

  render() {
    return (
      <div className={style.layout}>
        <Drawer
          onToggle={this.toggleMenuHandler}
          isOpen={this.state.menu}
          state={this.state}
        />
        <MenuToggle
          onToggle={this.toggleMenuHandler}
          isOpen={this.state.menu}
        />
        <main>
          {this.props.children}
        </main>
      </div>
    )
  }
}

export default Layout