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
- `http://localhost:8080/scribelog/` — ChartLog（路径暂不改；以后再迁 `/chartlog/`）
- `http://localhost:8080/realtylogs/` — RealtyLogs
- `http://localhost:8080/lotlog/` — LotLog
- `http://localhost:8080/inspectlog/` — InspectLog
- `http://localhost:8080/fieldslog/` — FieldsLog
- `http://localhost:8080/claimlog/` — ClaimLog
- `http://localhost:8080/policylog/` — PolicyLog

旧路径 `autolog/` · `fieldlog/` · `insurelog/` · `realtylog/` 保留 redirect 到新店名路径。

## Layout

| Path | Purpose |
| --- | --- |
| `index.html` | LogSuite series LP |
| `matterlog/` | MatterLog marketing site |
| `scribelog/` | ChartLog marketing site（暂用工程路径） |
| `realtylogs/` | RealtyLogs marketing site |
| `lotlog/` | LotLog marketing site |
| `inspectlog/` | InspectLog marketing site |
| `fieldslog/` | FieldsLog marketing site |
| `claimlog/` | ClaimLog marketing site |
| `policylog/` | PolicyLog marketing site |

AI API keys are configured in each app (BYOK). Guides open official Gemini / OpenRouter pages from an in-app sheet — this site does not host a key howto.

## GitHub Pages

Published from [LogstudioDev/LogSuiteWebSite](https://github.com/LogstudioDev/LogSuiteWebSite). Live site: https://logstudiodev.github.io/LogSuiteWebSite/

All asset paths are relative so subdirectory deploys work.
