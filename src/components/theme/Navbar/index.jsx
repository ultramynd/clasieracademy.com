import Link from "next/link";
import React, { Component } from "react";
import { Collapse } from "reactstrap";
import AuthMenu from "./AuthMenu";
import Navigation from "./Navigation";
import Search from "./Search";
import Switch from "./Switch";
import { siteMetadata } from "../../../../site.config";

class Navbar extends Component {
  constructor(props) {
    super();
    this.state = {
      sticky: props.sticky || false,
      open: false,
    };
  }

  scroollHandler = (e) => {
    const scroollTop = document.getElementById("scroll-container").scrollTop;
    if (scroollTop > 60) {
      if (!this.state.sticky) this.setState({ sticky: true });
    } else {
      if (this.state.sticky) this.setState({ sticky: false });
    }
  };

  componentDidMount() {
    document
      .getElementById("scroll-container")
      .addEventListener("ps-scroll-y", this.scroollHandler);
    this.scroollHandler();
  }

  componentDidUpdate() {
    this.scroollHandler();
  }

  componentWillUnmount() {
    document
      .getElementById("scroll-container")
      .removeEventListener("ps-scroll-y", this.scroollHandler);
  }

  render() {
    // const userData = DB.get("userData");
    const { isDark } = this.props;

    return (
      <header
        id="topnav"
        className={
          this.state.sticky ? "bg-light sticky nav-sticky" : "sticky py-1"
        }
        style={{ zIndex: 1001 }}
      >
        <div className="container">
          <div className="d-flex float-left" style={{ height: 60 }}>
            <div className="logo my-auto">
              <Link href="/">
                <span
                  className={
                    this.state.sticky
                      ? "clasier-brand clasier-brand-dark"
                      : "clasier-brand clasier-brand-light"
                  }
                >
                  <img
                    src={
                      this.state.sticky
                        ? "/images/brands/clasier_academy.svg"
                        : "/images/brands/clasier-squircle.svg"
                    }
                    alt={siteMetadata.title}
                  />
                  <span>{siteMetadata.title}</span>
                </span>
              </Link>
            </div>
          </div>

          <div className="menu-extras">
            <div className="menu-item">
              <a
                className={
                  this.state.open ? "navbar-toggle open" : "navbar-toggle"
                }
                onClick={() => this.setState({ open: !this.state.open })}
              >
                <div className="lines">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </a>
            </div>
          </div>

          <div className="d-flex float-right" style={{ height: 60 }}>
            <Switch />
            <Search />
            <AuthMenu userData={this.props.userData} isDark={isDark} />
          </div>

          <Collapse isOpen={this.state.open} id="navigation">
            <Navigation isDark={isDark} />
          </Collapse>
        </div>
      </header>
    );
  }
}

export default Navbar;
