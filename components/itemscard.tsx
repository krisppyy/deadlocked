import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function Icards({
  name,
  image,
  backgroundClass,
}: {
  name: string;
  image: string;
  backgroundClass: string;
}) {
  return (
    <div>
      <Card className="h-56 w-40 hover:bg-accent cursor-pointer">
        <CardContent
          className={`card ${backgroundClass} p-8 border-4 rounded-lg`}
        >
          <img src={image} className="size-fit"></img>
        </CardContent>
        <CardHeader>
          <CardTitle className="text-center">{name}</CardTitle>
        </CardHeader>
      </Card>
    </div>
  );
}
