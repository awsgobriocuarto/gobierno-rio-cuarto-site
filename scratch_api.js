const fs = require('fs');

async function main() {
  const url = "https://gestionweb.gobiernoriocuarto.gob.ar/api/v1/areas";
  const token = "Bearer 2|fFUeQDbIpPwKGUzbmGCkBYUAGumAlZ9XJ3dvWGnD2e9b28c5";

  const res = await fetch(url, {
    headers: { Authorization: token },
  });
  const data = await res.json();
  const areas = data.data;

  let out = "";
  for (const a of areas) {
    out += `Parent: ${a.name} (ID: ${a.id}, Status: ${a.status})\n`;
    for (const c of a.children || []) {
      out += `  - Child: ${c.name} (ID: ${c.id}, Status: ${c.status})\n`;
    }
  }
  fs.writeFileSync('f:/gobierno-rio-cuarto-site/areas_dump.txt', out);
}

main().catch(console.error);
