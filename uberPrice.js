class uberPrice{

    constructor(price, distance, time){
        this.price = price;
        this.distance = distance;
        this.time = time;
        const kmPrice = 2;
        const minPrice = .10;
    }
    carType(){
        
    }
    price(){
        let p = this.price;
        let cars = ['UberX', 'UberXL', 'UberBlack', 'UberSUV'];
        const carBasePrice[10, 20, 30, 40] = cars;
        return carBasePrice[p];
    }
    distance(){
        return this.distance;
    }
    time(){
        return this.time;
    }
    totalPrice(){
        let total = this.price + this.distance + this.time;
        return this.price + this.distance + this.time;
    }
}