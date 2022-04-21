import React from "react";
import '../../css/navStyle.css';
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../../img/logo.png";
// import "bootstrap/dist/css/bootstrap.min.css";

// async function handleLogout() { }

var json = sessionStorage.getItem("token");
if (json) {
  var data = JSON.parse(json);
  if (data) {
    var name = data.name;
  }
}
export default function MyNav(props) {
  // const history = useHistory();
  const logout = async (e) => {
    e.preventDefault();
    sessionStorage.clear();
    // props.changePath("/login");
    // history.push("/login");
    window.location.href = "/";
    // changePath
  };
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" className="special-color-dark sticky-top" style={{ margin:"auto -20px" }}>
      <Navbar.Brand to="/" className="mr-5">
        <img src={logo} alt="Logo" width="30" className="d-inline-block align-top pt-2" />
        <span className="brandName">{props.title}</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          {!props.setToken ? (
            <>
              <NavLink className="nav-item " to="/" exact="true" activeClassName="active" >
                <span className="nav-link">Home</span>
              </NavLink>
              <NavLink className="nav-item" to="/now-showing">
                <span className="nav-link">Now showing</span>
              </NavLink>
              <NavLink className="nav-item" to="/coming-soon">
                <span className="nav-link">Coming Soon</span>
              </NavLink>
            </>
          ) : (
            !(props.setToken === "admin") ? (
              <>
                {/* <NavLink className="nav-item" to="/now-showing">
                  <span className="nav-link">Now showing</span>
                </NavLink>
                <NavLink className="nav-item" to="/coming-soon">
                  <span className="nav-link">Coming Soon</span>
                </NavLink>
                <NavLink className="nav-item" to="/book-movie">
                  <span className="nav-link">Book Movie</span>
                </NavLink>
                <NavLink className="nav-item" to="/order">
                  <span className="nav-link">Order</span>
                </NavLink>
                <NavLink className="nav-item " to="/dashboard" exact="true" activeClassName="active" >
                  <span className="nav-link">My Movie</span>
                </NavLink>
                <NavLink className="nav-item" to="/my-order">
                  <span className="nav-link">My Order</span>
                </NavLink>
                <NavLink className="nav-item" to="/payment">
                  <span className="nav-link">Payment</span>
                </NavLink> */}
              </>
            ) : (
              <>
                <NavLink className="nav-item " to="/dashboard" exact="true" activeClassName="active" >
                  <span className="nav-link">Dashboard</span>
                </NavLink>
                <NavLink className="nav-item" to="/food-request">
                  <span className="nav-link">Food Request</span>
                </NavLink>
                <NavLink className="nav-item" to="/movie-request">
                  <span className="nav-link">Movie Request</span>
                </NavLink>
                <NavLink className="nav-item" to="/movie">
                  <span className="nav-link">Movie</span>
                </NavLink>
                <NavLink className="nav-item" to="/show-time">
                  <span className="nav-link">Manage Showtime</span>
                </NavLink>
                <NavLink className="nav-item" to="/users">
                  <span className="nav-link">Users</span>
                </NavLink>
              </>
            )
          )}
        </Nav>
        <Nav>
          {!props.setToken ? (
            <>
              <NavLink className="nav-item " to="/login" exact="true" activeClassName="active" >
                <span className="nav-link">Login</span>
              </NavLink>
              <NavLink className="nav-item " to="/register" activeClassName="active" >
                <span className="nav-link">Register</span>
              </NavLink>
            </>
          ) : (
            !(props.setToken === "admin") ? (
              <>
                <NavDropdown align="end" title={name} id="collasible-nav-dropdown" >
                  <NavDropdown.Item className="nav-item" to="/about">
                    <span>About</span>
                  </NavDropdown.Item>
                  <NavLink className="nav-item " to="/change-password" activeClassName="active" >
                    <span>Change Password</span>
                  </NavLink>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={logout}>Log Out</NavDropdown.Item>
                </NavDropdown>
              </>
            ) : (
              <>
                <NavDropdown align="end" title={name} id="collasible-nav-dropdown" >
                  <NavDropdown.Item className="nav-item" to="/">
                    <NavLink className="nav-item " to="/change-password" activeClassName="active" >
                      <span>Change Password</span>
                    </NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={logout}>Log Out</NavDropdown.Item>
                </NavDropdown>
              </>
            )
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
