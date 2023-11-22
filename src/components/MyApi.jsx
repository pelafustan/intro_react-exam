import { useEffect } from "react";

export default function MyApi({ setData, setLoading }) {
  const url = "https://hp-api.onrender.com/api/characters";

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(res);
      })
      .then((data) => {
        setData(
          data
            .map(
              ({ id, name, species, ancestry, house, dateOfBirth, image }) => ({
                id,
                name,
                species,
                ancestry,
                house,
                dateOfBirth,
                image,
              }))
            .map(entry => {
              return (
                entry.ancestry === ""
                  ? { ...entry, ancestry: "unknown" }
                  : entry
              );
            })
            .map(entry => {
              return (
                entry.house === ""
                  ? { ...entry, house: "Unknown" }
                  : entry
              );
            }));
      })
      .catch((res) => console.log(res.status, res.statusText))
      .finally(() => {
        setLoading(false);
      });
  }, []);
}
