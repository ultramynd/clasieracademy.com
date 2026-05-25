import Icons from "components/common/Icons";
import { useRouter } from "next/router";
import React from "react";
import { hero } from "../../../site.config";

export default function Hero() {
  const router = useRouter();

  const submitHandler = (e) => {
    e.preventDefault();
    const word = document.getElementById("search-box").value;
    router.push(`/${"search"}?word=${word}`);
  };

  return (
    <section className="section pt-5 pb-0 mt-4 clasier-hero">
      <div className="container-fluid mt-md-1 px-0 px-md-3">
        <div className="rounded py-5 px-3 px-sm-0 shadow-md clasier-hero-panel">
          <div className="row">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6 col-12">
                  <div className="title-heading mr-lg-4">
                    <h1 className="h2  mb-3">
                      {hero.mainTitle}
                    </h1>
                    <p className="para-desc text-muted">{hero.subTitle}</p>
                    <div className="subcribe-form mt-4 pt-2">
                      <form className="m-0" onSubmit={submitHandler}>
                        <div className="form-group">
                          <input
                            type="text"
                            id="search-box"
                            name="name"
                            className="text-dark rounded shadow-md pl-3"
                            placeholder={hero.searchPlaceholder}
                          />
                          <button type="submit" className="btn btn-primary">
                            <Icons
                              icon="search"
                              className="fa-x1"
                              style={{
                                fontSize: "16px",
                              }}
                            />
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-12 mt-4 pt-2 mt-sm-0 pt-sm-0">
                  <div className="academy-preview shadow-md">
                    <div className="academy-preview-header">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <div className="academy-preview-body">
                      <p>Featured path</p>
                      <h2>Build a book people can trust.</h2>
                      <div className="academy-preview-list">
                        <span>Position the idea</span>
                        <span>Shape the manuscript</span>
                        <span>Plan the launch</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
