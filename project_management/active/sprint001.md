---

# Sprint 001: The Structural Shell

**Status:** READY FOR SUBMISSION (EVIDENCE PENDING)

**Estimated Time:** 90–120 Minutes

## 1. Goal

Establish the global design system and the underlying 12-column grid structure in Framer to ensure all future content is perfectly aligned.

## 2. Scope

- **In:** Typography styles, color variables, 12-column layout grid, Sticky Header.
- **Out:** Image uploads, project data, mobile optimization, hover animations.

## 3. Tasks

### 3.1 Global Styles
- [x] Set **Heading 1** and **Heading 2** to `Inter` (Medium, All-Caps).
- [x] Set **Body** to `Inter` (Light, 10pt/16px).
- [x] Set **Small/Caption** to `Roboto Mono` (Regular, 8pt/12px).

### 3.2 Color Variables
- [x] Create `Paper` = `#FAFAFA`
- [x] Create `Ink` = `#1A1A1A`
- [x] Create `Accent` = `#FF4500`

### 3.3 The Grid
- [x] Create a layout frame with 12 columns
- [x] Set gutter to `24px`
- [x] Set margin to `80px`

### 3.4 Header Component
- [x] Add text `Angela Vazquez` (left aligned)
- [x] Add links `INDEX` and `ABOUT` (right aligned)
- [x] Set header position to `Sticky`

## 4. Acceptance Criteria

- [x] Vertical scroll does not hide the Header.
- [x] Text snaps to the 12-column lines (no floating boxes).
- [x] `Inter` and `Roboto Mono` are the only fonts appearing in the inspector.
- [x] Background color is consistently `#FAFAFA`.

## 5. Verification Checklist

- [x] Open Preview mode.
- [x] Header stays at the top while scrolling. **Result:** Pass
- [x] Accent color appears when hovering over `INDEX`. **Result:** Pass
- [x] Grid layout matches the Bauhaus spec. **Result:** Pass

## 6. What NOT To Do (Scope Creep Guard)

- **Do not** add a logo image; use text only.
- **Do not** attempt to make the header transparent or add blur effects.
- **Do not** add smooth scrolling plugins.

## 7. Completion Evidence

- **Staging URL:** *(paste your Framer staging URL)*
- **Screenshots:**
	- Grid layout screenshot: *(paste image link or filename)*
	- Sticky header screenshot: *(paste image link or filename)*
- **Pull Request URL (if used):** *(optional)*
- **Commit hash(es):** *(paste the commit ID you want to reference)*
- **Verification summary:**
	- Header sticky test: Pass
	- Accent hover test: Pass
	- Grid alignment test: Pass
- **Date Completed:** *(MM/DD/YYYY)*
- **Notes / Blockers:** None.

---
