<!--
Sync Impact Report
- Version change: 0.0.0 -> 1.0.0
- Modified principles: N/A (initial constitution fill)
- Added sections: Static Web App Constraints, Development Workflow
- Removed sections: None
- Templates requiring updates: .specify/templates/plan-template.md ⚠ pending, .specify/templates/spec-template.md ⚠ pending, .specify/templates/tasks-template.md ⚠ pending
- Follow-up TODOs: None
-->

# Mi Podcast Constitution

## Core Principles

### I. Static-First Delivery
The project MUST be implemented as a static web app unless the scope explicitly requires a backend. All user-facing features MUST work without a server-side runtime, database, or authentication system unless a documented exception is approved. Static pages, assets, and navigation are the default architecture and must remain simple enough to deploy to a static host.

### II. Content and Accessibility First
The site MUST present podcast content clearly, accessibly, and consistently across common browsers and screen sizes. Every interactive element MUST have a meaningful label, readable contrast, and keyboard-accessible behavior. Critical content such as episodes, show notes, and calls to action MUST remain understandable without JavaScript-driven enhancements.

### III. Testable MVP Before Expansion
Each feature MUST be deliverable as an independently testable slice of the static app. Changes must be verified through a local preview or browser smoke check before the feature is considered complete. Scope creep is not permitted when it adds runtime complexity without clear user value.

### IV. Performance and Reliability by Default
The app MUST prioritize fast initial load, small asset sizes, and predictable rendering. Large media files, heavy scripts, and unnecessary dependencies MUST be avoided unless they are required for a specific user-facing goal. The default quality bar is a clean, responsive experience that works reliably on a simple static hosting setup.

### V. Simplicity and Maintainability
The project MUST favor the smallest viable implementation, clear folder structure, and readable markup over clever abstractions. Reusable patterns are allowed only when they reduce duplication without introducing unnecessary build complexity. If a solution requires a framework, bundler, or server process to satisfy a requirement, that requirement must be justified in writing.

## Static Web App Constraints

This project is a static web app and therefore MUST follow these constraints:

- No backend services, API layer, or database are required for the MVP unless a later requirement changes the scope.
- The product MUST be deployable to a static hosting provider with only HTML, CSS, and JavaScript assets.
- Content and navigation MUST work without any custom server logic.
- External resources such as images, audio, and fonts MUST be served efficiently and with graceful fallbacks.
- User data persistence MUST be limited to browser storage or static configuration unless a later requirement explicitly approves a server-backed solution.
- The app MUST remain easy to preview locally and publish without environment-specific setup.

## Development Workflow

The project MUST follow this lightweight delivery workflow:

- Define the core content and user journey before implementation.
- Build the smallest usable static site first, then iterate with focused improvements.
- Validate the app in a local browser preview before considering it complete.
- Keep HTML, CSS, and scripts maintainable and easy to reason about.
- Remove unused assets, dependencies, and code before release.
- Document any non-static requirement as an explicit exception to this constitution.

## Governance

This constitution governs all work for the Mi Podcast project. It supersedes informal preferences when a conflict exists between speed, complexity, and product quality. Any change to principle scope, project constraints, or review expectations MUST be documented in the constitution and approved before it is treated as active policy.

Amendments MUST include a clear reason, a version bump, and a brief description of the impact on the project. The project owner or designated maintainer MUST verify that the change remains compatible with the static-first approach and the MVP-first delivery model. If a requirement would force a backend, database, or complex runtime system, the team MUST record the justification and re-evaluate the project scope before implementation proceeds.

**Version**: 1.0.0 | **Ratified**: 2026-10-02 | **Last Amended**: 2026-10-02
