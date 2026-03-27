#!/usr/bin/env node

/**
 * Security Check Script
 * Checks for common security issues in the codebase
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Patterns that might indicate secrets
const SECRET_PATTERNS = [
  {
    name: 'API Key',
    pattern: /(?:api[_-]?key|apikey|api-key)\s*[:=]\s*['"]([a-zA-Z0-9_\-]{20,})['"]/gi,
    severity: 'high'
  },
  {
    name: 'Secret Key',
    pattern: /(?:secret[_-]?key|secretkey|secret-key)\s*[:=]\s*['"]([a-zA-Z0-9_\-]{20,})['"]/gi,
    severity: 'high'
  },
  {
    name: 'Password',
    pattern: /(?:password|passwd|pwd)\s*[:=]\s*['"]([^'"]{6,})['"]/gi,
    severity: 'high'
  },
  {
    name: 'Token',
    pattern: /(?:token|bearer[_-]?token)\s*[:=]\s*['"]([a-zA-Z0-9_\-\.]{20,})['"]/gi,
    severity: 'high'
  },
  {
    name: 'AWS Access Key',
    pattern: /aws[_-]?(?:access[_-]?)?key\s*[:=]\s*['"]([A-Z0-9]{20})['"]/gi,
    severity: 'critical'
  },
  {
    name: 'AWS Secret Key',
    pattern: /aws[_-]?(?:secret[_-]?)?key\s*[:=]\s*['"]([a-zA-Z0-9/+=]{40})['"]/gi,
    severity: 'critical'
  },
  {
    name: 'Private Key',
    pattern: /-----BEGIN\s+(?:RSA\s+)?PRIVATE\s+KEY-----/gi,
    severity: 'critical'
  },
  {
    name: 'GitHub Token',
    pattern: /ghp_[a-zA-Z0-9]{36}/gi,
    severity: 'critical'
  },
  {
    name: 'Slack Token',
    pattern: /xox[baprs]-[a-zA-Z0-9-]+/gi,
    severity: 'high'
  },
  {
    name: 'Database URL',
    pattern: /(?:mongodb|mysql|postgres|redis)://[^\s'"]+/gi,
    severity: 'high'
  }
];

// Files to ignore
const IGNORE_PATTERNS = [
  'node_modules',
  'dist',
  'build',
  '.git',
  'coverage',
  '.env.example',
  'package-lock.json',
  'yarn.lock',
  'pnpm-lock.yaml',
  'security-check.js'
];

// Directories to scan
const DIRECTORIES_TO_SCAN = [
  'src',
  'public',
  'config'
];

let issuesFound = 0;

function shouldIgnoreFile(filePath) {
  return IGNORE_PATTERNS.some(pattern => filePath.includes(pattern));
}

function scanFile(filePath) {
  if (shouldIgnoreFile(filePath)) return;

  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');

    SECRET_PATTERNS.forEach(({ name, pattern, severity }) => {
      let match;
      pattern.lastIndex = 0; // Reset regex

      while ((match = pattern.exec(content)) !== null) {
        const lineNumber = content.substring(0, match.index).split('\n').length;
        const lineContent = lines[lineNumber - 1].trim();

        console.log(`\x1b[${severity === 'critical' ? '31' : severity === 'high' ? '33' : '36'}m${severity.toUpperCase()}\x1b[0m: ${name} found in ${filePath}:${lineNumber}`);
        console.log(`  ${lineContent.substring(0, 100)}...`);
        issuesFound++;
      }
    });
  } catch (error) {
    // Skip files that can't be read as text
  }
}

function scanDirectory(dir) {
  if (!fs.existsSync(dir)) return;

  const entries = fs.readdirSync(dir, { withFileTypes: true });

  entries.forEach(entry => {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      scanDirectory(fullPath);
    } else if (entry.isFile() && /\.(js|vue|ts|jsx|tsx|json|env|config|conf)$/.test(entry.name)) {
      scanFile(fullPath);
    }
  });
}

function checkDependencies() {
  console.log('\n\x1b[36m%s\x1b[0m', 'Checking for vulnerable dependencies...');

  try {
    const auditOutput = execSync('npm audit --json', { encoding: 'utf8' });
    const auditData = JSON.parse(auditOutput);

    if (auditData.vulnerabilities) {
      const vulnerabilities = auditData.vulnerabilities;
      const totalVulns = Object.keys(vulnerabilities).length;

      if (totalVulns > 0) {
        console.log(`\x1b[33m%s\x1b[0m`, `⚠️  Found ${totalVulns} vulnerable dependencies`);

        Object.entries(vulnerabilities).forEach(([pkg, data]) => {
          console.log(`  \x1b[31m${data.severity.toUpperCase()}\x1b[0m: ${pkg}`);
          console.log(`    ${data.title}`);
          console.log(`    Vulnerable versions: ${data.vulnerable_versions}`);
          console.log(`    Patched versions: ${data.patched_versions || 'N/A'}`);
        });

        issuesFound += totalVulns;
      } else {
        console.log('\x1b[32m%s\x1b[0m', '✓ No vulnerable dependencies found');
      }
    }
  } catch (error) {
    if (error.status !== 1) {
      console.error('\x1b[31m%s\x1b[0m', 'Error running npm audit:', error.message);
    }
  }
}

console.log('\x1b[36m%s\x1b[0m', '🔒 Security Check Started');
console.log('\x1b[36m%s\x1b[0m', '=========================\n');

console.log('\x1b[36m%s\x1b[0m', 'Scanning for potential secrets...');

DIRECTORIES_TO_SCAN.forEach(dir => {
  console.log(`  Scanning ${dir}...`);
  scanDirectory(dir);
});

checkDependencies();

console.log('\n\x1b[36m%s\x1b[0m', '=========================');
console.log('\x1b[36m%s\x1b[0m', 'Security Check Complete\n');

if (issuesFound > 0) {
  console.log(`\x1b[31m${issuesFound} security issues found\x1b[0m`);
  console.log('\nPlease review and fix the issues above before committing.');
  process.exit(1);
} else {
  console.log('\x1b[32m✓ No security issues found\x1b[0m');
  process.exit(0);
}
