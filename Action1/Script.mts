
RepositoriesCollection.Add "C:\Users\Manzur\Documents\Unified Functional Testing\framework\ObjectRepository\KrogerTest.tsr"

Function OB(Browser,appURL)
	Select Case Browser 
	Case "IE"
	SystemUtil.CloseProcessByName "iexplore.exe"
	SystemUtil.Run "iexplore.exe","www.kroger.com"
	Case "Firefox"
	SystemUtil.CloseProcessByName "firefox.exe"
	SystemUtil.Run "firefox.exe","www.kroger.com"
	Case "Chrome"
	SystemUtil.CloseProcessByName "chrome.exe"
	SystemUtil.Run "chrome.exe","www.kroger.com"
	End Select
End Function

Function Registration (email,conEmail,password,conPassword,city)
Browser("Kroger").Page("Kroger_2").Link("Register").Click
Browser("Kroger").Page("Kroger").WebEdit("email").Set email
Browser("Kroger").Page("Kroger").WebEdit("confirmEmail").Set conEmail
Browser("Kroger").Page("Kroger").WebEdit("password").Set password
Browser("Kroger").Page("Kroger").WebEdit("confirmPassword").Set conPassword
Browser("Kroger").Page("Kroger").WebEdit("preferredStore").Set city
Browser("Kroger").Page("Kroger").WebButton("Find").Click
Browser("Kroger").Page("Kroger").WebList("select").Select 

End Function

Function SignIn(username,password)
Browser("Kroger").Page("Kroger_2").Link("Sign In").Click
Browser("Kroger").Page("Kroger_2").WebEdit("WebEdit").Set username
Browser("Kroger").Page("Kroger_2").WebEdit("WebEdit_2").Set password

Browser("Kroger").Page("Kroger_2").WebButton("Sign In").Click

End Function

Function SignOut
	
	Browser("Kroger").Page("Kroger_2").Link("Sign Out").Click

End Function

Function CB
	Browser("title:=.*").Close
End Function

OB "Firefox","www.kroger.com"
'Registration "qtpuft01@gmail.com","qtpuft01@gmail.com","abcd1234","abcd1234","Maryland"
SignIn "qtppnt01@gmail.com","abcd1234"
wait 10
SignOut
wait 5
CB 



