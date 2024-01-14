import React, { useState } from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import Headerpage from "../../components/header";
import Image1 from "../../images/image1.png";
import Image2 from "../../images/image2.png";
import Image3 from "../../images/image3.png";
import Image4 from "../../images/image4.png";
import Image5 from "../../images/image5.png";
import "./style.css";
import { Link } from "react-router-dom";

const portfolioData = [
  {
    id: 2,
    name: "webpage",
    image: Image1,
    link: "",
  },
  {
    id: 3,
    name: "portfolio",
    image: Image2,
    link: "",
  },
  {
    id: 2,
    name: "srms",
    image: Image3,
    link: "",
  },
  {
    id: 2,
    name: "login",
    image: Image4,
    link: "",
  },
  {
    id: 3,
    name: "login",
    image: Image5,
    link: "",
  },
];

const filterData = [
  {
    filterId: 1,
    label: "ALL",
  },
  {
    filterId: 2,
    label: "DEVELOPMENT",
  },
  {
    filterId: 3,
    label: "DESIGN",
  },
];

const Portfolio = () => {
  const [filteredvalue, setFilteredvalue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  function handleFilter(currentId) {
    setFilteredvalue(currentId);
  }
  console.log(hoveredValue);

  function handleHover(index) {
    setHoveredValue(index);
  }

  const filteredItems =
    filteredvalue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredvalue);
  console.log(filteredItems);

  return (
    <section id="portfolio" className="portfolio">
      <Headerpage
        headerText="My Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio_content">
        <ul className="portfolio_content_filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredvalue ? `active` : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio_content_cards">
          {filteredItems.map((item, index) => (
            <div
              className="portfolio_content_cards_item"
              key={`cardItem${item.id}_${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio_content_cards_item_image-wrapper">
                <Link to="">
                  <img alt="dummy data" src={item.image} />
                </Link>
              </div>
              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <p>{item.name}</p>
                    <button>Visit</button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
