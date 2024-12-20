import React, { useState }  from "react";
import Navbar from "../component/navbar.jsx";
import { useInView } from "react-intersection-observer";

export default function Homepage() {
  const [activeSection, setActiveSection] = useState("");

  const { ref: getStartedRef, inView: getStartedInView } = useInView({
    threshold: 0.5,
    onChange: (inView) => {
      if (inView) {
        setActiveSection("get-started-section");
      }
    },
  });

  const { ref: whyUsRef, inView: whyUsInView } = useInView({
    threshold: 0.5,
    onChange: (inView) => {
      if (inView) {
        setActiveSection("why-us-section");
      }
    },
  });

  const { ref: qnaRef, inView: qnaInView } = useInView({
    threshold: 0.5,
    onChange: (inView) => {
      if (inView) {
        setActiveSection("qna-section");
      }
    },
  });

  const { ref: testimonialRef, inView: testimonialInView } = useInView({
    threshold: 0.5,
    onChange: (inView) => {
      if (inView) {
        setActiveSection("testimonial-section");
      }
    },
  });

  return (
    <div>
      <Navbar activeSection={activeSection} />
    </div>
  );
}
