# LogSuite Website

Static sites for the **LogSuite** app family (GitHub Pages ready).

## Preview

```bash
cd LogSuiteWebSite
python3 -m http.server 8080
```

Open:

- `http://localhost:8080/` — suite landing
- `http://localhost:8080/matterlog/` — MatterLog
- `http://localhost:8080/scribelog/` — ScribeLog
- `http://localhost:8080/realtylog/` — RealtyLog
- `http://localhost:8080/autolog/` — AutoLog
- `http://localhost:8080/inspectlog/` — InspectLog
- `http://localhost:8080/fieldlog/` — FieldLog
- `http://localhost:8080/claimlog/` — ClaimLog
- `http://localhost:8080/insurelog/` — InsureLog

## Layout

| Path | Purpose |
| --- | --- |
| `index.html` | LogSuite series LP |
| `matterlog/` | MatterLog marketing site |
| `scribelog/` | ScribeLog marketing site |
| `realtylog/` | RealtyLog marketing site |
| `autolog/` | AutoLog marketing site |
| `inspectlog/` | InspectLog marketing site |
| `fieldlog/` | FieldLog marketing site |
| `claimlog/` | ClaimLog marketing site |
| `insurelog/` | InsureLog marketing site |

AI API keys are configured in each app (BYOK). Guides open official Gemini / OpenRouter pages from an in-app sheet — this site does not host a key howto.

## GitHub Pages

Point Pages at the `/LogSuiteWebSite` folder on `main`, **or** sync this folder to a dedicated Pages repo (e.g. [abecheng/LogSuiteWebSite](https://github.com/abecheng/LogSuiteWebSite)) as the site root.

All asset paths are relative so subdirectory deploys work.
