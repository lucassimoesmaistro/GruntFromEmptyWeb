var Tastes;
(function (Tastes) {
    Tastes[Tastes["Sweet"] = 0] = "Sweet";
    Tastes[Tastes["Sour"] = 1] = "Sour";
    Tastes[Tastes["Salty"] = 2] = "Salty";
    Tastes[Tastes["Bitter"] = 3] = "Bitter";
})(Tastes || (Tastes = {}));
//# sourceMappingURL=Tastes.js.map
class Food {
    constructor(name, calories) {
        this._name = name;
        this._calories = calories;
    }
    get Name() {
        return this._name;
    }
    get Calories() {
        return this._calories;
    }
    get Taste() { return this._taste; }
    set Taste(value) {
        this._taste = value;
    }
}
//# sourceMappingURL=Food.js.map