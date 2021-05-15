package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
	features="src/test/java/features",
	glue = {"StepDefinitions","util"},
	tags ={"@Smoke"},
	dryRun = false,
	monochrome = true,
	plugin = {"pretty","html:target/reports/htmresult.html","json:target/reports/jsonresult.json","junit:target/reports/jreport.xml"}
)
public class TestRunner {

}
