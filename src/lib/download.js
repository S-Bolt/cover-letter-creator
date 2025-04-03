export async function downloadCoverLetterAsPDF() {
  console.log("Download clicked");
  const documentElement = document.querySelector(".document-page");

  if (!documentElement) {
    alert("No cover letter available to download.");
    return;
  }
  const htmlContent = documentElement.outerHTML;

  console.log("HTML Content being sent to Puppeteer:", htmlContent);

  try {
    const response = await fetch("/api/generatePdf", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ htmlContent }),
    });

    if (!response.ok) {
      throw new Error("Failed to generate PDF");
    }

    // Convert response to a Blob and trigger download
    const pdfBlob = await response.blob();
    const pdfUrl = URL.createObjectURL(pdfBlob);
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "cover_letter.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error("PDF Download Error:", error);
    alert("Error downloading cover letter");
  }
}
