import "./style.scss";

const Banner = ({ children }) => {
  return (
    <section id="banner">
      <div className="banner-text">{children}</div>
    </section>
  );
};

export default Banner;
