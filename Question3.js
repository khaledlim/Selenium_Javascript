const {Builder,By,Key} = require("selenium-webdriver");
async function Question3()
{
    try {
        let driver = await new Builder().forBrowser("chrome").build();
        await driver.get('http://localhost:3000/');
        await driver.findElement(By.xpath("//input[@type='email']")).sendKeys('test@test.com');
		await driver.findElement(By.xpath("//input[@type='password']")).sendKeys('test');
        await driver.findElement(By.xpath("//input[@type='submit']")).click();
        await driver.findElement(By.linkText("Tâches")).click();
        await driver.sleep(2000)
        await driver.findElement(By.xpath('//*[@id="root"]/div/div/div[2]/div[1]/input')).sendKeys('TSG');
		await driver.findElement(By.xpath('//*[@id="root"]/div/div/div[2]/div[2]/input')).sendKeys('Test with Selenium the Web UI');
        await driver.findElement(By.xpath("//div[@id='root']/div/div/div[2]/div[3]/button")).click();
        await driver.sleep(2000)
        await driver.findElement(By.xpath('//*[@id="root"]/div/div/ul/li/span[1]/a')).click();
        driver.executeScript('return window.localStorage.getItem("TSG");').then((itemValue) => {
        console.log(itemValue);  });
        await driver.sleep(2000)
        await driver.close();
        console.log(" *********  Test Passed  *********");

    }catch (err) {
        console.log(err.message);
        console.log(" *********  Test Failed  *********");
    }
}
Question3();