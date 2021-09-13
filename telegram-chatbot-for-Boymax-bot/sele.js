let webdriver = require("selenium-webdriver"),
  By = webdriver.By;

let chrome = require("selenium-webdriver/chrome");
// let chrome = require('chromedriver');
let options = new chrome.Options();
const chromedriver = require('chromedriver');

// options.addArguments("headless");
options.addArguments("disable-gpu");
options.addArguments("--no-sandbox");

chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());

let web_driver = new webdriver.Builder()
  .forBrowser("chrome")
  .withCapabilities(webdriver.Capabilities.chrome())
  .setChromeOptions(options)
  .build();

const getTextByXpath = async (driver, xpath) => {
  let promise = new Promise((resolve, reject) => {
    let text_div = driver.findElement(By.xpath(xpath)).getText();
    text_div.then((text) => {
      resolve(text)
    })
      .catch((ex) => {
      reject(ex)
    });
  })
  return await promise;
}

const getAttributeByXpath = async (driver, xpath, attr) => {
  let promise = new Promise((resolve, reject) => {
    let text_link = driver.findElement(By.xpath(xpath)).getAttribute(attr);
    text_link.then((link) => {
      resolve(link);
    })
      .catch((ex) => {
      reject(ex)
      });
  })
  return await promise;
}

const run = async () => {
  await web_driver.get('https://vnexpress.net/');
  // var text_div = web_driver.findElement(By.xpath('/html/body/section[4]/div/div/div/article/h3/a')).getText();
  // text_div.then((text) => {
  //   console.log(text);
  // });
  let text_div = await getTextByXpath(web_driver, '/html/body/section[4]/div/div/div/article/h3/a')
  console.log('text : ', text_div)
  // var text_link = web_driver.findElement(By.xpath('/html/body/section[4]/div/div/div/article/h3/a')).getAttribute('href');
  // text_link.then((link) => {
  //   console.log(link);
  // });
  let text_link = await getAttributeByXpath (web_driver, '/html/body/section[4]/div/div/div/article/h3/a', 'href');
  console.log('link : ', text_link)
  return { text_div, text_link };
  // return text_link;
}

module.exports = run;
run();





