1. 객체 리터럴
- 특정 값을 나타내는 타입.
- 문자열 리터럴, 숫자 리터럴, boolean 리터럴 등이 있다.
- 해당 값 이외의 값이 할당되면 에러가 발생한다.
- 장점 : 가독성이 향상됨 + 잘못된 값이 할당되는 것을 방지함

```ts
    interface Person {
        name : string,
        age : number,
        // gender에는 male, female 이외의 값이 할당되면 에러 발생!
        gender : 'male' | 'female'
    }

    // 정상
    let person1 : Person = {
        name = 'John',
        age = 20,
        gender = 'male'
    }

    // 에러 발생
    let person2 : Person = {
        name = 'Hex',
        age = 31,
        // 여기서 에러 발생!
        gender = 'secret'
    }
```

2. 타입 : any
- 어떤 타입이 할당되도 OK
- 타입을 지정할 수 없는 제한된 경우에만 사용할 것.
- 편하긴 하지만 남용하면 JS와 다를 것이 없게 되서 주의가 필요함.

3. 타입 : Union
- 파이프라인 (|)을 통해서 여러 타입을 지정한다.
```ts
    // union : 해당 타입에는 number, string이 할당될 수 있다.
    type strOrNum = number | string;

    // 오류가 발생하지 않음
    let testA : strOrNum = 1;
    let testB : strOrNum = "One";
```

4. 타입 가드
- typeof 연산자로 변수의 타입을 검증한다.

```ts
    type strOrNum = number | string;

    let testA : strOrNum = 1;
    let testB : strOrNum = "One";

    function DoubleUp(a : strOrNum) : strOrNum {
        // 타입 가드
        if(typeof a === 'string'){
            return "Double " + a;
        } else {
            return a * 2;
        }
    }

    console.log(DoubleUp(testA)); // 2
    console.log(DoubleUp(testB)); // Double One
```

5. array
- 길이가 가변적인 동일한 타입의 요소들로 이루어진 데이터 타입
```ts
    let arr : number[] = [1,2,3];
```


6. tuple
- 길이가 고정적이고, 각 요소들의 타입이 정해진 데이터 타입 (여러 타입)
```ts
    let tuple : [number, number, string] = [1,2,"three"];
```

7. class와 객체
- class : 설계도
- 객체 : class를 통해 만든 실체
```sh
    class 
```

8. 생성자
- 객체 생성 시 자동으로 호출되는 메서드
- 객체의 필드를 초기화 할 때 주로 사용한다.

```ts
    // class 안에 선언
    constructor(a: number, b: number){
        this.a = a;
        this.b = b;
    }
```

9. 접근 지정자
- public : 누구나 접근 가능
- private : 자신 제외 접근 못함
- protected : 자식, 부모는 접근 가능 (상속 관계 o)

```ts
    class Person {
        private name : string;
        public age : number;
        protected gender : Gender;

        constructor(name : string, age : number, gender : Gender){
            this.name = name;
            this.age = age;
            this.gender = gender;
        }
    }

    let sangchan : Person = new Person("snagchan", 28, Gender.Male);
    sangchan.name = "sangsang"; // 에러 발샐
    sangchan.age = 27; // 정상
    snagchan.gender = Gender.Female; // 에러 발생
```

10. getter setter
- 클래스의 필드(변수)에 접근하기 위한 전용 메소드
- getter : 클래스 변수를 반환한다.
- setter : 클래스 변수를 수정한다.

```ts
    class Person {
        private name : string;
        public age : number;
        protected gender : Gender;

        constructor(name : string, age : number, gender : Gender){
            this.name = name;
            this.age = age;
            this.gender = gender;
        }

        get personName(){
            return this.name;
        }

        set personName(newName : string){
            this.name = newName;
        }
    }

    let sangchan : Person = new Person("snagchan", 28, Gender.Male);
    sangchan.name = "sangsang"; // 에러 발샐
    sangchan.personName("sangsu"); // 내부 메소드로 변경 -> 정상 동작
    console.log(sangchan.name)
    console.log(sangchan.personName()) // "sangsu" 출력됨
```