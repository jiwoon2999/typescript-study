let 이름 = 'jeon';
let 나이 = 34;
let 결혼했니 = true;
let 회원들 = ['jeon', 'lee'];
let 회원들2 = { member1: 'jiwoon', member2: 'kaeun' };
let 회워들3 = 'park';
// 숙제 1
// 이름, 나이 출생지역 변수만들기
const myName = '전지운';
const myAge = 34;
const myPlaceOfBirth = '서울';
// 숙제 2
// 내가 좋아하는 곡과 가수 이름을 변수 object 자료형으로 만들어보기
const myFavoriteSong = { singer: '이브', song: '잠에 취해' };
// 숙제 3
// 다음과 같이 생긴 자료의 타입을 지정해보도록 하자
// member 는 문자형 배열자료
// days 는 숫자형
// started 는 불린형
let project = {
    member: ['kim', 'park'],
    days: 30,
    started: true,
};
// Union Type
// number or string
let 회원 = 'kim';
let Member = [1, '2', 3];
let 오브젝트 = { a: '123' };
// any Type
// 아무거나
let 아무거나;
// unknown
// any보다 안전함
let 언노운;
let count = 1;
count + 1;
// 숙제 4
// 다음 변수 4개에 타입을 지정해보기
let user = 'kim';
let age = undefined;
let married = false;
let 철수 = [user, age, married];
// 숙제 5
// 학교라는 변수에 타입을 지정해보자
let 학교 = {
    score: [100, 97, 84],
    teacher: 'Phil',
    friend: 'John',
};
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher];
// 함수
// 타입 지정된 파라미터는 필수!
// 파라미터가 옵션일 경우에는 x?: 타입을 넣음
// ? 는 undefined가 포함된 Union Type과 같음
// 변수? : number는 변수 :number | undefined와 같음
function 함수(x) {
    return x * 2;
}
// void는 return하는걸 사전에 막을 때 사용
function 함수2(x) {
    1 + 1;
}
// function 문제(x: number | string): void {
//   console.log(x + 3);
// }
// 숙제 1
// 이름을 파라미터로 입력하면 콘솔창에 안녕하세요 누구누구 출력
// 파라미터를 입력하지 않은 함수를 호출하면 이름이 없습니다 출력
// function sayHi(x?: string) {
//   if (x) {
//     console.log(`안녕하세요 ${x}`);
//   } else {
//     console.log('이름이 없습니다.');
//   }
// }
// console.log(sayHi('지운'));
// console.log(sayHi());
// 숙제 2
// 숫자 또는 문자를 넣으면 자릿수를 세어 출력해주는 함수 만들어보자
// '123' => 3
// 1234 => 4
// function counting(x: string | number) {
//   if (typeof x === 'string') {
//     console.log(x.length);
//   } else if (typeof x === 'number') {
//     console.log(x.toString().length);
//   }
// }
// console.log(counting('안녕하십니까'));
// console.log(counting(5345));
// 숙제 3
// 결혼 가능 확률을 알려주는 함수를 만들어보자
// 1. 함수의 파라미터로 월소득(만원단위), 집보유여부(true/false), 매력점수 ('상' or '중' or '하') 를 입력할 수 있어야합니다.
// 2. 월소득은 만원 당 1점, 집보유시 500점 & 미보유시 0점, 매력점수는 '상'일 때만 100점으로 계산합니다.
// 3. 총 점수가 600점 이상일 경우 "결혼가능"을 return 해줘야합니다. 그 외엔 아무것도 return하지 않습니다.
// 고민해보고 풀어보기
// Narrowing
// 대표적인 방법은 typeof 연산자 사용
// if => else, else if 써야 에러 안남
// Narrowing 으로 판정해주는 문법들
// 속성명 in 오브젝트자료
// 인스턴스 instanceof 부모
// 현재 변수의 타입이 무엇인지 특정지을 수 있으면 가능
// assertion 문법
// 타입 덮어쓰기 => if문 안써도 됨
// 용도 union type을 하나로 확정할 때 사용하는 것!
// 타입을 a 에서 b로 변경 안됌
// 1. Narrowing 할때 사용
// 2. 어떤 타입이 들어올지 100% 확실할 때 사용
// as 문법은 에러 감시 안됨
function 내함수(x) {
    let array = [];
    array[0] = x;
}
내함수(123);
let 동물 = 123;
// type Person = { name: string; age: number };
// let 사람: Person = { name: 'Jeon', age: 123 };
const 출생지역 = { region: 'seoul' };
출생지역.region = 'busan';
let position = { x: 10, y: 20 };
// Literal Types
// 더 엄격한 타입지정 가능
// 사전에 정의한 타입만 지정 가능
// 변수에 뭐가 들어올지 더 엄격하게 관리 가능
// 자동완성ㅎㅎ
// const 변수와 유사하게 사용가능
let kim;
let num;
// num = 456;
let 접니다;
function 함수6(a) {
    return 1;
}
function 짱꺰뽀(a) {
    return ['가위'];
}
// const 변수
const 변수 = 'kim';
// literal type의 문제점
var 자료 = {
    name: 'kim',
};
function myFunc(a) { }
myFunc('kim');
let 함수함수 = function (a) {
    return 10;
};
let 회원정보 = {
    name: 'kim',
    plusOne(a) {
        return a + 1;
    },
    changeName: (b) => { },
};
회원정보.plusOne(123);
// typescript로 DOM 조작하기
let title = document.querySelector('#title');
// 첫번째 방법
if (title != null) {
    title.innerHTML = '반가워용';
}
// 두번째 방법 - instanceof 연산자
if (title instanceof Element) {
    title.innerHTML = '반갑습네다';
}
// 세번째 방법 - as 키워드 사용
// let title = document.querySelector('#title') as Element;
// 네번째 방법 - ?. (옵셔널 체이닝)
if (title?.innerHTML != undefined) {
    title.innerHTML = '하이하이';
}
// 다섯번째 방법 - tsconfig.json 파일에 strict 모드 끄기
let link = document.querySelector('.link');
if (link instanceof HTMLAnchorElement) {
    link.href = 'https://kakao.com';
}
// HTMLAnchorElement 타입
// object 타입정의 잘 되어 있음
// href, style, class 사용 가능
// eventListener 사용하는 방법
let btn = document.querySelector('#button');
btn?.addEventListener('click', () => { });
// class 이해하기
// 비슷한 객체를 생성하는 문법
// function 기계(q: string, w: string) {
//   (this.q = 'consume'), (this.w = 'snowball');
// }
// 기계.prototype.name = 'Jeon';
// let jiwoon = new 기계('왕펀치', '수퍼왕펀치');
// console.log(jiwoon);
// let kaeun = new 기계('망치질', '수퍼왕망치질');
// console.log(kaeun);
// Array.prototype.함수 = function () {};
// let array = [4, 2, 1];
// class 만들어보기
// typescript는 필드값에 속성값이 있어야 함. 필수!!
class Person {
    name;
    constructor(name) {
        this.name = name;
    }
    sayHi(name) {
        console.log(`안녕? 나는 ${name} 이라고 해`);
    }
}
let person1 = new Person('Jeon');
let person2 = new Person('Kaeun');
person1.sayHi('jiwoon');
let 네모 = { color: 'red', width: 100 };
let student = { name: 'kim' };
// 복습의 시간이 찾아왔다
// 타입 주석 (type annotation)
// 타입 추론 (type inference)
let n = 1; //  let n = 1; => 타입을 number로 판단
let b = true; // let b = true; => 타입을 boolean으로 판단
let s = 'hihi'; // let s = 'hihi' => 타입을 string으로 판단
let o = {}; // => let o = {}; 타입을 object로 판단
// let 키워드 => 타입주석의 타입에 해당하는 값으로만 변경이 가능하다
// n = '1';
// b = 123;
// s = 11;
// o = 'hi';
// any 타입
// 타입 추론이 안됨
// any타입 쓸거면 그냥 자바스크립트 써라?
let a = 0;
a = 'hi';
a = false;
a = {};
a = [];
// any 타입보다 unknown더 안전하다는데
// 타입 추론이 안되는 것 같음
let c = 123;
c = 'hello';
let obj = { name: 'jiwoon', age: 100 };
obj = { region: 'seoul', nickName: 'JJI' };
console.log(obj);
let good1 = { name: 'jiwoon', age: 123 };
// 익명 인터페이스
// interface 키워드 X, 이름 X
let ai = { name: 'jiwoon', age: 123123 };
