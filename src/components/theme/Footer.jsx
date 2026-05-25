import Icons from "components/common/Icons";
import Link from "next/link";
import React from "react";
import { Button } from "components/ui/button";
import { socialIcons, footer, siteMetadata } from "../../../site.config";

export default function Footer({ litle }) {
  return (
    <>
      {!litle && (
        <footer className="footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-12 mb-0 mb-md-4 pb-0 pb-md-2">
                <div className="logo">
                  <Link href="/">
                    <span className="clasier-brand clasier-brand-light clasier-brand-footer">
                      <img
                        src="/images/brands/clasier_logo_white.svg"
                        alt={siteMetadata.title}
                      />
                      <span>{siteMetadata.title}</span>
                    </span>
                  </Link>
                </div>

                <p className="mt-4">{footer.aboutText}</p>
                <ul className="list-unstyled  mb-0 mt-4">
                  {socialIcons.map((icon, index) => (
                    <li className="list-inline-item" key={index}>
                      <a
                        href={icon.url}
                        className="text-foot"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Icons className="fa-1x mx-2" icon={icon.icon} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="col-lg-4 col-md-6 col-12 mt-4 mt-lg-0 pt-2 pt-sm-0">
                <h4 className="text-light footer-head">{footer.LinksTitle}</h4>
                <ul className="list-unstyled footer-list mt-4">
                  {footer.links.map((link, index) => {
                    return (
                      <li key={index}>
                        <a href={link.url} className="text-foot">
                          <Icons icon="dot" className="mr-1" />
                          {link.title}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 col-12 mt-4 mt-lg-0 pt-2 pt-sm-0">
                <h4 className="text-light footer-head">
                  {footer.newsLetterTitle}
                </h4>
                <p className="mt-4">{footer.newsLetterText}</p>
                <form>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="foot-subscribe form-group position-relative">
                        <i
                          data-feather="mail"
                          className="fea icon-sm icons"
                        ></i>
                        <input
                          type="email"
                          name="email"
                          id="emailsubscribe"
                          className="form-control rounded"
                          placeholder="Email address"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <Button
                        type="submit"
                        id="submitsubscribe"
                        name="send"
                        variant="outline"
                        className="w-100"
                      >
                        Subscribe
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </footer>
      )}
      <footer className="footer footer-bar py-3">
        <div className="container text-center">
          <div className="row align-items-center">
            <div className="col-sm-12">
              <div className="text-sm-center">
                <small className={litle ? "mb-0 text-center" : "mb-0"}>
                  &copy;{new Date().getFullYear()} Clasier Academy
                </small>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
