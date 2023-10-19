import Link from "next/link";
import MagneticButton from "../magneticButton";
import ServiceItem from "../serviceItem";

// items data
const items = [
  {
    id: 0,
    title: "Build meaningful relationships",
    description:
      "Lorem ipsum dolor sit amet consectetur. Amet in potenti amet tempus et nisl sem phasellus.",
  },
  {
    id: 1,
    title: "Love what we do",
    description:
      "Lorem ipsum dolor sit amet consectetur. Amet in potenti amet tempus et nisl sem phasellus.",
  },
  {
    id: 2,
    title: "Better every day",
    description:
      "Lorem ipsum dolor sit amet consectetur. Amet in potenti amet tempus et nisl sem phasellus.",
  },
  {
    id: 3,
    title: "Deliver Faithfully",
    description:
      "Lorem ipsum dolor sit amet consectetur. Amet in potenti amet tempus et nisl sem phasellus.",
  },
];

const WeBelieve = () => {
  return (
    <section className="services section">
      <div className="container">
        <div className="row gy-5 gy-xl-0">
          <div className="col-xl-5">
            <div className="left">
              <h2 data-aos="fade-up" data-aos-duration="200">
                What we believe
              </h2>
              <p>
                We combine strategy with marketing, design & technology to craft
                solutions that ensure customers prefer.
              </p>
              <MagneticButton>
                <Link href="#"
                  className="btn btn-primary button--wayra download"
                  data-aos="fade-up"
                  data-aos-duration="400"
                >
                  Request a proposal
                </Link>
              </MagneticButton>
            </div>
          </div>
          <div className="col-xl-7">
            <div className="row g-4">
              {items.map((item, index) => (
                <div
                  key={item.id}
                  className={`col-md-6 ${
                    index === 1 ? "col-translatedY" : ""
                  } ${index === 2 ? "-col-translatedY" : ""}`}
                >
                  <ServiceItem item={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeBelieve;
