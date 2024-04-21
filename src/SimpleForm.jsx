import React, { useState } from "react";
import { updateNameApi } from "./updateNameApi";

const SimpleForm = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleNameSave = () => {
    updateNameApi({ username: name })
      .then((data) => {
        setMessage(`${data.username} saved successfully`);
      })
      .catch(() => {
        setMessage("Details failed to save successfully");
      });
  };
  return (
    <div>
      <label>Username</label>
      <input
        name="username"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onBlur={handleNameSave}
      />
      <div>{message}</div>
    </div>
  );
};

export default SimpleForm;
