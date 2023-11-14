const puppeteer = require("puppeteer");
const url = "https://coinmarketcap.com/currencies/solana/";

function sleep(ms) {
      return new Promise((resolve) => {
        setTimeout(resolve, ms);
      });
    }   

const scrapeLogic = async (res) => {

  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch({
    headless:"new",
  });
  const page = await browser.newPage();

  // Navigate the page to a URL
  await page.goto(url);

  await sleep(10000);
  //console.log("Before searchboxlink!");

  const searchResultSelector = '.grid.full-width-layout  .sc-f70bb44c-0.flfGQp.flexStart.alignBaseline';
  await page.waitForSelector(searchResultSelector);

  //console.log("Before textSelector!");

  

  // Locate the full title with a unique string
  const textSelector = await page.waitForSelector(
    ".sc-f70bb44c-0.flfGQp.flexStart.alignBaseline span"
  );
  
  //console.log("Before fullTitle!");
  const fullTitle = await textSelector.evaluate(el => el.textContent);
    
  // Print the full title
  //console.log('The title of this blog post is "%s".', fullTitle);


  //res.write("<h1>"+fullTitle+"</h1>");
  //console.log("After sending fulltitle!");

  await browser.close();
  
  console.log(fullTitle);  
  return await fullTitle;
  // await browser.close();
 
}

module.exports={ scrapeLogic }; 