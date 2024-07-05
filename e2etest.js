const puppeteer = require('puppeteer');

async function runTest() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    try {
        await page.goto('https://jawadify.xyz');
        await page.waitForFunction(() => {
            const countElement = document.querySelector('#visitor-count-value');
            return countElement && !isNaN(parseInt(countElement.textContent.trim()));
        });

        const firstCount = await page.$eval('#visitor-count-value', el => el.textContent.trim());
        console.log('First count:', firstCount);

        await page.reload();
        await page.waitForFunction(() => {
            const countElement = document.querySelector('#visitor-count-value');
            return countElement && !isNaN(parseInt(countElement.textContent.trim()));
        });

        const secondCount = await page.$eval('#visitor-count-value', el => el.textContent.trim());
        console.log('Second count:', secondCount);

        if (parseInt(firstCount) < parseInt(secondCount)) {
            console.log('PASS');
        } else {
            console.log('FAIL');
        }
    } catch (error) {
        console.error('Error during test execution:', error);
    } finally {
        await browser.close();
    }
}

runTest();
