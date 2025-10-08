const axios = require("axios")

axios.post("http://localhost:8080/payments/checkout", {"test": "moretest"}).then(r => console.log(r.status))