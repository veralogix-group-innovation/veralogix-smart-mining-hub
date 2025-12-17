import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const ROLES = [
  {
    name: 'Smart_Hub_Admin',
    pages: [
      { route: '/hub', name: 'Smart_Hub_Overview' },
      { route: '/operator', name: 'Operator_Cockpit' },
      { route: '/supervisor', name: 'Control_Room' },
      { route: '/executive', name: 'Executive_Overview' },
      { route: '/fleet', name: 'Fleet_Haulage_Analytics' },
      { route: '/earthworks', name: 'Trimble_Earthworks' },
      { route: '/safety', name: 'Safety_CPS_Intelligence' },
      { route: '/compliance', name: 'Workforce_Compliance' },
      { route: '/drones', name: 'VTOL_Survey' },
      { route: '/plant', name: 'Plant_Process_Intelligence' },
      { route: '/twin', name: 'Digital_Twin_Scenarios' },
      { route: '/reports', name: 'Report_Packs' },
      { route: '/sensors', name: 'Sensor_Stack_Coverage' },
    ],
  },
  {
    name: 'Executive_Portal',
    pages: [
      { route: '/executive', name: 'Executive_Overview' },
      { route: '/reports', name: 'Report_Packs' },
    ],
  },
  {
    name: 'Supervisor_Portal',
    pages: [
      { route: '/supervisor', name: 'Control_Room' },
      { route: '/fleet', name: 'Fleet_Haulage_Analytics' },
      { route: '/earthworks', name: 'Trimble_Earthworks' },
      { route: '/safety', name: 'Safety_CPS_Intelligence' },
      { route: '/compliance', name: 'Workforce_Compliance' },
      { route: '/drones', name: 'VTOL_Survey' },
      { route: '/plant', name: 'Plant_Process_Intelligence' },
    ],
  },
  {
    name: 'Operator_Portal',
    pages: [
      { route: '/operator', name: 'Operator_Cockpit' },
    ],
  },
];

const BASE_URL = 'http://localhost:3000';
const OUTPUT_DIR = 'docs/screenshots';

async function main() {
    console.log('Launching browser...');
    const browser = await chromium.launch();
    const context = await browser.newContext({
        viewport: { width: 1920, height: 1080 }
    });

    // Set sidebar state to expanded via cookie to ensure it's visible
    await context.addCookies([{
        name: 'sidebar_state',
        value: 'true', // 'true' usually means expanded based on boolean logic or 'expanded' depending on implementation.
                       // The code uses `const [_open, _setOpen] = React.useState(defaultOpen)` and saves boolean.
        domain: 'localhost',
        path: '/'
    }]);

    const page = await context.newPage();

    for (const role of ROLES) {
      const roleDir = path.join(OUTPUT_DIR, role.name);
      if (!fs.existsSync(roleDir)) {
        fs.mkdirSync(roleDir, { recursive: true });
      }

      console.log(`Processing role: ${role.name}`);

      for (const [index, pageInfo] of role.pages.entries()) {
        const url = `${BASE_URL}${pageInfo.route}`;
        console.log(`  Navigating to ${url}...`);

        try {
            await page.goto(url, { waitUntil: 'networkidle' });
            // Add a small delay to ensure rendering is stable
            await page.waitForTimeout(2000);

            // Ensure sidebar is visible
            try {
                await page.waitForSelector('[data-sidebar="sidebar"]', { state: 'visible', timeout: 5000 });
            } catch (e) {
                console.warn('  Sidebar not found or not visible.');
            }

            // 1-based index for ordering
            const prefix = String(index + 1).padStart(2, '0');

            // Capture Viewport (Side panels visible)
            const viewportFilename = `${prefix}_${pageInfo.name}_Viewport.png`;
            const viewportFilepath = path.join(roleDir, viewportFilename);
            await page.screenshot({ path: viewportFilepath, fullPage: false });
            console.log(`  Saved viewport screenshot: ${viewportFilepath}`);

            // Capture Full Page (Content focus)
            const fullFilename = `${prefix}_${pageInfo.name}_Full.png`;
            const fullFilepath = path.join(roleDir, fullFilename);
            await page.screenshot({ path: fullFilepath, fullPage: true });
            console.log(`  Saved fullpage screenshot: ${fullFilepath}`);

        } catch (e) {
            console.error(`  Failed to capture ${url}:`, e);
        }
      }
    }

    await browser.close();
    console.log('Done.');
}

main();
