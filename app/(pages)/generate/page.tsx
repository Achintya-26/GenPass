"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Cover } from "@/components/ui/cover";

export default function CodeGeneration() {
  const [generatedPasswords, setGeneratedPasswords] = useState<string[]>([]);
  const [aiAnalysis, setAiAnalysis] = useState<string>("");

  const generatePasswords = () => {
    const suggestions = [
      "Yt@92!kLmN6#",
      "3xG*9rQ!pJ$",
      "Z#2lN8!mXpV",
      "M@7rQ!kLpY1",
    ];

    const aiRemarks = [
      "Your password lacks sufficient entropy; consider adding more symbols.",
      "The AI suggests a more complex pattern to resist dictionary attacks.",
      "Your current password is prone to brute-force attacks, use multi-case letters.",
      "Avoid common substitutions like '0' for 'O'; AI-generated passwords are better.",
    ];

    setGeneratedPasswords(suggestions);
    setAiAnalysis(aiRemarks[Math.floor(Math.random() * aiRemarks.length)]);
  };

  return (
    <div className="w-full max-w-6xl mx-auto mt-1 text-sm">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
        AI-Powered <Cover>Password</Cover>  Suggestions
            </h1>
      <Card className="shadow-md">
        <CardHeader className="text-center">
          <CardTitle>AI-Powered Password Suggestions</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-4">{aiAnalysis || "Click Generate to get AI-suggested Personalized passwords."}</p>
          <div className="space-y-2">
            {generatedPasswords.map((password, index) => (
              <div key={index} className="bg-gray-700 p-2 rounded text-center font-mono text-lg">
                {password}
              </div>
            ))}
          </div>
          <Button onClick={generatePasswords} className="mt-4 w-full">
            Generate Passwords
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
