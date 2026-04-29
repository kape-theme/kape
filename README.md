# ☕ Kape

> *Kape* (Filipino for coffee) — a warm dark color scheme rooted in coffee, earth, and amber.

Kape is a dark theme designed for developers who spend long hours in their editor. Every color was chosen with intention — warm enough to feel cozy, balanced enough to work all day.

---

## 🎨 Palette

### Base

| Role | Hex | Preview |
|---|---|---|
| Background | `#181616` | ![](https://placehold.co/24x24/181616/181616) |
| Foreground | `#d4be98` | ![](https://placehold.co/24x24/d4be98/d4be98) |
| Second Text | `#bdae8b` | ![](https://placehold.co/24x24/bdae8b/bdae8b) |
| Third Text | `#928374` | ![](https://placehold.co/24x24/928374/928374) |

### Accents

| Color | Hex | Preview |
|---|---|---|
| Red | `#b53535` | ![](https://placehold.co/24x24/b53535/b53535) |
| Green | `#b4c76e` | ![](https://placehold.co/24x24/b4c76e/b4c76e) |
| Yellow | `#e7bb5c` | ![](https://placehold.co/24x24/e7bb5c/e7bb5c) |
| Blue | `#7b8fd4` | ![](https://placehold.co/24x24/7b8fd4/7b8fd4) |
| Violet | `#b072e6` | ![](https://placehold.co/24x24/b072e6/b072e6) |
| Cyan | `#72c4b8` | ![](https://placehold.co/24x24/72c4b8/72c4b8) |
| White | `#c2c2c2` | ![](https://placehold.co/24x24/c2c2c2/c2c2c2) |
| Orange | `#c87941` | ![](https://placehold.co/24x24/c87941/c87941) |

### Bright Variants

| Color | Hex | Preview |
|---|---|---|
| Bright Black | `#2e2a2a` | ![](https://placehold.co/24x24/2e2a2a/2e2a2a) |
| Bright Red | `#c94040` | ![](https://placehold.co/24x24/c94040/c94040) |
| Bright Green | `#cad98a` | ![](https://placehold.co/24x24/cad98a/cad98a) |
| Bright Yellow | `#f0cc7a` | ![](https://placehold.co/24x24/f0cc7a/f0cc7a) |
| Bright Blue | `#9aaae0` | ![](https://placehold.co/24x24/9aaae0/9aaae0) |
| Bright Violet | `#c48ef0` | ![](https://placehold.co/24x24/c48ef0/c48ef0) |
| Bright Cyan | `#90d4ca` | ![](https://placehold.co/24x24/90d4ca/90d4ca) |
| Bright White | `#d4be98` | ![](https://placehold.co/24x24/d4be98/d4be98) |
| Bright Orange | `#d4975a` | ![](https://placehold.co/24x24/d4975a/d4975a) |

The full palette with RGB and HSL values is available in [`colors.json`](./colors.json).

---

## 🔌 Ports

| App | Status |
|---|---|
| [Neovim](https://github.com/gabiuz/kape-nvim) | ✅ Available |
| [Ghostty](./ports/ghostty/) | ✅ Available |
| [Kitty](./ports/kitty/) | ✅ Available |

---

## 📦 Installation

### Ghostty

1. Copy `ports/ghostty/themes/kape.conf` to `~/.config/ghostty/themes/`
2. Add to your `~/.config/ghostty/config`:
   ```
   theme = kape
   ```
3. Reload Ghostty

### Kitty

1. Copy `ports/kitty/kape.conf` to `~/.config/kitty/`
2. Add to your `~/.config/kitty/kitty.conf`:
   ```
   include kape.conf
   ```
3. Reload with `ctrl+shift+F5`

---

## 🤝 Contributing

Want to port Kape to another app? PRs are welcome. The [`colors.json`](./colors.json) file is the single source of truth — use it as the reference for any new port.

---

## 📄 License

MIT © gabiuz
