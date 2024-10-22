export class DownloadFile {
  #type;
  #content;

  constructor(type, content) {
    this.#type = type;
    this.#content = content;
  }

  htmlFile() {
    let download = document.createElement("a");
    download.href = `data:attachment/${this.#type}, ${encodeURI(
      `<!DOCTYPE html>\n<html>\n<body>\n${this.#content}\n</body>\n</html>\n`
    )}`;
    download.target = "_blank";
    download.download = `README.${this.#type}`;
    download.click();
  }

  mdFile() {
    let download = document.createElement("a");
    download.href = `data:attachment/${this.#type}, ${encodeURI(this.#content)}`;
    download.target = "_blank";
    download.download = `README.${this.#type}`;
    download.click();
  }

  pdfFile() {
    let download = document.createElement("div");
    download.innerHTML = `<!DOCTYPE html>\n<html>\n<body>\n${this.#content}\n</body>\n</html>\n`;
    html2pdf()
      .set({
        margin: 0.5,
        filename: `README.${this.#type}`,
        image: { type: "jpeg", quality: 0.1 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: "in", format: "a4", orientation: "p" },
      })
      .from(download)
      .save();
  }

  formatFile() {
    switch (this.#type) {
      case "html":
        this.htmlFile();
        break;
      case "md":
        this.mdFile();
        break;
      case "pdf":
        this.pdfFile();
        break;
      default:
        break;
    }
  }

  static getInstance(type, content) {
    new DownloadFile(type, content).formatFile()
  }
}
