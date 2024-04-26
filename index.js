const arr = [
    [1,0,0],
    [0,1,0],
    [0,0,1],
]


const arr0 = []

arr.map((row , rowIndex)=>{
    row.map((i , index)=>{
        if(rowIndex === index){
            arr0.push(i)

        }
    })
})





console.log(arr0)





const arr2 = [
    [0,0,1],
    [0,1,0],
    [1,0,0],
]

const arr3 = []

arr2.map((row , rowIndex)=>{
    row.map((i , index)=>{
        if(rowIndex === 1 && index ===1 ){
            arr3.push(i)
        }else if(rowIndex === 2 && index ===0){
            arr3.push(i)
        }else if(rowIndex === 0 && index ===2){
            arr3.push(i)
        }
    })
})

console.log(arr3)