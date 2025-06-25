"use client"
import { useState } from "react";
import { generateCode } from "../lib/openai";

export default function PromptInput({ onOutput }) {
  const [prompt, setPrompt] = useState("");

  const handleGenerate = async () => {
    const result = await generateCode(prompt);
    onOutput(result);
  };

  return (
    <div className="space-y-2">
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="w-full p-2 border rounded"
        placeholder="Ketik perintah coding..."
        rows={4}
      />
      <button
        onClick={handleGenerate}
        className="bg-black text-white px-4 py-2 rounded"
      >
        🚀 Generate
      </button>
    </div>
  );
}