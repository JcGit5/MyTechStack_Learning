(function () {
  const LABEL = { todo: "To do", learning: "Learning", revise: "Revise", done: "Done" };
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const topicId = (t) => t.page.replace(/\.html$/, "");

  /* ---- topic page: show status from the tracker (single source of truth) ---- */
  const badge = document.getElementById("status-badge");
  if (badge) {
    const t = window.TOPICS.find((x) => topicId(x) === badge.dataset.topic);
    badge.textContent = t ? LABEL[t.status] : "Not tracked";
    badge.className = "pill " + (t ? t.status : "");
  }

  /* ---- main tracker ---- */
  const tabs = document.getElementById("tabs");
  if (!tabs) return;
  const table = document.getElementById("table");
  const search = document.getElementById("search");
  const filter = document.getElementById("status");
  const count = document.getElementById("count");
  let stack = (location.hash || "").slice(1);
  if (!window.STACKS.some((s) => s.id === stack)) stack = window.STACKS[0].id;
  let q = "", st = "all";

  function render() {
    tabs.innerHTML = "";
    window.STACKS.forEach((s) => {
      const rows = window.TOPICS.filter((t) => t.stack === s.id);
      const done = rows.filter((t) => t.status === "done").length;
      const b = document.createElement("button");
      b.className = "tab" + (stack === s.id ? " on" : "");
      b.textContent = s.name + " " + done + "/" + rows.length;
      b.onclick = () => { stack = s.id; history.replaceState(null, "", "#" + s.id); render(); };
      tabs.appendChild(b);
    });

    const all = window.TOPICS.filter((t) => t.stack === stack);
    const rows = all
      .filter((t) => (st === "all" || t.status === st) && (t.concept + " " + t.topic).toLowerCase().includes(q))
      .sort((a, b) => a.concept.localeCompare(b.concept) || 0);
    count.textContent = rows.length + " of " + all.length + " topics";

    if (!all.length) {
      table.innerHTML = '<p class="muted">No topics yet. Ask about anything in this stack and it will appear here with a link to its page.</p>';
      return;
    }
    if (!rows.length) { table.innerHTML = '<p class="muted">No topics match.</p>'; return; }

    let html = '<table class="tbl"><thead><tr><th>Key concept</th><th>Topic</th><th>Status</th><th>Updated</th></tr></thead><tbody>';
    let last = null;
    rows.forEach((t) => {
      const first = t.concept !== last; last = t.concept;
      html += "<tr" + (first ? ' class="grp"' : "") + "><td>" + (first ? "<b>" + esc(t.concept) + "</b>" : "") + "</td>" +
        '<td><a href="' + esc(t.page) + '">' + esc(t.topic) + "</a></td>" +
        '<td><span class="pill ' + t.status + '">' + LABEL[t.status] + "</span></td>" +
        '<td class="muted">' + esc(t.updated) + "</td></tr>";
    });
    table.innerHTML = html + "</tbody></table>";
  }
  search.oninput = () => { q = search.value.toLowerCase(); render(); };
  filter.onchange = () => { st = filter.value; render(); };
  window.addEventListener("hashchange", () => { const h = location.hash.slice(1); if (window.STACKS.some((s) => s.id === h)) { stack = h; render(); } });
  render();
})();
