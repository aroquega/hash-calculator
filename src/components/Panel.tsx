/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { useEffect } from "react";
import { useState } from "react";
import { InputType, Algorithms } from "../models";
import { Button, Select, TextArea } from "./Controls";


function Panel() {
  const [message, setMessage] = useState("");
  const [result, setResult] = useState("");
  const [inputType, setInputType] = useState<InputType>("keyboard");
  const [algorithm, setAlgorithm] = useState<Algorithms>("MD5");
  useEffect(() => {
    console.log(inputType);
  }, [inputType]);

  const handleSubmit = async () => {
    let result = 'md5';
    if(algorithm == 'SHA256'){
      result = 'sha256';
    }
    const response = await fetch(`http://localhost:8080/${result}`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message,
      }),
    });

    const data = await response.json();
    setResult(data.hashValue);
  };

  return (
    <main>
      <h1 css={{ color: "white", textAlign: "center" }}>
        Calculadora de Funciones Hash
      </h1>
      <form
        css={{ display: "flex", flexFlow: "column nowrap" }}
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <Select<Algorithms>
          labelText="Algoritmo de Encriptación"
          options={[ "MD5", "SHA256"]}
          value={algorithm}
          onChange={(e) => setAlgorithm(e.target.value as Algorithms)}
        />
        <Select<InputType>
          labelText="Tipo de Entrada"
          options={["keyboard", "file"]}
          value={inputType}
          onChange={(e) => setInputType(e.target.value as InputType)}
        />
        {inputType === "keyboard" && (
          <TextArea
            labelText="Resultado"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        )}
        {inputType === "file" && <input type="file" />}
        <Button text="Encripte" />
      </form>
      {
        result && <div css={{padding: 8}}>
          <span css={{color: 'white', fontSize: 18, wordBreak: 'break-all'}}>El resultado es: {result}</span>
          </div>
      }
    </main>
  );
}

export default Panel;
