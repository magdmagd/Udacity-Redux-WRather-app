import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = ({ authedUser, users }) => (
  <header>
    <nav className="purple darken-3">
      <div className="container">
        <div className="nav-wrapper">
          <a data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <ul className="sidenav" id="mobile-demo">
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/add">NEW QUESTION</Link>
            </li>
            <li>
              <Link to="/leaderboard">LEADERBOARD</Link>
            </li>
          </ul>
          <ul className="right">
            <li>
              {authedUser === null ? (
                <Link className="waves-effect waves-light btn" to="/login">
                  LOGIN <i className="material-icons right">account_circle</i>
                </Link>
              ) : (
                <span>
                  <img
                    className="avatar"
                    src={users[authedUser].avatarURL}
                    alt=""
                  />
                  <span className="hide-on-med-and-down">
                    {users[authedUser].name}
                  </span>
                  <Link className="waves-effect waves-light btn" to="/logout">
                    LOGOUT
                    <i className="material-icons right">account_circle</i>
                  </Link>
                </span>
              )}
            </li>
          </ul>

          <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/add">NEW QUESTION</Link>
            </li>
            <li>
              <Link to="/leaderboard">LEADERBOARD</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
);

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser,
    users
  };
}

export default connect(mapStateToProps)(Header);
