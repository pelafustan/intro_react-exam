import "./App.css";
import { useState } from "react";
import { Layout, theme } from "antd";
import Filters from "./components/Filters";
import MainView from "./components/MainView";
import MyApi from "./components/MyApi";
import SearchBar from "./components/SearchBar";
import Logo from "./hp_logo.png";

function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({
    ancestry: [],
    specie: [],
    house: [],
  });
  const [sortBy, setSortBy] = useState("default")

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <>
      <MyApi data={data} setData={setData} setLoading={setLoading} />

      <Layout>
        <Layout.Header
          style={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            color: "#fff",
          }}
        >
          <img alt="hp-logo" src={ Logo } style={{ height: "80%", padding: "0.5rem 1rem" }} />
          <h3>Harry Potter - Character Database</h3>
          <SearchBar
            setQuery={setQuery}
          />
        </Layout.Header>
        <Layout>
          <Layout.Sider
            style={{
              background: colorBgContainer,
              padding: "1rem",
            }}
            width={"20%"}
          >
            <Filters
              filters={filters}
              setFilters={setFilters}
              setSortBy={setSortBy}
            />
          </Layout.Sider>
          <Layout.Content
            style={{
              padding: "1rem",
            }}
          >
            <MainView
              data={data}
              loading={loading}
              query={query}
              filters={filters}
              sortBy={sortBy}
              logo={Logo}
            />
          </Layout.Content>
        </Layout>
      </Layout>
    </>
  )
}

export default App
