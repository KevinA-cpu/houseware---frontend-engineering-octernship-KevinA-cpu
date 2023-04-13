// templates/component/Screen2.js
import React, { useState } from "react";
import { Card, Button } from "antd";
import { CloseOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import { useLocation, Link } from "react-router-dom";

import "./Screen2.module.scss";

const Screen2 = () => {
  const location = useLocation();
  const [colorMap, setColorMap] = useState({});
  const [inputValue, setInputValue] = useState(location.state.inputValue);

  const handleDelete = (char, index) => {
    const filteredString = inputValue
      .split("")
      .filter((c, i) => c !== char || i === index)
      .join("");
    setInputValue(filteredString);
  };

  const getColor = (char) => {
    if (!colorMap[char]) {
      const color = "#" + Math.floor(Math.random() * 16777215).toString(16);
      setColorMap({ ...colorMap, [char]: color });
      return color;
    }
    return colorMap[char];
  };

  const renderCards = () => {
    const charCounts = {};
    let hasDuplicates = false;

    // Count the frequency of each character in the string
    inputValue.split("").forEach((char) => {
      charCounts[char] = (charCounts[char] || 0) + 1;
    });

    // Check if there are any characters with frequency > 1
    Object.values(charCounts).forEach((count) => {
      if (count > 1) {
        hasDuplicates = true;
      }
    });

    if (!hasDuplicates) {
      // Render success header
      return (
        <div className="flex flex-col items-center justify-center h-screen">
          <div className="bg-green-200 p-4 rounded-md mb-4">
            <p className="text-lg font-semibold text-green-700">
              Success! All characters with more than 1 appearance have been
              removed.
            </p>
          </div>
          <div className="flex">
            <div className="bg-gray-100 p-4 rounded-md mb-4 mr-20">
              <p className="text-lg font-semibold">Original String:</p>
              <p className="text-2xl font-bold">{location.state.inputValue}</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-md mb-4">
              <p className="text-lg font-semibold">New String:</p>
              <p className="text-2xl font-bold">{inputValue}</p>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="flex flex-col">
        <div className="font-serif text-2xl mb-3 text-blue-300">
          This is screen 2, choose a duplicate character to delete
        </div>
        <div className="flex flex-wrap justify-center" data-testid="Screen2">
          {inputValue.split("").map((char, index) => {
            const color = getColor(char);
            return (
              <Card
                key={index}
                className="w-48 h-72 m-4 p-4 rounded-md flex flex-col justify-center items-center"
                style={{ backgroundColor: color, borderColor: color }}
              >
                <Button
                  className="absolute top-0 right-0 border-none"
                  shape="circle"
                  icon={<CloseOutlined />}
                  onClick={() => handleDelete(char, index)}
                />
                {<h2 className="text-2xl font-bold">{char}</h2>}
              </Card>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div>
      <Link
        to="/"
        className="absolute top-0 left-0   rounded-md text-white font-medium bg-orange-300 hover:bg-orange-400 px-4 py-2 my-4 ml-4"
      >
        <ArrowLeftOutlined className="mr-2" />
        Back to Screen 1
      </Link>
      <div className="flex items-center justify-center overflow-x-auto">
        <div className="flex flex-wrap justify-center" data-testid="Screen2">
          {renderCards()}
        </div>
      </div>
    </div>
  );
};

export default Screen2;
