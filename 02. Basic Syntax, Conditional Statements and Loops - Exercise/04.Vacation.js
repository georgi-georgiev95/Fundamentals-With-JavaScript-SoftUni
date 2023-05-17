function solve(groupCount, groupType, dayOfTheWeek) {
    let price = 0;
    switch(dayOfTheWeek) {
        case 'Friday':
            switch(groupType) {
                case 'Students':
                price = 8.45;
                break;
                case 'Business':
                price = 10.90;
                break;
                case 'Regular':
                price = 15;
                break;
            }
        break;
        case 'Saturday':
            switch(groupType) {
                case 'Students':
                price = 9.80;
                break;
                case 'Business':
                price = 15.60;
                break;
                case 'Regular':
                price = 20;
                break;
            }
        break;
        case 'Sunday':
            switch(groupType) {
                case 'Students':
                price = 10.46;
                break;
                case 'Business':
                price = 16;
                break;
                case 'Regular':
                price = 22.50;
                break;
            }
        break;
    }
    let totalPrice = price*groupCount;
    if (groupType === 'Students') {
        if (groupCount >= 30) {
            totalPrice-=totalPrice*0.15;
        }
    } else if (groupType === 'Business') {
        if (groupCount >= 100) {
            totalPrice-=10*price;
        }
    } else if (groupType === 'Regular') {
        if (groupCount >= 10 && groupCount <= 20) {
            totalPrice-=totalPrice*0.05;
        }
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}