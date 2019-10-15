import React from 'react'
import Logo from './Logo'
import MobileNavToggle from '../components/icons/mobile-nav-arrow.svg'
import ActiveLink from './ActiveLink'
import Link from 'next/link'

export default class Header extends React.Component {
  constructor() {
    super()

    this.state = {
      mobileNavShown: false
    }

    this.toggleMobileNav = this.toggleMobileNav.bind(this)
  }

  toggleMobileNav() {
    this.setState({
      mobileNavShown: !this.state.mobileNavShown
    })
  }

  render() {
    const { mobileNavShown } = this.state
    return (
      <React.Fragment>
        <header className="container">
          <Link href="/">
            <a className="logo">
              <Logo />
            </a>
          </Link>

          <nav>
              <ActiveLink href="/">Home</ActiveLink>
              <ActiveLink href="#aboutme">About Me</ActiveLink>
              <ActiveLink href="#portfolio">Portfolio</ActiveLink>
              <ActiveLink href="#contactme">Contact</ActiveLink>
          </nav>

          <a className="header__mobile-toggle" onClick={this.toggleMobileNav}>
            <MobileNavToggle />
          </a>
        </header>

        <nav className="header__mobile-nav container">
          <ActiveLink href="/">Home</ActiveLink>
          <ActiveLink href="#aboutme">About Me</ActiveLink>
          <ActiveLink href="#portfolio">Portfolio</ActiveLink>
          <ActiveLink href="#contactme">Contact</ActiveLink>
        </nav>

        <style jsx>{`
          header {
            padding-top: 32px;
            margin-bottom: 24px;
            display: flex;
            justify-content: space-between;
            position: relative;
            align-items: center;
            z-index: 2000;
          }
          nav {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            line-height: 2.3rem;
          }
          a {
            font-size: 1.4rem;
            color: #999999;
            transition: color 0.2s ease;
          }
          a:hover {
            color: white;
          }
          nav :global(a):not(:last-child) {
            margin-right: 24px;
          }
          .logo {
            display: flex;
          }
          .header__right {
            display: flex;
            align-items: center;
          }
          .header__right a:last-child {
            margin-left: 24px;
          }
          .submit {
            margin-left: 24px;
          }
          .header__mobile-nav {
            display: none;
          }
          .header__mobile-toggle {
            display: none;
          }
          .zak-logo {
            font-size: 1.8rem;
            color: white;
          }
          @media (max-width: 768px) {
            nav,
            .header__right {
              display: none;
            }
            .header__mobile-toggle {
              display: block;
            }
            .header__mobile-nav {
              display: ${mobileNavShown ? 'flex' : 'none'};
              width: 100%;
              flex-direction: column;
              align-items: center;
              position: relative;
              margin-bottom: 48px;
            }
            .header__mobile-nav :global(a) {
              height: 48px;
              width: 100%;
              border-bottom: 1px solid #333;
              font-size: 1.6rem;
              display: flex;
              align-items: center;
              color: white;
            }
            .header__mobile-nav :global(a):not(:last-child) {
              margin-right: 0;
            }
          }
        `}</style>
      </React.Fragment>
    )
  }
}
