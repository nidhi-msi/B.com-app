# Known Issues & Troubleshooting Guide - IGNOU B.Com Learning App

This document outlines known issues, common error fixes, and browser compatibility notes.

---

## 🔍 Known Issues & Workarounds

### 1. LocalStorage Quota Exceeded (Rare)
- **Symptom**: Quiz progress or search state fails to save.
- **Cause**: Browser localStorage limit reached due to external cached data.
- **Workaround**: Clear browser application storage or run `localStorage.removeItem('ignou_bcom_progress')` in console.

### 2. Canvas Confetti Animation Warning on Mobile Browsers
- **Symptom**: Minor lag when completing a quiz on low-end mobile devices.
- **Cause**: High particle count (80 particles) rendered simultaneously.
- **Fix**: Lowered particle count to 40 for mobile viewports.

---

## 🛠️ Developer Troubleshooting

### Build Syntax Errors in Data Files (`.js` vs `.jsx`)
- **Error**: `[vite:build-import-analysis] Failed to parse source... If you are using JSX make sure to name the file with .jsx extension.`
- **Cause**: Putting JSX tags inside standard `.js` files.
- **Fix**: Maintain data files in pure JavaScript object format without raw JSX strings.

### PowerShell Script Execution Policy on Windows
- **Error**: `npx : File C:\Program Files\nodejs\npx.ps1 cannot be loaded because running scripts is disabled.`
- **Fix**: Run commands through `cmd /c` (e.g., `cmd /c npm run dev`).

---

## 🌐 Browser Compatibility Matrix

| Browser | Version Supported | Status |
|---|---|---|
| Google Chrome | 90+ | Fully Supported ✅ |
| Mozilla Firefox | 88+ | Fully Supported ✅ |
| Microsoft Edge | 90+ | Fully Supported ✅ |
| Apple Safari | 14+ | Fully Supported ✅ |
| Opera | 76+ | Fully Supported ✅ |
