// 변수 데이터 타입 명시
let myName : string = "Sangchan";
let age : number = 28;
let isMarried : boolean = false;
let girlFriend : null = null;
let future : undefined = undefined;
let friends : string[] = ["HakPyo", "minHyuck"];

// 함수 데이터 타입 명시
function Plus(a : number, b : number) : number {
    return a + b;
}

// 인터페이스 -> 함수 데이터 반환 타입
interface Person {
    name : string;
    age : number;
    isMarried : boolean;
}

function getInfo (name : string, age : number, isMarried : boolean) : Person {
    return {
        name : name,
        age : age,
        isMarried : isMarried
    }
};

console.log(getInfo(myName, age, isMarried));

// 인터페이스의 일부 요소 undefined 가능하게 하기
interface Person2 {
    name : string;
    age? : number;
    isMarried? : boolean;
}

function getInfo2 (name : string, age : number | undefined, isMarried : boolean | undefined) : Person2 {
    return {
        name : name,
        age : age,
        isMarried : isMarried
    }
};

console.log(getInfo2(myName, undefined, undefined));

// 인터페이스에 함수 선언 가능 + 클래스 상속 + 메소드 오버라이딩
interface Person3 {
    name : string;
    age? : number;
    isMarried? : boolean;
    setName : (name : string) => void;
}

class RealPerson implements Person3 {
    name : string = "Sangchan";
    age? : number = 28;
    isMarried? : boolean = false;
    setName (newName : string) : void {
        this.name = newName;
    }
}

const myInfo = new RealPerson();
console.log("개명 전:",myInfo)
myInfo.setName("킹콩땅콩이");
console.log("개명 후:",myInfo);

// 열거형
enum MarryStatus {
    Single="솔로에용",
    Married="응 결혼했어"
}

interface Person4 {
    name : string;
    age : number;
    isMarry : MarryStatus;
}

function getInfo4 (name : string, age : number, isMarry : MarryStatus) : Person4 {
    return {
        name : name,
        age : age,
        isMarry : isMarry
    }
}

console.log(getInfo4(myName, age, MarryStatus.Single));