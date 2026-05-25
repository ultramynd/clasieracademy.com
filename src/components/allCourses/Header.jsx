import Icons from "components/common/Icons";
import { useRouter } from "next/router";
import React from "react";
import { Button } from "components/ui/button";
import { allCourses } from "../../../site.config";

export default function Hero() {
  const router = useRouter();

  const submitHandler = (e) => {
    e.preventDefault();
    const word = document.getElementById("search-box").value.trim();
    router.push(word ? `/search?word=${word}` : "/courses");
  };

  return (
    <>
      <section className="section courses-header">
        <div className="container-fluid mt-md-1 px-0 px-md-3">
          <div className="courses-header-panel">
            <div className="row">
              <div className="container">
                <div className="title-heading text-center py-0">
                  <h2 className="mb-3">{allCourses.title}</h2>
                  <p className="para-desc mx-auto text-muted mb-4">
                    {allCourses.subTitle}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="subcribe-form courses-search px-4">
            <form onSubmit={submitHandler}>
              <div className="form-group">
                <input
                  type="text"
                  id="search-box"
                  name="name"
                  className="text-dark"
                  placeholder={allCourses.searchPlaceholder}
                />
                <Button type="submit" aria-label="Search courses">
                  <Icons icon="search" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
