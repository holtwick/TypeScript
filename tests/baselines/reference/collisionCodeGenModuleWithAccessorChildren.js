//// [collisionCodeGenModuleWithAccessorChildren.ts]
module M {
    export var x = 3;
    class c {
        private y;
        set Z(M) {
            this.y = x;
        }
    }
}

module M {
    class d {
        private y;
        set Z(p) {
            var M = 10;
            this.y = x;
        }
    }
}

module M { // Shouldnt be _M
    class e {
        private y;
        set M(p) {
            this.y = x;
        }
    }
}

module M {
    class f {
        get Z() {
            var M = 10;
            return x;
        }
    }
}

module M { // Shouldnt be _M
    class e {
        get M() {
            return x;
        }
    }
}

//// [collisionCodeGenModuleWithAccessorChildren.js]
var M;
(function (_M) {
    _M.x = 3;
    var c = (function () {
        function c() {
        }
        Object.defineProperty(c.prototype, "Z", {
            set: function (M) {
                this.y = _M.x;
            },
            enumerable: true,
            configurable: true
        });
        return c;
    })();
})(M || (M = {}));
var M;
(function (_M_1) {
    var d = (function () {
        function d() {
        }
        Object.defineProperty(d.prototype, "Z", {
            set: function (p) {
                var M = 10;
                this.y = _M_1.x;
            },
            enumerable: true,
            configurable: true
        });
        return d;
    })();
})(M || (M = {}));
var M;
(function (M) {
    var e = (function () {
        function e() {
        }
        Object.defineProperty(e.prototype, "M", {
            set: function (p) {
                this.y = M.x;
            },
            enumerable: true,
            configurable: true
        });
        return e;
    })();
})(M || (M = {}));
var M;
(function (_M_2) {
    var f = (function () {
        function f() {
        }
        Object.defineProperty(f.prototype, "Z", {
            get: function () {
                var M = 10;
                return _M_2.x;
            },
            enumerable: true,
            configurable: true
        });
        return f;
    })();
})(M || (M = {}));
var M;
(function (M) {
    var e = (function () {
        function e() {
        }
        Object.defineProperty(e.prototype, "M", {
            get: function () {
                return M.x;
            },
            enumerable: true,
            configurable: true
        });
        return e;
    })();
})(M || (M = {}));