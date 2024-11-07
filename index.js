const account = {
    accountName: "Tommy Batong",
    balance: 3000,
    transactions:[],
    getBalance(){
        console.log(`Your current balance is ${this.balance}:-`);
    },
    deposit(){
        let amount = parseFloat(prompt("How much money do you want to deposit?"));

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
        let amount = parseFloat(prompt("How much money do you want to withdraw?"));

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
    exitAccount(){  //Closes the tab aka exit the HTML atm. 
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

    //the atm-function
function atm(){
    const message = parseFloat(
        prompt(
            `Select a choice:
            1.) See balance.
            2.) Make a deposit.
            3.) Make a withdrawal.
            4.) Get Account name.
            5.) See transactions.
            6.) Exit.`
        )
    );

    switch (message) {
        case 1: account.getBalance();
                atm();
                break;
        case 2: account.deposit();
                atm();
                break;
        case 3: account.withdrawal()
                atm();
                break;
        case 4: account.getAccountName();
                atm();
                break;
        case 5: account.getTransactions();
                atm();
                break;
        case 6: //exit the atm-function.
                break;
        default: console.log (`ERROR: can't use ${message} as input.`);
                 atm();
    }   
}

