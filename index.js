const account = {
    accountName: "Tommy Batong",
    balance: 3000,
    transactions:[],
    getBalance(){
        console.log(`Your current balance is ${this.balance}:-`);
    },
    deposit(){
        amount = parseFloat(prompt("How much money do you want to deposit?"));

        if(isNaN(amount) || (amount < 0)){
            this.accountError("Amount is a negative number or not a number");
        }
            else{
                this.balance = this.balance + amount;
                this.transactions.push({time:getTransactionTime(), amount:amount, balance:this.balance});
                this.getBalance();
            }
    },  
    withdrawal(){
        amount = parseFloat(prompt("How much money do you want to withdraw?"));

        if(isNaN(amount) || (amount < 0)){
            this.accountError("Amount is a negative number or not a number"); 
        }
            else if (amount <= this.balance){
                this.balance = this.balance - amount;
                this.transactions.push({time:getTransactionTime(), amount:-amount, balance:this.balance});
                this.getBalance();
            }
                else{
                    this.accountError("Balance to low.");
                }
    },
    getAccountName(){
        console.log(`Account owner: ${this.accountName}`);
    },
    getTransactions(){
        console.log(this.transactions);
    },
    accountError(errorType){
        console.log(`Error: ${errorType}`);
    },
    exitAccount(){
        window.close();
    }
}

    //Gets the date and time of transaction.
function getTransactionTime(){
    let d = new Date();
    year = d.getFullYear();
    month = addZero(d.getMonth() +1);
    date = addZero(d.getDate());
    hour = addZero(d.getHours());
    minute = addZero(d.getMinutes());
    second = addZero(d.getSeconds());
    return (`${year}${month}${date} ${hour}:${minute}:${second}`);
}

    //adds zero infront if number is single digit.
function addZero(num){
    num < 10 ? num = "0" + num : num = num;
    return num;
    
}