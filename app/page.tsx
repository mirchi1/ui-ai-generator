"use client";
import { useState } from "react";
import Button from "../components/Button";
import Card from "../components/Card";
interface UIComponent {
  type: "Card";
  title: string;
  content: string;
  color: string;
}
export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [generatedCode, setGeneratedCode] = useState("");
  const [explanation, setExplanation] = useState("");

  const [uiTree, setUiTree] = useState<UIComponent[]>([
    {
      type: "Card",
      title: "Demo Card",
      content: "This is a test card",
      color: "bg-white",
    },
  ]);
  const [history, setHistory] = useState<UIComponent[][]>([]);
  const colorMap: Record<string, string> = {
    red: "bg-red-500",
    blue: "bg-blue-500",
    green: "bg-green-500",
    yellow: "bg-yellow-400",
    purple: "bg-purple-500",
    pink: "bg-pink-500",
    orange: "bg-orange-500",
    gray: "bg-gray-400",
    black: "bg-black text-white",
    white: "bg-white",
  };
  //PLANNER (Multi-Component)
  function planner(userPrompt: string, current: UIComponent[]): UIComponent[] {
    const lower = userPrompt.toLowerCase();
    let updatedTree = [...current];
    let targetIndex = 0;
    if (lower.includes("second")) targetIndex = 1;
    if (lower.includes("third")) targetIndex = 2;
    // ADD NEW CARD
    if (lower.includes("add")) {
      const newCard: UIComponent = {
        type: "Card",
        title: `Card ${updatedTree.length + 1}`,
        content: "Newly added card.",
        color: "bg-white",
      };
      updatedTree.push(newCard);
      return updatedTree;
    }
    if (!updatedTree[targetIndex]) return updatedTree;
    const updated = { ...updatedTree[targetIndex] };

    // Color update
    Object.keys(colorMap).forEach((color) => {
      if (lower.includes(color)) {
        updated.color = colorMap[color];
      }
    });

    if (lower.includes("title")) {
      updated.title = "Updated Title";
    }

    if (lower.includes("content")) {
      updated.content = "Updated content from planner.";
    }

    updatedTree[targetIndex] = updated;
    return updatedTree;
  }
  //GENERATOR
  function generator(plan: UIComponent[]): string {
    return plan
      .map(
        (component) => `
<Card title="${component.title}" color="${component.color}">
  <p>${component.content}</p>
  <Button label="Click Me" />
</Card>
`
      )
      .join("\n");
  }
  // EXPLAINER
  function explainer(userPrompt: string): string {
    const lower = userPrompt.toLowerCase();
    let reasons: string[] = [];

    if (lower.includes("add")) {
      reasons.push("Added a new Card component as requested.");
    }

    if (lower.includes("second")) {
      reasons.push("Targeted the second card for modification.");
    }

    if (lower.includes("third")) {
      reasons.push("Targeted the third card for modification.");
    }

    Object.keys(colorMap).forEach((color) => {
      if (lower.includes(color)) {
        reasons.push(`Changed color to ${color} based on prompt.`);
      }
    });

    if (lower.includes("title")) {
      reasons.push("Updated title because prompt requested title change.");
    }

    if (lower.includes("content")) {
      reasons.push("Updated content because prompt requested content change.");
    }

    if (reasons.length === 0) {
      reasons.push("No structural change detected. Preserved existing layout.");
    }

    reasons.push("No full rewrite performed. Incremental update applied.");

    return reasons.join(" ");
  }

  function handleModify() {
    setHistory((prev) => [...prev, uiTree]);

    const updatedTree = planner(prompt, uiTree);
    const code = generator(updatedTree);
    const explanationText = explainer(prompt);

    setUiTree(updatedTree);
    setGeneratedCode(code);
    setExplanation(explanationText);
  }

  function rollback(index: number) {
    const previous = history[index];
    setUiTree(previous);
    setGeneratedCode(generator(previous));
    setExplanation("Rolled back to selected version.");
  }

  return (
    <div className="h-screen flex">
      {/* LEFT PANEL */}
      <div className="w-1/3 border-r p-4">
        <h2 className="font-bold mb-2">Chat</h2>

        <input
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe your UI..."
          className="w-full p-2 border rounded"
        />

        <button
          onClick={handleModify}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
        >
          Modify UI
        </button>

        <div className="mt-6">
          <h3 className="font-bold">Version History</h3>

          {history.map((_, index) => (
            <button
              key={index}
              onClick={() => rollback(index)}
              className="block mt-2 text-sm text-blue-600 underline"
            >
              Rollback to Version {index + 1}
            </button>
          ))}
        </div>
      </div>

      {/* MIDDLE PANEL */}
      <div className="w-1/3 border-r p-4 bg-black text-green-400">
        <h2 className="font-bold mb-2 text-white">Generated Code</h2>

        <pre className="text-sm whitespace-pre-wrap">
          {generatedCode}
        </pre>

        <div className="mt-6 text-white">
          <h3 className="font-bold">Explanation</h3>
          <p className="text-sm mt-2">{explanation}</p>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="w-1/3 p-4 bg-gray-800">
        <h2 className="font-bold mb-2 text-white">Live Preview</h2>

        {uiTree.map((component, index) => (
          <Card
            key={index}
            title={component.title}
            color={component.color}
          >
            <p>{component.content}</p>
            <div className="mt-3">
              <Button label="Click Me" />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}


