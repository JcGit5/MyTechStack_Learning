/* MAIN TRACKER DATA. One entry per topic I have discussed (single source of truth).
   Add a row when a new topic comes up; set page to <stack>/<concept-folder>/<topic>.html
   status: "todo" | "learning" | "revise" | "done"   updated: YYYY-MM-DD */
window.STACKS = [
  { id: "spark", name: "Spark" },
  { id: "databricks", name: "Databricks" },
  { id: "ai", name: "AI" },
  { id: "sql", name: "SQL" },
  { id: "python", name: "Python" },
  { id: "java", name: "Java" }
];

window.TOPICS = [
  { stack: "spark", concept: "Execution", topic: "Lazy evaluation and the DAG", status: "learning", updated: "2026-11-11", page: "spark/execution/lazy-evaluation-dag.html" },
  { stack: "databricks", concept: "Unity Catalog", topic: "Permissions", status: "learning", updated: "2026-11-11", page: "databricks/unity-catalog/permissions.html" },
  { stack: "databricks", concept: "Unity Catalog", topic: "Catalog", status: "learning", updated: "2026-11-11", page: "databricks/unity-catalog/catalog.html" },
  { stack: "ai", concept: "Forward-deployed engineering", topic: "What it is and the engagement loop", status: "learning", updated: "2026-11-11", page: "ai/forward-deployed-engineering/overview.html" }
];
