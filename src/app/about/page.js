const AboutPage = () => {
  return (
    <div className="about-page">
      <h2 className="mb-m">About Us</h2>
      <p className="mb-s">
        Welcome to our platform, a tool designed to simplify access to the vast
        resources of MIT OpenCourseWare.
      </p>

      <h4 className="mb-m">Data Source</h4>
      <p className="mb-s">
        All data featured here is pulled directly from MIT OpenCourseWare. This
        platform is an independent effort aimed at providing an easier way to
        navigate their free course offerings.
      </p>

      <h4 className="mb-m">Rights & Regulations</h4>
      <p className="mb-s">
        All course content and rights belong to MIT OpenCourseWare. Our platform
        is a tool for navigation and is not affiliated with MIT in an official
        capacity. We adhere to the institution's terms of use, and we're ready
        to address any concerns should they arise.
      </p>

      <h4 className="mb-m">The Team</h4>
      <p className="mb-s">
        Hello, I'm Niklas Fischer from KIZO Agency, the developer behind this
        platform. I'm a tech enthusiast who believes in the transformative
        potential of education and the role of technology in facilitating it.
      </p>

      <h4 className="mb-m">Contact</h4>
      <p className="mb-s">
        Questions, feedback, or concerns? I'm available on Twitter at{" "}
        <a href="https://twitter.com/KIZO_ES" target="_blank">
          @KIZO_ES
        </a>
        . Feel free to reach out!
      </p>
    </div>
  );
};

export default AboutPage;
