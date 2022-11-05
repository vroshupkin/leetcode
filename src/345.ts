// npx parcel build 345.ts && node ../../weather.js

export function reverseVowels(s: string): string {
    
    let vowelArr: number[] = []
    for (let i = 0; i < s.length; i++) {
        if('aeiouAEIOU'.includes(s[i]))
            vowelArr.push(i)
    }

    let i = 0
    let j = vowelArr.length - 1
    let str = Array.from(s)

    while(i < j){
        const swap_ind = [vowelArr[i], vowelArr[j]]

        const tmp_ch = str[swap_ind[0]]
        str[swap_ind[0]] = str[swap_ind[1]]
        str[swap_ind[1]] = tmp_ch

        i++
        j--
    }

    return str.join('')
};

reverseVowels('leetcode')
