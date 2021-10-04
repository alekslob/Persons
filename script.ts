interface IPerson {
    Name: string,
    Patronomic: string,
    Lastname: string,
    Daystr?: string,
    Weight?: number,
    BirthDay?: Date,

    Course?: number,
    Group?: string,
    AvarageMark?: number,
    Marks?: number[],

    Depart?: string;
    Exper?: number;
    //Position?: enum;
};

interface University {
    Persons: IPerson[]
};

//Студенты
class Student implements IPerson {
    private _Name: string;
    private _Patronomic: string;
    private _Lastname: string;
    private _BirthDay?: Date;
    private _Daystr?: string;
    private _Weight?: number;
    private _Course?: number;
    private _Group?: string;
    private _AvarageMark?: number;
    private _Marks?: number[];

    get Name() { return this._Name; }
    get Patronomic() { return this._Patronomic; }
    get Lastname() { return this._Lastname; }
    get BirthDay() { return this._BirthDay; }
    get Daystr() {return this._Daystr; }
    get Weight() { return this._Weight; }
    get Course() { return this._Course; }
    get Group() { return this._Group; }
    get Marks() { return this._Marks; }
    get AvarageMark() { return this._AvarageMark; }

    constructor(Name: string,
        Patronomic: string,
        Lastname: string,
        Daystr: string,
        Weight: number,
        Course: number,
        Group: string,
        Marks: number[]) {
        this._Name = Name;
        this._Patronomic = Patronomic;
        this._Lastname = Lastname;
        this._Daystr = Daystr;
        this._BirthDay = new Date(<string>Daystr);
        this._Weight = Weight;
        this._Course = Course;
        this._Group = Group;
        this._Marks = Marks;
        let av: number = 0, n: number = Marks.length;
        for (let i = 0; i < n; i++) {
            av += Marks[i];
        }
        this._AvarageMark = av/n
    };
}

//Учителя
class Teacher implements IPerson {
    private _Name: string;
    private _Patronomic: string;
    private _Lastname: string;
    private _BirthDay?: Date;
    private _Daystr?: string;
    private _Weight?: number;
    private _Depart?: string;
    private _Exper?: number;
    //private _position: enum;

    get Name() { return this._Name; }
    get Patronomic() { return this._Patronomic; }
    get Lastname() { return this._Lastname; }
    get BirthDay() { return this._BirthDay; }
    get Daystr() { return this._Daystr; }
    get Weight() { return this._Weight; }
    get Depart() { return this._Depart; }
    get Exper() { return this._Exper; }

    constructor(Name: string,
        Patronomic: string,
        Lastname: string,
        Daystr: string,
        Weight: number,
        Depart: string,
        Exper: number) {
        this._Name = Name;
        this._Patronomic = Patronomic;
        this._Lastname = Lastname;
        this._Daystr = Daystr;
        this._BirthDay = new Date(<string>Daystr);
        this._Weight = Weight;
        this._Depart = Depart;
        this._Exper = Exper;
    };
}

class Universit implements University {
    private _Persons: IPerson[];

    constructor(Pers:IPerson[]) {
        this._Persons = Pers;
    }

    get Persons():IPerson[] { return this._Persons; }

    add(person: IPerson){
        this._Persons.push(person)
    }

    get student():Student[]{
        let per:Student[] = [];
        for( const p of this._Persons)
            if(p.Course != undefined && p.Marks != undefined)
                per.push(<Student>p);
        return per;
    }

    get teachers():Teacher[]{
        let per:Teacher[] = [];
        for(const p of this._Persons)
            if(p.Exper != undefined)
                per.push(<Teacher>p);
        return per;
    }

    get employee():IPerson[]{
        let per:Teacher[] = [];
        for(const p of this._Persons)
            if(p.Exper == undefined && p.Course == undefined)
                per.push(<Teacher>p);
        return per;
    }

    FindByLastName(lastname: string): IPerson[] {
        let per: IPerson[] = this.Persons.filter((value, index, arry) => {
            return (value.Lastname == lastname);
        });
        console.log(per)
        return per;
    }

    FindByAvagerMark(avarageMark: number): Student[] {
        let per: Student[] = this.student;
        per = per.filter((value, index, arry) => {
            if (value.AvarageMark != undefined)
                return (value.AvarageMark >= avarageMark);
        });
        per = per.sort((a, b) => {
            if (a.AvarageMark != undefined && b.AvarageMark != undefined) {
                if (a.AvarageMark > b.AvarageMark) return 1;
                if (a.AvarageMark < b.AvarageMark) return -1;
            }
            return 0;
        })
        return per;
    }

    SortPerson(pe:IPerson[]) {

        for(const per of pe){
            per.BirthDay = new Date(<string>per.Daystr);
        }
        let per: IPerson[] = pe.sort((a, b) => {
            if (a.BirthDay != undefined && b.BirthDay != undefined) {
                if (a.BirthDay < b.BirthDay) return 1;
                if (a.BirthDay > b.BirthDay) return -1;
            }
            return 0;
        });
        return per;
    }
}

var Univ:Universit;

function show(mas:IPerson[]){
    let div = document.getElementById("tbl")
    let ch = div.childNodes[2]
    div.removeChild(ch)
    let table = document.createElement('table')
    let tr = document.createElement('tr')
    let th0 =  document.createElement('th')
    th0.innerHTML = "Имя"
    let th1 =  document.createElement('th')
    th1.innerHTML = "Фамилия"
    let th2 =  document.createElement('th')
    th2.innerHTML = "Отчество"
    let th3 =  document.createElement('th')
    th3.innerHTML = "День рождения"
    let th4 =  document.createElement('th')
    th4.innerHTML = "Вес"
    tr.appendChild(th0)
    tr.appendChild(th1)
    tr.appendChild(th2)
    tr.appendChild(th3)
    tr.appendChild(th4)
    table.appendChild(tr)
    for(let i = 0; i<mas.length;i++){
        let tr = document.createElement('tr')
        let td0 =  document.createElement('td')
        td0.innerHTML = mas[i].Name
        let td1 =  document.createElement('td')
        td1.innerHTML = mas[i].Lastname
        let td2 =  document.createElement('td')
        td2.innerHTML = mas[i].Patronomic
        let td3 =  document.createElement('td')
        td3.innerHTML = mas[i].Daystr
        let td4 =  document.createElement('td')
        td4.innerHTML = String(mas[i].Weight)
        tr.appendChild(td0)
        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tr.appendChild(td4)
        table.appendChild(tr)
    }
    div.appendChild(table)
}

function showS(mas:IPerson[]){
    let div = document.getElementById("tbl")
    let ch = div.childNodes[2]
    div.removeChild(ch)
    let table = document.createElement('table')
    let tr = document.createElement('tr')
    let th0 =  document.createElement('th')
    th0.innerHTML = "Фамилия"
    let th1 =  document.createElement('th')
    th1.innerHTML = "Курс"
    let th2 =  document.createElement('th')
    th2.innerHTML = "Группа"
    let th3 =  document.createElement('th')
    th3.innerHTML = "День рождения"
    let th4 =  document.createElement('th')
    th4.innerHTML = "Стредний балл"
    tr.appendChild(th0)
    tr.appendChild(th1)
    tr.appendChild(th2)
    tr.appendChild(th3)
    tr.appendChild(th4)
    table.appendChild(tr)
    for(let i = 0; i<mas.length;i++){
        let tr = document.createElement('tr')
        let td0 =  document.createElement('td')
        td0.innerHTML = mas[i].Lastname
        let td1 =  document.createElement('td')
        td1.innerHTML = String(mas[i].Course)
        let td2 =  document.createElement('td')
        td2.innerHTML = mas[i].Group
        let td3 =  document.createElement('td')
        td3.innerHTML = mas[i].Daystr
        let td4 =  document.createElement('td')
        td4.innerHTML = String(mas[i].AvarageMark)
        tr.appendChild(td0)
        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tr.appendChild(td4)
        table.appendChild(tr)
    }
    div.appendChild(table)
}

function addFileInfo(){
    let files = <HTMLInputElement>document.getElementById('bd');
    let selectedFile = files.files[0];
    let fr = new FileReader();
    fr.readAsText(selectedFile);
    fr.onload = function () {
        let data = <IPerson[]>JSON.parse(<string>fr.result);
        for (let i = 0; i<data.length; i++){
            if (data[i].Marks != undefined){
                let av: number = 0, n: number = data[i].Marks.length;
                for (let j = 0; j < n; j++) {
                    av += data[i].Marks[j];
                }
                data[i].AvarageMark = av/n
            }
        }
        Univ = new Universit(data);
        let mas: IPerson[] = Univ.Persons
        show(mas)
    }
}

function search_ln(){
    let ln: string = (<HTMLInputElement>document.getElementById("Slastname")).value
    let mas: IPerson[] = Univ.FindByLastName(ln)
    show(mas)
}

function search_am(){
    let am: string = (<HTMLInputElement>document.getElementById("Smark")).value
    let mas: IPerson[] = Univ.FindByAvagerMark(parseInt(am))
    showS(mas)
}

function getT(){
    let mas: IPerson[] = Univ.teachers
    show(mas)
}

function getE(){
    let mas: IPerson[] = Univ.employee
    show(mas)
}

function getS(){
    let mas: IPerson[] = Univ.student
    showS(mas)
}

function addP(){
    let name = (<HTMLInputElement>document.getElementById('name')).value;
    let lastname = (<HTMLInputElement>document.getElementById('lastname')).value;
    let patronomic = (<HTMLInputElement>document.getElementById('patronomic')).value;
    let birthDay = (<HTMLInputElement>document.getElementById('birthDay')).value;
    let weight = (<HTMLInputElement>document.getElementById('weight')).value;
    let person:IPerson={Name:name, Lastname:lastname, Patronomic:patronomic, Daystr:birthDay, Weight:parseInt(weight)}
    Univ.add(person)
    let mas: IPerson[] = Univ.Persons
    show(mas)
}