function Dictionary() {
    this.datastore = [];
    this.add = (k, v) => {
        if (k && v) {
            this.datastore.push({
                key: k,
                value: v
            })
        }
    };
    this.removeAt = k => {
        for (let i = 0; i < this.datastore.length; i++) {
            if (this.datastore[i].key === k) {
                this.datastore.splice(this.datastore[i], 1);
                break;
            }
        }
    };
    this.findEntry = k => {
        for (let i = 0; i < this.datastore.length; i++) {
            if (this.datastore[i].key === k) {
                return this.datastore[i];
            }
        }
        return false;
    };
    this.size = () => {
        return this.datastore.length;
    }
};

//const myDictionary = new Dictionary();