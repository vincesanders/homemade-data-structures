function ExpandedSet() {
    let set = [];

    this.has = element => {
        for (let i = 0; i < set.length; i++) {
            if (set[i] === element) {
                return true;
            }
        }
        return false;
    };
    
    this.values = () => {
        return set;
    };
    
    this.add = element => {
        if (!this.has(element)) {
            set.push(element);
        } 
    };
    
    this.delete = element => {
        if (this.has(element)) {
            let index;
            for (let i = 0; i < set.length; i++) {
                if (set[i] === element) {
                    index = i;
                    break;
                }
            }
            set.splice(index, 1);
        }
    };

    //return a combination of the 2 sets without any duplicates.
    this.union = otherSet => {
        let unionSet = new ExpandedSet();
        let thisSet = this.values();
        thisSet.forEach(element => {
            unionSet.add(element);
        });
        otherSet.forEach(element => {
            unionSet.add(element);
        });
        return unionSet;
    };
    
    //returns a set with elements that are in both sets
    this.intersection = otherSet => {
        let intersection = new ExpandedSet();
        let thisSet = this.values();
        thisSet.forEach(element => {
            if (otherSet.has(element)) {
                intersection.add(element);
            }
        });
        return intersection;
    };
    //returns a set filled only with elements that are not in both sets.
    this.difference = otherSet => {
        let difference = new ExpandedSet();
        let thisSet = this.values();
        thisSet.values().forEach(element => {
            if (!otherSet.has(element)) {
                difference.add(element);
            }
        });
        return difference;
    }
    
    //test if this set is a subset of otherSet
    this.subset = otherSet => {
        let thisSet = this.values();
        return thisSet.every(element => {
            return otherSet.has(element);
        })
    };
}

export default ExpandedSet;