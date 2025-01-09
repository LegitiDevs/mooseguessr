"use client";
import { Button } from "~/components/ui/button";

interface SubmitButtonProps {
  world: object;
}

export default function SubmitButton({ world }: SubmitButtonProps): JSX.Element {
  function handleClick() {
    location.reload();
  }

  return <Button onClick={handleClick}>Submit</Button>;
}
