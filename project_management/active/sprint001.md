---

# Sprint 001: The Structural Shell

**Status:** ACTIVE

**Estimated Time:** 90–120 Minutes

## 1. Goal

Establish the global design system and the underlying 12-column grid structure in Framer to ensure all future content is perfectly aligned.

## 2. Scope

- **In:** Typography styles, color variables, 12-column layout grid, Sticky Header.
- **Out:** Image uploads, project data, mobile optimization, hover animations.

## 3. Tasks

### 3.1 Global Styles
- [ ] Set **Heading 1** and **Heading 2** to `Inter` (Medium, All-Caps).
- [ ] Set **Body** to `Inter` (Light, 10pt/16px).
- [ ] Set **Small/Caption** to `Roboto Mono` (Regular, 8pt/12px).

### 3.2 Color Variables
- [ ] Create `Paper` = `#FAFAFA`
- [ ] Create `Ink` = `#1A1A1A`
- [ ] Create `Accent` = `#FF4500`

### 3.3 The Grid
- [ ] Create a layout frame with 12 columns
- [ ] Set gutter to `24px`
- [ ] Set margin to `80px`

### 3.4 Header Component
- [ ] Add text `Angela Vazquez` (left aligned)
- [ ] Add links `INDEX` and `ABOUT` (right aligned)
- [ ] Set header position to `Sticky`

## 4. Acceptance Criteria

- [ ] Vertical scroll does not hide the Header.
- [ ] Text snaps to the 12-column lines (no floating boxes).
- [ ] `Inter` and `Roboto Mono` are the only fonts appearing in the inspector.
- [ ] Background color is consistently `#FAFAFA`.

## 5. Verification Checklist

- [ ] Open Preview mode.
- [ ] Header stays at the top while scrolling. **Result:** Pass / Fail
- [ ] Accent color appears when hovering over `INDEX`. **Result:** Pass / Fail
- [ ] Grid layout matches the Bauhaus spec. **Result:** Pass / Fail

## 6. What NOT To Do (Scope Creep Guard)

- **Do not** add a logo image; use text only.
- **Do not** attempt to make the header transparent or add blur effects.
- **Do not** add smooth scrolling plugins.

## 7. Completion Evidence

- **Staging URL:**
- **Screenshots:**
	- Grid layout screenshot:
	- Sticky header screenshot:
- **Pull Request URL (if used):**
- **Commit hash(es):**
- **Verification summary:**
	- Header sticky test: Pass / Fail
	- Accent hover test: Pass / Fail
	- Grid alignment test: Pass / Fail
- **Date Completed:**
- **Notes / Blockers:**

---
