function bazarHisab(totalMoney, morich, mach, torkari) {
    const cost = morich + mach + torkari;
    const totalCost = totalMoney - cost;
    return totalCost;
}

const totalMoney = 500;
const morich = 100;
const mach = 200;
const torkari = 50;
const totalCost = bazarHisab(totalMoney, morich, mach, torkari);
console.log(totalCost);
