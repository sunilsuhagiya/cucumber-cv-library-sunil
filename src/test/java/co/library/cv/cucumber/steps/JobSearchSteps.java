package co.library.cv.cucumber.steps;

import co.library.cv.pages.HomePage;
import co.library.cv.pages.ResultPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class JobSearchSteps {

    @Given("^I am on homepage$")
    public void iAmOnHomepage() {
    }

    @When("^I accept privacy policy$")
    public void iAcceptPrivacyPolicy() throws InterruptedException {
        Thread.sleep(5000);
        new HomePage().iFrame();
    }

    @And("^I enter job title \"([^\"]*)\"$")
    public void iEnterJobTitle(String job) throws InterruptedException {
        Thread.sleep(2000);
        new HomePage().enterJobTitle(job);
    }

    @And("^I enter location \"([^\"]*)\"$")
    public void iEnterLocation(String location) {
        new HomePage().enterLocation(location);
    }

    @And("^I enter distance \"([^\"]*)\"$")
    public void iEnterDistance(String distance) {
        new HomePage().selectDistance(distance);
    }

    @And("^I click on more search options$")
    public void iClickOnMoreSearchOptions() {
        new HomePage().clickOnMoreSearchOptionLink();
    }

    @And("^I enter minimum salary\"([^\"]*)\"$")
    public void iEnterMinimumSalary(String minSalary) {
        new HomePage().enterMinSalary(minSalary);
    }

    @And("^I enter maximum salary\"([^\"]*)\"$")
    public void iEnterMaximumSalary(String maxSalary) {
        new HomePage().enterMaxSalary(maxSalary);
    }

    @And("^I select salary type\"([^\"]*)\"$")
    public void iSelectSalaryType(String salary) {
        new HomePage().selectSalaryType(salary);
    }

    @And("^I select job type\"([^\"]*)\"$")
    public void iSelectJobType(String jobType) {
        new HomePage().selectJobType(jobType);
    }

    @And("^I click on find job button$")
    public void iClickOnFindJobButton() {
        new HomePage().clickOnFindJobsButton();
    }

    @Then("^Verify the result message \"([^\"]*)\"$")
    public void verifyTheResultMessage(String result) {
        new ResultPage().verifyTheResults(result);
    }
}
