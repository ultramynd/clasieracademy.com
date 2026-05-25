import React from "react";
import { user_nameChangedHandler } from "helpers/input";
import { Button, Row, Col, Container } from "reactstrap";
import Link from "next/link";
import Icons from "components/common/Icons";
// import Controller_Users from "fetchers/Users";
import DB from "helpers/db";
import { useRouter } from "next/router";

export default function login() {
  // const users = new Controller_Users();
  const router = useRouter();

  const openTargetPage = () => {
    const targetPage = DB.get("targetPage") || "/";
    router.push(targetPage);
  };

  const submitHandlerRegister = (e) => {
    e.preventDefault();
    // users.register(e.target, openTargetPage);
  };

  return (
    <>
      <section className="p-0 m-0">
        <div
          className="bg-overlay "
          style={{
            backgroundColor: "#1a274e",
            zIndex: -1,
          }}
        ></div>
        <div className="container" style={{}}>
          <div
            className="row pt-5 d-flex"
            style={{ minHeight: "100vh", zIndex: 1 }}
          >
            <div className="col-12 col-md-6 ml-auto d-none d-md-flex">
              <div className="mr-5 title-heading my-auto">
                <h1 className="heading text-white title-dark mb-4">
                  Welcome to Clasier Academy
                </h1>
                <p className="mb-4" style={{ color: "white" }}>
                  Create an account to access your courses, track progress, and
                  keep learning with Clasier Academy.
                </p>
              </div>
            </div>
            <div className="my-auto col-12 col-md-6 col-lg-5">
              <div className="shape-before">
                <form
                  action=""
                  method="post"
                  className="rounded p-4 bg-white"
                  onSubmit={submitHandlerRegister}
                >
                  <h3 className="h4 text-black mb-4">Create account</h3>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      id="input-email"
                      className="form-control"
                      placeholder="Email address"
                      required
                      autoComplete="off"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      name="user_name"
                      type="text"
                      id="input-username"
                      onChange={user_nameChangedHandler}
                      className="form-control"
                      placeholder="Account name"
                      required
                      minLength="8"
                      maxLength="20"
                      autoComplete="off"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      name="password"
                      type="text"
                      id="input-password"
                      className="form-control"
                      placeholder="Password"
                      required
                      minLength="8"
                      autoComplete="off"
                    />
                  </div>
                  <div className="custom-control custom-checkbox my-3">
                    <input
                      className="custom-control-input"
                      name="accept_the_terms"
                      id="customCheckRegister"
                      type="checkbox"
                    />
                    <label
                      className="custom-control-label d-inline"
                      htmlFor="customCheckRegister"
                    >
                      I accept the
                      <Link href="/terms"> terms and conditions.</Link>
                    </label>
                  </div>
                  <div className="form-group text-center">
                    <Button type="submit" color="primary">
                      Create account
                      <Icons icon="arrowRight" className="ml-2" />
                    </Button>
                  </div>
                  <div className="text-center">
                    <p className="m-0 text-muted">
                      <Link href="/login">Already have an account?</Link>
                    </p>
                  </div>
                </form>
                <img
                  src="/images/shapes/shape1.png"
                  className="img-fluid shape-img"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
