# xinninggui.github.io

Xinning Gui's personal academic website, built with [Astro](https://astro.build) and deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`.

## Where the content lives

| Content | File |
| --- | --- |
| Name, summary, roles, contact, links, research threads, students, alumni, personal life text and cat photos | `src/data/site.json` |
| All publications (from the CV) | `src/data/publications.json` |
| Homepage drawings of the technologies studied | `src/components/Art.astro` |
| Colors and layout | `src/styles/site.css` |

Each publication has `type` (`journal`, `conference`, `poster`, `workshop`, `doctoral-colloquium`, `magazine`), `short` (venue label such as `CHI 2026`), the full `venue` and `details` as in the CV, an optional `doi` (or `url` for papers without a DOI, such as USENIX or ACL Anthology pages), and `award`. Only journal articles and conference papers count as full papers.

## Local preview

```
pnpm install
pnpm build      # type-checks and builds into dist/
pnpm preview
```
