#!/usr/bin/env node

import chalk from "chalk";
import prompts from "prompts";

import createProject from "./lib/createProject";

const promptOne = {
  type: "text",
  name: "name",
  message: "What will your project be called?",
};

const promptTwo = {
  type: "select",
  name: "language",
  message: "Will you be using JavaScript or TypeScript?",
  choices: [
    {
      title: "JavaScript",
      value: "javascript",
    },
    {
      title: "TypeScript",
      value: "typescript",
    },
  ],
  initial: 0,
};

(async () => {
  console.log(chalk.red("Welcome to the create-t3-app !"));

  const { name }: { name: string } = await prompts(promptOne as any);
  const { language }: { language: string } = await prompts(promptTwo as any);

  await createProject(name, language);

  process.exit(0);
})();
