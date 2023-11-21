import { Input } from "antd";

export default function SearchBar({ setQuery }) {
  const onChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <Input.Search
      placeholder="Here you can type to search..."
      allowClear
      onChange={onChange}
      style={{
        width: "400px",
        margin: "auto",
      }}
    />
  );
}
