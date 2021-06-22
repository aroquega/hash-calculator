/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";

export function Button(props: { text: string }) {
  const { text } = props;
  return (
    <button css={{ padding: 8, backgroundColor: "#26edbb", border: "none" }}>
      {text}
    </button>
  );
}

export function Select<T>({
  labelText,
  options,
  value,
  onChange,
}: {
  labelText: string;
  options: T[];
  value: T;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}) {
  return (
    <div css={{ display: "flex", flexFlow: "column nowrap", marginTop: 16 }}>
      <label
        css={{
          color: "white",
          fontSize: 16,
          padding: "0 12px",
        }}
      >
        {labelText}
      </label>
      <select
        css={{
          outline: "none",
          appearance: "none",
          margin: 8,
          fontFamily: "Roboto, sans-serif",
          padding: "12px 8px",
          backgroundColor: "#0b0f0e",
          color: "white",
          border: "1px solid #6b7d79",
          borderRadius: 5,
        }}
        value={String(value)}
        onChange={onChange}
      >
        {options.map((option, index) => (
          <option key={index} value={String(option)}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export function TextArea({ labelText }: { labelText: string }) {
  return (
    <div css={{ display: "flex", flexFlow: "column nowrap", marginTop: 16 }}>
      <label
        css={{
          color: "white",
          fontSize: 16,
          padding: "0 12px",
        }}
      >
        {labelText}
      </label>
      <textarea
        css={{
          appearance: "none",
          margin: 8,
          padding: "12px 8px",
          border: "1px solid #6b7d79",
          borderRadius: 5,
          backgroundColor: "#0b0f0e",
          color: "white",
        }}
      ></textarea>
    </div>
  );
}
