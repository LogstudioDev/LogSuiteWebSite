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
- `http://localhost:8080/scribelog/` — ChartLog
- `http://localhost:8080/realtylog/` — RealtyLogs
- `http://localhost:8080/autolog/` — LotLog
- `http://localhost:8080/inspectlog/` — InspectLog
- `http://localhost:8080/fieldlog/` — FieldsLog
- `http://localhost:8080/claimlog/` — ClaimLog
- `http://localhost:8080/insurelog/` — PolicyLog

## Layout

| Path | Purpose |
| --- | --- |
| `index.html` | LogSuite series LP |
| `matterlog/` | MatterLog marketing site |
| `scribelog/` | ChartLog marketing site |
| `realtylog/` | RealtyLogs marketing site |
| `autolog/` | LotLog marketing site |
| `inspectlog/` | InspectLog marketing site |
| `fieldlog/` | FieldsLog marketing site |
| `claimlog/` | ClaimLog marketing site |
| `insurelog/` | PolicyLog marketing site |

AI API keys are configured in each app (BYOK). Guides open official Gemini / OpenRouter pages from an in-app sheet — this site does not host a key howto.

## GitHub Pages

Published from [LogstudioDev/LogSuiteWebSite](https://github.com/LogstudioDev/LogSuiteWebSite). Live site: https://logstudiodev.github.io/LogSuiteWebSite/

All asset paths are relative so subdirectory deploys work.
