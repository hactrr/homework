const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    // Allows you to intercept a request; must appear before
    // your first page.goto()
    await page.setRequestInterception(true);

    // Request intercept handler... will be triggered with
    // each page.goto() statement
    page.on('request', interceptedRequest => {

        // Here, is where you change the request method and
        // add your post data
        var data = {
            'method': 'POST',
            'postData': 'channel=DefaultApp&driverLicense=99%2012%20764027&first_issue_date=&issue_date=&name=&newResponse=1&patronymic=&rand=J1G5CC&session=ef3d7b573ed382562109d02df67806c2&surname=&userId=23231104',
            headers: {
                ...interceptedRequest.headers(),
                "Content-Type": "application/x-www-form-urlencoded"
            }
        };


        // Request modified... finish sending!
        interceptedRequest.continue(data);
    });

    // Navigate, trigger the intercept, and resolve the response
    const response = await page.goto('https://api.rosfines.ru/105/api/driverLicense');
    const responseBody = await response.text();
    console.log(responseBody);

    // Close the browser - done!
    await browser.close();
})();