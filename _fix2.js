const fs = require('fs');

// Fix canonical URLs that got corrupted
const htmlFiles = [
  'web/index.html', 'web/blog/index.html',
  'web/support.html', 'web/install-offline.html', 'web/llm-config.html',
  'web/tutorial.html', 'web/deeptoken-promo.html',
  'web/blog/title-optimizer-guide.html', 'web/blog/review-analysis-guide.html',
  'web/blog/price-tracking-guide.html', 'web/blog/cross-platform-listing.html',
  'web/blog/profit-calculator-guide.html', 'web/blog/seller-daily-workflow.html'
];

// Map of canonical URL fix per file
const urlMap = {
  'index.html': 'https://blackeagle.cozyai.chat/',
  'blog/index.html': 'https://blackeagle.cozyai.chat/blog/',
  'support.html': 'https://blackeagle.cozyai.chat/support.html',
  'install-offline.html': 'https://blackeagle.cozyai.chat/install-offline.html',
  'llm-config.html': 'https://blackeagle.cozyai.chat/llm-config.html',
  'tutorial.html': 'https://blackeagle.cozyai.chat/tutorial.html',
  'deeptoken-promo.html': 'https://blackeagle.cozyai.chat/deeptoken-promo.html',
  'title-optimizer-guide.html': 'https://blackeagle.cozyai.chat/blog/title-optimizer-guide.html',
  'review-analysis-guide.html': 'https://blackeagle.cozyai.chat/blog/review-analysis-guide.html',
  'price-tracking-guide.html': 'https://blackeagle.cozyai.chat/blog/price-tracking-guide.html',
  'cross-platform-listing.html': 'https://blackeagle.cozyai.chat/blog/cross-platform-listing.html',
  'profit-calculator-guide.html': 'https://blackeagle.cozyai.chat/blog/profit-calculator-guide.html',
  'seller-daily-workflow.html': 'https://blackeagle.cozyai.chat/blog/seller-daily-workflow.html'
};

for (const filePath of htmlFiles) {
  let c = fs.readFileSync('D:/Project/Web/BlackEagle/' + filePath, 'utf-8');
  const orig = c;
  
  // Extract filename from path
  const fname = filePath.split('/').pop();
  const correctUrl = urlMap[fname];
  
  if (correctUrl) {
    // Replace any malformed canonical URL
    c = c.replace(/href="https:\/\/[^"]+\.cozyai\.chat[^"]*"/g, 'href="' + correctUrl + '"');
  }
  
  // Also fix any href that contains 钱多多.cozyai
  c = c.replace(/https:\/\/钱多多\.cozyai/g, 'https://blackeagle.cozyai');
  
  if (c !== orig) {
    fs.writeFileSync('D:/Project/Web/BlackEagle/' + filePath, c, 'utf-8');
    console.log('Fixed canonical: ' + filePath);
  }
}

// Fix blog/index.html title to be blog-specific
let blogIndex = fs.readFileSync('D:/Project/Web/BlackEagle/web/blog/index.html', 'utf-8');
blogIndex = blogIndex.replace('<title>钱多多 — AI卖家助手</title>', '<title>钱多多 — 教程与指南</title>');
fs.writeFileSync('D:/Project/Web/BlackEagle/web/blog/index.html', blogIndex, 'utf-8');
console.log('Fixed blog index title');

console.log('done');
