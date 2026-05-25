import React from "react";

const partnerLogos = ["amazon", "google", "lenovo", "paypal", "shopify", "spotify"];

export default function Partners() {
  return (
    <section className="mt-4 py-3 border-bottom border-top">
      <div className="container">
        <div className="row justify-content-center">
          {partnerLogos.map((logo) => (
            <div key={logo} className="col-lg-2 col-md-2 col-6 text-center py-4">
              <img
                src={`/images/client/${logo}.svg`}
                className="avatar avatar-ex-sm"
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
