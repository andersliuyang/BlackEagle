<p align="center">
  <img src="assets/logo.png" alt="Gild Logo" width="50%" />
</p>

# Gild (钱多多) 🧰

**E-commerce Seller AI Toolbox — inside your browser sidebar, no server required.**

Gild is a browser extension (Manifest V3) that brings a comprehensive AI-powered e-commerce toolkit directly into your browser sidebar. Optimize product listings, monitor competitors, generate marketing content, analyze reviews, calculate profits, and more — all without sending your data to any server.

You bring your own AI API key. Gild runs entirely in your browser.

---

## ✨ Features

### 📦 Product Panel (9 Tools)

| Tool | Description |
|------|-------------|
| **Optimize Title** | Analyze keyword coverage, selling points, readability → 10 optimized title options |
| **Write Description** | 3 description styles: Feature-focused, Scenario-based, Emotional |
| **Analyze Image** | Vision-based product main image analysis (composition, CTR potential, improvements) |
| **Expand Keywords** | 50+ long-tail keywords across 4 categories with search intent & competition level |
| **Calculate Profit** | Profit/margin calculator with suggested pricing for 30% target |
| **Compare** | Side-by-side product comparison with strengths/weaknesses analysis |
| **Analyze Reviews** | Review mining: top pros/cons, user persona, optimization suggestions |
| **Cross-platform Adapt** | Adapt listings for Taobao/Tmall, Pinduoduo, and Douyin |
| **Screenshot Analysis** | Vision-based e-commerce dashboard screenshot interpretation |

### 💬 Service Panel (4 Tools)

- **Suggest Reply** — 3 tones: Standard, Enthusiastic, Concise
- **Handle Bad Review** — Root cause analysis + reply strategy + complete response copy
- **Quality Check** — Evaluate CS conversations with A/B/C/D scoring
- **Templates** — CRUD management of reply templates

### 📱 Content Panel (5 Tools)

- **Social Content** — Xiaohongshu notes, Douyin scripts, WeChat moments copy
- **Marketing Copy** — SMS templates, direct-link titles, livestream scripts
- **Marketing Calendar** — H2 calendar covering major Chinese e-commerce events
- **Evaluate Promotion** — P&L analysis for promotional campaigns
- **Trending Topics** — Multi-platform trending topic scraping + marketing suggestions

### 📊 Monitor Panel

- Price tracking (watchlist + history with change alerts)
- Review monitoring (new/bad review detection)
- Automated price change notifications

### 🤖 Agent Chat & Orchestration

- Conversational AI with webpage context injection
- Multi-step task orchestration with planning & execution
- File upload (documents, images, videos)
- 10 LLM function-calling tools (web automation, vision, document analysis, search, Notion export, reminders, image generation, bookmark management, browser tabs)

---

## 🧩 Why Gild?

### Privacy First

- No backend servers
- No account required
- No tracking or analytics
- No vendor lock-in

All data stays in your browser. AI requests are sent **directly** to your configured endpoint.

### Bring Your Own AI

Works with any OpenAI-compatible API endpoint. 4 model types:

| Type | Purpose |
|------|---------|
| `talk` | Conversation, reasoning, web understanding |
| `vision` | Image/video analysis |
| `document` | Long document parsing |
| `imagegen` | Image generation |

### Web Automation (WAOP v1)

JSON-based web automation protocol with 11 operation types — the LLM can autonomously navigate pages, fill forms, click elements, and extract data.

---

## 🎯 Who Is This For?

- E-commerce sellers & operators
- Product managers & listing optimizers
- Customer service teams
- Marketing & content creators
- Cross-border e-commerce professionals

---

## 🔐 Privacy & Security

Gild operates entirely on the client side.

- All data stored in `chrome.storage.local`
- No centralized data collection
- You control which AI endpoint receives requests

---

## 🚀 Quick Start

### Prerequisites

- Chrome or Edge browser
- An OpenAI-compatible API key

### Installation (Developer Mode)

1. **Build the Angular sidebar:**
   ```bash
   npm run build
   ```
   (Runs `node init.js` then `ng build --configuration production`, outputs to `extensions/gild/sidebar/`)

2. **Load the extension** in Chrome/Edge:
   - Open `chrome://extensions` or `edge://extensions`
   - Enable **Developer mode**
   - Click **Load unpacked** and select the `extensions/gild/` folder

3. **Configure your LLM API key** in Settings → LLM Config

4. Click the extension icon to open the sidebar and start using Gild.

### LLM Configuration

Configure at least one `talk`-type model. Recommended model types:

| Type | Example Model | Required? |
|------|--------------|-----------|
| `talk` | GPT-4o-mini, DeepSeek, Claude 3 | ✅ Required |
| `vision` | GPT-4o, GPT-4o-mini | ❌ Optional |
| `document` | GPT-4o-mini, Claude 3 Haiku | ❌ Optional |
| `imagegen` | DALL-E 3 | ❌ Optional |

---

## 📁 Repository Layout

```
extensions/gild/             Browser extension (Manifest V3)
├── background.js            Service worker
├── content.js               Content script (page data extraction)
├── execute.js               WAOP v1 web automation executor
├── translate.js             In-page EN→ZH translation engine
├── taskModule.js            Scheduled task management
├── manifest.json            Extension manifest
└── sidebar/                 Built Angular app output

blackeagle-sidebar/          Angular 21 sidebar application
├── src/app/
│   ├── agenttalk/           Chat component, file upload, orchestration
│   ├── panels/              Product, Service, Content, Monitor panels
│   ├── tools/               10 function-calling tool implementations
│   ├── services/            LLM, Search, EcommerceData, Template services
│   ├── orchestration/       Task orchestrator (multi-step planning & execution)
│   ├── i18n.ts              Central i18n dictionary (EN + ZH)
│   └── llm.ts               LLM service (OpenAI client, streaming)
```

---

## 🌐 Internationalization

English + Chinese (dual system for extension and Angular app). Language auto-detects and can be toggled in settings.

---

## 📄 License

This project is for personal and commercial use. All rights reserved.
