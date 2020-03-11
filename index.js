import './style.css';
const acctData = [{
        "acctNum": "AAA - 1234",
        "user": "Alice"
    },
    {
        "acctNum": "AAA - 5231",
        "user": "Bob"
    },
    {
        "acctNum": "AAA - 9921",
        "user": "Alice"
    },
    {
        "acctNum": "AAA - 8191",
        "user": "Alice"
    }
];

const balance = {
    "AAA - 1234": 4593.22,
    "AAA - 9921": 0,
    "AAA - 5231": 232142.5,
    "AAA - 8191": 4344
};
var newArr = [];

acctData.forEach(function(item) {
    Object.keys(balance).forEach(function(data) {
        if (data == item.acctNum) {
            newArr.push({
                acctNum: item.acctNum,
                user: item.user,
                balance: balance[data]
            })
        }

    });

});



function myFunction(user, sort_by, sortDirection) {
    var accNumber = [];
    sort_by = sort_by || 0;
    user = user || 0;
    var resultArr = [];
    console.log("Sort by:", user);
    if (user) {
        
        newArr.forEach(function(item) {
            var arr = [];

            if (item.user == user) {
                resultArr.push(item);
            }
        });

    }
    if (sort_by == "acctNum") {
        console.log("Sort by account Number");
        resultArr = newArr.sort((a, b) => (a.acctNum > b.acctNum) ? 1 : -1);
    }
    if (user && sort_by == "balance" && sortDirection == "asc") {
        var sortByUser = [];
        console.log("Sort by user and balance ascending order");
        newArr.forEach(function(item) {
            var arr = [];
            if (item.user == user) {
                sortByUser.push(item);
            }
            resultArr = sortByUser.sort((a, b) => (a.balance > b.balance) ? 1 : -1);

        });
    }

    if (user && sort_by == "balance" && sortDirection == "desc") {
        var sortByUser = [];
        console.log("Sort by user and balance descending order");
        newArr.forEach(function(item) {
            var arr = [];
            if (item.user == user) {
                sortByUser.push(item);
            }
            resultArr = sortByUser.sort((a, b) => (a.balance > b.balance) ? 1 : -1);

        });
    }



    console.log(JSON.stringify(resultArr));
}


myFunction("Alice");
myFunction("Bob");
myFunction("Charlie");
myFunction(0, "acctNum");
myFunction("Alice", "balance", "asc");