import puppeteer from "puppeteer-core";
import chromium from "@sparticuz/chromium";
import os from "os";

export const POST = async (req) => {
  try {
    let { htmlContent, secondaryColor } = await req.json();

    // Wrap everything in proper HTML structure
    htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cover Letter</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    /* ✅ Ensures Full Background Coverage */
    html, body { 
      background-color: ${secondaryColor};
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;
      font-size: 14px;
    }
    
    /*  Ensures Puppeteer Doesn’t Clip Background */
    @page { 
      size: A4;
      margin: 0; /*
    }

    .document-page {
      width: 100%;
      height: 100vh;
      min-height: 297mm;  
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      background-color: ${secondaryColor};
    }
  </style>
</head>
<body>
  <div class="document-page">${htmlContent}</div>
</body>
</html>
`;

    console.log("Launching Puppeteer...");
    let browser;
    if (process.env.VERCEL || process.env.AWS_LAMBDA_FUNCTION_NAME) {
      browser = await puppeteer.launch({
        args: chromium.args,
        executablePath: await chromium.executablePath(),
        headless: chromium.headless,
      });
    } else {
      const isWindows = os.platform() === "win32";
      const executablePath = isWindows
        ? "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe"
        : "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

      browser = await puppeteer.launch({
        executablePath,
        headless: true,
      });
    }

    console.log("Opening new Puppeteer page...");
    const page = await browser.newPage();

    // Set viewport to match website layout
    await page.setViewport({ width: 1200, height: 850 });

    // Load HTML
    await page.setContent(htmlContent, { waitUntil: "networkidle0" });

    // **Ensure all TailwindCSS styles load**
    await page.evaluateHandle("document.fonts.ready");

    // **Inject styles if TailwindCSS is being ignored**
    await page.addStyleTag({
      content: `
    @import url('https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css');
  `,
    });

    // **Wait for borders & elements to fully render**
    await page.waitForSelector("body");

    console.log("Generating PDF...");
    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true,
      preferCSSPageSize: true,
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
    });

    await browser.close();
    console.log("PDF generated successfully!");

    return new Response(pdfBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "attachment; filename=cover_letter.pdf",
      },
    });
  } catch (error) {
    console.error("Puppeteer PDF Error:", error);
    return new Response(
      JSON.stringify({
        error: "Failed to generate PDF",
        details: error.message,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};
