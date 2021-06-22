/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { useEffect } from "react";
import { useState } from "react";
import { InputType, Algorithms } from "../models";
import { Button, Select, TextArea } from "./Controls";

function Panel() {
  const [inputType, setInputType] = useState<InputType>("keyboard");
  useEffect(() => {
    console.log(inputType);
  }, [inputType]);
  return (
    <main>
      <h1 css={{ color: "white", textAlign: "center" }}>
        Calculadora de Funciones Hash
      </h1>
      <form css={{ display: "flex", flexFlow: "column nowrap" }}>
        <Select<Algorithms>
          labelText="Algoritmo de Encriptación"
          options={["MD4", "MD5", "SHA1"]}
          value="MD4"
          onChange={() => {}}
        />
        <Select<InputType>
          labelText="Tipo de Entrada"
          options={["keyboard", "file"]}
          value={inputType}
          onChange={(e) => setInputType(e.target.value as InputType)}
        />
        {inputType === "keyboard" && <TextArea labelText="Resultado" />}
        {inputType === "file" && <input type="file"/>}
        <Button text="Encripte" /> 
      </form>
    </main>
  );
}

export default Panel;
