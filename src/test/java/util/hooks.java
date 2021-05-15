package util;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class hooks {

	public static WebDriver driver;
	
	@Before
	public void initDriver() {
		System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir")+"\\src\\test\\resources\\executables\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		
	}
	@After
	public void exitDriver() {
		driver.quit();
		System.out.println("Quiting driver");
	}
	
	
}
