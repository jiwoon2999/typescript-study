let 이름: string = 'jeon';
let 나이: number = 34;
let 결혼했니: boolean = true;
let 회원들: string[] = ['jeon', 'lee'];
let 회원들2: { member1: string; member2: string } = { member1: 'jiwoon', member2: 'kaeun' };
let 회워들3 = 'park';

// 숙제 1
// 이름, 나이 출생지역 변수만들기

const myName: string = '전지운';
const myAge: Number = 34;
const myPlaceOfBirth: string = '서울';

// 숙제 2
// 내가 좋아하는 곡과 가수 이름을 변수 object 자료형으로 만들어보기

const myFavoriteSong: { singer: string; song: string } = { singer: '이브', song: '잠에 취해' };

// 숙제 3
// 다음과 같이 생긴 자료의 타입을 지정해보도록 하자
// member 는 문자형 배열자료
// days 는 숫자형
// started 는 불린형

let project: { member: string[]; days: number; started: boolean } = {
  member: ['kim', 'park'],
  days: 30,
  started: true,
};

// Union Type
// number or string
let 회원: number | string = 'kim';
let Member: (number | string)[] = [1, '2', 3];
let 오브젝트: { a: string | number } = { a: '123' };

// any Type
// 아무거나
let 아무거나: any;

// unknown
// any보다 안전함

let 언노운: unknown;
let count = 1;
count + 1;

// 숙제 4
// 다음 변수 4개에 타입을 지정해보기

let user: string = 'kim';
let age: number | undefined = undefined;
let married: boolean = false;
let 철수: (string | number | undefined | boolean)[] = [user, age, married];

// 숙제 5
// 학교라는 변수에 타입을 지정해보자

let 학교: { score: (number | boolean)[]; teacher: string; friend: string | {} } = {
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

function 함수(x: number): number {
  return x * 2;
}

// void는 return하는걸 사전에 막을 때 사용
function 함수2(x: number): void {
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
function 내함수(x: number | string) {
  let array: number[] = [];
  array[0] = x as number;
}

내함수(123);

// type alias 만드는 법
// 대문자
type AnimalType = string | number | undefined;
let 동물: AnimalType = 123;

type Person = { name: string; age: number };

let 사람: Person = { name: 'Jeon', age: 123 };

const 출생지역 = { region: 'seoul' };
출생지역.region = 'busan';

// const 객체 lock 걸기
// type GirlfriendType = {
//   readonly name: string;
// };

// const 여친: GirlfriendType = {
//   name: '엠버',
// };
// 여친.name = '유라';

// type 변수 union type으로 만들기
type NameType = string;
type AgeType = number;
type PersonType = NameType | AgeType;

// &연산자로 obeject타입 extend 하기
// 동일 이름 type 변수 재정의 불가능
type PositionX = { x: number };
type PositionY = { y: number };

type NewType = PositionX & PositionY;

let position: NewType = { x: 10, y: 20 };

// Literal Types
// 더 엄격한 타입지정 가능
// 사전에 정의한 타입만 지정 가능
// 변수에 뭐가 들어올지 더 엄격하게 관리 가능
// 자동완성ㅎㅎ
// const 변수와 유사하게 사용가능

let kim: 'kim';
let num: 123;
// num = 456;

let 접니다: '대머리' | '솔로';

function 함수6(a: 'hello'): 1 | 0 {
  return 1;
}

function 짱꺰뽀(a: '가위' | '바위' | '보'): ('가위' | '바위' | '보')[] {
  return ['가위'];
}

// const 변수

const 변수 = 'kim';

// literal type의 문제점

var 자료 = {
  name: 'kim',
};

function myFunc(a: 'kim') {}
myFunc('kim');
