// 일반적인 직원 정보
let noyeahName: string;
let noYeahAge: number;
let noYeahJob : string;

function printMyEmp(name:string, age:number, job:string){
    // `${name}의 나이는 ${age} 이고 직업은 ${job} 입니다.`
    console.log('class 쓰기 전 : ' + name + '의 나이는 ' + age + "이고, 직업은 " + job + "입니다.");
};

printMyEmp("Sangchan", 28, "Web Developer");

// 직원 정보 -> 타입으로 묶어서 class로 관리
class Emp {
    private name : string;
    private age : number;
    private job : string;

    constructor(name:string, age:number, job:string){
        this.name = name;
        this.age = age;
        this.job = job;
    }

    printEmp = () : void => {
        console.log('class 쓴 후 : ' + this.name + '의 나이는 ' + this.age + "이고, 직업은 " + this.job + "입니다.");
    }
}

// 객체를 생성함
let sangchan = new Emp("sangchan", 28, "Back Su");
// private 이므로 내부 메소드를 통해 클래스 변수 값 출력
sangchan.printEmp();

