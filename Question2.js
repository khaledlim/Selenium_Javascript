const {Builder,By,Key} = require("selenium-webdriver");
async function Question2()
{
    try {
        let driver = await new Builder().forBrowser("chrome").build();
        await driver.get('http://localhost:3000/');
        await driver.sleep(2000);
        await driver.findElement(By.xpath("//input[@type='submit']")).click();
        var message = driver.findElement(By.xpath('//*[@id="root"]/div/div/div/div[1]'));
        message.getText().then(function (text) {
            console.log(text);
            console.log(text == "Désolé, les identifiants sont incorrects.");
         });
        await driver.sleep(2000);
        await driver.navigate().refresh();
		await driver.findElement(By.xpath("//input[@type='email']")).sendKeys('Test007');
		await driver.findElement(By.xpath("//input[@type='password']")).sendKeys('test_Dev');
		await driver.findElement(By.xpath("//input[@type='submit']")).click();
        await driver.sleep(2000)
        driver.close();
        console.log(" *********  Test Passed  *********");

    }catch (err) {
        console.log(err.message);
        console.log(" *********  Test Failed  *********");
    }
}
Question2();