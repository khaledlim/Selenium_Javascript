const {Builder,By,Key} = require("selenium-webdriver");
async function Question1()
{
    try {
        let driver = await new Builder().forBrowser("chrome").build();
		await driver.get('http://localhost:3000/');
		await driver.findElement(By.linkText("Tâches")).click();
        await driver.sleep(2000);
        driver.getCurrentUrl().then(result => console.log(result))
		await driver.findElement(By.xpath("//input[@type='email']")).sendKeys('test@test.com');
		await driver.findElement(By.xpath("//input[@type='password']")).sendKeys('test');
		await driver.findElement(By.xpath("//input[@type='submit']")).click();
        await driver.findElement(By.linkText("Tâches")).click();
        await driver.sleep(2000)
        driver.getCurrentUrl().then(result => console.log(result))
        await driver.findElement(By.linkText("Déconnexion")).click();
        await driver.sleep(2000)
        await driver.close();
        console.log(" *********  Test Passed  *********");

    }catch (err) {
        console.log(err.message);
        console.log(" *********  Test Failed  *********");
    }
}
Question1();