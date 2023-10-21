
const gifts = ['cat', 'game', 'socks']

function wrapping(gifts){

    const newArr = gifts.map((gift) => {
        let b = gift.length;

        return `${'*'.repeat(b + 2)}\n*${gift}*\n${'*'.repeat(b + 2)}`
    })
    
    return newArr
}

const wrapped = wrapping(gifts)

console.log(wrapped)
