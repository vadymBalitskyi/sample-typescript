//readonly - is forbidden to change value
//? - field is not required
var rect1 = {
    id: '1234',
    size: {
        width: 20,
        height: 30
    },
    color: '#ccc'
};
var rect2 = {
    id: '1235',
    size: {
        width: 10,
        height: 5
    }
};
rect2.color = '#ddd';
// rect2.id = 'asd' - readonly
var rect3 = {};
var rect4 = {};
var rect5 = {
    id: '123',
    size: {
        width: 20,
        height: 20
    },
    getArea: function () {
        return this.size.width * this.size.height;
    }
};
var Clock = /** @class */ (function () {
    function Clock() {
        this.time = new Date();
    }
    Clock.prototype.setTime = function (date) {
        this.time = date;
    };
    return Clock;
}());
var css = {
    border: '1px solid #ddd',
    marginTop: '2px',
    borderRadius: '5px'
};
