const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    var response = await page.goto('https://payment.rosfines.ru/recurring/info?channel=DefaultApp&isTax=0&newResponse=1&paymentSystem=A3&rand=P8E4DX&session=17ed863a5b486c088daabd31abcf4aaf&userId=23231104');

    console.log(await response.json());

    await browser.close();
})();