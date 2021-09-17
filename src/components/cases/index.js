import React from "react";
import { ReactComponent as CasesNext } from "../../assets/arrow-right.svg";
import { ReactComponent as CasesPrev } from "../../assets/arrow-left.svg";
import CurologyImg from "../../assets/curology-min.png";
import YourSpace from "../../assets/yourspace-min.png";
import Lumin from "../../assets/lumin-min.png";

const caseStudies = [
  {
    id: 1,
    subTitle: "Curuology",
    title: "A Custom Formular for your Skins Unique needs",
    img: CurologyImg,
  },
  {
    id: 2,
    subTitle: "Kings",
    title: "A Custom Formular for your Skins Unique needs",
    img: YourSpace,
  },
  {
    id: 3,
    subTitle: "Ezenwa",
    title: "A Custom Formular for your Skins Unique needs",
    img: Lumin,
  },
];
const Cases = () => {
  return (
    <section className="cases">
      <div className="container-fluid">
        <div className="cases-navigation">
          <div className="cases-arrow prev disabled">
            <CasesPrev />
          </div>
          <div className="cases-arrow next">
            <CasesNext />
          </div>
        </div>
        <div className="row">
          {caseStudies.map((caseItem) => (
            <div className="case" key={caseItem.id}>
              <div className="case-details">
                <span>{caseItem.subTitle}</span>
                <h2>{caseItem.title}</h2>
              </div>
              <div className="case-img">
                <img src={caseItem.img} alt={caseItem.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;
