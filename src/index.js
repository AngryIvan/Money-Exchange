// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    const value = {

    };
    if (currency > 10000) return { error: 'You are rich, my friend! We don\'t have so much coins for exchange' };
    if (currency <= 0) return {};


    let valueH = Math.floor(currency / 50);
    let buffer = currency - valueH * 50;

    let valueQ = Math.floor(buffer / 25);
    buffer = buffer - valueQ * 25;

    let valueD = Math.floor(buffer / 10);
    buffer = buffer - valueD * 10;

    let valueN = Math.floor(buffer / 5);
    buffer = buffer - valueN * 5;

    let valueP = Math.floor(buffer / 1);

    if (valueH !== 0) value['H'] = valueH;
    if (valueQ !== 0) value['Q'] = valueQ;
    if (valueD !== 0) value['D'] = valueD;
    if (valueN !== 0) value['N'] = valueN;
    if (valueP !== 0) value['P'] = valueP;
    return value;
}