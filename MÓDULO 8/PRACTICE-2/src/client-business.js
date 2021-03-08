const dataBusiness = require("./data-business");
const accountBusiness = require("./account-business")

function getFullName(client) {
    return client.first_name + " " + client.last_name;
}

function getClientNode(client) {
    const li = document.createElement("li");
    li.append(getFullName(client));
  
    return li;
}

function getClientElement(client) {
    const allAccounts = dataBusiness.getAccounts();
    const clientAccounts = [];
    for (let account of allAccounts) {
      if (account.clientId === client.id) {
        clientAccounts.push(account);
      }
    }
  
    const node = getClientNode(client);
    const ul = accountBusiness.getClientAccountsElement(clientAccounts);
  
    node.appendChild(ul);
  
    return node;
}

module.exports = { getClientElement };

  
