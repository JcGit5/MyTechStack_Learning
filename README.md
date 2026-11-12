# MyTechStack Learning

A static site (no build step) for learning and revising my tech stack.

## Structure
```
index.html                 main tracker: one tab per stack, a row per topic, links to each page
assets/tracker.js          the single source of truth (stacks and topics, with status and date)
spark/ databricks/ ai/ sql/ python/ java/
   <key-concept>/          key concept = sub-folder
      <topic>.html         one page per topic I discuss
templates/topic-template.html
```

## Rules
- A page exists only for a topic I have discussed. No placeholders.
- Each topic page: key concept and sub-topics, architecture (if asked), questions discussed with key summary (after done), interview questions with answers.
- Architecture goes on the topic page of the stack it belongs to. No separate architecture folder.
- One topic, one page, one tracker row. Extend an existing page instead of duplicating.

## Add a topic
1. Copy `templates/topic-template.html` to `<stack>/<key-concept>/<topic>.html` and fill it in.
2. Add a row to `assets/tracker.js` (stack, concept, topic, status, updated, page).
3. Commit and push.

## Host on GitHub Pages
Push to a repo, then Settings > Pages > deploy from branch `main`, folder `/ (root)`.

## Preview locally
`python -m http.server 8000` in this folder, then open http://localhost:8000
