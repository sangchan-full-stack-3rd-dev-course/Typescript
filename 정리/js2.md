Flow control
- Goto : 다른 구문에서 시작
- Choice : 조건이 충족될 때만 실행함
- Loop : 조건이 충족될 때까지 반복함
    - Continue : 다음 루프를 실행함
    - break : 루프를 종료함

표현식 (expression)
- 어떤 값으로 이행되는 임의의 유효한 코드 단위
- 결과로 새로운 값을 생성하거나 기존 값을 참조
- 리터럴 표현식, 함수 표현식…

문 (statement)
- 프로그램의 최소 실행 단위
    - 선언문
    - 할당문
    - 제어문 : if, else if, else
    - 반복문
        - Condition loop : while, for(int i=0~~)
        - collection loop : foreach, map 등
    - 블럭문 : function () { /*이 안이 블럭문 범위*/ }

예외 상황(Exception)
- 런타임 때 발생할 수 있는 의도치 않은 상황을 뜻한다.
- 원인
    - 코드 문제
    - 하드웨어, 디바이스 (실행 환경) 문제
    - 라이브러리 손상
    - 사용자의 입력 실수
- Throw : throw 블럭 내의 코드를 실행
- Catch : throw 블럭 코드 실행 중, 에러 발생 시 실행되는 코드들
- finally : 에러가 일어나든 일어나지 않든 마지막에 반드시 실행되는 코드

객체
- 속성(property)을 가진 독립적인 객체 (entity)
- 속성 : key-value의 연결관계
- 속성 접근법
    - 마침표 : 객체.key
    - 대괄호 : 객체[key]
- 속성은 함수도 할당이 가능
- 객체 생성법
    - 리터럴 표기
    - 생성자 함수로 생성
    - Oject.create로 생성
- 객체는 mutable함 (속성 추가, 제거, 수정 자유로움)
- 객체 비교
    - 다른 객체를 비교 : 속성과 그 값들이 같아도 서로 다른 객체임
    - 따라서 객체의 값을 비교해야 함
- 객체 복사
    - 얕은 복사
        - 객체 속성이 하나라도 같은 참조라면 얕은 복사
        - 방법
            - Object.assign({}, 복사할 객체)
            - Spread 연산자 : { …객체 }
    - 깊은 복사
        - 객체 속성이 하나도 같은 참조가 없다면 깊은 복사
        - 방법
            - 재귀함수 (라이브러리 : lodash-cloneDeep 등..)
                - JSON.stringify : 객체 -> 문자열로 변환 -> 객체로 변환 (참조가 끊어짐)
- 객체 종류
    - 표준 빌트인 객체
        - Object, Function, Boolean, Symbol
        - Error
        - Number, BigInt, Math, Date
            - Date : 한국은 UTC 기준 9시간이 더해짐
                - GetTimezoneOffset() // UTC - 현지 시간대 ( 분 단위 )
        - Regex, String
            - Regex (정규표현식) : 문자열에서 특정 문자 조합을 찾기 위한 패턴
        - Collection (Array, Map, Set…)
        - JSON

프로토타입
- 자바스크립트의 모든 객체는 최상위 부모 객체로 프로토타입을 가진다.
- 접근 : __proto__로 접근 (person.__proto__)
    - 객체에 속성이 없을 때, “프로토타입 체인”이 동작함
    - 해당 객체의 부모객체에 속성이 있는지 확인 -> 최상위 부모인 프로토타입까지 확인
    - 없으면 undefined 반환

Class
- 클래스 내에는 매서드만 작성가능
- Constructor : 생성자 -> class의 필드값도 선언 및 초기화 가능
- Method : class 내에서 this로 접근 가능
- Getter, setter
- 상속 : 코드 재사용 관점에서 자식 클래스에 부모 클래스의 필드, 매서드를 사용할 수 있게 함
    - super() : 부모 클래스 매서드 사용할 수 있게 함

This
    - Context 참조 가능한 키워드
    - 객체를 참조하는 역할, 어떤 객체인지는 동적으로 결정됨
    - 함수 Context
            - 함수가 호출될 때 매개변수로 this가 암묵적으로 전달
            - 화살표 함수 : this 제공 안됨 ㅠ
            - 함수 호출 방식
                - 함수 호출
                - 객체 매서드 호출
                - 생성자 함수 호출
                - Apply, call, bind
