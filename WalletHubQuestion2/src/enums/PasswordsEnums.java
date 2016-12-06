package enums;

public enum PasswordsEnums {
	REGULAR_USER_PASSWORD("Vijetabhatia123!");
	
	private String password;
	
	private PasswordsEnums(String passwords) {
		this.password = passwords;
	}
	
	public String getPassword(){
		return this.password;
	}
}
