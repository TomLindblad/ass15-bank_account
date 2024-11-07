const account = {
    accountName: "Tommy Batong",
    balance: 500,
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
                this.getBalance();
            }
                else{
                    this.accountError("Balance to low.");
                }
    },
    getAccountName(){
        console.log(`Account owner: ${this.accountName}`);
    },
    accountError(errorType){
        console.log(`Error: ${errorType}`);
    },
    exitAccount(){
        console.log("exit");
    }
}