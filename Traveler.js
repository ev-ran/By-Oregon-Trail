class Traveler {

    constructor(name) {
        
        this.name = name;
        this.food = 1;
        this.isHealthy = true;
        this.id = Math.random() * 10;
        this.inWagon = false;
    }

    hunt() {
        this.food += 2;

        if (this.food > 0) {

            this.isHealthy = true;
        } else {
            
            this.isHealthy = false;
        }
    }

    eat() {

        this.food -= 1;
        if (this.food > 0) {

            this.isHealthy = true;
        } else {
            
            this.isHealthy = false;
            this.food = 0;
        }

    }
    
}