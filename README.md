# ☕ Kape

> *Kape* (Filipino for coffee) — a warm dark color scheme rooted in coffee, earth, and amber.

Kape is a dark theme designed for developers who spend long hours in their editor. Every color was chosen with intention — warm enough to feel cozy, balanced enough to work all day.

---

## 🎨 Palette

### Base

| Role | Hex | Preview |
|---|---|---|
| Background | `#181616` | ![](https://placehold.co/24x24/181616/181616) |
| Surface | `#1e1b1b` | ![](https://placehold.co/24x24/1e1b1b/1e1b1b) |
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
| Purple | `#b06880` | ![](https://placehold.co/24x24/b06880/b06880) |
| Aqua | `#689d8a` | ![](https://placehold.co/24x24/689d8a/689d8a) |
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
| Bright Purple | `#c8889a` | ![](https://placehold.co/24x24/c8889a/c8889a) |
| Bright Aqua | `#89b8a8` | ![](https://placehold.co/24x24/89b8a8/89b8a8) |
| Bright White | `#d4be98` | ![](https://placehold.co/24x24/d4be98/d4be98) |
| Bright Orange | `#d4975a` | ![](https://placehold.co/24x24/d4975a/d4975a) |

### UI Support

| Role | Hex | Preview |
|---|---|---|
| Selection Background | `#2e2a2a` | ![](https://placehold.co/24x24/2e2a2a/2e2a2a) |
| Visual Red | `#3c1f1e` | ![](https://placehold.co/24x24/3c1f1e/3c1f1e) |
| Visual Yellow | `#3a2e1a` | ![](https://placehold.co/24x24/3a2e1a/3a2e1a) |
| Visual Green | `#2a3120` | ![](https://placehold.co/24x24/2a3120/2a3120) |
| Visual Blue | `#1e2b30` | ![](https://placehold.co/24x24/1e2b30/1e2b30) |
| Visual Purple | `#2e1e30` | ![](https://placehold.co/24x24/2e1e30/2e1e30) |

The full palette with RGB and HSL values is available in [`colors.json`](./colors.json).

---

## 🔌 Ports

| App | Status |
|---|---|
| [Neovim](https://github.com/gabiuz/kape-nvim) | ✅ Available |
| [Ghostty](./ports/ghostty/) | ✅ Available |
| [Kitty](./ports/kitty/) | ✅ Available |
| [Btop](./ports/btop/) | ✅ Available |
| [Spicetify](./ports/spicetify/) | ✅ Available |

---

## 📦 Installation

### Ghostty

1. Copy `ports/ghostty/kape` to `~/.config/ghostty/themes/kape`
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

### Btop

1. Copy `ports/btop/kape.theme` to `~/.config/btop/themes/`
2. Open `btop`, press `ESC`, select `OPTIONS`, and change the `color_theme` to `kape`.

### Spicetify

1. Copy `ports/spicetify/` to `~/.config/spicetify/Themes/Kape/`
2. Run:
   ```
   spicetify config current_theme Kape
   spicetify config color_scheme Base
   spicetify apply
   ```

### Zed

1. `mkdir -p ~/.config/zed/themes`
2. Add to your `cp ports/zed/kape.json ~/.config/zed/themes/`
3. Reload Zed

### foot

1. `mkdir -p ~/.config/foot/themes`
2. Copy `cp ports/foot/kape-dark.ini` to `~/.config/foot/themes/`
3. Add to your `~/.config/foot/foot.ini`:
      ```
      include=~/.config/foot/themes/kape-dark.ini
   ```
4. Reload Zed
---

## 🤝 Contributing

Want to port Kape to another app? PRs are welcome. The [`colors.json`](./colors.json) file is the single source of truth — use it as the reference for any new port.

---

## 📄 License

MIT © gabiuz
