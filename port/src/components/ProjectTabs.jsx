import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function ProjectTabs({
  title = "",
  type = "",
  desc,
  lang = [],
  height,
  image,
}) {
  const [click, setClick] = useState(false);
  const langs = Array.isArray(lang) ? lang : [];

  const [selectedTitle, setSelectedTitle] = useState();
  const [selectedLang, setSelectedLang] = useState();
  const [selectedType, setSelectedType] = useState();
  const [selectedDesc, setSelectedDesc] = useState();

  // useEffect(() => {
  //   console.log("Selected Title:", type);
  // }, [selectedType]);

  const clicked = () => {
    setSelectedTitle(title);
    setSelectedType(type);
    setSelectedLang(lang);
    setSelectedDesc(desc);
  };

  return (
    <div className="w-fit h-fit hover:scale-105 transition-all duration-300">
      <div className="h-fit">
        <img src={image} className="h-fit w-fit bg-slate-950 " />
      </div>
      <div className="h-fit">
        <div className="flex justify-between items-center">
          <Link
            to="/project"
            state={{ selectedTitle: title, selectedType: type, selectedDesc: desc, selectedLang: lang }}
            onClick={clicked}
            className="text-4xl font-bold italic font-narrow"
          >
            {title}
          </Link>{" "}
          <h3 className="text-2xl font-narrow font-semibold">{type}</h3>
        </div>
        <p className="text-base font-light">{desc}</p>
        <div className="text-lg font-medium flex gap-1">
          {langs.map((items, index) => (
            <p key={index}>
              {items}
              {index < langs.length - 1 ? "," : ""}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
