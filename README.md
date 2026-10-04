# markdown-article-title

Quartz v5 component plugin: same as `article-title`, but the inline Markdown of the title (`` `code` ``, `**bold**`, `*italic*`, `~~strike~~`) is rendered instead of shown literally. Everything else is HTML-escaped.

```yaml
- source: github:Shagshag/quartz-markdown-article-title
  enabled: true
  layout:
    position: beforeBody
    priority: 10
```

Disable the stock `article-title` plugin. No build step: `dist/index.js` is written by hand and versioned.
