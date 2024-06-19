    // union : 해당 타입에는 number, string이 할당될 수 있다.
    type strOrNum = number | string;

    // 오류가 발생하지 않음
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


    // 배열
    // 길이 가변적 + 동일한 타입의 요소
    let numbers : number[] = [1, 2, 3, 4];
    let strings : string[] = ["One", "Two", "Three", "Four"];

    for(let i = 0; i < 4; i++){
        console.log(numbers[i]);
        console.log(strings[i]);
    }

    // 배열 union
    let mixedArr : strOrNum[] = [1, "two", 3, "four"];
    let mixedArr2 : (number|string)[] = ["A", 6, "B", 8];

    // ReadOnly : 해당 배열의 수정, 추가, 삭제 불가능
    // 오직 읽는 것만 가능함
    let readOnlyArr : ReadonlyArray<number> = [1, 2, 3, 4];

    // tuple : 타입의 순서가 정해져 있음
    // 길이 고정적 + 여러 타입의 요소 (각 요소 타입을 정할 수 있음)
    let tupleA : [number, number, string] = [1, 2, 'three']

    // spread 연산자 (...)
    let arr1 : number[] = [1, 2, 3];
    let arr2 : number[] = [4, 5, 6];

    let arr3 : number[] = [...arr1, ...arr2];
    console.log(arr3); // [1, 2, 3, 4, 5, 6]