var balance = 1000;

var response = query();
while(isValid(response)){
  var amount = getAmount();
  isDeposit(response) ? deposit(amount) : withdraw(amount);
  console.log('Balance: ' + balance);
  response = (balance >= -750) ? query() : 'q';
}

function query(){
  var response = prompt('(d)eposit, (w)ithdraw, (q)uit?');
  return response.toLowerCase();
}

function getAmount(){
  var amount = prompt('Amount?');
  return amount * 1;
}

function isDeposit(response){
  return response === 'd';
}

function deposit(amount){
  balance += (amount >= 500) ? amount + 25 : amount;
}

function withdraw(amount){
  balance -= amount;
  if(balance < 0){balance -= 50;}
}

function isValid(response){
  return response != 'q';
}
