const Telegraf = require('telegraf');

var moment = require('moment');

moment.locale('vi');

const bot = new Telegraf('1855446577:AAGbiJ4xVZ2wdFl2MjOKI0RqXNhDR1fXRhg');

let txt = 

//starting block
bot.command('start', ctx => {
    console.log(ctx.from)
    bot.telegram.sendMessage(ctx.chat.id, 'Welcome to code by Kien Nguyen. To get stared please type Hello.')
})

bot.hears('Hello', ctx => {
    console.log(ctx.from)
    bot.telegram.sendMessage(ctx.chat.id, 'How can we help you today?')
})

bot.hears('Time', ctx => {
    console.log(ctx.from)
    var timenow = moment().format("dddd, D MMMM YYYY HH:mm").toUpperCase();
    bot.telegram.sendMessage(ctx.chat.id, timenow)
})

bot.hears('Maybach', ctx => {
    bot.telegram.sendPhoto(ctx.chat.id, { source: "pic_test/maybach.jpg" })
})

bot.hears("Choose", (ctx) => {
    console.log(ctx.from)
    let priceMessage = `Click one option that you prefer`;
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, priceMessage, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "food", callback_data: 'food' },
                    { text: "drinks", callback_data: 'drinks' }
                ],

            ]
        }
    })
})

bot.action('food', ctx => {
    bot.telegram.sendPhoto(ctx.chat.id, { source: "pic_test/foods.jpg" })

})

bot.action('drinks', ctx => {
    bot.telegram.sendPhoto(ctx.chat.id, { source: "pic_test/drinks.jpg" })

})

bot.launch();
// Dinh dang du lieu nhap vao
// const requestPhoneKeyboard = {
//     "reply_markup": {
//         "one_time_keyboard": true,
//         "keyboard": [
//             [{
//                 text: "My phone number",
//                 request_contact: true,
//                 one_time_keyboard: true
//             }],
//             ["Cancel"]
//         ]
//     }
// };

// const requestLocationKeyboard = {
//     "reply_markup": {
//         "one_time_keyboard": true,
//         "keyboard": [
//             [{
//                 text: "My location",
//                 request_location: true,
//                 one_time_keyboard: true
//             }],
//             ["Cancel"]
//         ]
//     }
// }

