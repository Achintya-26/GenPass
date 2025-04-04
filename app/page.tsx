"use client";
import { useState } from "react";
import zxcvbn from "zxcvbn";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Cover } from "@/components/ui/cover";

export default function PasswordAnalysis() {
  const [password, setPassword] = useState("");
  const [strengthScore, setStrengthScore] = useState(0);
  const [strengthLabel, setStrengthLabel] = useState("");
  const [timeToCrack, setTimeToCrack] = useState({});
  const [emailBreaches, setEmailBreaches] = useState(0);
  const [suggestion, setSuggestion] = useState("");
  const [showResults, setShowResults] = useState(false);

  // Function to handle real-time password analysis
  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    if (newPassword) {
      const analysis = zxcvbn(newPassword);
      setStrengthScore(analysis.score); // Score ranges from 0 (weak) to 4 (strong)

      // Set strength label based on score
      switch (analysis.score) {
        case 0:
        case 1:
          setStrengthLabel("Weak");
          break;
        case 2:
          setStrengthLabel("Moderate");
          break;
        case 3:
          setStrengthLabel("Strong");
          break;
        case 4:
          setStrengthLabel("Very Strong");
          break;
        default:
          setStrengthLabel("");
      }
    } else {
      // Reset if input is empty
      setStrengthScore(0);
      setStrengthLabel("");
    }

    // Hide results while typing
    setShowResults(false);
  };

  // Function to analyze password details on button click
  const handleAnalyzeClick = () => {
    if (!password) return;

    const analysis = zxcvbn(password);

    // Set time-to-crack estimates
    setTimeToCrack({
      bruteForce: analysis.crack_times_display.offline_slow_hashing_1e4_per_second,
      dictionary: analysis.crack_times_display.online_no_throttling_10_per_second,
      hybrid: analysis.crack_times_display.online_throttling_100_per_hour,
    });

    // Simulated email breaches and suggestions for demo purposes
    setEmailBreaches(analysis.feedback.suggestions.length > 0 ? 3 : 0);
    setSuggestion("7H3_m0unt@in$_R!s3_2024");

    // Show detailed results
    setShowResults(true);
  };

  return (
    <div className="min-w-6xl flex flex-col items-center min-h-screen p-4">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
        Your <Cover>Password</Cover>, Your <Cover>Security</Cover>
      </h1>

      <Card className="min-w-2xl max-w-6xl mx-auto mt-10 p-3 shadow-lg">
        <CardContent>
          {/* Password Input */}
          <div className="mb-4">
            <Input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>

          {/* Real-Time Feedback */}
          <div className="mb-1">
            <label className="block text-sm font-medium mb-2">Password Strength:</label>
            <Progress value={(strengthScore / 4) * 100} className="h-2" />
            <p className={`text-sm mt-1 ${strengthLabel === "Weak" ? "text-red-500" : strengthLabel === "Moderate" ? "text-yellow-500" : "text-green-500"}`}>
              {strengthLabel}
            </p>
          </div>

          {/* Detailed Results Section */}
          {showResults && (
            <>
              {/* Time to Crack */}
              <div className="mb-4">
                <h3 className="text-sm font-medium mb-2">Time to Crack:</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>Brute Force: {timeToCrack.bruteForce}</li>
                  <li>Dictionary Attack: {timeToCrack.dictionary}</li>
                  <li>Hybrid Attack: {timeToCrack.hybrid}</li>
                </ul>
              </div>

              {/* AI Analysis */}
              <div className="mb-4">
                <h3 className="text-sm font-medium mb-2">AI Analysis:</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  {zxcvbn(password).feedback.suggestions.map((suggestion, index) => (
                    <li key={index}>{suggestion}</li>
                  ))}
                  {/* {emailBreaches > 0 && (
                    <li>Your email appears in {emailBreaches} breaches.</li>
                  )} */}
                </ul>
              </div>

              {/* Suggestion */}
              <div className="">
                <h3 className="text-sm font-medium mb-2">AI Suggestion:</h3>
                <div className="flex gap-2">
                  <Input value={suggestion} readOnly />
                  <Button variant="outline" size="sm" className="">
                    Copy
                  </Button>
                </div>
              </div>
            </>
          )}
        </CardContent>

        {/* Footer */}
        <CardFooter className="flex justify-center">
          <Button className="w-sm" onClick={handleAnalyzeClick}>
            Analyze
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
