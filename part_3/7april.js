function atmpin() {
    const correctpin = "1234";
    let balance = 5000;
    let attempt = 3;
    while (attempt>0) {
        let pin = prompt("write the correct pin.")
        if (pin===correctpin) {
            let amount = prompt("Write the amount to get withdraw.")
            if (amount <= balance) {
                balance -+ amount
                console.log(`left out amount in the account is ${balance}`);
            }else {
            console.log(`this much amount ${amount} is not avaliable.`);
        } 
return;
}
        else {
            console.log("incorrct pin");
            attempt--;
}
}      
console.log("account locked.")
}
atmpin(1234)