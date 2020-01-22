# Mobile & Service Network Coverage
* CS4261: First Coding Assignment
---
## Getting Started 🚀
### Information
* This web application allow users to create an account with their information and store it to the database
* Users can always retrieve their information if they have the required criteria (username and password)

### Frontend App 🖥
* To open and run the webpage, to to this link
	```
	https://cs4261-d4866.firebaseapp.com
	```
* For development, change your directory to `client-side`
	* **Mobile App**
		* *Make sure that you have react native and other support libraries to able to run this project. You can find everything at [React-Native](https://facebook.github.io/react-native/docs/getting-started)*
		* *To install react native on your local machine: `npm install react-native`*
		* *After you got everything installed*
			```
			cd Mobile/
			bash installation.sh
			```
		* *To run the project on your local machine*
			* First try to run `npx react-native run-ios --simulator "iPhone 11 Pro Max"` on the command line
			* If not working then try:
				* Open **Xcode** and go to the folder **/client-side/Mobile/ios/** and then import file **Mobile.xcworkspace**
				* Then run the project by using the start icon.
		* **Troubleshooting**
			* [React-native troubleshoot if not able to run](https://facebook.github.io/react-native/docs/troubleshooting#content)
	* **Web App**
		* *Change the directory to /Web*
			```
			npm install && npm start
			```

### Backend Services 🐍
* Change your directory to `server-side`
* Create a file name `.env` and insert these lines
	```
	HOST=https://cs4261-assignment.herokuapp.com
	PORT=10000
	APIKEY=AIzaSyCEf_kZlapiKcTP77xhc_t4CI4kjL5mN70
	AUTHDOMAIN=cs4261-d4866.firebaseapp.com
	DATABASEURL=https://cs4261-d4866.firebaseio.com
	PROJECTID=cs4261-d4866
	STORAGEBUCKET=cs4261-d4866.appspot.com
	MESSAGINGSENDERID=660186600604
	```
* Finally - Spin up your Backend Server
	```
	npm install ; npm start
	```
* Here are some endpoints
	```
	Main URL: https://cs4261-assignment.herokuapp.com
	GET  /v1/test  | Test the server
	GET  /v1/awake  | Awake heroku server
	GET  /v1/account  | Get all user accounts
	POST /v1/account  | Add new user
	GET  /v1/account/:username  | Get user detail by id
	PUT  /v1/account/:username  | Update user by id
	POST  /v1/account/verify/  | Get password compare
	```
* Other dashboards view
	```
	Github: https://github.com/thinhnguyennt7/CS4261-First-Programming-Assignment
	Heroku Dashboard: https://dashboard.heroku.com/apps/cs4261-assignment
	Firebase: https://console.firebase.google.com/u/0/project/cs4261-d4866/database/cs4261-d4866/data
	Webpage: https://cs4261-d4866.firebaseapp.com
	```

---
## Contributors 👥
+ 1️⃣ [Thinh Nguyen](https://github.com/thinhnguyennt7)
+ 2️⃣ [Tuan Nguyen](https://github.com/atuannguyen1101)
