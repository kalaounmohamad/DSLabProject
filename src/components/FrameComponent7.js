import { useCallback, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./FrameComponent7.css";

const FrameComponent7 = () => {
  const navigate = useNavigate();

  const onFrameLinkClick = useCallback(() => {
    navigate("/home-ceo");
  }, [navigate]);

  const onMenuBurger11Click = useCallback(() => {
    navigate("/home-ceo");
  }, [navigate]);

  const onEmployeesClick = useCallback(() => {
    navigate("/employees-ceo");
  }, [navigate]);

  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onPolygonIcon1Click = useCallback(() => {
    navigate("/employees-ceo");
  }, [navigate]);

  const onEmployees1Click = useCallback(() => {
    navigate("/projects-ceo");
  }, [navigate]);

  const onPolygonIcon2Click = useCallback(() => {
    navigate("/projects-ceo");
  }, [navigate]);

  const onPolygonIcon3Click = useCallback(() => {
    navigate("/meetings-ceo");
  }, [navigate]);

  const onEmployees3Click = useCallback(() => {
    navigate("/profile-ceo");
  }, [navigate]);

  return (
    <Link
      className="menu-burger-1-1-parent"
      to="/home-ceo"
      onClick={onFrameLinkClick}
    >
      <img
        className="menu-burger-1-1"
        alt=""
        src="/menuburger-1-1@2x.png"
        onClick={onMenuBurger11Click}
      />
      <div className="organize-your-co4">Organize your co.</div>
      <Link
        className="employees13"
        to="/employees-ceo"
        onClick={onEmployeesClick}
      >
        <img
          className="employees-child10"
          alt=""
          src="/polygon-32.svg"
          onClick={onPolygonIcon1Click}
          data-animate-on-scroll
        />
        <div className="label16">Employees</div>
      </Link>
      <Link
        className="employees14"
        to="/projects-ceo"
        onClick={onEmployees1Click}
      >
        <img
          className="employees-child11"
          alt=""
          src="/polygon-32.svg"
          onClick={onPolygonIcon2Click}
        />
        <div className="label16">Projects</div>
      </Link>
      <Link className="employees15" to="/meetings-ceo">
        <img
          className="employees-child11"
          alt=""
          src="/polygon-32.svg"
          onClick={onPolygonIcon3Click}
        />
        <div className="label16">Meetings</div>
      </Link>
      <a className="employees16" onClick={onEmployees3Click}>
        <img className="employees-child13" alt="" src="/polygon-32.svg" />
        <div className="label16">Profile</div>
      </a>
      <div className="frame-child16" />
      <div className="frame-child17" />
      <div className="frame-child18" />
      <img className="frame-child19" alt="" src="/line-5.svg" />
    </Link>
  );
};

export default FrameComponent7;
