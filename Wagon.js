class Wagon {

    constructor(capacity) {
        this.capacity = capacity;
        this.passengers = [];

    }

    getAvailableSeatCount() {

        this.availableSeat = this.capacity - this.passengers.length;
        if (this.availableSeat >= 0) {
            return this.availableSeat;
        } else {
            return 0;
        }

    }

    join(traveler) {
        this.traveler = traveler;
        this.getAvailableSeatCount();
        if (this.availableSeat > 0) {
            this.passengers.push(this.traveler);
        }
    }

    shouldQuarantine() {
        
        let isCarantine = this.passengers.some(item => item.isHealthy === false);
       
        return isCarantine;
        
    }

    totalFood() {
        
        return this.passengers.reduce((sum, item) => sum + item.food, 0);
    }



}