"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { Cover } from "@/components/ui/cover";


export default function PasswordTips() {
  const tips = [
    {
      title: "Use a Mix of Characters",
      description: "Combine uppercase, lowercase, numbers, and special symbols.",
      icon: <FaCheckCircle className="text-green-500 text-2xl" />,
    },
    {
      title: "Avoid Common Words",
      description: "Do not use easily guessed words like 'password', '123456', or 'admin'.",
      icon: <FaTimesCircle className="text-red-500 text-2xl" />,
    },
    {
      title: "Make It Long",
      description: "Passwords should be at least 12-16 characters for strong security.",
      icon: <FaCheckCircle className="text-green-500 text-2xl" />,
    },
    {
      title: "Don’t Reuse Passwords",
      description: "Each account should have a unique password to prevent security breaches.",
      icon: <FaTimesCircle className="text-red-500 text-2xl" />,
    },
    {
      title: "Enable Two-Factor Authentication (2FA)",
      description: "Add an extra layer of security by requiring an additional verification step.",
      icon: <FaCheckCircle className="text-green-500 text-2xl" />,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen  p-6">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
      Password Security Best <Cover>Practices 🔒</Cover> 
                  </h1>
      <p className="text-gray-600 text-lg mb-8 text-center">
        Follow these guidelines to create strong and secure passwords that protect your accounts.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl text-sm">
        {tips.map((tip, index) => (
          <Card key={index} className="shadow-md">
            <CardHeader className="flex items-center space-x-3">
              {tip.icon}
              <CardTitle>{tip.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{tip.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
