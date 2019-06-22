class Finances {
  doCalculateDayAmount = (startingMoney, operations) => {
    console.log(operations);
    console.log(startingMoney);
    let amount = startingMoney;

    operations.forEach(operation => {
      if (operation.type === 'Recebo') {
        amount += operation.value;
      }
      if (operation.type === 'Pago') {
        amount -= operation.value;
      }
      if (operation.type === 'Aplico') {
        amount -= operation.value;
      }
    });

    return amount;
  };
}

export default Finances;
