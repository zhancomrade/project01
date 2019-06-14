let money = +prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [], 
        savings: false
    };

// let a1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
//     a2 = prompt("Во сколько обойдется?", ''),
//     a3 = prompt("Введите обязательную статью расходов в этом месяце", ''),
//     a4 = prompt("Во сколько обойдется?", '');

// appData.expenses.a1 = a2;
// appData.expenses.a3 = a4;

for (let i = 0; i < 2; i++){
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдется?", '');

    if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
        && a != '' && b != '' && a.length < 50) {
        
        console.log("eee");

        appData.expenses[a] = b;
    } else {
        i--;
    }

    
};

appData.moneyPerDay = appData.budget / 30;


alert("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Min ur");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Mid ur");
} else if (appData.moneyPerDay > 2000) {
    console.log("Max ur");
} else {
    console.log("Err");
}