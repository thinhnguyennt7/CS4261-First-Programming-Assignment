# Mobile & Service Network Coverage
* CS4261: First Assignment Program
---
## Getting Started 🚀
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
	```

### Frontend App 🖥
* Change your directory to `client-side`
	```
	npm install && npm start
	```
	
---
## Contributors 👥
+ 1️⃣ [Thinh Nguyen](tnntech@gatech.edu)
+ 2️⃣ [Tuan Nguyen](atuannguyen1101@gatech.edu)
