# Advanced Chemical Lab Visualization

MERN monorepo project (MongoDB, Express, React, Node.js)  
Frontend: React + Vite + Tailwind CSS + Bootstrap  
Backend: Node.js + Express + MongoDB

---

## Requirements

- Node.js >= 18
- npm >= 9
- MongoDB running locally or cloud

---

## Clone Project

```bash
git clone <REPO_URL>
cd advanced-chemical-lab-visualization
```

---

## Backend Setup (API)

```bash
cd apps/dev
npm install
npm run dev
```

Backend runs at:
```
http://localhost:5000
```

Health check:
```
http://localhost:5000/api/health
```

---

## Frontend Setup (Web)

Open a new terminal:

```bash
cd apps/web
npm install
npm run dev
```

Frontend runs at:
```
http://localhost:5173
```

---

## Environment Variables

Create file:

```
apps/dev/.env
```

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/aclb
```

---

## Project Structure

```
apps/
├── dev   # Backend (Node + Express)
└── web   # Frontend (React + Vite)
```

---

## Notes

- Frontend is already connected to backend (`http://localhost:5000/api`)
- Tailwind CSS + Bootstrap are preconfigured
- File uploads stored in `apps/api/uploads`
- Do NOT store files in database

---

## Stop Project

Press:
```
CTRL + C
```

---

## Done

Open browser:
```
http://localhost:5173
```


---

## 📌 Overview

**Virtual Chemistry Lab** is a browser-based, interactive laboratory simulation platform designed to replicate real-world chemistry experiments with high scientific accuracy. It enables users to perform titrations, qualitative ion detection, and general chemical experiments in a safe, visual, and engaging digital environment.

This system is **not a simple animation tool** — it is a **rule-based scientific simulation engine** that combines:

* Real chemical behavior
* Physics-aware visualization
* Step-by-step guided learning
* Mathematical computation
* Gamified interaction

---

## 🎯 Core Objectives

* Simulate **real laboratory experiments** digitally
* Provide **step-by-step guided learning**
* Ensure **scientific accuracy in reactions and calculations**
* Enable **interactive experimentation** (not passive viewing)
* Support **scalable addition of new reactions via configuration (JSON)**

---

## ⚙️ Tech Stack (MERN)

### Frontend

* React (with TypeScript preferred)
* Canvas / SVG / WebGL for rendering
* Tailwind / CSS for UI styling

### Backend

* Node.js + Express

### Database

* MongoDB (stores users, reactions, chemicals, progress)

### Additional

* WebSockets (for real-time updates if needed)
* Payment integration (Stripe/PayPal for points system)

---

## 🧪 Core Functional Systems

---

## 1. 🔬 Reaction System

### A. Titration Experiments

The system must support:

1. Strong Acid–Strong Base (HCl vs NaOH)
2. Weak Acid–Strong Base (CH₃COOH vs NaOH)
3. Redox Titration (KMnO₄ vs Fe²⁺)
4. Complexometric (EDTA vs Ca²⁺)
5. Precipitation (AgNO₃ vs NaCl)

### Functional Requirements

* Step-by-step execution (pipette, burette, indicator, etc.)
* Endpoint detection (color persistence logic)
* Real-time feedback (color change, pH shift)
* Optional graph plotting (for weak acid titration)

---

### B. Ion Detection (Qualitative Analysis)

Support detection of:

* Ca²⁺ → NaOH test (white precipitate)
* Fe³⁺ → KSCN (blood red complex)
* Cu²⁺ → NH₄OH (deep blue complex)
* Cl⁻ → AgNO₃ (white precipitate)
* SO₄²⁻ → BaCl₂ (insoluble white precipitate)

### Functional Requirements

* Multiple reagent paths (if applicable)
* Visual reaction outcomes
* Confirmation steps (e.g., dissolving precipitate)

---

## 2. ⚛️ Chemical System (State-Aware)

Each chemical must behave according to its **natural physical state**:

### Solid

* Appears as chunks/crystals
* Settles at bottom
* Uses mass-based calculations

### Powder

* Fine granular particles
* Forms piles and settles

### Liquid

* Has volume, meniscus, color intensity
* Supports molarity calculations

### Gas

* Particle motion (random movement)
* Uses gas law calculations

---

### 💧 View as Liquid Mode

A special mode allowing non-liquid substances to be dissolved.

**Behavior:**

* Converts solid/gas → aqueous solution
* Enables molarity calculations
* Visually dissolves substance

**Formula Used:**

M = (W × 1000) / (MolecularWeight × V)

Where:

* W = mass (g)
* V = volume (ml)

---

## 3. 🧠 Simulation Engine

This is the **core logic system**.

### Responsibilities:

* Validate reactions
* Trigger outcomes only when conditions are correct
* Simulate:

  * Color changes
  * Precipitation
  * Gas evolution
  * pH changes

### Key Rule:

> Reactions must be **rule-based**, NOT hardcoded UI animations.

---

## 4. 🧾 Step Engine (Workflow System)

Every experiment is broken into steps.

### Each Step Includes:

* Instruction
* Required user action
* Validation logic
* Hint system
* Feedback response

### Flow:

1. User performs action
2. System validates
3. If correct → proceed
4. If incorrect → show feedback + retry

---

## 5. 🎮 Interaction System

Users must actively perform actions:

* Drag chemicals
* Pour liquids
* Add drops
* Select tools
* Mix substances

### Requirements:

* No auto-play simulations
* Every step requires user interaction
* Real-time visual feedback

---

## 6. 🧮 Calculation Engine

Handles all scientific computations.

### Must Support:

* Molarity
* Normality
* Titration calculations
* Gas law calculations

### Example:

M₁V₁ = M₂V₂

### Output Includes:

* Final result
* Balanced equation
* Explanation

---

## 7. 🖥️ User Interface Behavior

---

### Layout

* Split screen:

  * Left: Chemical library
  * Right: Lab workspace

---

### Left Panel

* Displays chemicals (minimum 50)
* Shows:

  * Name
  * Formula
  * Color

---

### Right Panel

* Displays:

  * Beaker / flask
  * Tools (burette, pipette)
  * Reaction visuals

---

### Visual Requirements

* Smooth liquid pouring
* Droplet animations
* Color transitions
* Particle motion for gases
* Precipitate settling

---

## 8. 📊 Learning System

Each experiment includes:

* Theory explanation
* Step guidance
* Expected observations
* Final analysis

---

### Gamification

* Points system
* Reward for correct steps
* Penalty for mistakes
* Unlockable experiments

---

## 9. 👥 User Roles

---

### Student

* Perform experiments
* Earn points
* Track progress

---

### Teacher

* Assign experiments
* Monitor student performance
* View analytics

---

### Researcher (Advanced Mode)

* Free experimentation
* Adjustable parameters
* Data export

---

## 10. 💰 Monetization System

* Points purchase system
* Premium experiments
* Institutional licensing

---

## 11. 🗄️ Database Responsibilities (MongoDB)

Must store:

* Users (roles, progress, points)
* Chemicals (properties, descriptions)
* Reactions (steps, rules, outcomes)
* Experiment results
* Analytics data

---

## 12. 🔁 API Responsibilities (Node + Express)

Backend must handle:

* Authentication (JWT)
* Fetch chemicals
* Fetch reactions
* Validate experiment steps
* Save user progress
* Handle point transactions

---

## 13. ⚡ Real-Time Features (Optional)

* Live experiment updates
* Multi-user lab sessions
* Teacher live monitoring

---

## 14. 🔐 Safety & Constraints

* No real-world dangerous instructions
* Only simulated reactions
* Controlled hazard visualization
* Educational purpose only

---

## 15. 📈 Scalability Rules

* All reactions must be configurable via JSON
* No hardcoding in UI
* Easy addition of new experiments

---

## 16. 🚀 Development Approach (Recommended)

Build in phases:

### Phase 1

* Chemical system
* Basic UI
* One titration (HCl vs NaOH)

### Phase 2

* Step engine
* Validation system
* Visual feedback

### Phase 3

* Add more reactions
* Add ion detection

### Phase 4

* Add user system
* Points & gamification

### Phase 5

* Advanced features (graphs, analytics, multiplayer)

---

## 🧠 Final Summary

This project is a **full-scale educational simulation platform** that combines:

* Chemistry
* Physics
* UI/UX engineering
* Game mechanics
* Learning systems

It aims to replicate **real-world lab behavior digitally** while remaining:

* Safe
* Scalable
* Scientifically accurate

---

## ⚠️ Important Note

Do NOT treat this as a UI project.

This is:

> A **scientific simulation system with a UI layer on top**

---

## 📬 Next Steps

After setting up this README, proceed to:

* Implement chemical database
* Build simulation engine
* Create first working experiment
* Gradually expand system

---