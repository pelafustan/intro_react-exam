import { Space, Select } from "antd";

// I need this for the filters
const ancestriesValue = ["half-blood", "muggleborn", "pure-blood", "unknown", "squib", "muggle", "half-veela", "quarter-veela"];
const housesValue = ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw", "Unknown"];
const speciesValue = ["human", "half-giant", "werewolf", "cat", "goblin", "owl", "ghost", "poltergeist", "three-headed dog", "dragon", "centaur", "house-elf", "acromantula", "hippogriff", "giant", "vampire", "half-human"];
const ancestriesLabel = ["Half-Blood", "Muggle-Born", "Pure-Blood", "Unknown", "Squib", "Muggle", "Half-Veela", "Quarter-Veela"];
const housesLabel = ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw", "Unknown"];
const speciesLabel = ["Human", "Half-Giant", "Werewolf", "Cat", "Goblin", "Owl", "Ghost", "Poltergeist", "Three-Headed Dog", "Dragon", "Centaur", "House Elf", "Acromantula", "Hippogriff", "Giant", "Vampire", "Half-Human"];

// this will create the object array with the needed options for each filter
const optionsCreator = (labels, values) => {
  const options = [];
  if (labels.length !== values.length) {
    throw new Error("sizes not match!");
  } else {
    for (let i = 0; i < labels.length; ++i) {
      const obj = new Object();
      obj.label = labels[i];
      obj.value = values[i];
      options.push(obj);
    }
  }
  return options;
}

// the actual options
const ancestriesOptions = optionsCreator(ancestriesLabel, ancestriesValue);
const housesOptions = optionsCreator(housesLabel, housesValue);
const speciesOptions = optionsCreator(speciesLabel, speciesValue);
const sortOptions = [
  {
    label: "Default",
    value: "default",
  },
  {
    label: "Name (Asc)",
    value: "name_asc",
  },
  {
    label: "Name (Des)",
    value: "name_des",
  },
  {
    label: "House (Asc)",
    value: "house_asc",
  },
  {
    label: "House (Des)",
    value: "house_des",
  },
  {
    label: "Specie (Asc)",
    value: "specie_asc",
  },
  {
    label: "Specie (Des)",
    value: "specie_des",
  },
  {
    label: "Ancestry (Asc)",
    value: "ancestry_asc",
  },
  {
    label: "Ancestry (Des)",
    value: "ancestry_des",
  },
];

export default function Filters({ filters, setFilters, setSortBy }) {

  // filter handlers
  const handleAncestryFilter = (value) => {
    setFilters({
      house: filters.house,
      specie: filters.specie,
      ancestry: value,
    });
  };

  const handleHouseFilter = (value) => {
    setFilters({
      ancestry: filters.ancestry,
      specie: filters.specie,
      house: value,
    });
  }

  const handleSpecieFilter = (value) => {
    setFilters({
      ancestry: filters.ancestry,
      house: filters.house,
      specie: value,
    });
  }

  const handleSort = (value) => {
    setSortBy(value);
  }

  return (
    <Space
      direction="vertical"
      size="middle"
      style={{
        display: "flex",
        flexDirection: "vertical",
      }}
    >
      <Select
        mode="multiple"
        style={{ width: "100%", }}
        allowClear
        placeholder="Filter by Houses..."
        onChange={handleHouseFilter}
        options={housesOptions}
        maxTagCount="responsive"
      />
      <Select
        mode="multiple"
        style={{ width: "100%", }}
        allowClear
        placeholder="Filter by Ancestry..."
        onChange={handleAncestryFilter}
        options={ancestriesOptions}
        maxTagCount="responsive"
      />
      <Select
        mode="multiple"
        style={{ width: "100%", }}
        allowClear
        placeholder="Filter by Species..."
        onChange={handleSpecieFilter}
        options={speciesOptions}
        maxTagCount="responsive"
      />

      <Select
        style={{ width: "100%", }}
        allowClear
        placeholder="Sort by..."
        onChange={handleSort}
        options={sortOptions}
      />
    </Space>
  )
}
