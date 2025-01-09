import Image from "next/image";
import { Input } from "~/components/ui/input";
import SubmitButton from "~/components/submitbutton";
import randomWorld from "~/lib/randomworld";

export default async function GamePage() {
  const world = await randomWorld();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-950 text-white">
      <h1 className="text-10xl font-extrabold tracking-tight text-white sm:text-[4rem]">
        Guess the World
      </h1>
      <Image src={world.url} width={600} height={600} alt="An image of a Minecraft world" />
      <Input placeholder="World Name" className="size-auto" />
      <SubmitButton world={JSON.parse(JSON.stringify(world))}></SubmitButton>
    </main>
  );
}
