# Contributing to Kape

Thanks for your interest in contributing! Here's everything you need to get started.

---

## Code Style

This project uses [`.editorconfig`](./.editorconfig) to enforce consistent formatting.
Please make sure your editor respects it (most do automatically, or via a plugin).

Key rules:
- UTF-8 encoding
- LF line endings
- 2-space indentation (except Makefiles, which use tabs)
- No trailing whitespace
- Final newline on all files

---

## Branches

Use topic branches for all contributions. Never commit directly to `main`.

```
git checkout -b feat/my-new-port
git checkout -b fix/readme-typo
git checkout -b docs/update-style-guide
```

---

## Commit Messages

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add Alacritty port
fix: correct blue accent hex in kitty config
docs: update port creation guide
chore: regenerate README port list
```

---

## Adding a New Port

See [`docs/port-creation.md`](./docs/port-creation.md) for the full guide.

Short version:
1. Create a new repository under the [`kape-theme`](https://github.com/kape-theme) org named `<appname>` (just the app name, no `kape-` prefix)
2. Use [`colors.json`](./colors.json) as the single source of truth for all colors
3. Add your port to [`resources/ports.yml`](./resources/ports.yml)
4. Open a PR here — the README will be auto-regenerated from `ports.yml`

---

## Submitting a Port for Review

Use the **Port Review** issue template on this repo. Include:
- A link to the port repository
- Screenshots of the theme applied
- Confirmation that colors were sourced from `colors.json`

---

## Questions?

Open a Discussion or an issue using the templates provided.
