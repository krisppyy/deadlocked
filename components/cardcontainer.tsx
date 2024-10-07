import {
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
    <Link href="heroes-page" legacyBehavior passHref>
      <Card className="size-fit hover:bg-stone-800">
        <CardContent>
          <img src={img}></img>
        </CardContent>
        <CardHeader>
          <CardTitle className="text-center">{name}</CardTitle>
        </CardHeader>
      </Card>
    </Link>
  );
}
