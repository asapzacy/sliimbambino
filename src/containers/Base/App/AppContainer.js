import React, { Component } from 'react'
import { App } from 'components'

class AppContainer extends Component {
  state = { isMenuOpen: false }
  componentWillMount() {
    const fadeInPage = () => { document.body.style.opacity = '1' }
    setTimeout(fadeInPage, 0)
  }
  triggerMenu = () => {
    this.setState(prevState => ({
      isMenuOpen: !prevState.isMenuOpen
    }))
  }
  closeMenu = () => {
    this.setState({ isMenuOpen: false })
  }
  render() {
    return <App {...this.state} triggerMenu={this.triggerMenu} />
  }
}

export default AppContainer
