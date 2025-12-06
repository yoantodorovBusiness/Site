# Assets

Place your logo image at `assets/logo.png` (PNG recommended) so the navigation can show it. You uploaded a logo in the conversation — to include it in the repo please either:

- Upload the image file as `assets/logo.png` in this branch, or
- Let me know and I will add it for you (I need the binary image file to push).

If you want a favicon, add `assets/favicon.ico`.

---

Notes:
- I did NOT modify package.json in this commit. Please run `npm install react-router-dom` (or `pnpm add react-router-dom`) locally so the new routing imports resolve.
- After you add `assets/logo.png` to pages-start, the import in components/Nav.tsx will resolve and the logo will appear.
