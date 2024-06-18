1. 타입 스크립트 설치

```sh
    sudo npm i -g typescript
```

2. 타입 스크립트 컴파일

- 컴파일

```sh
    tsc file-name.ts
```

- 파일 감시 -> 파일 내용 변경 될 때마다 자동 컴파일

```sh
    tsc -w file-name.ts
```

3. 타입 스크립트 컴파일 없이 실행

- ts-node 모듈 설치

```sh
    sudo npm i -g ts-node
```

- ts-node로 ts파일 실행

```sh
    ts-node file-name.ts
```

4. 타입스크립트

- 자바스크립트 + 타입 체크
- 유지보수가 쉬움
- 자바스크립트보다 타입 관련 버그를 줄일 수 있음
- 타입 추론 -> 변수 타입을 자동으로 판단 (하지만 코드 안정성을 위해 명시적으로 타입 지정하는 것이 좋음)

5. 타입스크립트 데이터 타입
- 자바스크립트 데이터 타입 (number, string, boolean, null, undefined, array, object)
- 추가 지원 데이터 타입 (tuple, any, unknown, enum, interface) 등..

6. 타입 명시
- 변수 선언할 때 타입을 명시 -> 코드 안정성에 좋음
- 컴파일 할 때, 데이터 타입에 다른 값이 할당되면 오류 발생

```ts
    // 정상
    let name : string = "Sangchan";
    // 오류 발생
    let yourName : string = 1;
```

7. 함수 타입 명시
- 인자값과 반환값의 타입을 명시할 수 있음

```ts
    function Plus(a : number, b : number) : number{
        retunr a + b;
    }
```

8. 인터페이스
- 사용자 정의 타입
- 선택적인 프로퍼티를 지정 -> 속성값 뒤에 ? 붙이기
- 메소드 선언 가능 -> 클래스 상속 -> 메소드 오버라이딩 필요 ( 구현 )

```ts
    interface Student{
        name : string,
        age? : number,
        setName : (name : string) : void;
    }

    class MyStudent implements Student {
        name : string;
        age? : number;
        setName(name : string) : void {
            this.name = name
        }
    }
```

9. 열거형
- 값의 default가 number (0부터 시작)
- 문자열 등, 다른 타입으로 값을 설정할 수 있음

```ts
    // default number
    enum Gender1{
        Male,
        Female
    }

    // string
    enum Gender2{
        Male="남자",
        Female="여자"
    }

    // 두 enum의 차이는 출력 시 알 수 있음
    console.log(Gender1.Male) // "0"
    console.log(Gender2.Male) // "남자"
```