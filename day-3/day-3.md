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


- public
    - index.html : 실제로 화면에 렌더링 되는 html.
    - index.html 안의 <div id = "root">     