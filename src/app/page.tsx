"use client"
import { useState } from "react";
import PromptInput from "../components/PromptInput";
import LivePreview from "../components/LivePreview";

export default function Home() {
  const [output, setOutput] = useState("");

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Litera Code AI</h1>
      <PromptInput onOutput={setOutput} />
      <LivePreview html={output} />
    </main>
  );
}