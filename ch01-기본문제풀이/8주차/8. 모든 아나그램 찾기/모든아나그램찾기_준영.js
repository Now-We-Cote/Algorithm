/**
 * 모든 아나그램 찾기(해쉬, 투포인터, 슬라이딩 윈도우)
 *
 * 문제 - S문자열에서 T문자열과 아나그램이 되는 S의 부분문자열의 개수를 구하는 프로그램을 작성하세요.
 * 아나그램 판별시 대소문자가 구분됩니다. 부분문자열은 연속된 문자열이어야 합니다.
 *
 * 입력 - 첫 줄에 첫 번째 S문자열이 입력되고, 두 번째 줄에 T문자열이 입력됩니다.
 * S문자열의 길이는 10,000을 넘지 않으며, T문자열은 S문자열보다 길이가 작거나 같습니다.
 *
 * 출력 - S단어에 T문자열과 아나그램이 되는 부분문자열의 개수를 출력합니다.
 *
 * 입력 예시 - "bacaAacba", "abc"
 *
 * 출력 예시 - 3
 */

const arrToObj = (arr) => {
    return arr.reduce((acc, cur) => {
        if (!acc[cur]) {
            acc[cur] = 1
        } else {
            acc[cur] += 1
        }
        return acc
    }, {})
}

const objSort = (obj) => {
    return Object.entries(obj).sort((a, b) => b[0].codePointAt(0) - a[0].codePointAt(0));
}

const solution = (longString, targetString) => {
    let result = 0;
    const sortedTargetString = objSort(arrToObj([...targetString]))
    for (let i = 0; i <= longString.length - targetString.length; i++) {
        const arr = []
        for (let j = 0; j < targetString.length; j++) {
            arr.push([...longString][i + j])
        }
        if (JSON.stringify(objSort(arrToObj(arr))) === JSON.stringify(sortedTargetString)) result++
    }

    return result;
}

console.log(solution("bacaAacba", "abc"));
