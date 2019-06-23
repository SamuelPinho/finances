const PAY_TYPE = {
  amount: 0,
  times: 0
};

class Finances {
  doCalculateDayAmount = (startingMoney, operations) => {
    let dayAmount = startingMoney;
    let pay = { ...PAY_TYPE };
    let receive = { ...PAY_TYPE };
    let apply = { ...PAY_TYPE };

    operations.forEach(operation => {
      console.log(typeof operation.value);
      if (operation.type === 'Recebo') {
        dayAmount += operation.value;

        receive.amount += operation.value;
        receive.times += 1;
      }
      if (operation.type === 'Pago') {
        dayAmount -= operation.value;

        pay.amount += operation.value;
        pay.times += 1;
      }
      if (operation.type === 'Aplico') {
        dayAmount -= operation.value;

        apply.amount += operation.value;
        apply.times += 1;
      }
    });

    pay.mean = this.doMean(pay.amount, pay.times);
    receive.mean = this.doMean(receive.amount, receive.times);
    apply.mean = this.doMean(apply.amount, apply.times);

    return {
      dayAmount,
      payAmount: pay.mean,
      receiveAmount: receive.mean,
      applyAmount: apply.mean
    };
  };

  doMean = (totalAmount, times) => {
    console.log(totalAmount);
    console.log(times);
    return totalAmount / times;
  };
}

export default Finances;
