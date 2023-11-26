import React from "react";

const DefectList = ({ data }) => {
  return (
    <ul>
      {data.map((item, index) => (
        <li className="flex items-center" key={index}>
          <h2 className="font-medium text-xl mr-2">{item.percentage}</h2>
          <h3>{item.name}</h3>
        </li>
      ))}
    </ul>
  );
};

export default DefectList;
