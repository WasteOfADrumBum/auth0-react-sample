import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { AuthBtn, Banner } from '../../components'
import './_navBar.scss'

const NavBar = () => {
  const { isAuthenticated } = useAuth0()

  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="container container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavBar"
            aria-controls="mainNavBar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mainNavBar">
            <a className="navbar-brand" href="/">
              ⇜
              <b>
                <span className="react">R</span>⥽
                <span className="auth0">0</span>⥼
                <span className="bootstrap">B</span>
              </b>
              ⇝
            </a>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {isAuthenticated && (
                <li className="nav-item">
                  <NavLink
                    to="/crud"
                    exact
                    className="nav-link"
                    activeClassName="router-link-exact-active"
                  >
                    CRUD
                  </NavLink>
                </li>
              )}
              {isAuthenticated && (
                <li className="nav-item">
                  <NavLink
                    to="/uxui"
                    exact
                    className="nav-link"
                    activeClassName="router-link-exact-active"
                  >
                    UX/UI
                  </NavLink>
                </li>
              )}
              <li className="nav-item">
                <NavLink
                  to="/creator"
                  exact
                  className="nav-link"
                  activeClassName="router-link-exact-active"
                >
                  Creator
                </NavLink>
              </li>
              {isAuthenticated && (
                <li className="nav-item">
                  <NavLink
                    to="/portfolio"
                    exact
                    className="nav-link"
                    activeClassName="router-link-exact-active"
                  >
                    Portfolio
                  </NavLink>
                </li>
              )}
              {isAuthenticated && (
                <li className="nav-item">
                  <NavLink
                    to="/resume"
                    exact
                    className="nav-link"
                    activeClassName="router-link-exact-active"
                  >
                    CV
                  </NavLink>
                </li>
              )}
              {isAuthenticated && (
                <li className="nav-item">
                  <NavLink
                    to="/profile"
                    exact
                    className="nav-link"
                    activeClassName="router-link-exact-active"
                  >
                    Profile
                  </NavLink>
                </li>
              )}
              {isAuthenticated && (
                <li className="nav-item">
                  <NavLink
                    to="/faq"
                    exact
                    className="nav-link"
                    activeClassName="router-link-exact-active"
                  >
                    FAQ
                  </NavLink>
                </li>
              )}
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <AuthBtn />
            </ul>
          </div>
        </div>
      </nav>
      <Banner />
      <div className="mb-3" />
    </>
  )
}

export default NavBar
