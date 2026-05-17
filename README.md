# Security Signal Desk

Security Signal Desk is a security-operations-themed React + TypeScript learning project.

The goal is to build a realistic dashboard application step by step while practicing frontend engineering fundamentals deeply: TypeScript domain modeling, React component architecture, props, state, derived state, event handling, conditional rendering, filtering, and eventually Cypress + Cucumber testing.

This project is intentionally learning-first. It is not meant to become a production SOC platform at the beginning. The security operations theme gives the project a realistic domain, but the primary purpose is hands-on frontend and testing practice.

---

## Project Identity

```txt
Project Name: Security Signal Desk
Repository Name: security-signal-desk
Frontend App: apps/web
Shared Package: packages/shared
Primary Focus: React + TypeScript learning
Testing Direction: Cypress + Cucumber
Theme: Security Operations / Alert Review Dashboard
Long-Term Direction: Full-stack SDET / AppSec portfolio project
```

---

## Product Vision

Security Signal Desk is a dashboard for reviewing security alerts.

The first product experience should feel like a focused analyst workspace:

```txt
Scan alert rows
Select an alert
Expand alert details inline
Review severity, status, source, and context
Filter alerts
Apply role-based actions later
Test the behavior with Cypress and Cucumber
```

The product should stay simple enough for learning, but realistic enough to practice scalable frontend patterns.

---

## Primary Learning Goal

The most important goal is:

```txt
Build practical React + TypeScript skill through repeated, structured implementation.
```

The project should help practice:

- TypeScript domain modeling
- React JSX fundamentals
- component composition
- props
- children prop
- reusable UI components
- feature-specific components
- state
- derived state
- event handling
- conditional rendering
- list rendering
- controlled inputs
- filtering and search
- role-based UI rendering
- Cypress E2E testing
- Cucumber-style behavior scenarios

The project should avoid unnecessary complexity that distracts from these goals.

---

## What This Project Is Not Yet

At the current stage, this project is not focused on:

- production SOC functionality
- real authentication
- real authorization
- deployment automation
- complex CI/CD
- GitHub Actions
- Docker
- cloud hosting
- backend security enforcement

These topics may be added later, but only after the core React, TypeScript, and testing workflows are understood.

---

## Product Problem

Security analysts need a clear way to review alerts quickly.

In many dashboards, too much space is used for secondary information, while the alert list itself becomes hard to scan. Security Signal Desk should avoid that mistake.

The main screen should prioritize alerts.

The analyst should be able to:

- understand alert volume at a glance
- scan alerts as compact rows
- click one alert
- see details directly under the selected alert
- filter the list without losing context
- understand which actions are available based on role

---

## Core Product Experience

The main dashboard experience should follow this pattern:

```txt
Dashboard header
  -> product title
  -> short description
  -> small current user/profile chip

Stats summary
  -> total alerts
  -> open alerts
  -> critical alerts
  -> investigating alerts

Alert workspace
  -> compact alert rows
  -> selected row highlight
  -> inline expanded details
  -> filters and search later
```

The preferred interaction model is:

```txt
Expandable alert row
```

Instead of a separate large detail panel, the selected alert expands inline. This keeps the user focused on the alert list and saves screen space.

---

## Core Domain Concepts

### User

Represents the person using the dashboard.

Example roles:

```txt
admin
security_analyst
viewer
```

### Role

Represents the user's access level.

Example behavior:

```txt
admin -> can access all available UI actions
security_analyst -> can investigate and resolve alerts
viewer -> can only view alert information
```

### Permission

Represents a specific action the user is allowed to perform.

Examples:

```txt
alert:read
alert:create
alert:resolve
alert:assign
user:read
user:delete
```

### SecurityAlert

Represents a security signal shown in the dashboard.

Expected fields:

```txt
id
title
description
severity
status
source
createdAt
```

### AlertSeverity

Represents alert importance.

Examples:

```txt
low
medium
high
critical
```

### AlertStatus

Represents workflow state.

Examples:

```txt
open
investigating
resolved
false_positive
```

---

## RBAC Note

This project will include role-based UI behavior.

Examples:

- Admin users can see administrative actions.
- Security analysts can see investigation and resolve actions.
- Viewers can only read alert information.

Important:

```txt
Frontend RBAC is not real security.
```

Frontend permission logic only controls visibility and user experience.

Real authorization must be enforced on the backend when a backend is added later.

---

## Target Architecture

The project uses a monorepo structure.

Target structure:

```txt
security-signal-desk/
  apps/
    web/
      src/
        app/
          App.tsx
        components/
          ui/
            Badge.tsx
            Button.tsx
            Card.tsx
            EmptyState.tsx
            PageHeader.tsx
        features/
          alerts/
            components/
              AlertCard.tsx
              AlertList.tsx
              AlertFilters.tsx
            data/
              mockAlerts.ts
            types/
              alertFilter.ts
            utils/
              getSeverityVariant.ts
              getStatusVariant.ts
          auth/
            data/
              mockCurrentUser.ts
            utils/
              permissions.ts
          dashboard/
            pages/
              DashboardPage.tsx
        main.tsx
  packages/
    shared/
      src/
        types/
          alert.ts
          permission.ts
          user.ts
        index.ts
  package.json
  tsconfig.base.json
  README.md
  notes.md
```

---

## Architecture Principles

### 1. Learning-first development

Every phase should teach a clear React, TypeScript, or testing concept.

### 2. React-first before backend

The frontend should be built and understood before adding a backend.

### 3. Small phases

Each phase should be small, understandable, and commit-ready.

### 4. Feature-based structure

Domain-specific components should live inside feature folders.

Example:

```txt
features/alerts/components/AlertCard.tsx
```

Generic reusable UI components should live inside:

```txt
components/ui
```

### 5. Shared domain types

Types that can be shared by the frontend and future backend should live in:

```txt
packages/shared
```

### 6. Keep App.tsx simple

`App.tsx` should mainly compose the application and avoid feature logic.

### 7. Prefer derived state

Values that can be calculated from existing data should not become separate state.

Examples:

```txt
selectedAlertId -> state
selectedAlert -> derived value

severityFilter -> state
filteredAlerts -> derived value

alerts -> data
openAlertCount -> derived value
```

### 8. Parent owns state, child receives props

For interactive features:

```txt
Parent component owns state.
Child component receives data and callback props.
Child notifies parent through callbacks.
```

Example:

```txt
DashboardPage owns selectedAlertId.
AlertList receives selectedAlertId and onSelectAlert.
AlertCard receives isSelected and onSelect.
```

### 9. UI before abstraction

Do not extract components too early.

Preferred flow:

```txt
Build it once
Make it work
Understand the behavior
Extract components when responsibility becomes clear
```

### 10. Testing is part of the product

Cypress and Cucumber are not optional extras in the long run. They are part of the learning goal.

---

## Learning Roadmap

### React Topics

- JSX
- component composition
- props
- children prop
- state
- derived state
- event handling
- conditional rendering
- list rendering
- controlled inputs
- reusable UI components
- feature components
- selected item pattern
- expandable row pattern
- filter/search pattern
- role-based UI rendering
- custom hooks
- loading, error, and empty states

### TypeScript Topics

- type aliases
- union types
- literal unions
- typed props
- typed callbacks
- Record usage
- shared domain models
- type-safe utility functions
- narrowing
- reusable domain types

### Testing Topics

- Cypress setup
- data-cy selector strategy
- E2E test structure
- Cucumber-style feature files
- Given / When / Then thinking
- alert selection tests
- filter tests
- empty state tests
- role-based UI tests
- regression scenarios

---

## Phase Roadmap

### Phase 0 — Product Definition and Repository Reset

Goal: Define the product clearly and prepare the project for a clean learning-focused rebuild.

Scope:

- final README
- notes.md
- clean project roadmap
- learning priorities
- product direction
- no GitHub Actions for now

Expected commit:

```txt
Define product direction and learning roadmap
```

---

### Phase 1 — Monorepo Foundation

Goal: Create the base technical structure.

Scope:

- root `package.json`
- npm workspaces
- `apps/web`
- `packages/shared`
- base TypeScript config
- Vite React app
- clean starter app

Expected commit:

```txt
Initialize Security Signal Desk monorepo
```

---

### Phase 2 — Shared Domain Types

Goal: Create the core domain models.

Scope:

- Permission
- Role
- User
- RolePermissions
- SecurityAlert
- AlertSeverity
- AlertStatus

Expected commit:

```txt
Add shared domain types
```

---

### Phase 3 — UI Foundation

Goal: Create reusable UI building blocks.

Scope:

- Card
- Badge
- Button
- EmptyState
- PageHeader
- base CSS structure
- dashboard visual foundation

Expected commit:

```txt
Add reusable UI foundation
```

---

### Phase 4 — Static Dashboard Shell

Goal: Build the first static dashboard screen.

Scope:

- DashboardPage
- header with profile chip
- stats summary
- static alert workspace
- mockCurrentUser
- mockAlerts
- no interaction yet

Expected commit:

```txt
Build static dashboard shell
```

---

### Phase 5 — Expandable Alert Selection

Goal: Add the first interactive React behavior.

Scope:

- selectedAlertId state
- selected alert derived logic if needed
- click event handling
- selected alert highlight
- AlertCard
- AlertList
- inline expanded alert details

Expected commit:

```txt
Add expandable alert selection
```

---

### Phase 6 — Filters and Derived Counts

Goal: Add controlled filters and derived dashboard values.

Scope:

- severity filter
- status filter
- search input
- filteredAlerts derived value
- open alert count
- critical alert count
- investigating alert count
- empty state after filtering

Expected commit:

```txt
Add alert filters and derived counts
```

---

### Phase 7 — RBAC UI Behavior

Goal: Add role-based UI visibility.

Scope:

- rolePermissions map
- hasPermission utility
- current user role display
- role switcher for learning
- conditional action buttons

Expected commit:

```txt
Add role based dashboard actions
```

---

### Phase 8 — Component Refactor

Goal: Improve component responsibility boundaries.

Scope:

- DashboardStats
- ProfileChip
- AlertFilters
- AlertList
- AlertCard
- reusable utility cleanup

Expected commit:

```txt
Refactor dashboard into focused components
```

---

### Phase 9 — Cypress Testing Foundation

Goal: Add E2E testing for core dashboard behavior.

Scope:

- Cypress setup
- data-cy selector strategy
- dashboard smoke test
- alert selection test
- expandable row test
- empty state test

Expected commit:

```txt
Add Cypress testing foundation
```

---

### Phase 10 — Cucumber-Style Test Scenarios

Goal: Practice behavior-driven testing.

Scope:

- feature files
- Given / When / Then scenarios
- alert review scenario
- filtering scenario
- role-based visibility scenario

Expected commit:

```txt
Add Cucumber alert review scenarios
```

---

### Phase 11 — Custom Hooks

Goal: Move reusable UI logic into hooks.

Scope:

- useSelectedAlert
- useAlertFilters
- usePermissions
- derived values in hooks

Expected commit:

```txt
Extract dashboard logic into custom hooks
```

---

### Phase 12 — Mock Service Layer

Goal: Prepare for future API integration without adding a backend yet.

Scope:

- alertService
- userService
- async mock functions
- loading state
- error state
- retry action

Expected commit:

```txt
Add mock service layer
```

---

### Later Phases

Possible later topics:

- Express backend
- API integration
- backend authorization
- API tests
- GitHub Actions
- CI/CD
- deployment
- audit logs
- incident workflow
- security-focused regression checks

These should only be added after the React, TypeScript, Cypress, and Cucumber learning goals are stronger.

---

## Commit Strategy

This project should not use a commit for every tiny code change.

Use commits after meaningful learning or product increments.

Good commit examples:

```txt
Define product direction and learning roadmap
Initialize Security Signal Desk monorepo
Add shared domain types
Add reusable UI foundation
Build static dashboard shell
Add expandable alert selection
Add alert filters and derived counts
Add role based dashboard actions
Add Cypress testing foundation
Add Cucumber alert review scenarios
```

Bad commit examples:

```txt
update
fix
changes
more code
final
```

---

## Definition of Done

At the end of each phase, check:

```txt
1. Does the project run?
2. Are there TypeScript errors?
3. Does the UI behave as expected?
4. Is the learning goal clear?
5. Are component responsibilities clear?
6. Is unnecessary state avoided?
7. Are derived values calculated instead of stored?
8. Is the commit message meaningful?
9. If testing exists, does the relevant test pass?
```

---

## Current Status

The product direction has been redefined.

The project will restart from a cleaner learning-first roadmap.

Current priority:

```txt
React + TypeScript fundamentals first.
Cypress and Cucumber testing after core UI behavior.
No GitHub Actions yet.
No backend yet.
```

Next phase:

```txt
Phase 0 — Product Definition and Repository Reset
```

---

## Cross-Conversation Continuation Prompt

Use this prompt when continuing the project in a new ChatGPT conversation:

```txt
We are continuing the Security Signal Desk project.

You are acting as my Senior Software Engineer, Product Owner, and Mentor.

Important language rule:
- Public GitHub content must be written in English.
- Mentoring explanations can be in Turkish.

Project goal:
Security Signal Desk is a security-operations-themed React + TypeScript learning project.

Primary priority:
The main goal is to practice React and TypeScript deeply enough to move toward a mid-level frontend skill set, then add Cypress and Cucumber testing practice.

Current product direction:
Security Signal Desk should be an alert review dashboard where the main experience is:
- scan compact alert rows
- select an alert
- expand alert details inline
- filter alerts
- later apply role-based UI actions
- later test core behavior with Cypress and Cucumber

Important product decision:
Do not use a separate large Alert Details panel as the default layout.
Use expandable alert rows instead.

Important learning decision:
Do not add GitHub Actions, backend, deployment, Docker, or complex CI/CD yet.
The current priority is hands-on TypeScript, React, Cypress, and Cucumber practice.

Architecture principles:
- Monorepo
- apps/web React frontend
- packages/shared shared TypeScript domain types
- feature-based frontend structure
- components/ui for generic UI components
- features/alerts for alert-specific components
- keep App.tsx simple
- prefer derived state
- avoid unnecessary state
- parent owns state, child receives props and callbacks
- build first, extract components only when responsibilities are clear

Planned phases:
- Phase 0 — Product Definition and Repository Reset
- Phase 1 — Monorepo Foundation
- Phase 2 — Shared Domain Types
- Phase 3 — UI Foundation
- Phase 4 — Static Dashboard Shell
- Phase 5 — Expandable Alert Selection
- Phase 6 — Filters and Derived Counts
- Phase 7 — RBAC UI Behavior
- Phase 8 — Component Refactor
- Phase 9 — Cypress Testing Foundation
- Phase 10 — Cucumber-Style Test Scenarios

Please continue step by step.
For each step:
1. Explain the goal briefly in Turkish.
2. Show connected file changes together.
3. Explain why we are doing it.
4. Let me implement it.
5. Wait for my confirmation before moving to the next step.
```
