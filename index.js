var fs = require('fs');

Object.prototype.load = function(filename, cb) {
    fs.readFile(filename, {encoding: 'utf8'}, function(err, data) {
        if (err) return cb(err);
        Object.assign(this, JSON.parse(data));
        return cb(null, data);
    });
};

Object.prototype.loadSync = function(filename) {
    var data = fs.readFileSync(filename, {encoding: 'utf8'});
    if (typeof this === "function") {
        return JSON.parse(data);
    } else {
        //clear object first
        var keys = Object.getOwnPropertyNames(this);
        for (var x=0;x<keys.length;x++) {
            delete this[keys[x]];
        }

        Object.assign(this, JSON.parse(data));
        return this;
    }
};

Object.prototype.save = function(filename, cb) {
    var data = JSON.stringify(this);
    fs.writeFile(filename, data, function(err) {
        if (err) return cb(err);
        return cb(null, data);
    });
};

Object.prototype.saveSync = function(filename) {
    return fs.writeFileSync(filename, JSON.stringify(this));
};

Object.prototype.append = function(filename, cb) {
    fs.readFile(filename, {encoding: 'utf8'}, function(err, data) {
        if (err) return cb(err);
        Object.assign(this, JSON.parse(data));
        return cb(null, data);
    });
};

Object.prototype.appendSync = function(filename) {
    var data = fs.readFileSync(filename, {encoding: 'utf8'});
    Object.assign(this, JSON.parse(data));
    return this;
};