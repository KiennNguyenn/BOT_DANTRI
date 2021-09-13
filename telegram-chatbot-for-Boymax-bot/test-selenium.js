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

const run = async() => {
  //await web_driver.get("https://www.facebook.com/huuhungkien.nguyen/");
  await web_driver.get('https://dantri.com.vn/');
  var text_div = web_driver.findElement(By.xpath('/html/body/main/div[2]/div[1]/div[1]/div[2]/div/ul/li[1]/div/h2/a')).getText();
  text_div.then((text) => {
    console.log(text);
  });
  }
run();


 