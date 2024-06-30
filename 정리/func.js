// 함수 생성 --------------------
// 1. 함수 선언문
function foo1() {
    console.log('foo1');
}
// 2. 함수 표현식
const foo2 = function () {
    console.log('foo2');
};
// 3. Function 생성자 함수
const foo3 = new Function("console.log('foo3')")
// 4. 화살표 함수 표현식
const foo4 = () => {
    console.log('foo4');
};

foo1();
foo2();
foo3();
foo4();

// 함수 형태 --------------------

// 1. IIFE : 즉시 실행 함수
(function foo5() {
    console.log('foo5');
})();

// 2. 재귀함수
function foo6(n) {
    if (n === 0) return;
    console.log(n);
    foo6(n - 1);
}
foo6(5);

// 3. 중첩 함수
function foo7(n) {
    function bar() {
        console.log(n);
    }
    bar();
}
foo7(7);

// 4. 콜백 함수 : () => {} 형식이 콜백함수 (익명 함수)
function foo8(arg){
    arg();
}

foo8(()=>{ 
    console.log('foo8');
});