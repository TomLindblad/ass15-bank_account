const account = {
    accountName: "Tommy Batong",
    balance: 500,
    getBalance(){
        console.log(this.balance);
    },
    deposit(){
        amount = parseFloat(prompt("How much money do you want to deposit?"));
        this.balance = this.balance + amount;
        console.log(`deposit ${amount}`);
        console.log(`${this.balance}`);
    },  
    withdrawal(){
        amount = parseFloat(prompt("How much money do you want to withdraw?"));
        this.balance = this.balance - amount;
        console.log(`withdraw ${amount}`);
        console.log(`${this.balance}`);
    },
    getAccountName(){
        console.log(this.accountName);
    },
    accountError(){
        console.log("error");
    },
    exitAccount(){
        console.log("exit");
    }
}

account.withdrawal();
account.deposit();