const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    var responce = await page.goto('https://api.rosfines.ru/105/api/feature?rand=1621236665703&channel=AndroidReleaseFines&session=8fca6032c7213a5b2f8b3bb64df137a1&userId=29412210');

    console.log(await responce.text());

    await browser.close();
})();