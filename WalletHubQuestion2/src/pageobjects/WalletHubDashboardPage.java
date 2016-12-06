package pageobjects;

import browser.Browser;

public class WalletHubDashboardPage {

	public static boolean isAt() {
		return Browser.instance.getTitle().equalsIgnoreCase("Vijeta Bhatia (@vijeta_b) on Wallet Hub");
	}

}
