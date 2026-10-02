# Tasks: Podcast Website

**Input**: Design documents from `/specs/001-podcast-website/`

**Prerequisites**: spec.md (required), checklist/requirements.md

**Tests**: Optional for this project; the site can be validated through local browser preview and production build checks.

**Organization**: Tasks are grouped by user story to support incremental, testable delivery of the static podcast site.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Initialize the static Next.js project and establish the core structure.

- [x] T001 Create the project folder and initialize the Next.js app in `podcast-site/`
- [x] T002 [P] Confirm package scripts and static export configuration in `podcast-site/package.json` and `podcast-site/next.config.ts`
- [x] T003 [P] Set up base app shell and metadata in `podcast-site/src/app/layout.tsx`
- [x] T004 [P] Add global visual design tokens and responsive styling in `podcast-site/src/app/globals.css`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Create the core data model and shared shared layout used by all pages.

**⚠️ CRITICAL**: No user story work should begin until this phase is complete.

- [x] T005 Create the mocked episode content model in `podcast-site/src/data/episodes.ts`
- [x] T006 [P] Build the reusable site wrapper and navigation in `podcast-site/src/components/site-shell.tsx`
- [x] T007 [P] Add the featured-episode and FAQ data structures in `podcast-site/src/data/episodes.ts`
- [x] T008 Confirm the site is static-only and free from backend or database requirements in `podcast-site/next.config.ts`

**Checkpoint**: Foundation ready - shared components and mock content can now support story implementation.

---

## Phase 3: User Story 1 - Discover the show on the landing page (Priority: P1) 🎯 MVP

**Goal**: Deliver the premium home page with one featured episode and clear discovery pathways.

**Independent Test**: A user can load the home page, understand the brand, and clearly identify the featured episode and primary actions.

### Implementation for User Story 1

- [x] T009 [US1] Build the home hero layout and branding in `podcast-site/src/app/page.tsx`
- [x] T010 [US1] Add the featured episode card with title, summary, metadata, and CTA in `podcast-site/src/app/page.tsx`
- [x] T011 [US1] Add supporting highlight cards for value proposition in `podcast-site/src/app/page.tsx`
- [x] T012 [US1] Add the recent conversations section and entry links to the archive in `podcast-site/src/app/page.tsx`
- [x] T013 [US1] Review the page for responsiveness and visual polish on mobile and desktop in the local preview

> MVP status: The first landing page is complete and reviewed locally at localhost:3000. Remaining tasks below are intentionally left open until the review is approved or revised.

**Checkpoint**: At this point, the landing page is independently testable and expresses the brand clearly.

---

## Phase 4: User Story 2 - Browse the full archive of episodes (Priority: P1)

**Goal**: Present the full mocked episode catalog in a clean, scannable layout.

**Independent Test**: A user can open the Episodes page and confirm all 20 mocked episodes are displayed in a readable archive.

### Implementation for User Story 2

- [ ] T014 [US2] Create the Episodes page structure in `podcast-site/src/app/episodes/page.tsx`
- [ ] T015 [US2] Render all 20 mocked episodes from `podcast-site/src/data/episodes.ts`
- [ ] T016 [US2] Style each episode card with title, date, category, duration, and excerpt metadata in `podcast-site/src/app/episodes/page.tsx`
- [ ] T017 [US2] Ensure the page remains readable and polished on small screens and large screens
- [ ] T018 [US2] Verify there are exactly 20 mocked entries and no live feed dependency

**Checkpoint**: The archive is complete and independently testable.

---

## Phase 5: User Story 3 - Learn the story and answer common questions (Priority: P2)

**Goal**: Add trust-building editorial content for About and FAQ.

**Independent Test**: A user can navigate to the About page and FAQ page and quickly understand the podcast’s purpose and answers to common questions.

### Implementation for User Story 3

- [ ] T019 [US3] Create the About page structure and editorial story in `podcast-site/src/app/about/page.tsx`
- [ ] T020 [US3] Add summary cards and key themes in `podcast-site/src/app/about/page.tsx`
- [ ] T021 [US3] Create the FAQ page and add the mocked Q&A content in `podcast-site/src/app/faq/page.tsx`
- [ ] T022 [US3] Ensure the FAQ content is structured for accessibility and easy scanning
- [ ] T023 [US3] Validate navigation between home, episodes, about, and FAQ works cleanly

**Checkpoint**: The site has a complete editorial flow and the main pages feel cohesive.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Final verification and quality improvements across the app.

- [ ] T024 [P] Run the production build to confirm the static site compiles in `podcast-site/`
- [ ] T025 [P] Validate the responsive layout on mobile and desktop widths in the local preview
- [ ] T026 [P] Review consistency across headings, spacing, buttons, and cards across all pages
- [ ] T027 Check links, navigation behavior, and empty-state assumptions across the static app
- [ ] T028 Review the final copy for tone, clarity, and premium aesthetic consistency

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Must complete before any user story work begins
- **User Stories (Phase 3+)**: Can proceed after foundation is complete
- **Polish (Final Phase)**: Depends on the full set of pages and content being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational - no dependency on other stories
- **User Story 2 (P1)**: Can start after Foundational - no dependency on other stories
- **User Story 3 (P2)**: Can start after Foundational - no dependency on other stories

### Parallel Opportunities

- T002, T003, and T004 can be completed in parallel during Setup
- T006 and T007 can be completed in parallel during Foundational
- T024, T025, and T026 can be completed in parallel during final polish

---

## Notes

- The site is intentionally static and should not add any database or backend dependency.
- All episode data is mocked and embedded in application content.
- The home page must highlight exactly one featured episode.
- The episode archive must contain exactly 20 entries.
- Build verification is the final gate before this feature is considered complete.
