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

    // await page.click('div[data-testid="retweet"]');
    // await page.waitFor(2000);

    // await page.click('div[data-testid="retweetConfirm"]');
    // await page.waitFor(2000);

    let tweets = new Set();
    try {
        let previousHeight;
        for (let i = 0; i < 10; i++) {
            previousHeight = await page.evaluate('document.body.scrollHeight');
            await page.evaluate('window.scrollTo(0,document.body.scroll)');
            await page.waitForFunction(`document.body.ScrollHeight >${previousHeight}`);
            await page.waitFor(2000);
        }
    } catch (e) {
        console.log(e);
    }




})();