const fs = require('fs');
const cheerio = require('cheerio');
const file = 'v2.html';
const html = fs.readFileSync(file, 'utf8');
const $ = cheerio.load(html, { recognizeSelfClosing: true, decodeEntities: false });

$('img').each((i, el) => {
  if (!$(el).attr('width')) $(el).attr('width', '400');
  if (!$(el).attr('height')) $(el).attr('height', '300');
});

$('a').each((i, el) => {
  if (!$(el).text().trim() && !$(el).attr('aria-label') && $(el).html().includes('svg')) {
    $(el).attr('aria-label', 'Social Link');
  }
});

fs.writeFileSync(file, $.html());
console.log('Optimized ' + file);
