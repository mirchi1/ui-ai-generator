# ui-ai-generator– Deterministic Agent System
The Overview
This project implements a deterministic AI-powered UI generator inspired by Claude Code for UI
The system converts natural language intent into working UI code and a live preview using a fixed, deterministic component library.

Architecture
The system uses a 3-step agent architecture:
1. Planner
- Interprets user intent
- Selects target component(s)
- Produces structured UI tree
- Supports incremental edits
2. Generator
- Converts structured UI tree into JSX code
- Uses only allowed components
- Produces deterministic output
3. Explainer
- Explains decisions made by the planner
- Clarifies incremental changes
- Improves trust and debuggability

Deterministic Component System
Allowed Components:
- Card
- Button

Constraints:
- No inline styles
- No arbitrary Tailwind generation
- No new components created dynamically
- All color mappings are predefined

Features
- Multi-component support
- Incremental modification (no full rewrite)
- Version history + rollback
- Live preview
- Generated JSX view
- Explainable reasoning
- Deterministic color mapping

Safety & Validation
- Component whitelist enforced
- Controlled color mapping
- Structured UI tree
- Prevents unknown component types

