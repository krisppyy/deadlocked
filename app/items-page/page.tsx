import Card from "@/components/cardcontainer";

interface Hero {
  name: string;
  disabled: boolean;
}

export default async function Items() {
  let data = await fetch(
    "https://assets.deadlock-api.com/v1/heroes?language=english"
  );
  let heroesArray: Hero[] = await data.json();

  return (
    <div>
      {" "}
      <p>Items here</p>
    </div>
  );
}
