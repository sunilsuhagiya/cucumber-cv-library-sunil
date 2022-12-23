package co.library.cv.pages;

import co.library.cv.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.testng.Assert;
import org.testng.Reporter;


public class ResultPage extends Utility {
    private static final Logger log = LogManager.getLogger(ResultPage.class.getName());
    @CacheLookup
    @FindBy(xpath = "//h1[@class='search-header__title']")
    WebElement resultText;

    public void verifyTheResults(String expected) {
        log.info("Verify the result" + resultText.toString());
        Assert.assertEquals(getTextFromElement(resultText),expected,"Result does not match");
    }
}
