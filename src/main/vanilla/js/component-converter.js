export class ComponentConverter {
  #type;
  #typeComponent;
  #data;

  constructor(type, typeComponent, data) {
    this.#type = type;
    this.#typeComponent = typeComponent;
    this.#data = data;
  }

  headerComponent(data) {
    let htmlCode = null,
      mdCode = null,
      pdfCode = null;
    htmlCode = `<h${data.level}>${data.text}</h${data.level}>`;
    mdCode = `${Array.from({ length: data.level }, () => "#").join("")} ${
      data.text
    }`;
    pdfCode = htmlCode;
    return { html: htmlCode, md: mdCode, pdf: pdfCode };
  }

  paragraphComponent(data) {
    let htmlCode = null,
      mdCode = null,
      pdfCode = null;
    htmlCode = `<p>${data.text}</p>`;
    mdCode = `${data.text}`;
    pdfCode = htmlCode;
    return { html: htmlCode, md: mdCode, pdf: pdfCode };
  }

  list(data) {
    let htmlCode = null,
      mdCode = null,
      pdfCode = null;
    htmlCode = `<ul>\n${data.items
      .map((item) => `<li>${item}</li>`)
      .join("\n")}\n</ul>`;
    mdCode = data.items.map((item) => `+ ${item}`).join("\n");
    pdfCode = htmlCode;
    return { html: htmlCode, md: mdCode, pdf: pdfCode };
  }

  delimiterComponent() {
    let htmlCode = null,
      mdCode = null,
      pdfCode = null;
    htmlCode = `<hr style="background-color: black;">`;
    mdCode = `-----`;
    pdfCode = htmlCode;
    return { html: htmlCode, md: mdCode, pdf: pdfCode };
  }

  imageComponent(data) {
    let htmlCode = null,
      mdCode = null,
      pdfCode = null;
    htmlCode = `<img src="${data.url}" alt="${data.caption}" />`;
    mdCode = `![${data.caption}](${data.url})`;
    pdfCode = htmlCode;
    return { html: htmlCode, md: mdCode, pdf: pdfCode };
  }

  linkToolComponent(data) {
    let htmlCode = null,
      mdCode = null,
      pdfCode = null;
    htmlCode = `<a href="${data.link}">${data.link}</a>`;
    mdCode = `[${data.link}](${data.link})`;
    pdfCode = htmlCode;
    return { html: htmlCode, md: mdCode, pdf: pdfCode };
  }

  codeComponent(data) {
    let htmlCode = null,
      mdCode = null,
      pdfCode = null;
    htmlCode = `<code>\n${data.code}\n</code>`;
    mdCode = `\`\`\`\n${data.code}\n\`\`\``;
    pdfCode = htmlCode;
    return { html: htmlCode, md: mdCode, pdf: pdfCode };
  }

  tableComponent(data) {
    let htmlCode = null,
      mdCode = null,
      pdfCode = null;
    htmlCode = `<table style="width:100%;border-collapse:collapse;">\n${data.content
      .slice(0, 1)
      .map(
        (tr) =>
          `<tr>\n${tr
            .map((td) => `<th style="border:1px solid black;">${td}</th>`)
            .join("\n")}\n</tr>`
      )
      .join("\n")}\n${data.content
      .slice(1)
      .map(
        (tr) =>
          `<tr>\n${tr
            .map((td) => `<td style="border:1px solid black;">${td}</td>`)
            .join("\n")}\n</tr>`
      )
      .join("\n")}\n</table>`;
    mdCode = `${data.content
      .slice(0, 1)
      .map((tr) => `| ${tr.map((td) => td).join(" | ")} |`)
      .join("\n")}\n${data.content
      .slice(0, 1)
      .map((tr) => `| ${tr.map(() => "---").join(" | ")} |`)
      .join("\n")}\n${data.content
      .slice(1)
      .map((tr) => `| ${tr.map((td) => td).join(" | ")} |`)
      .join("\n")}`;
    pdfCode = htmlCode;
    return { html: htmlCode, md: mdCode, pdf: pdfCode };
  }

  formatComponent(type, data) {
    switch (type) {
      case "header":
        return this.headerComponent(data);
      case "paragraph":
        return this.paragraphComponent(data);
      case "list":
        return this.listComponent(data);
      case "delimiter":
        return this.delimiterComponent();
      case "image":
        return this.imageComponent(data);
      case "linkTool":
        return this.linkToolComponent(data);
      case "code":
        return this.codeComponent(data);
      case "table":
        return this.tableComponent(data);
      default:
        return "";
    }
  }

  component() {
    return blocks
      .map((block) => this.component(block.type, block.data))
      .map((comp) => comp[type])
      .join("\n");
  }

  static convert(type, typeComponent, blocks) {
    return new PageEditor().component();
  }
}
