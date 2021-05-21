import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCartPlus, faUser } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userActions.js";

// Route
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    // console.log("logging out");
    dispatch(logout());
  };

  return (
    <header>
      <Navbar bg="light" expand="lg" className="ml-auto">
        <Container fluid style={{ width: "85%" }}>
          <LinkContainer to="/">
            <Navbar.Brand>
              <h3>ShopNow</h3>
            </Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <LinkContainer to="/">
                <Nav.Link className="px-3">
                  <FontAwesomeIcon
                    className="nav-icon"
                    icon={faHome}
                    size="2x"
                  />
                  <h5 className="nav-link-name">Home</h5>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/cart">
                <Nav.Link className="px-3">
                  <FontAwesomeIcon
                    className="nav-icon"
                    icon={faCartPlus}
                    size="2x"
                  />

                  <h5 className="nav-link-name">Cart</h5>
                </Nav.Link>
              </LinkContainer>

              {userInfo ? (
                <NavDropdown
                  style={{ paddingLeft: "1rem", fontSize: "1.1rem" }}
                  title={userInfo.name}
                  id="username"
                >
                  <LinkContainer to="/profile">
                    <NavDropdown.Item> Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to="/login">
                  <Nav.Link className="px-3">
                    <FontAwesomeIcon
                      className="nav-icon"
                      icon={faUser}
                      size="2x"
                    />
                    <h5 className="nav-link-name">Sign In</h5>
                  </Nav.Link>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
