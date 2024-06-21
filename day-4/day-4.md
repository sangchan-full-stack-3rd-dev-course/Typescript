1. Component Type

    - class형 component
    ```ts
        import { Component } from 'react';

        class ClassCom extends Component {
            render() {
                return (
                    <div>
                        클래스형 컴포넌트
                    </div>
                );
            }
        }

        export default ClassCom;
    ```

    - 함수형 component
    ```ts
        /* function FuncCom(){
            return (
                <div>
                    함수형 컴포넌트
                </div>
            );
        }
        */

       const FuncCom = () => {
            return (
                <div>
                    함수형 컴포넌트
                </div>
            );
       }

        export default FuncCom;
    ```

    - class형보다는 함수형 component가 심플하기 때문에 많이 사용함

2. 구조분해할당
- 오른쪽 메소드 리턴 값을 왼쪽 변수들에 할당함
```ts
    const colors = ['red', 'green', 'blue'];
    const [R, G, B] = colors;
    console.log(R); // red
    console.log(G); // green
    console.log(B); // blue
```

3. state
- 사용자의 상호작용으로 수정될 수 있는 변수
- 이를 통해서 화면 리렌더링, 표기되는 값 수정 등 다양한 기능을 구현할 수 있다
- 코드가 줄어들어 가시성이 좋다
```ts
    // 구조 분해 할당
    const [name, setName] = useState<string>('hungs');
    // name : state로 사용되는 변수 이름
    // setName : name 값을 수정하는 메소드 이름
    // useState<string>('hung') : name을 'hung'으로 초기화 + setName 기능 자동 구현
```

4. 데이터 반복 처리
- 배열의 데이터를 반복 처리하고 싶을 때 map함수를 사용한다.
- foreach는 반환값이 없기에 map 함수를 사용!
```ts
    const names = ["A", "B", "C", "D"];

    return (
        <div>
            {
                names.map((name)=>{
                    <div>{name}</div>
                });
            }
        </div>
    );
```

5. 체크박스 기능
- onClick 이벤트에 메소드 삽입

5. 새로운 게시물 추가
- Button tag의 onClick 이벤트로 기존의 todos에 값을 추가한다.
- Button tag를 사용하기 위해 react-bootstrap을 설치함.
- react의 public - index.html에 다음 내용 추가
```html
    <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
        crossorigin="anonymous"
    />
```
- state, input tag, Button tag를 통해 구현 성공

- Button tag 사용 초기에 error 발생
```
    ERROR in src/component/day-4/TodoList.tsx:38:22
    TS2786: 'Button' cannot be used as a JSX component.
    Its return type 'ReactNode' is not a valid JSX element.
        Type 'undefined' is not assignable to type 'Element | null'.
        36 |                         writingMode : 'horizontal-tb'
        37 |                     }}></input>
    > 38 |                     <Button variant="warning" onClick={()=>{console.log(1)}}>추가</Button>
        |                      ^^^^^^
        39 |                 </div>
        40 |                 <p></p>
        41 |                 <div className="board">

    One of your dependencies, babel-preset-react-app, is importing the
    "@babel/plugin-proposal-private-property-in-object" package without
    declaring it in its dependencies. This is currently working because
    "@babel/plugin-proposal-private-property-in-object" is already in your
    node_modules folder for unrelated reasons, but it may break at any time.

    babel-preset-react-app is part of the create-react-app project, which
    is not maintianed anymore. It is thus unlikely that this bug will
    ever be fixed. Add "@babel/plugin-proposal-private-property-in-object" to
    your devDependencies to work around this error. This will make this message
    go away. 
```
- 해결 : typescript 최신 버전 + react-bootstrap 최신 버전으로 업데이트
```sh
    npm install --save @types/react-bootstrap
    npm install typescript@latest
```

6. 타이머, 시계 구현
- state와 setInterval 함수를 사용해 타이머, 시계 기능을 구현 가능