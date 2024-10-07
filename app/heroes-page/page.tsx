import Card from "@/components/cardcontainer";
import { Button2 } from "@/components/button";

interface Hero {
  name: string;
  disabled: boolean;
  images: Portraits;
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
      <main>
        {heroesArray
          .filter((hero) => {
            return !hero.disabled;
          })
          .map((hero, index: number) => {
            return <Card key={index} name={hero.name} img={hero.images.card} />;
          })}
        <Button2></Button2>
      </main>
    </div>
  );
}
