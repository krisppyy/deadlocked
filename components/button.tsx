"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function Button2() {
  const router = useRouter();
  function myfunction() {
    router.push("/");
  }
  return <Button onClick={myfunction}>This is a Button</Button>;
}
