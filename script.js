let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}
start();



let appData = {
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [], 
        savings: true
    };

function chooseExpenses() {
    for (let i = 0; i < 2; i++){
        let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
            b = prompt("Во сколько обойдется?", '');
    
        if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
            
            console.log("eee");
    
            appData.expenses[a] = b;
        } else {
            i--;
        }
    }
}

chooseExpenses();


// let a1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
//     a2 = prompt("Во сколько обойдется?", ''),
//     a3 = prompt("Введите обязательную статью расходов в этом месяце", ''),
//     a4 = prompt("Во сколько обойдется?", '');

// appData.expenses.a1 = a2;
// appData.expenses.a3 = a4;


function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();

    alert("Ежедневный бюджет: " + appData.moneyPerDay);
}

detectDayBudget();



// alert("Ежедневный бюджет: " + appData.moneyPerDay);

function detectLevel() {
    
    if (appData.moneyPerDay < 100) {
        console.log("Min ur");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Mid ur");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Max ur");
    } else {
        console.log("Err");
    }
}

detectLevel();

function checkSaviings() {
    if (appData.savings == true) {
        var save = +prompt("Какова сумма накопления?"),
            percent = prompt("Под какой процент?");
        
            appData.mounthIncome = save/100/12*percent;
            alert("In mounth: " + appData.mounthIncome);
    }        
}

checkSaviings();