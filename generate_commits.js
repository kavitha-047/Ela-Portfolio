const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

// Configuration
const REPO_URL = "https://github.com/Elamathi27/portfolio-.git";
const START_DATE = new Date("2026-05-01T09:00:00");
const END_DATE = new Date("2026-07-31T21:00:00");
const HISTORY_FILE = "history_log.txt";

const commitMessages = [
  "fix: correct navigation scroll spy offset",
  "docs: update readme with deployment instructions",
  "style: adjust grid glow background opacity on dark mode",
  "refactor: consolidate dashboard counters into central data file",
  "feat: add currently learning widget to skills page",
  "docs: add inline comments for pdf preview loading fallback",
  "style: update scrollbar thumb color on hover",
  "fix: cast typescript union type for SQL Projects category",
  "feat: add Google App Store data project metadata",
  "docs: detail experience bullet points for Sadhvi Academy",
  "refactor: isolate theme providers in providers component",
  "style: modify line height on hero section title",
  "fix: handle duplicate app entries inside SQL data script",
  "style: implement glassmorphic properties on KPI boxes",
  "feat: implement mailto contact form submission",
  "docs: outline open questions in implementation plan",
  "refactor: optimize metadata tags for SEO indexing",
  "style: define responsive margins for grid layout cards",
  "fix: check validation of email structure in contact form",
  "feat: embed github contributions graph SVG element",
  "refactor: restructure projects list elements into smaller cards",
  "docs: update license file and developer configurations",
  "style: refine active section highlights in mobile nav menu",
  "fix: adjust layout shift in hero metrics counters"
];

console.log("==========================================================");
console.log(" Starting Backdated Git Commits Generator (Node.js) ");
console.log("==========================================================");

// Initialize Git if not initialized
try {
  execSync("git rev-parse --is-inside-work-tree", { stdio: "ignore" });
} catch (e) {
  execSync("git init");
  console.log("[+] Initialized empty Git repository.");
}

// Ensure history file exists
const historyFilePath = path.join(__dirname, HISTORY_FILE);
if (!fs.existsSync(historyFilePath)) {
  fs.writeFileSync(historyFilePath, "", "utf8");
}

// Configure Git remote origin
try {
  execSync("git remote remove origin", { stdio: "ignore" });
} catch (e) {}
execSync(`git remote add origin ${REPO_URL}`);
console.log(`[+] Configured Git origin to: ${REPO_URL}`);

// Generate commits day by day
let currentDate = new Date(START_DATE);
let commitTotal = 0;

while (currentDate <= END_DATE) {
  // Determine commits count based on probability distribution
  // 65% chance of 0 commits, 20% of 1, 10% of 2, 5% of 3-4
  const rand = Math.floor(Math.random() * 100);
  let commitCount = 0;

  if (rand < 65) {
    commitCount = 0;
  } else if (rand < 85) {
    commitCount = 1;
  } else if (rand < 95) {
    commitCount = 2;
  } else {
    commitCount = Math.floor(Math.random() * 2) + 3; // 3 or 4
  }

  if (commitCount > 0) {
    const yyyy = currentDate.getFullYear();
    const mm = String(currentDate.getMonth() + 1).padStart(2, '0');
    const dd = String(currentDate.getDate()).padStart(2, '0');
    const dateStr = `${yyyy}-${mm}-${dd}`;

    console.log(`Processing ${dateStr}: Generating ${commitCount} commits...`);

    for (let i = 0; i < commitCount; i++) {
      // Pick random message
      const msg = commitMessages[Math.floor(Math.random() * commitMessages.length)];

      // Pick random time between 09:00:00 and 21:59:59
      const hour = String(Math.floor(Math.random() * 13) + 9).padStart(2, '0');
      const min = String(Math.floor(Math.random() * 60)).padStart(2, '0');
      const sec = String(Math.floor(Math.random() * 60)).padStart(2, '0');
      const timestamp = `${dateStr}T${hour}:${min}:${sec}`;

      fs.appendFileSync(historyFilePath, `${timestamp} - ${msg}\n`, "utf8");
      execSync("git add " + HISTORY_FILE);
      execSync(`git commit -m "${msg}"`, {
        env: {
          ...process.env,
          GIT_AUTHOR_DATE: timestamp,
          GIT_COMMITTER_DATE: timestamp
        }
      });
      commitTotal++;
    }
  }
  currentDate.setDate(currentDate.getDate() + 1);
}
console.log(`[✓] Completed. Total commits created: ${commitTotal}`);
