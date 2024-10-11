import Card from "@/components/characterscard";

export interface Hero {
  id: string;
  name: string;
  disabled: boolean;
  images: Portraits;
  lore: string;
}
interface Portraits {
  card: string;
}

export default async function Home() {
  let data = await fetch(
    "https://assets.deadlock-api.com/v1/heroes?language=english"
  );
  let heroesArray: Hero[] = await data.json();

  return (
    <div>
      <main className="grid grid-cols-5 auto-rows-auto" id="cards-container">
        {heroesArray
          .filter((hero) => {
            return !hero.disabled;
          })
          .map((hero, index: number) => {
            return <Card key={index} hero={hero} />;
          })}
      </main>
    </div>
  );
}
