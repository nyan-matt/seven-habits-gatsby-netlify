import React from 'react'
import { Link } from 'gatsby'


const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger is-visible-desktop ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start is-hidden-desktop">
              <Link className="navbar-item" activeClassName="is-active" to="/01-be-proactive/">01 - Be proactive</Link>
              <Link className="navbar-item" activeClassName="is-active" to="/02-begin-with-the-end-in-mind/">02 - Begin with the end in mind</Link>
              <Link className="navbar-item" activeClassName="is-active" to="/03-put-first-things-first/">03 - Put first things first</Link>
              <Link className="navbar-item" activeClassName="is-active" to="/04-think-win-win/">04 - Think win-win</Link>
              <Link className="navbar-item" activeClassName="is-active" to="/05-seek-first-to-understand-then-to-be-understood">05 - Seek first to understand, then be understood</Link>
              <Link className="navbar-item" activeClassName="is-active" to="/06-synergize/">06 - Synergize</Link>
              <Link className="navbar-item" activeClassName="is-active" to="/07-sharpen-the-saw/">07 - Sharpen the saw</Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
