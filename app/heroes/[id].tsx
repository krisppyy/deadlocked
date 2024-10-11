import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";

interface Hero {
  id: string;
  name: string;
  disabled: boolean;
  images: Portraits;
  lore: string;
}

interface Portraits {
  card: string;
}

// Define the component to display hero details
const HeroDetail = ({ hero }: { hero: Hero }) => {
  const router = useRouter();

  // If the page is being generated, show a loading state
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{hero.name}</h1>
      <img src={hero.images.card} alt={hero.name} />
      <p>{hero.lore}</p>
    </div>
  );
};

// getStaticPaths to specify which hero pages to generate
export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(
    "https://assets.deadlock-api.com/v1/heroes?language=english"
  );
  const heroes: Hero[] = await res.json();

  // Generate the paths for each hero based on their ID
  const paths = heroes.map((hero) => ({
    params: { id: hero.id.toString() },
  }));

  return { paths, fallback: true }; // fallback true allows new pages to be generated on demand
};

// getStaticProps to fetch hero data based on the ID
export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params!;
  const res = await fetch(
    `https://assets.deadlock-api.com/v1/heroes/${id}?language=english`
  );
  const hero = await res.json();

  // If no hero found, return 404
  if (!hero) {
    return {
      notFound: true,
    };
  }

  return {
    props: { hero }, // Pass the hero data to the component
  };
};

export default HeroDetail;

// import { GetStaticPaths, GetStaticProps } from "next";
// import { Hero } from "@/app/characters/page"; // Adjust the import path based on your project
// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle,
//   CardFooter,
//   CardDescription,
// } from "@/components/ui/card";

// // The HeroDetail component to display individual hero details
// export default function HeroDetail({ hero }: { hero: Hero }) {
//   return (
//     <div className="hero-detail">
//       <Card className="size-fit">
//         <CardContent>
//           <img src={hero.images.card} alt={hero.name} />
//         </CardContent>
//         <CardHeader>
//           <CardTitle className="text-center">{hero.name}</CardTitle>
//           <CardDescription className="text-center">{hero.lore}</CardDescription>
//         </CardHeader>
//         <CardFooter>
//           {/* Additional content like stats or abilities could go here */}
//         </CardFooter>
//       </Card>
//     </div>
//   );
// }

// // Get the paths for all hero pages
// export const getStaticPaths: GetStaticPaths = async () => {
//   const res = await fetch(
//     "https://assets.deadlock-api.com/v1/heroes?language=english"
//   );
//   const heroes: Hero[] = await res.json();

//   // Generate paths for each hero based on their id
//   const paths = heroes.map((hero) => ({
//     params: { id: hero.id.toString() }, // Make sure to convert the id to a string
//   }));

//   return { paths, fallback: true }; // fallback: true allows new pages to be generated on demand
// };

// // Fetch individual hero data based on the id
// export const getStaticProps: GetStaticProps = async (context) => {
//   const { id } = context.params!;

//   const res = await fetch(
//     `https://assets.deadlock-api.com/v1/heroes/${id}?language=english`
//   );
//   const hero: Hero = await res.json();

//   // If no hero found, return 404
//   if (!hero) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: { hero }, // Pass the hero data as props to the component
//   };
// };
