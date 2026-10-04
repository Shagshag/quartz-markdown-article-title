import { jsx } from "preact/jsx-runtime"

const escapeHtml = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")

const emphasis = (s) =>
  s
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/~~(.+?)~~/g, "<del>$1</del>")

/**
 * Renders the inline Markdown subset used in titles (`code`, **bold**, *italic*,
 * ~~strike~~) to safe HTML. Everything else is HTML-escaped.
 */
export const inlineMarkdown = (text) =>
  text
    .split(/(`[^`]+`)/)
    .map((part, i) =>
      i % 2 === 1 ? `<code>${escapeHtml(part.slice(1, -1))}</code>` : emphasis(escapeHtml(part)),
    )
    .join("")

/** Same as the article-title plugin, but the title's inline Markdown is rendered. */
export const MarkdownArticleTitle = () => {
  const Component = ({ fileData, displayClass }) => {
    const title = fileData.frontmatter?.title
    if (!title) return null
    const classes = [displayClass, "article-title"].filter(Boolean).join(" ")
    return jsx("h1", { class: classes, dangerouslySetInnerHTML: { __html: inlineMarkdown(title) } })
  }

  Component.css = `
.article-title {
  margin: 2rem 0 0 0;
}
`
  return Component
}

export default MarkdownArticleTitle
