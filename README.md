# Onchain AI Agent Starter Kit

A robust starter kit for building AI agents using OpenAI's Assistant API with on-chain capabilities. This toolkit provides a foundation for creating AI assistants that can interact with blockchain networks, execute smart contract functions, and handle various on-chain operations.

## 🌟 Features

- Pre-configured OpenAI Assistant API setup
- Direct blockchain interactions through [Viem](https://viem.sh/)
- TypeScript support for type safety

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- TypeScript
- An OpenAI API key
- A wallet private key for the agent
- Bun

### Setup

1. Fork this repository
2. Clone your forked repository:
```bash
git clone <your-forked-repo-url>
cd onchain-ai-starter
```

3. Copy the environment configuration:
```bash
cp .env.example .env
```

4. Install dependencies:
```bash
bun install
```

5. Start the project:
```bash
bun run start
```

## 📦 Adding New AI Agent Tools

### 1. Create a New Tool

Create a new tool file under `src/tools/<your-tool>.ts`. Follow the tool definition template:

### 2. Register the Tool

Import and register your tool in `src/tools/allTools.ts`:

```typescript
import { yourTool } from './<your-tool>';

export const tools: Record<string, ToolConfig> = {
  // ... existing tools
  your_tool_name: yourTool
};
```

### 3. Update Assistant Instructions

Add your tool's description and usage instructions in `src/const/prompt.ts`.

## 🤝 Contributing

We aim to build the largest open-source on-chain agent toolkit together! Your contributions are welcome and appreciated. Whether it's:

- Adding new tools and capabilities
- Improving documentation
- Fixing bugs
- Suggesting features
- Writing tests

Feel free to open issues and submit pull requests!

## 📱 Connect

Follow me on Twitter: [@0xSarthak13](https://x.com/0xSarthak13)