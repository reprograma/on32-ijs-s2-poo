import Bank from "./models/Bank.model";


const devBank = new Bank();

console.log('\n\n *********** CARTEIRA DE CLIENTES DO BANCO: ***********');
const maria = devBank.createNewCustomer('Maria', 'Santos', '81999999999', 'Rua B, 65 A', 1000);
const carlos = devBank.createNewCustomer('Carlos', 'Silva', '81999999800', 'Rua Joia, 120, Amaro', 300);
const leia = devBank.createNewCustomer('Leia', 'Andrade', '81970099800', 'Rua J, 20', 750);
const bankWallet = devBank.bankCustomerWallet;
console.log(bankWallet);

console.log('\n\n *********** LISTA DE CONTAS DOS CLIENTES: ***********');
devBank.createSavingAccount(maria, 100);
devBank.createSavingAccount(carlos, 0);
devBank.createSavingAccount(leia, 50);
console.log('\nID das Contas da Maria:')
maria.accountList.forEach((account) => console.log(account.id, account.type, account.status));
console.log('\nID das Contas da Carlos:')
carlos.accountList.forEach((account) => console.log(account.id, account.type, account.status));
console.log('\nID das Contas da Leia:')
leia.accountList.forEach((account) => console.log(account.id, account.type, account.status));


console.log('\n\n *********** SALDO INICIAL DAS CONTAS: ***********');
console.log("Maria - Poupança: ", maria.accountList[0].balance);
console.log("Carlos - Poupança: ", carlos.accountList[0].balance);
console.log("Leia - Poupança: ", leia.accountList[0].balance);

console.log('\n\n *********** SALDO TOTAL BANCO: ***********');
console.log(devBank.balance);

console.log('\n\n *********** SALDO DAS CONTAS APÓS TRANSAÇÕES: ***********');
maria.accountList[0].deposit(200);
maria.accountList[0].transfer(50, carlos.accountList[0]);
carlos.accountList[0].deposit(50);
leia.accountList[0].deposit(100);
leia.accountList[0].withdraw(10);

console.log("Maria - Poupança: ", maria.accountList[0].balance);
console.log("Carlos - Poupança: ", carlos.accountList[0].balance);
console.log("Leia - Poupança: ", leia.accountList[0].balance);

console.log('\n\n *********** SALDO TOTAL BANCO ATUALIZADO: ***********');
console.log(devBank.balance);

console.log('\n\n *********** LISTA DE TRANSAÇÕES POR CONTA DOS CLIENTES: ***********');
console.log(maria.accountList[0].transactionHistory);
console.log(carlos.accountList[0].transactionHistory);
console.log(leia.accountList[0].transactionHistory);

console.log('\n\n *********** LISTA REQUISIÇÕES DE SERVIÇOS DOS CLIENTES: ***********');
maria.createCheckingAccountRequest(100);
carlos.createCheckingAccountRequest(0);
carlos.createChangingAccountStatusRequest(carlos.accountList[0]);
devBank.requestsList.forEach((request) => { console.log(`Requester: ${request.requester.firstName}, Request: ${request.type}, status: ${request.status}`)});

console.log('\n\n *********** RESULTADO DA ANÁLISE DAS SOLICITAÇÕES: ***********');
devBank.analyzeCustomerRequests();
devBank.requestsList.forEach((request) => { console.log(`Requester: ${request.requester.firstName}, Request: ${request.type}, status: ${request.status}`)});

console.log('\n\n *********** LISTA DE CONTAS DOS CLIENTES ATUALIZADA: ***********');
console.log('\nID das Contas da Maria:')
maria.accountList.forEach((account) => console.log(account.id, account.type, account.status));
console.log('\nID das Contas da Carlos:')
carlos.accountList.forEach((account) => console.log(account.id, account.type, account.status));
console.log('\nID das Contas da Leia:')
leia.accountList.forEach((account) => console.log(account.id, account.type, account.status));

// const activeAccountList = devBank.activeAccountsList;
// console.log('\n\n *********** LISTA DE CONTAS ATIVAS DO BANCO: *********** ');
// console.log(activeAccountList);

