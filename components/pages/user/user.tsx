import { useState } from "react";

export function User() {
  const [test, setTest] = useState<string>("test");

  return (
    <div>
      <h2>Usuário</h2>
    </div>
  );
}
