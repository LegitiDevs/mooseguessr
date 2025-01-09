import Link from "next/link";
import { Button } from "~/components/ui/button";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-950 text-white">
      <h1 className="text-10xl font-extrabold tracking-tight text-white sm:text-[4rem]">
        mooseguessr
      </h1>
      <Button asChild>
        <Link href="/game">Start</Link>
      </Button>
    </main>
  );
}
