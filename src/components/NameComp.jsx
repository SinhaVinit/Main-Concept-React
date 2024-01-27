import { useState } from "react";

function NameComp() {
  const [name, setName] = useState("");

  return (
    <div>
      <p>Hello {name}!</p>
      <input value={name} onChange={(e) => setName(e.target.value)} />
    </div>
  );
}

export default NameComp;
