/**
 * Utility to parse the "proposito" text from the API for the Intendencia area.
 * It identifies sections based on specific Pillar titles and splits the content.
 *
 * @param {string} htmlContent - The HTML content from area.propouse
 * @returns {object} { intro: string, sections: { [title]: string } }
 */
export function parseAreaPropouse(htmlContent) {
  if (!htmlContent) return { intro: "", sections: {} };

  // Pillar titles to look for (case-insensitive for better matching)
  const pillars = [
    "CIUDAD HABITABLE Y SUSTENTABLE",
    "CIUDAD CENTRADA EN LAS PERSONAS",
    "CIUDAD DE OPORTUNIDADES",
  ];

  let intro = htmlContent;
  const sections = {};

  // Simple splitting strategy:
  // We search for the first pillar title. Everything before is intro.
  // Then we find the next pillar title to delimit the content of the current pillar.

  let lowestIndex = Infinity;
  pillars.forEach((title) => {
    const index = htmlContent.search(new RegExp(title, "i"));
    if (index !== -1 && index < lowestIndex) {
      lowestIndex = index;
    }
  });

  if (lowestIndex !== Infinity) {
    intro = htmlContent.substring(0, lowestIndex).trim();

    // Attempt to clean up trailing <p> or <br> if any
    intro = intro.replace(/<p>\s*<\/p>$/i, "").replace(/<br\s*\/?>$/i, "");
  }

  // Extract sections
  pillars.forEach((title, idx) => {
    const regex = new RegExp(title, "i");
    const match = htmlContent.match(regex);

    if (match) {
      const start = match.index + match[0].length;
      let end = htmlContent.length;

      // Look for the next pillar title to set the end of the current section
      pillars.forEach((otherTitle) => {
        if (otherTitle === title) return;
        const otherRegex = new RegExp(otherTitle, "i");
        const nextMatch = htmlContent.match(otherRegex);
        if (
          nextMatch &&
          nextMatch.index > match.index &&
          nextMatch.index < end
        ) {
          end = nextMatch.index;
        }
      });

      let content = htmlContent.substring(start, end).trim();

      // Clean up common HTML wrappers that might be left over after splitting
      // e.g., if it was <p>TITLE<br/>CONTENT</p>, the split might leave stray tags.
      content = content.replace(/^<\/strong>|^<\/b>|^<\/h\d>/i, "");
      content = content.replace(/^[:\s\-]+/, ""); // Remove colons or hyphens after title

      sections[title.toUpperCase()] = content;
    }
  });

  return { intro, sections };
}
