// templates/component/Screen1.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input, Button, message } from "antd";
import "./Screen1.module.scss";

const Screen1 = () => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  message.config({
    maxCount: 3, // Only allow one message to be displayed at a time
    duration: 3, // Duration in seconds for which the message is displayed
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() === "") {
      // Handle empty input case
      message.error("Input is empty or contains only spaces");
      return;
    }

    // Handle valid input case
    navigate("/screen2", { state: { inputValue } });
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div data-testid="Screen1">
        <div className="font-serif text-2xl mb-3 text-blue-300">
          This is screen 1, please Input your string
        </div>
        <Input.Group>
          <Input
            style={{ width: "500px" }}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Button
            type="primary"
            style={{
              borderRadius: "0px",
              borderTopRightRadius: "5px",
              borderBottomRightRadius: "5px",
            }}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Input.Group>
      </div>
    </div>
  );
};

export default Screen1;
