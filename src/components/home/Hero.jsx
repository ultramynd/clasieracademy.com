import Icons from "components/common/Icons";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Button } from "components/ui/button";
import { hero } from "../../../site.config";

const starterPaths = [
  {
    title: "Write",
    text: "Shape ideas, outlines, and chapters with better editorial discipline.",
    href: "/search?word=writing",
    icon: "pencil",
  },
  {
    title: "Publish",
    text: "Learn the production, positioning, and release systems behind a book.",
    href: "/search?word=publishing",
    icon: "books",
  },
  {
    title: "Launch",
    text: "Build a clearer plan for audience, offers, and book-led growth.",
    href: "/search?word=launch",
    icon: "fire",
  },
];

export default function Hero() {
  const router = useRouter();

  const submitHandler = (e) => {
    e.preventDefault();
    const word = document.getElementById("search-box").value.trim();
    router.push(word ? `/search?word=${word}` : "/courses");
  };

  return (
    <section className="section clasier-hero">
      <div className="container">
        <div className="clasier-hero-panel">
          <div className="row align-items-center">
            <div className="col-lg-8 col-12">
              <div className="title-heading">
                <h1 className="mb-3">{hero.mainTitle}</h1>
                <p className="para-desc text-muted">{hero.subTitle}</p>
                <div className="subcribe-form mt-4">
                  <form className="m-0" onSubmit={submitHandler}>
                    <div className="form-group">
                      <input
                        type="text"
                        id="search-box"
                        name="name"
                        className="text-dark pl-3"
                        placeholder={hero.searchPlaceholder}
                      />
                      <Button
                        type="submit"
                        aria-label="Search courses"
                      >
                        <Icons icon="search" className="fa-x1" style={{ fontSize: "16px" }} />
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-12 mt-4 mt-lg-0">
              <div className="academy-start-card">
                <img
                  src="/images/brands/clasier_academy.svg"
                  alt=""
                  className="academy-start-logo"
                />
                <h2>Start where the work is.</h2>
                <p>
                  Find short, practical lessons for writing, publishing, and launching with more
                  control.
                </p>
                <Link href="/courses" className="academy-start-link">
                  Browse all courses <Icons icon="arrowRight" className="ml-2" />
                </Link>
              </div>
            </div>
          </div>

          <div className="row academy-quick-start">
            {starterPaths.map((path) => (
              <div className="col-md-4 col-12" key={path.title}>
                <Link href={path.href} className="academy-path-link">
                  <span className="academy-path-icon">
                    <Icons icon={path.icon} />
                  </span>
                  <span>
                    <strong>{path.title}</strong>
                    <small>{path.text}</small>
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
