# Kape — Style Guide

> How to correctly apply Kape colors to UI elements in a port.

This guide is for port creators. It defines which Kape color should be used for each type of UI element, ensuring visual consistency across all ports.

The source of truth for all color values is [`colors.json`](../colors.json). Always reference it — never hardcode hex values from memory.

---

## Backgrounds

| Element | Color | Notes |
|---|---|---|
| Main background | `base.background` `#181616` | Editor canvas, terminal background, app window |
| Raised surface | `base.surface` `#1e1b1b` | Sidebars, panels, tab bars, status bars, dropdowns |
| Selected / active item | `ui.selection_background` `#2e2a2a` | Highlighted lines, selected items in lists |
| Popup / modal background | `base.surface` | Use the same raised surface color |

---

## Text

| Element | Color | Notes |
|---|---|---|
| Default text | `base.foreground` `#d4be98` | All normal readable content |
| Comments | `base.second_text` `#bdae8b` | Code comments, subdued labels |
| Hints / metadata | `base.third_text` `#928374` | Line numbers, inlay hints, placeholder text, timestamps |
| Disabled text | `base.third_text` | Same as hints — visually de-emphasized |

---

## Syntax Highlighting

Use these mappings when porting a code editor (Neovim, Zed, VS Code, etc.).

| Token Type | Color | Hex |
|---|---|---|
| Keywords (`if`, `for`, `return`) | `accents.blue` | `#7b8fd4` |
| Functions / methods | `accents.purple` | `#b06880` |
| Strings | `accents.green` | `#b4c76e` |
| Numbers / constants | `accents.yellow` | `#e7bb5c` |
| Types / classes | `accents.aqua` | `#689d8a` |
| Variables / identifiers | `base.foreground` | `#d4be98` |
| Parameters | `accents.aqua` | `#689d8a` |
| Operators / punctuation | `accents.white` | `#c2c2c2` |
| Decorators / attributes | `accents.orange` | `#c87941` |
| Errors (syntax) | `accents.red` | `#b53535` |
| Preprocessor / macros | `accents.orange` | `#c87941` |
| Tags (HTML/XML) | `accents.aqua` | `#689d8a` |
| Tag attributes | `accents.yellow` | `#e7bb5c` |
| Regex literals | `accents.orange` | `#c87941` |

---

## Diagnostics / Status

| State | Color | Hex |
|---|---|---|
| Error | `accents.red` | `#b53535` |
| Warning | `accents.yellow` | `#e7bb5c` |
| Info | `accents.blue` | `#7b8fd4` |
| Hint | `accents.aqua` | `#689d8a` |
| Success / OK | `accents.green` | `#b4c76e` |

For **tinted diagnostic backgrounds** (available in richer ports like Neovim):

| State | Background Color | Hex |
|---|---|---|
| Error region | `ui.visual.red` | `#3c1f1e` |
| Warning region | `ui.visual.yellow` | `#3a2e1a` |
| Info region | `ui.visual.blue` | `#1e2b30` |
| Hint region | `ui.visual.green` | `#2a3120` |

---

## Diff / Version Control

| Change Type | Color | Hex |
|---|---|---|
| Added lines (text) | `accents.green` | `#b4c76e` |
| Removed lines (text) | `accents.red` | `#b53535` |
| Modified lines (text) | `accents.blue` | `#7b8fd4` |
| Added lines (background) | `ui.diff.green` | `#2a3120` |
| Removed lines (background) | `ui.diff.red` | `#3c1f1e` |
| Modified lines (background) | `ui.diff.blue` | `#1e2b30` |

---

## UI Elements

| Element | Color | Notes |
|---|---|---|
| Borders / separators | `base.surface` or `ui.selection_background` | Use surface for subtle, selection_bg for visible |
| Active tab indicator | `accents.yellow` or `accents.orange` | The warm signature colors of Kape |
| Links / URLs | `accents.blue` | `#7b8fd4` |
| Cursor | `base.foreground` | The main text color |
| Search highlight | `accents.yellow` with `ui.visual.yellow` background | Text + tinted bg |
| Match parentheses | `accents.orange` | |
| Indent guides | `base.surface` | Very subtle |

---

## Terminal Colors

For terminal emulators, always use the full ANSI mapping from `colors.json`.
See [`docs/specs.md`](./specs.md) for the complete ANSI table.

The most important rule: **always assign `bright_orange` to the extra bright slot** where supported, as it's Kape's signature warm accent.

---

## What NOT to Do

- ❌ Do not hardcode hex values — always reference `colors.json`
- ❌ Do not use `base.background` for text (insufficient contrast)
- ❌ Do not use `accents.red` for anything other than errors/deletions — it reads as danger
- ❌ Do not use pure black (`#000000`) or pure white (`#ffffff`) anywhere — they clash with the warm palette
- ❌ Do not invent new colors — if an element needs a color not covered here, open an issue
