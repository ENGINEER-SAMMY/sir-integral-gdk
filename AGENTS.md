<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Each site section is its own route under src/routes; header and footer live in __root.tsx so they wrap every page. Why: the owner wants only Home on entry, other sections reached via the menu.
- Every public page is listed in `PAGES` in vite.config.ts and prerendered to static HTML (outside Lovable the build writes it to .output/public, which the Pages workflow deploys); add new routes there. Why: the site is also hosted on GitHub Pages, which only serves static files.
- Images are real files in src/assets imported by Vite, not Lovable asset pointers. Why: Lovable asset URLs only resolve on Lovable hosting.
- Render website photographs with LightboxImage under the root ImageLightboxProvider; retain their original sizing classes. Why: every page shares accessible image expansion without changing image placement.
- URLs must respect `import.meta.env.BASE_URL` (set from `BASE_PATH` in the GitHub Pages workflow) and the router uses `trailingSlash: "always"`. Why: GitHub Pages serves the site from /<repo>/ and pages as <page>/index.html.
