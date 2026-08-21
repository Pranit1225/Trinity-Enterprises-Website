import { existsSync, readFileSync } from 'node:fs';

const requiredFiles = [
  'package.json',
  'package-lock.json',
  'wrangler.jsonc',
  'open-next.config.ts',
  'app/page.tsx',
  'app/api/contact/route.ts',
];

const checks = [];
for (const file of requiredFiles) {
  checks.push({ name: `File: ${file}`, ok: existsSync(file) });
}

const packageJson = JSON.parse(readFileSync('package.json', 'utf8'));
for (const script of ['dev', 'build', 'lint', 'preview', 'deploy', 'cf-typegen']) {
  checks.push({ name: `Script: ${script}`, ok: Boolean(packageJson.scripts?.[script]) });
}

const envFile = existsSync('.env.local') ? '.env.local' : existsSync('.env') ? '.env' : null;
checks.push({ name: 'Local environment file (optional)', ok: Boolean(envFile), optional: true });

let failed = false;
for (const check of checks) {
  const suffix = check.optional ? ' (optional)' : '';
  console.log(`${check.ok ? '✓' : '✗'} ${check.name}${suffix}`);
  if (!check.ok && !check.optional) failed = true;
}

if (failed) {
  console.error('\nPreflight failed. Fix the missing required files/scripts before deployment.');
  process.exit(1);
}

console.log('\nPreflight passed.');
