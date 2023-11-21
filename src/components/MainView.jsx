import { List, Card, Typography } from "antd";

export default function MainView({ data, loading, query, filters, sortBy }) {
  let filtered = [];
  if (filters.ancestry.length || filters.house.length || filters.specie.length) {
    filtered = data.filter(entry => {
      return (
        filters.ancestry.some(v => entry.ancestry.includes(v))
        || filters.house.some(v => entry.house.includes(v))
        || filters.specie.some(v => entry.species.includes(v))
      );
    });
  } else {
    filtered = [...data];
  }

  switch (sortBy) {
    case "name_asc":
      filtered.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        } else if (a.name > b.name) {
          return 1;
        } else {
          return 0;
        }
      });
      break;
    case "name_des":
      filtered.sort((a, b) => {
        if (b.name < a.name) {
          return -1;
        } else if (b.name > a.name) {
          return 1;
        } else {
          return 0;
        }
      });
      break;
    case "house_asc":
      filtered.sort((a, b) => {
        if (a.house < b.house) {
          return -1;
        } else if (a.house > b.house) {
          return 1;
        } else {
          return 0;
        }
      });
      break;
    case "house_des":
      filtered.sort((a, b) => {
        if (a.house > b.house) {
          return -1;
        } else if (a.house < b.house) {
          return 1;
        } else {
          return 0;
        }
      });
      break;
    case "ancestry_asc":
      filtered.sort((a, b) => {
        if (a.ancestry < b.ancestry) {
          return -1;
        } else if (a.ancestry > b.ancestry) {
          return 1;
        } else {
          return 0;
        }
      });
      break;
    case "ancestry_des":
      filtered.sort((a, b) => {
        if (a.ancestry > b.ancestry) {
          return -1;
        } else if (a.ancestry < b.ancestry) {
          return 1;
        } else {
          return 0;
        }
      });
      break;
    case "specie_asc":
      filtered.sort((a, b) => {
        if (a.species < b.species) {
          return -1;
        } else if (a.species > b.species) {
          return 1;
        } else {
          return 0;
        }
      });
      break;
    case "specie_des":
      filtered.sort((a, b) => {
        if (a.species > b.species) {
          return -1;
        } else if (a.species < b.species) {
          return 1;
        } else {
          return 0;
        }
      });
      break;
    case "default":
    default:
      break;
  }

  if (query) {
    filtered = filtered.filter(entry => {
      return (
        entry.name.toLowerCase().includes(query)
      );
    });
  }

  return (
    <List
      loading={loading}
      grid={{
        gutter: 16,
        xs: 1,
        sm: 1,
        md: 2,
        lg: 5,
        xl: 5,
        xxl: 5,
      }}
      pagination={{
        position: "bottom",
        align: "center",
      }}
      dataSource={filtered}
      renderItem={(item) => (
        <List.Item key={item.id} >
          <Card
            title={item.name}
            cover={
              <img
                alt={item.name}
                src={item.image ? item.image : "/hp_logo.png"}
                style={{ boxSizing: "border-box", padding: "20px" }}
              />
            }
          >
            <Typography.Paragraph>
              <Typography.Text strong={true}>Specie:</Typography.Text> {
                (() => {
                  switch (item.species) {
                    case "human":
                      return "Human";
                    case "half-giant":
                      return "Half Giant";
                    case "werewolf":
                      return "Werewolf";
                    case "cat":
                      return "Cat";
                    case "goblin":
                      return "Goblin";
                    case "owl":
                      return "Owl";
                    case "ghost":
                      return "Ghost";
                    case "poltergeist":
                      return "Poltergeist";
                    case "three-headed dog":
                      return "Three-headed Dog";
                    case "dragon":
                      return "Dragon";
                    case "centaur":
                      return "Centaur";
                    case "house-elf":
                      return "House Elf";
                    case "acromantula":
                      return "Acromantula";
                    case "hippogriff":
                      return "Hippogriff";
                    case "Giant":
                      return "Giant";
                    case "vampire":
                      return "Vampire";
                    case "half-human":
                      return "Half Human";
                    default:
                      return "Unknown";
                  }
                })()
              }
            </Typography.Paragraph>
            <Typography.Paragraph>
              <Typography.Text strong={true}>Ancestry:</Typography.Text> {
                (() => {
                  switch (item.ancestry) {
                    case "half-blood":
                      return "Half-Blood";
                    case "muggleborn":
                      return "Muggle-Born";
                    case "pure-blood":
                      return "Pure-Blood";
                    case "squib":
                      return "Squib";
                    case "muggle":
                      return "Muggle";
                    case "half-veela":
                      return "Half-Veela";
                    case "quarter-veela":
                      return "Quarter-Veela";
                    default:
                      return "Unknown";
                  }
                })()
              }
            </Typography.Paragraph>
            <Typography.Paragraph>
              <Typography.Text strong={true}>House:</Typography.Text> {item.house}
            </Typography.Paragraph>
            <Typography.Paragraph>
              <Typography.Text strong={true}>Date of Birth:</Typography.Text> {
                (() => item.dateOfBirth ? new Date(item.dateOfBirth.split("-").reverse().join("-")).toDateString().replace(/^\S+\s/, '') : "Not informed")()
              }
            </Typography.Paragraph>
          </Card>
        </List.Item>
      )}
    />
  )
}
