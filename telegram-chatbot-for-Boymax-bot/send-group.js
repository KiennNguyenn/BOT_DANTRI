const Telegraf = require('telegraf');
const run = require('./sele.js');
//const TelegramBot = require("node-telegram-bot-api");
// const bot = new TelegramBot('1855446577:AAGbiJ4xVZ2wdFl2MjOKI0RqXNhDR1fXRhg');
// bot.on("message", (msg) => {
//     const chatID = msg.chat.id;
// });
const _bot = new Telegraf('1855446577:AAGbiJ4xVZ2wdFl2MjOKI0RqXNhDR1fXRhg');

Date.prototype.VnFormat = function () {
    var yyyy = this.getFullYear();
    var mm = this.getMonth() + 1;
    var dd = this.getDate();
    return dd + "/" + mm + "/" + yyyy;
}
var now = new Date();

_bot.hears('Hello', ctx => {
    console.log(ctx)
    if (ctx.message.chat.id == "-1001572368863")
        //ctx.telegram.sendMessage("-1001572368863", "Test group")
        ctx.reply('Test Group')
})

_bot.hears('News', news => {
const main = async() => {
    // let news = await text()
    // let url = await link()
    let object = await run()
    news = object.text_div 
    url = object.text_link
    console.log('News: ', news)
    console.log('Link: ', url)
    _bot.telegram.sendMessage( '-1001572368863',`Hôm nay là ngày: ` + now.VnFormat() + `\n` + `- Tin tức: ${news}` + `\n` + `- Đường dẫn: ${url}`)
}
main();
})

_bot.launch();
