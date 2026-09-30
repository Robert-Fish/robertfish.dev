import { readFileSync, readdirSync, statSync } from "node:fs"
import { join } from "node:path"

const root = new URL("..", import.meta.url).pathname
const skip = new Set(["node_modules", ".next", ".git", "out", "coverage"])
const extensions = new Set([".ts", ".tsx", ".js", ".mjs", ".css", ".md"])

function walk(dir, files = []) {
  for (const entry of readdirSync(dir)) {
    if (skip.has(entry)) continue
    const path = join(dir, entry)
    const stat = statSync(path)
    if (stat.isDirectory()) {
      walk(path, files)
    } else if (extensions.has(path.slice(path.lastIndexOf(".")))) {
      files.push(path)
    }
  }
  return files
}

const failures = []

for (const path of walk(root)) {
  if (path.endsWith(`${join("scripts", "check-copy.mjs")}`)) continue
  const text = readFileSync(path, "utf8")
  const relative = path.slice(root.length)
  const forbidden = [
    [/smakosh/i, "smakosh"],
    [/technical lead/i, "Technical Lead"],
    [/tech lead/i, "Tech Lead"],
    [/head of/i, "Head of"],
    [/\bISO\b/, "ISO"],
    [/data team/i, "data team"],
    [/mailto:/i, "mailto"],
    [/\b[\w.+-]+@[\w-]+\.[\w.-]+\b/, "email address"],
    [/\+61\b/, "phone"],
    [/\bref=/, "query ref"],
  ]
  for (const [pattern, label] of forbidden) {
    if (pattern.test(text)) {
      failures.push(`${relative} contains ${label}`)
    }
  }
  const devops = text.match(/DevOps/g) ?? []
  const contractor = text.match(/DevOps contractor/g) ?? []
  if (devops.length !== contractor.length) {
    failures.push(`${relative} mentions DevOps outside "DevOps contractor"`)
  }
}

const content = readFileSync(join(root, "lib/content.ts"), "utf8")
const layout = readFileSync(join(root, "app/layout.tsx"), "utf8")
const required = [
  [content, "Full Stack Engineer"],
  [content, "The BUSY Group"],
  [content, "https://www.linkedin.com/in/robert-f-ba8517104"],
  [content, "https://github.com/Robert-Fish"],
  [content, "Stirwise"],
  [content, "Brisbane, Australia"],
  [content, "reduced architectural debt by 30%"],
  [content, "Jira Service Management"],
  [content, "Apache Kafka"],
  [content, "https://robertfish.dev/"],
  [layout, "metadataBase"],
  [layout, "canonical: site.canonical"],
  [layout, "url: site.canonical"],
]

for (const [source, needle] of required) {
  if (!source.includes(needle)) {
    failures.push(`missing required copy: ${needle}`)
  }
}

if (failures.length > 0) {
  console.error(failures.join("\n"))
  process.exit(1)
}

console.log("copy checks passed")
