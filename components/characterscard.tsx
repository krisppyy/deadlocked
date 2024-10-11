import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Hero } from "@/app/characters/page";

export default function HeroList({ hero }: { hero: Hero }) {
  return (
    <div>
      <Link key={hero.id} href={`/heroes/${hero.id}`}>
        <Card className="hover:bg-stone-800 cursor-pointer">
          <CardContent>
            <img src={hero.images.card} className="size-auto"></img>
          </CardContent>
          <CardHeader>
            <CardTitle className="text-center">{hero.name}</CardTitle>
          </CardHeader>
        </Card>
      </Link>
    </div>
  );
}

/**import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function Cards({ name, img }: { name: string; img: string }) {
  return (
    <div>
      {heroes.map((hero) => (
        <Link key={hero.id} href={`/heroes/${hero.id}`}>
          <Card className="size-fit hover:bg-stone-800 cursor-pointer">
            <CardContent>
              <img src={img}></img>
            </CardContent>
            <CardHeader>
              <CardTitle className="text-center">{name}</CardTitle>
            </CardHeader>
          </Card>
        </Link>
      ))}
    </div>
  );
}
 *
 */
