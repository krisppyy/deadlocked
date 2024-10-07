import Card from "@/components/cardcontainer";
import { Button2 } from "@/components/button";

/**
 * 1. Navbar
 * 4. Cards
 * 5. Footer
 * 6. Back Button
 * 7. Logo Button
 * 8. Social Links
 */
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
      <main className="grid grid-cols-7 auto-rows-auto" id="cards-container">
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

/**
 * 1. Defining a problem
 * 2. Identifying general rules to the product that will solve the problem
 * 3. Setup a Next.js project
 * 4. Running an npm script (npm run <script_name>) in our case npm run dev.
 * 5. Basic html layouting using divs
 * 6. Determing what can be a custom component with the layout
 * 7. Creating a custom component
 * 8. Importing the custom component
 * 9. Fetching data from an API
 * 10. Iterating through the data array and mapping it to the card component
 */
