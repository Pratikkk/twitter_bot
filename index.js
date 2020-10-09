const puppeteer = require('puppeteer');
const username = 'Naruto556236124';
const password = 'LM8vxkFiTDsj4qA';

let browser = null;
let page = null;

(async () => {
    browser = await puppeteer.launch({ headless: false });


    page = await browser.newPage();
    page.setViewport({
        width: 1200,
        height: 800,
        isMobile: false

    });

    await page.goto('https://twitter.com/login', { waitUntil: 'networkidle2' });


    //Login
    await page.type('input[name="session[username_or_email]"]', username, { delay: 25 });

    await page.type('input[name="session[password]"]', password, { delay: 25 });

    await page.click('div[data-testid="LoginForm_Login_Button"]');
    await page.waitFor(2000);

    //Searching

    await page.waitFor('input[data-testid="SearchBox_Search_Input"]');

    await page.type('input[data-testid="SearchBox_Search_Input"]', '#JavaScript', { delay: 25 });

    await page.keyboard.press('Enter');
    await page.waitFor(2000);

    await page.click('div[data-testid="retweet"]');
    await page.waitFor(2000);

    await page.click('div[data-testid="retweetConfirm"]');
    await page.waitFor(2000);

    let authorsSet = new Set()
    try {
        let previousHeight;
        for (let i = 0; i < 10; i++) {
            const elementHandles = await page.$$('a.css-4rbku5.css-18t94o4.css-1dbjc4n.r-sdzlij.r-1loqt21.r-1adg3ll.r-ahm1il.r-1udh08x.r-o7ynqc.r-6416eg.r-13qz1uu');
            const propertyJsHandles = await Promise.all(
                elementHandles.map(handle => handle.getProperty('href'))
            );
            const urls = await Promise.all(
                propertyJsHandles.map(handle => handle.jsonValue())
            );

            urls.forEach(item => authorsSet.add(item))

            previousHeight = await page.evaluate('document.body.scrollHeight');
            await page.evaluate('window.scrollTo(0, document.body.scrollHeight)');
            await page.waitForFunction(`document.body.scrollHeight > ${previousHeight}`);
            await page.waitFor(2000);
        }
    } catch (e) { console.log(e); }

    console.log("-----")
    console.log(authorsSet); ss




})();