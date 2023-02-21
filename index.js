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
