import React, { useState } from "react";
import "./App.css";

function PasswordGenerator() {
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    const passwordLength = 12;
    let newPassword = "";

    for (let i = 0; i < passwordLength; i++) {
      const randomValue = Math.random();

      const randomIndex = Math.floor(randomValue * chars.length);
      newPassword += chars[randomIndex];

     
    }
    setPassword(newPassword);
   
  };

  return (
    <div>
      <button className="generate-button" onClick={generatePassword}>
        Gerar Chave Aleatória
      </button>
      {password && (
        <div>
          <br />
          <p>Chave gerada:</p>
          <div className="password-box">
            <strong>{password}</strong>
          </div>
        </div>
      )}
    </div>
  );
}

export default PasswordGenerator;
