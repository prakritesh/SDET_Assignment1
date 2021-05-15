package StepDefinitions;

import static org.testng.Assert.assertEquals;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Action;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.asserts.SoftAssert;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import util.hooks;

public class stepDefinition {
	
	WebDriver driver = hooks.driver;

	@Given("^Open the upskill elearning website$")
	public void open_the_upskill_elearning_website() throws Throwable {
		
		driver.get("http://elearningm1.upskills.in/");
		//driver.manage().window().fullscreen();
		
	}

	@Given("^user should be on the main page$")
	public void user_should_be_on_the_main_page() throws Throwable {
		assertEquals(driver.getTitle(), "My Organization - My education");
		
	}

	@When("^User clicks on SignUp link$")
	public void user_clicks_on_SignUp_link() throws Throwable {
		driver.findElement(By.xpath("//a[contains(text(), 'Sign up!')]")).click();
	}

	@And("^Select Teach Course Radio button$")
	public void select_Teach_Course_Radio_button() throws Throwable {
		////div[@class='radio']//p[text()='Follow courses']//preceding-sibling::input[contains(@id,'qf')][1]
		WebElement course = new WebDriverWait(driver, 60)
				.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[@class='radio']//p[text()='Follow courses']//preceding-sibling::input[contains(@id,'qf')][1]")));
		Assert.assertTrue(course.isSelected());
	}

	@And("^Enter mandatory details firstname \"([^\"]*)\", lastname \"([^\"]*)\", e-mail \"([^\"]*)\", Username \"([^\"]*)\", pass \"([^\"]*)\",Confirm password$")
    public void enter_mandatory_details_firstname_something_lastname_something_email_something_username_something_pass_somethingconfirm_password_something(String firstName, String lastName, String email, String username, String password) throws Throwable {
        driver.findElement(By.cssSelector("input#registration_firstname")).sendKeys(firstName);
        driver.findElement(By.cssSelector("input#registration_lastname")).sendKeys(lastName);
        driver.findElement(By.cssSelector("input#registration_email")).sendKeys(email);
        driver.findElement(By.cssSelector("input#username")).sendKeys(username);
        driver.findElement(By.cssSelector("input#pass1")).sendKeys(password);
        driver.findElement(By.cssSelector("input#pass2")).sendKeys(password);
    }

	@And("^clicks on Register button$")
	public void clicks_on_Register_button() throws Throwable {
		driver.findElement(By.cssSelector("button#registration_submit")).click();
	}

	@Then("^Confirmation message will be populated in next screen and should have firstname \"([^\"]*)\" and lastname \"([^\"]*)\"$")
    public void confirmation_message_will_be_populated_in_next_screen_and_should_have_firstname_something_and_lastname_something(String firstname, String lastname) throws Throwable {
		
		  WebElement registration = new WebDriverWait(driver, 60)
		  .until(ExpectedConditions.visibilityOfElementLocated(By.xpath(
		  "//body/main[@id='main']/section[@id='cm-content']//div[@class='container']/div[@class='row']//p[1]")));
		  System.out.println(registration.getText());
		 
		String expectedMessage = "Dear "+firstname+" "+lastname+",";
		WebElement actualMessage = driver.findElement(By.xpath("//body/main[@id='main']/section[@id='cm-content']//div[@class='container']/div[@class='row']//p[1]"));
		System.out.println("ExpectedMessage :"+expectedMessage);
		System.out.println("ActualMessage : "+actualMessage.getText());
		//Assert.assertEquals(expectedMessage.trim(),actualMessage.getText().trim());
		//Assert.assertEquals(expectedMessage, actualMessage.getText());
		Assert.assertTrue(actualMessage.getText().contains("Dear "+firstname+" "+lastname+","));
    }
	
	@When("^User clicks on top right corner$")
    public void user_clicks_on_top_right_corner() throws Throwable {
        driver.findElement(By.cssSelector("a.dropdown-toggle")).click();
    }
	
	@Then("^Validate the email \"([^\"]*)\"$")
    public void validate_the_email_something(String expectedMail) throws Throwable {
        WebElement mail = driver.findElement(By.xpath("//div[@class='text-center']/p"));
        System.out.println(mail.getText());
        Assert.assertEquals(expectedMail, mail.getText());
    }

    @When("^User navigates to Homepage$")
    public void user_navigates_to_homepage() throws Throwable {
        driver.findElement(By.cssSelector("a[title='Homepage']")).click();
    }

    @And("^clicks on Compose$")
    public void clicks_on_compose() throws Throwable {
        WebElement compose = new WebDriverWait(driver, 60)
        		.until(ExpectedConditions.elementToBeClickable(By.xpath("//a[contains(text(),'Compose')]")));
        compose.click();
    }

    @When("^Enter Send To \"([^\"]*)\"$")
    public void enter_send_to_something(String sendTo) throws Throwable {
        WebElement send = new WebDriverWait(driver, 60)
        		.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//input[@type='search']")));
        send.sendKeys(sendTo);
        
        WebElement name = new WebDriverWait(driver, 30)
        		.until(ExpectedConditions.elementToBeClickable(By.xpath("//li[@class='select2-results__option select2-results__option--highlighted']")));
        
        name.click();
		/*
		 * Thread.sleep(2); Actions a = new Actions(driver);
		 * a.click(driver.findElement(By.
		 * xpath("//li[@class='select2-results__option select2-results__option--highlighted']"
		 * ))).build().perform();
		 */
        }

    @And("^Enter Subject$")
    public void enter_subject() throws Throwable {
        driver.findElement(By.cssSelector("#compose_message_title")).sendKeys("Test Mail");
    }

    @And("^Enter mail body$")
    public void enter_mail_body() throws Throwable {
    	Thread.sleep(10000);
    	System.out.println(driver.findElements(By.tagName("iframe")).size());
    	    	
    	for(int i =0;i<driver.findElements(By.tagName("iframe")).size();i++) {
    		driver.switchTo().frame(i);
    		WebElement body = driver.findElement(By.xpath("//body[@class='cke_editable cke_editable_themed cke_contents_ltr cke_show_borders']"));
    		if(body.getSize()!=null) {
    			System.out.println("Frame Number : "+i);
    			body.sendKeys("Test Mail");
    		}
    		
    	}
    	
    	//System.out.println(driver.getPageSource());
    	//driver.findElement(By.xpath("body[@class='cke_editable cke_editable_themed cke_contents_ltr cke_show_borders']")).sendKeys("mail Body");
    }

    @And("^Click on Send message$")
    public void click_on_send_message() throws Throwable { 
    	driver.switchTo().defaultContent();
        driver.findElement(By.cssSelector("#compose_message_compose")).click();
    }

    @Then("^Validate the acknowledgement$")
    public void validate_the_acknowledgement() throws Throwable {
    	WebElement ack = new WebDriverWait(driver, 60)
    			.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[@class='alert alert-success']")));
    	//Assert.assertEquals("The message has been sent to ", ack.getText());
    	Assert.assertTrue(ack.getText().contains("The message has been sent to"));
    	System.out.println("Acknowledgment message verified and passed");
        
    }

    

}
