endpoint :localhost:8005/change-authority
payload: {
    "userId": "0QRhEUgqlUNkI8Py4ZzZ8k5L37y1",
    "authority": []
}

endpoint :localhost:8005/change-user-name
payload: {
    "itemId": "0QRhEUgqlUNkI8Py4ZzZ8k5L37y1",
    "name": "Qamar by updating"
}

endpoint :localhost:8005/change-wallet-name
payload: {
    "itemId": "aquila_73_1",
    "name": "sampletest1"
}

endpoint :localhost:8005/change-wallet-status
payload: {
    "itemId": "aquila_73_1",
    "isActive": 1
}

endpoint :localhost:8005/change-user-status
payload: {
    "itemId": "0QRhEUgqlUNkI8Py4ZzZ8k5L37y1",
    "isActive": 1
}

endpoint :localhost:8005/delete-wallet
payload: {
    "itemId": "aquila_73_1",
    "isDeleted": 0
}

endpoint :localhost:8005/delete-user
payload: {
    "itemId": "0QRhEUgqlUNkI8Py4ZzZ8k5L37y1",
    "isDeleted": 0
}

endpoint :localhost:8005/add-admin-panel-accounts
payload: {
    "name": "Qamar Abbas via admin api",
    "loginEmail": "haroons@yopmail.com",
    "accountType":0,
    "password":"password",
    "confirmPassword":"password",
    "submittedBy": "100",
    "walletId":"nmi_100_1"
}

endpoint :localhost:8005/add-user
payload: {
    "name": "Test NmI Merchant",
    "email": "reply122s.qamar@gmail.com",
    "loginEmail": "reply12s.qamar@gmail.com",
    "mid": "10122",
    "api_key": "mytestapikey",
    "paymentMethod": 2,
    "accountType":2,
    "card_type":1,
    "nmi_key": "11",
    "nmi_secret": "22",
    "nmi_web_hook": "",
    "aquila_key": "",
    "aquila_secret": "",
    "aquila_web_hook": "",
    "password":"password",
    "confirmPassword":"password",
    "minimumAmount":"10.15",
    "platformFeePrcnt": 0.5,
    "submittedBy": "100",
    "txFeeDollar": 0.7,
    "addGasFee": 0,
    "parentMerchant":"",
    "accessAdminPanel": true
}