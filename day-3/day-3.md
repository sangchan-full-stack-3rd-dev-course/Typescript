1. React

1) 자바스크립트 라이브러리
2) 사용자 인터페이스를 만들기 위해 페이스북에서 개발
3) SPA 및 모바일 App 개발

2. React 동작 원리

- 초기 렌더링
- 가상 DOM 변경
- 재조정
- 실제 DOM 업데이트

3. React 프로젝트 생성
```sh
    # typesctipt 기반 react 프로젝트 생성 (폴더 이름은 project_name)
    sudo npx create-react-app project_name --template typescript
```

4. JSX 문법1

```js
    // 불편한 기존의 방식
    function App(){
        return React.createElement("p", null, "반갑습니다.");
    }

    // 편리한 JSX문법
    // HTML 문법을 JS 기반으로 사용할 수 있어 편리하다!
    function App(){
        return (
            <div className="App-header">
                <h1> Hello, React !</h1>
                <p> 반갑습니다. </p>
            </div>
        );
    }
```

5. JSX 문법2

```js
    // 변수 사용 가능
    function App(){
        let hello = "반갑습니다.";
        let name = "sangchan";

        return (
            <div className="App-header">
                <h1> Hello, { name !== undefined ? (<h1>{name}</h1>) : (<h1>누구쎄용</h1>) } </h1>
                <p> {hello} </p>
            </div>
        );
    }
```

6. JSX 문법3

- 객체로 component style 설정 가능
- 주석 생성 방법

```js
    // component style 설정 가능
    function App(){
        let hello = "반갑습니다.";
        let name = "sangchan";

        { /* 주석 작성 방법 1 */ }
        // 주석 작성 방법 2
        const div_style = {
            backgroundColor : 'black',
            color : 'white',
            fontSize : '48px',
            fontWeight : 'bold',
            padding : '20px'
        };

        return (
            <div style = {div_style}>
                <h1> Hello, { name !== undefined ? (<h1>{name}</h1>) : (<h1>누구쎄용</h1>) } </h1>
                <p> {hello} </p>
            </div>
        );
    }
```