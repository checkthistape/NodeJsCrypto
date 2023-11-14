// const puppeteer = require("puppeteer");
// const url = "https://coinmarketcap.com/currencies/bitcoin/";

// function sleep(ms) {
//       return new Promise((resolve) => {
//         setTimeout(resolve, ms);
//       });
//     }   

// const bitcoinScrape = async (res) => {

//   // Launch the browser and open a new blank page
//   const browser = await puppeteer.launch({
//     headless:"new",
//   });
//   const page = await browser.newPage();

//   // Navigate the page to a URL
//   await page.goto(url);

//   await sleep(8000);

//   const searchResultSelector = '.grid.full-width-layout  .sc-f70bb44c-0.flfGQp.flexStart.alignBaseline';
//   await page.waitForSelector(searchResultSelector);

//   // Locate the full title with a unique string
//   const textSelector = await page.waitForSelector(
//     ".sc-f70bb44c-0.flfGQp.flexStart.alignBaseline span"
//   );
  
//   const fullTitle = await textSelector.evaluate(el => el.textContent);
  
    


//   await browser.close();
  
//   console.log(fullTitle);  
//   return await fullTitle;
 
// }

// module.exports={ bitcoinScrape }; 