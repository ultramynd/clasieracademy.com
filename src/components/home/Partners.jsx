import React from "react";

const learningTracks = [
  "Author Strategy",
  "Editorial Craft",
  "Publishing Systems",
  "Launch Planning",
  "Digital Products",
  "Book Marketing",
];

export default function Partners() {
  return (
    <section className="mt-4 py-3 border-bottom border-top">
      <div className="container">
        <div className="row justify-content-center academy-track-strip">
          {learningTracks.map((track) => (
            <div key={track} className="col-lg-2 col-md-2 col-6 text-center py-3">
              <span>{track}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
