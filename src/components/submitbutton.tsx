"use client";
import { Button } from "~/components/ui/button";

interface SubmitButtonProps {
  world: object;
}

export default function SubmitButton({ world, }: SubmitButtonProps): JSX.Element {
  return <Button>Submit</Button>;
}
