# Kape — Palette Specification

> The technical specification for all Kape colors, their naming, and intended roles.

The canonical data for this palette lives in [`colors.json`](../colors.json), validated by [`resources/colors.schema.json`](../resources/colors.schema.json).

---

## Overview

Kape is a **single-flavor dark theme** rooted in coffee, earth, and amber tones. It provides a warm, low-contrast-but-readable dark palette suitable for all-day development work.

Unlike multi-flavor systems (e.g. light/dark variants), Kape focuses on doing one thing exceptionally well: a warm dark environment that is neither harsh nor washed out.

---

## Color Groups

The palette is divided into four groups:

| Group | Purpose |
|---|---|
| **Base** | Background, surface, and text layers |
| **Accents** | Named semantic colors used for syntax and UI highlights |
| **ANSI** | 16-color terminal mapping (normal + bright variants) |
| **UI** | Extended support colors for richer integrations (e.g. Neovim) |

---

## Base Colors

These five colors form the foundation of every port. Every port **must** use these for backgrounds and text.

| Role | Hex | HSL | Use |
|---|---|---|---|
| `background` | `#181616` | H:0 S:4% L:9% | Main editor/app background |
| `surface` | `#1e1b1b` | H:0 S:5% L:11% | Raised surfaces: sidebars, tabs, inlay hints |
| `foreground` | `#d4be98` | H:38 S:41% L:71% | Primary text — the default color for all readable content |
| `second_text` | `#bdae8b` | H:39 S:28% L:64% | Secondary / subdued text, comments |
| `third_text` | `#928374` | H:28 S:11% L:51% | Muted text, hints, metadata, line numbers |

**Hierarchy:** `foreground` → `second_text` → `third_text` represents decreasing visual importance.

---

## Accent Colors

Semantic colors for syntax highlighting and UI state communication.

| Name | Hex | HSL | Semantic Role |
|---|---|---|---|
| `red` | `#b53535` | H:0 S:55% L:46% | Errors, deletions, warnings |
| `green` | `#b4c76e` | H:74 S:40% L:61% | Success, additions, strings |
| `yellow` | `#e7bb5c` | H:39 S:75% L:63% | Warnings, constants, highlights |
| `blue` | `#7b8fd4` | H:227 S:47% L:66% | Keywords, links, info |
| `purple` | `#b06880` | H:340 S:31% L:55% | Functions, attributes, special |
| `aqua` | `#689d8a` | H:158 S:21% L:51% | Types, parameters, tags |
| `white` | `#c2c2c2` | H:0 S:0% L:76% | Punctuation, operators, plain text |
| `orange` | `#c87941` | H:28 S:57% L:52% | Decorators, attributes, special variables |

---

## ANSI / Terminal Colors

The 16-color terminal palette. Used by terminal emulator ports (Ghostty, Kitty, Foot, etc.).

### Normal (standard)

| ANSI Slot | Color Name | Hex |
|---|---|---|
| `black` | background | `#181616` |
| `red` | red | `#b53535` |
| `green` | green | `#b4c76e` |
| `yellow` | yellow | `#e7bb5c` |
| `blue` | blue | `#7b8fd4` |
| `magenta` | purple | `#b06880` |
| `cyan` | aqua | `#689d8a` |
| `white` | white | `#c2c2c2` |

### Bright (bold/bright variants)

| ANSI Slot | Hex |
|---|---|
| `bright_black` | `#2e2a2a` |
| `bright_red` | `#c94040` |
| `bright_green` | `#cad98a` |
| `bright_yellow` | `#f0cc7a` |
| `bright_blue` | `#9aaae0` |
| `bright_magenta` | `#c8889a` |
| `bright_cyan` | `#89b8a8` |
| `bright_white` | `#d4be98` |
| `bright_orange` | `#d4975a` |

---

## UI Support Colors

Extended colors used only by richer ports (primarily the Neovim port). Not required for simple terminal or editor theme ports.

| Name | Hex | Use |
|---|---|---|
| `selection_background` | `#2e2a2a` | Selected text and word-highlight background |
| `visual.red` | `#3c1f1e` | Tinted background for error diagnostics |
| `visual.yellow` | `#3a2e1a` | Tinted background for warning diagnostics |
| `visual.green` | `#2a3120` | Tinted background for hints and additions |
| `visual.blue` | `#1e2b30` | Tinted background for info and modifications |
| `visual.purple` | `#2e1e30` | Tinted background for purple accent regions |
| `diff.red` | `#3c1f1e` | Removed line background in diffs |
| `diff.green` | `#2a3120` | Inserted line background in diffs |
| `diff.blue` | `#1e2b30` | Modified line background in diffs |

---

## Naming Conventions

- All color names in config files should use lowercase with underscores: `bright_blue`, `second_text`
- Hex values are always 6-digit lowercase: `#7b8fd4` not `#7B8FD4`
- When a format requires a color without `#`, strip the prefix: `7b8fd4`
- When a format requires rgb as separate channels, use the `rgb` object from `colors.json`
