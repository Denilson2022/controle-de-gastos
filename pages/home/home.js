function logout() {
    firebase.auth().signOut().then(() => {
        window.location.href = '../../index.html'
    }).catch(() => {
        alert('Erro ao fazer logout')
    })
}

findTransactions();

function findTransactions() {
    firebase.firestore()
    .collection('transactions')
    .get()
    .then(snapshot => {
        console.log(snapshot);
    })
}

function addTransactionsToScreen(transactions) {
    const orderedList = document.getElementById('transactions');

    transactions.forEach(transaction => {
        const li = document.createElement('li');
        li.classList.add(transaction.type)

        const date = document.createElement('p');
        date.innerHTML = formatDate(transaction.date);
        li.appendChild(date);

        const money = document.createElement('p');
        money.innerHTML = formatMoney(transaction.money);
        li.appendChild(money)


        const type = document.createElement('p');
        type.innerHTML = transaction.transactionType;
        li.appendChild(type)

        if(transaction.description){
            const description = document.createElement('p');
            description.innerHTML = transaction.description;
            li.appendChild(description)
        }

        
        orderedList.appendChild(li)
    });
};


function formatDate(date) {
    return new Date(date).toLocaleDateString('pt-br')
};

function formatMoney(money) {
    return `${money.currency} ${money.value.toFixed(2)}`
};


const fakeTransactions = [{
    type: 'expense',
    date: '2022-01-04',
    mpney: {
        currency: 'R$',
        value: 10
    },
    transactionType: 'Supermercado'
}, {
    type: 'income',
    date: '2022-01-03',
    mpney: {
        currency: 'R$',
        value: 5000
    },
    transactionType: 'Salário',
    description: 'Empresa A'
}, {
    type: 'expense',
    date: '2022-01-01',
    mpney: {
        currency: 'EUR',
        value: 10
    },
    transactionType: 'Transporte',
    description: 'Metro ida e volta'
}, {
    type: 'expense',
    date: '2022-01-01',
    mpney: {
        currency: 'USD',
        value: 600
    },
    transactionType: 'Aluguel',
    description: 'Mensalidade'
}
]