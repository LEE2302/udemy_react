//export와 import 사용법
// //export(값 보내기)
// //1번 export default 사용/ 주소 : person.js
// `1. 'export default 변수명(함수명)'`
// //2번 3번 export만 사용 / 주소 : utility.js
// `2. 'export const clean = () => {...}'`
// `3. 'export const baseData = 10;'`

// //import(값 받기)
// //주소: app.js
// //default값을 받을때는 그값을 그대로 받기때문에 변수명을 정확히 안적어줘도됨
// `1. import person(변수명) from'./person.js`
// `2. import prs(변수명) from './person.js`
// //그냥 export한 경우는 정확한 변수명(함수명)을 적어줘야함
// `1. import {baseData} from'./utility.js'`
// `2. import {clean} from'./utility.js'`
