const exchangeRates = {
  USD: 1,
  EUR: 0.85,
  GBP: 0.75,
  JPY: 110.2
};

export const convert = (req, res) => {
    const { from, to, amount } = req.body;

    if (!from || !to || !amount) {
        return res.status(400).send('Missing required parameters: from, to, amount');
    }

    const amountNumber = parseFloat(amount);
    if (isNaN(amountNumber)) {
        return res.status(400).send('Amount must be a valid number');
    }

    const fromRate = exchangeRates[from.toUpperCase()];
    const toRate = exchangeRates[to.toUpperCase()];

    if (!fromRate || !toRate) {
        return res.status(400).send('Invalid currency code');
    }

    const result = (amountNumber * toRate) / fromRate;
    
    return res.json({
        from,
        to,
        amount: amountNumber,
        convertedAmount: result.toFixed(2),
    });
}