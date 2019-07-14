
class observer {
    constructor (dataObj) {
        this.data = dataObj;
        if(typeof this.data != 'object') {
            return 
        }
        this.jiechi()
    }

    jiechi() {
        for (var key in this.data) {
            this.caozuojiechi(this.data, key, this.data[key])
        }
    }

    caozuojiechi() {

    }

}

