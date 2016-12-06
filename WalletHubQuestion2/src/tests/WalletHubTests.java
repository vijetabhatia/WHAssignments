package tests;

import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

import browser.Browser;
import enums.PasswordsEnums;
import enums.UsernameEnums;
import pageobjects.WalletHubDashboardPage;
import pageobjects.WalletHubLoginPage;
import pageobjects.WalletHubProfilePage;
import pageobjects.WalletHubTestInsuranceCompanyPage;
import pageobjects.WalletHubWriteReviewPage;

public class WalletHubTests {

	@Before
	public void setup() {
		Browser.init();
		// Go to login Page in WalletHub
		WalletHubLoginPage.goTo();
		//Entering the credentials for the login
		WalletHubLoginPage.loginAs(UsernameEnums.REGULAR_USER).withPassword(PasswordsEnums.REGULAR_USER_PASSWORD)
				.login();
		
		//Asserting that we have reached the Dashboard and logged in successfully
		Assert.assertTrue(WalletHubDashboardPage.isAt());
		// Go to WalletTestInsurance Company Page
		WalletHubTestInsuranceCompanyPage.Goto();
		//Asserting that we have reached the TestInsurance Page
		Assert.assertTrue(WalletHubTestInsuranceCompanyPage.isAt());

	}

	@Test
	public void canPostReview() throws Exception {

		WalletHubWriteReviewPage review = WalletHubTestInsuranceCompanyPage.rateCompany("5");

		Assert.assertTrue(WalletHubWriteReviewPage.isAt());

		review.changePolicy("Health");
		
		review.clickRating();
		
		String reviewText = review.writeFullReviewAndSubmit();

		WalletHubProfilePage profile = new WalletHubProfilePage();

		WalletHubProfilePage.Goto();

		Assert.assertTrue(WalletHubProfilePage.isAt());

		profile.clickReviewsAndVerifyReview(reviewText);

		profile.clickActivityAndVerifyActivity(reviewText);

	}

	@After
	public void tearDown() {
		Browser.quit();
	}

}
