# Mobile & Service Network Coverage
* CS4261: First Assignment Program
---
## Getting Started 🚀
### Backend Services 🐍
* Change your directory to `server-side`
* Create a file name `.env` and insert these lines
	```
	HOST=http://localhost:10000
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
	GET  /v1/test  | Test the server
	GET  /v1/awake  | Awake heroku server
	GET  /v1/account  | Get all user accounts
	POST /v1/account  | Add new user
	GET  /v1/account/:username  | Get user detail by id
	PUT  /v1/account/:username  | Update user by id
	GET  /v1/account/verify/:username&:password  | Get password compare
	```

### Frontend App 🖥
* Change your directory to `client-side`

---
## Contributors 👥
+ 1️⃣ [Thinh Nguyen](tnntech@gatech.edu)
+ 2️⃣ [Tuan Nguyen](atuannguyen1101@gatech.edu)