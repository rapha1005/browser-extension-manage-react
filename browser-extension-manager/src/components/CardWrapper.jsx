import Card from "./Card";

const res = await fetch("./src/assets/data.json");
const data = await res.json();

export default function CardWrapper() {
  return (
    <div className="card-wrapper">      {data.map((item, index) => (
      <Card
        key={index}
        name={item.name}
        description={item.description}
        image={item.image}
      />
    ))}</div>
  );
}
