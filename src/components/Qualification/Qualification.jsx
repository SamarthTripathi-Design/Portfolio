import React, { useState } from "react";
import "./qualification.css";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(2);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <p className="section__subtitle">My personal journey</p>
      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button  qualification__active button--flex "
                : "qualification__button  button--flex "
            }
            onClick={() => toggleTab(1)}
          >
            <div className="qualification__icon">
              <SchoolOutlinedIcon />
            </div>
            Education
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification__button  qualification__active button--flex "
                : "qualification__button  button--flex "
            }
            onClick={() => toggleTab(2)}
          >
            <div className="qualification__icon">
              <BusinessCenterOutlinedIcon />
            </div>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content  qualification__content-active"
                : "qualification__content "
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Graducation </h3>
                <span className="qualification__subtitle">
                  - Bangalore Intitute of <br />
                  &nbsp;&nbsp; Technology
                </span>
                <div className="qualification__calender">
                  - Aug 2014 - Jul 2018
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">School </h3>
                <span className="qualification__subtitle">
                  - Vagdevi Vilas <br />
                  &nbsp;&nbsp; School
                </span>
                <div className="qualification__calender">
                  - June 2012 - Aug 2014
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content  qualification__content-active"
                : "qualification__content "
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">React Developer</h3>
                <span className="qualification__subtitle">
                  - Opsconsole, <br />
                  &nbsp;&nbsp;&nbsp;Infosys
                </span>
                <div className="qualification__calender">
                  - May 2022 - present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">React Developer</h3>
                <span className="qualification__subtitle">
                  - Urban wear, <br />
                  &nbsp;&nbsp;&nbsp;Capgemini
                </span>
                <div className="qualification__calender">
                  - Apr 2020 - Apr 2022
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Test Engineer</h3>
                <span className="qualification__subtitle">
                  - Compass, <br />
                  &nbsp;&nbsp;&nbsp;Capgemini
                </span>
                <div className="qualification__calender">
                  - Mar 2019 - Mar 2020
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
