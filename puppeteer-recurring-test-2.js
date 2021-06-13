//проверить что http статус 200
//проверить что в ответе статус - ок
//проверить что карта одна и что карта соответствует маске
//если условия не выполняются, то в консоль должна выводиться ошибка


const puppeteer = require('puppeteer');
const payment_service_url = 'https://payment.rosfines.ru';
(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    var response = await page.goto(payment_service_url+'/recurring/info?channel=DefaultApp&isTax=0&newResponse=1&paymentSystem=A3&rand=P8E4DX&session=17ed863a5b486c088daabd31abcf4aaf&userId=23231104');
    if (!response.ok()) {
        console.log('http статус неуспешный');
        await browser.close();
        return;
    }
    var json = await response.json();
    console.log(json);
    if (json.status !== 'ok') {
        console.log('статус не ок');
        await browser.close();
        return;
    }
    var cards = json.response.cards;
    console.log(cards.length);
    if (cards.length != 1) {
        console.log('карта не одна');
        await browser.close();
        return;
    }
    if (cards[0].card!=='428905******9039') {
        console.log('маска неверная');
        await browser.close();
        return;
    }

    console.log('тест пройден успешно');
    await browser.close();
})();