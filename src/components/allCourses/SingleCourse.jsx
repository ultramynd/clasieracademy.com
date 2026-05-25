import React from "react";
import { CardImg } from "reactstrap";
import _ from "lodash";
import Link from "next/link";
import classnames from "classnames";
import { Badge } from "components/ui/badge";
import { Card, CardContent, CardFooter } from "components/ui/card";

const coursePlaceholder = "/images/course-placeholder.svg";
const authorPlaceholder = "/images/avatar-placeholder.svg";

export default function CardCourse({ course, author, preview = false }) {
  const CourseCardBody = () => (
    <CardContent className="p-0">
      <div>
        <div className="text-right m-0" style={{ position: "relative" }}>
          <CardImg
            className="rounded-top"
            alt={course.course_title}
            src={coursePlaceholder}
            onError={(event) => {
              event.currentTarget.onerror = null;
              event.currentTarget.src = coursePlaceholder;
            }}
          />
          {!preview && (
            <div className="course-price">
              <span>
                {course.course_price > 0 ? (
                  `${course.course_price} $`
                ) : (
                  <b>Free</b>
                )}
              </span>
            </div>
          )}
        </div>

        <div className="d-flex">
          <span
            className="mt-3 ml-3 h5 text-primary mb-0 mr-auto"
            style={{
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              overflow: "hidden",
            }}
          >
            {_.upperFirst(course.course_title)}
          </span>
        </div>
        <div className="course-inner-text px-3 pb-3 pt-1">
          <p
            className="text-muted mb-0"
            style={{
              // width: 230,
              height: "4.5em",
              // whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              overflow: "hidden",
            }}
          >
            {_.upperFirst(course.course_description)}
          </p>
          <div>
            {course.course_tags &&
              course.course_tags.map((tag, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="mr-1 mb-1"
                >
                  {tag}
                </Badge>
              ))}
          </div>
        </div>
      </div>
    </CardContent>
  );

  const CourseCardFooter = () => (
    <CardFooter className="d-flex align-items-center p-2">
      <img
        alt={author.name}
        className="avatar avatar-md-sm rounded-circle shadow-md"
        src={authorPlaceholder}
        onError={(event) => {
          event.currentTarget.onerror = null;
          event.currentTarget.src = authorPlaceholder;
        }}
      />
      <div className="ml-2">
        <p className="mb-0 text-dark text-shadow">{author.user_name}</p>
        <p className="small my-0 text-muted">
          {author.short_description || ""}
        </p>
      </div>
    </CardFooter>
  );

  return (
    <Card
      className={classnames(
        { "blog mb-4": !preview },
        "shadow-md rounded-bottom rounded-top m-0"
      )}
      style={{ cursor: !preview ? "pointer" : null }}
    >
      {!preview ? (
        <>
          <Link
            href={`/${course.course_short_link}`}
            style={{ textDecoration: "none" }}
          >
            <CourseCardBody />
          </Link>
          <Link href={`/user?id=${author.id}`} className="text-dark">
            <CourseCardFooter />
          </Link>
        </>
      ) : (
        <>
          <CourseCardBody />
          <CourseCardFooter />
        </>
      )}
    </Card>
  );
}
