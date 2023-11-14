// const puppeteer = require("puppeteer");
// const url = "https://coinmarketcap.com/currencies/solana/";

// function sleep(ms) {
//       return new Promise((resolve) => {
//         setTimeout(resolve, ms);
//       });
//     }   

// const solanaScrape = async (res) => {

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

// module.exports={ solanaScrape };





const puppeteer = require("puppeteer");
const url = "https://coinmarketcap.com/";

function sleep(ms) {
      return new Promise((resolve) => {
        setTimeout(resolve, ms);
      });
    }   

const solanaScrape = async () => {

  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch({
    headless:"new",
  });
  const page = await browser.newPage();

  // Navigate the page to a URL
  await page.goto(url);

  await sleep(4000);

  //const searchResultSelector = '.sc-66133f36-2.cgmess';
  const searchResultSelector = '.sc-4984dd93-0.iWSjWE';
  
  await page.waitForSelector(searchResultSelector);

  // Locate the full title with a unique string
  const textSelector = await page.waitForSelector(
    ".sc-a0353bbc-0.gDrtaY span"
  );
  
  const fullTitle = await textSelector.evaluate(el => el.textContent);
  console.log("Answer is " + fullTitle);
    


  await browser.close();
  
  //console.log(fullTitle);  
  return await fullTitle;
 
}

module.exports={ solanaScrape };