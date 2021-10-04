;
;
//Студенты
var Student = /** @class */ (function () {
    function Student(Name, Patronomic, Lastname, Daystr, Weight, Course, Group, Marks) {
        this._Name = Name;
        this._Patronomic = Patronomic;
        this._Lastname = Lastname;
        this._Daystr = Daystr;
        this._BirthDay = new Date(Daystr);
        this._Weight = Weight;
        this._Course = Course;
        this._Group = Group;
        this._Marks = Marks;
        var av = 0, n = Marks.length;
        for (var i = 0; i < n; i++) {
            av += Marks[i];
        }
        this._AvarageMark = av / n;
    }
    Object.defineProperty(Student.prototype, "Name", {
        get: function () { return this._Name; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "Patronomic", {
        get: function () { return this._Patronomic; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "Lastname", {
        get: function () { return this._Lastname; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "BirthDay", {
        get: function () { return this._BirthDay; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "Daystr", {
        get: function () { return this._Daystr; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "Weight", {
        get: function () { return this._Weight; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "Course", {
        get: function () { return this._Course; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "Group", {
        get: function () { return this._Group; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "Marks", {
        get: function () { return this._Marks; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "AvarageMark", {
        get: function () { return this._AvarageMark; },
        enumerable: true,
        configurable: true
    });
    ;
    return Student;
}());
//Учителя
var Teacher = /** @class */ (function () {
    function Teacher(Name, Patronomic, Lastname, Daystr, Weight, Depart, Exper) {
        this._Name = Name;
        this._Patronomic = Patronomic;
        this._Lastname = Lastname;
        this._Daystr = Daystr;
        this._BirthDay = new Date(Daystr);
        this._Weight = Weight;
        this._Depart = Depart;
        this._Exper = Exper;
    }
    Object.defineProperty(Teacher.prototype, "Name", {
        //private _position: enum;
        get: function () { return this._Name; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Teacher.prototype, "Patronomic", {
        get: function () { return this._Patronomic; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Teacher.prototype, "Lastname", {
        get: function () { return this._Lastname; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Teacher.prototype, "BirthDay", {
        get: function () { return this._BirthDay; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Teacher.prototype, "Daystr", {
        get: function () { return this._Daystr; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Teacher.prototype, "Weight", {
        get: function () { return this._Weight; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Teacher.prototype, "Depart", {
        get: function () { return this._Depart; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Teacher.prototype, "Exper", {
        get: function () { return this._Exper; },
        enumerable: true,
        configurable: true
    });
    ;
    return Teacher;
}());
var Universit = /** @class */ (function () {
    function Universit(Pers) {
        this._Persons = Pers;
    }
    Object.defineProperty(Universit.prototype, "Persons", {
        get: function () { return this._Persons; },
        enumerable: true,
        configurable: true
    });
    Universit.prototype.add = function (person) {
        this._Persons.push(person);
    };
    Object.defineProperty(Universit.prototype, "student", {
        get: function () {
            var per = [];
            for (var _i = 0, _a = this._Persons; _i < _a.length; _i++) {
                var p = _a[_i];
                if (p.Course != undefined && p.Marks != undefined)
                    per.push(p);
            }
            return per;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Universit.prototype, "teachers", {
        get: function () {
            var per = [];
            for (var _i = 0, _a = this._Persons; _i < _a.length; _i++) {
                var p = _a[_i];
                if (p.Exper != undefined)
                    per.push(p);
            }
            return per;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Universit.prototype, "employee", {
        get: function () {
            var per = [];
            for (var _i = 0, _a = this._Persons; _i < _a.length; _i++) {
                var p = _a[_i];
                if (p.Exper == undefined && p.Course == undefined)
                    per.push(p);
            }
            return per;
        },
        enumerable: true,
        configurable: true
    });
    Universit.prototype.FindByLastName = function (lastname) {
        var per = this.Persons.filter(function (value, index, arry) {
            return (value.Lastname == lastname);
        });
        console.log(per);
        return per;
    };
    Universit.prototype.FindByAvagerMark = function (avarageMark) {
        var per = this.student;
        per = per.filter(function (value, index, arry) {
            if (value.AvarageMark != undefined)
                return (value.AvarageMark >= avarageMark);
        });
        per = per.sort(function (a, b) {
            if (a.AvarageMark != undefined && b.AvarageMark != undefined) {
                if (a.AvarageMark > b.AvarageMark)
                    return 1;
                if (a.AvarageMark < b.AvarageMark)
                    return -1;
            }
            return 0;
        });
        return per;
    };
    Universit.prototype.SortPerson = function (pe) {
        for (var _i = 0, pe_1 = pe; _i < pe_1.length; _i++) {
            var per_1 = pe_1[_i];
            per_1.BirthDay = new Date(per_1.Daystr);
        }
        var per = pe.sort(function (a, b) {
            if (a.BirthDay != undefined && b.BirthDay != undefined) {
                if (a.BirthDay < b.BirthDay)
                    return 1;
                if (a.BirthDay > b.BirthDay)
                    return -1;
            }
            return 0;
        });
        return per;
    };
    return Universit;
}());
var Univ;
function show(mas) {
    var div = document.getElementById("tbl");
    var ch = div.childNodes[2];
    div.removeChild(ch);
    var table = document.createElement('table');
    var tr = document.createElement('tr');
    var th0 = document.createElement('th');
    th0.innerHTML = "Имя";
    var th1 = document.createElement('th');
    th1.innerHTML = "Фамилия";
    var th2 = document.createElement('th');
    th2.innerHTML = "Отчество";
    var th3 = document.createElement('th');
    th3.innerHTML = "День рождения";
    var th4 = document.createElement('th');
    th4.innerHTML = "Вес";
    tr.appendChild(th0);
    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);
    tr.appendChild(th4);
    table.appendChild(tr);
    for (var i = 0; i < mas.length; i++) {
        var tr_1 = document.createElement('tr');
        var td0 = document.createElement('td');
        td0.innerHTML = mas[i].Name;
        var td1 = document.createElement('td');
        td1.innerHTML = mas[i].Lastname;
        var td2 = document.createElement('td');
        td2.innerHTML = mas[i].Patronomic;
        var td3 = document.createElement('td');
        td3.innerHTML = mas[i].Daystr;
        var td4 = document.createElement('td');
        td4.innerHTML = String(mas[i].Weight);
        tr_1.appendChild(td0);
        tr_1.appendChild(td1);
        tr_1.appendChild(td2);
        tr_1.appendChild(td3);
        tr_1.appendChild(td4);
        table.appendChild(tr_1);
    }
    div.appendChild(table);
}
function showS(mas) {
    var div = document.getElementById("tbl");
    var ch = div.childNodes[2];
    div.removeChild(ch);
    var table = document.createElement('table');
    var tr = document.createElement('tr');
    var th0 = document.createElement('th');
    th0.innerHTML = "Фамилия";
    var th1 = document.createElement('th');
    th1.innerHTML = "Курс";
    var th2 = document.createElement('th');
    th2.innerHTML = "Группа";
    var th3 = document.createElement('th');
    th3.innerHTML = "День рождения";
    var th4 = document.createElement('th');
    th4.innerHTML = "Стредний балл";
    tr.appendChild(th0);
    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);
    tr.appendChild(th4);
    table.appendChild(tr);
    for (var i = 0; i < mas.length; i++) {
        var tr_2 = document.createElement('tr');
        var td0 = document.createElement('td');
        td0.innerHTML = mas[i].Lastname;
        var td1 = document.createElement('td');
        td1.innerHTML = String(mas[i].Course);
        var td2 = document.createElement('td');
        td2.innerHTML = mas[i].Group;
        var td3 = document.createElement('td');
        td3.innerHTML = mas[i].Daystr;
        var td4 = document.createElement('td');
        td4.innerHTML = String(mas[i].AvarageMark);
        tr_2.appendChild(td0);
        tr_2.appendChild(td1);
        tr_2.appendChild(td2);
        tr_2.appendChild(td3);
        tr_2.appendChild(td4);
        table.appendChild(tr_2);
    }
    div.appendChild(table);
}
function addFileInfo() {
    var files = document.getElementById('bd');
    var selectedFile = files.files[0];
    var fr = new FileReader();
    fr.readAsText(selectedFile);
    fr.onload = function () {
        var data = JSON.parse(fr.result);
        for (var i = 0; i < data.length; i++) {
            if (data[i].Marks != undefined) {
                var av = 0, n = data[i].Marks.length;
                for (var j = 0; j < n; j++) {
                    av += data[i].Marks[j];
                }
                data[i].AvarageMark = av / n;
            }
        }
        Univ = new Universit(data);
        var mas = Univ.Persons;
        show(mas);
    };
}
function search_ln() {
    var ln = document.getElementById("Slastname").value;
    var mas = Univ.FindByLastName(ln);
    show(mas);
}
function search_am() {
    var am = document.getElementById("Smark").value;
    var mas = Univ.FindByAvagerMark(parseInt(am));
    showS(mas);
}
function getT() {
    var mas = Univ.teachers;
    show(mas);
}
function getE() {
    var mas = Univ.employee;
    show(mas);
}
function getS() {
    var mas = Univ.student;
    showS(mas);
}
function addP() {
    var name = document.getElementById('name').value;
    var lastname = document.getElementById('lastname').value;
    var patronomic = document.getElementById('patronomic').value;
    var birthDay = document.getElementById('birthDay').value;
    var weight = document.getElementById('weight').value;
    var person = { Name: name, Lastname: lastname, Patronomic: patronomic, Daystr: birthDay, Weight: parseInt(weight) };
    Univ.add(person);
    var mas = Univ.Persons;
    show(mas);
}
