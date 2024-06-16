// console.log("one")
// console.log("two")
// console.log("three")



// console.log("one")
// setTimeout(()=>{
//     console.log("two")
// },2000)
// console.log("three")




// function getData(dataId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId)
//             resolve("successfully resolved")
//         }, 3000)
//     })
// }

// getData(1)
// getData(2)
// getData(3)



// function getData(dataId, getNextData){
//     return new Promise((resolved, reject)=>{

//         setTimeout(()=>{
//             console.log("data", dataId)
//             resolved("success")
//         },3000)
//     })
// }


// //                                            callback hell 
// getData(1, ()=>{
//     // console.log("getting data2..." )
//     getData(2, ()=>{
//         // console.log("getting data3..." )
//         getData(3, ()=>{
//             // console.log("getting data4..." )
//             getData(4)
//         })
//     })
// })



//  //                                           promise chaining
// getData(1).then((res)=>{
//     console.log(res)
//     getData(2).then((res)=>{
//         console.log(res)
//         getData(3).then((res)=>{
//             console.log(res)
//         })
//     })
// })


// getData(1)
// .then((res) => {
//     return getData(2)
// })
// .then((res) => {
//     return getData(3)
// })
// .then((res) => {
//      console.log(res)
// })



// //                                                async-await 


// async function getAllData() {
//     console.log("fetching data1...")
//     await getData(1)
//     console.log("fetching data2...")
//     await getData(2)
//     console.log("fetching data3...")
//     await getData(3)
//     console.log("fetching data4...")
//     await getData(4)
//     console.log("fetching data5...")
//     await getData(5)
// }

// getAllData()

    // //                                           IIFE


    // (async function () {
    //     console.log("fetching data1...")
    //     await getData(1)
    //     console.log("fetching data2...")
    //     await getData(2)
    //     console.log("fetching data3...")
    //     await getData(3)
    //     console.log("fetching data4...")
    //     await getData(4)
    //     console.log("fetching data5...")
    //     await getData(5)
    // })()


// ----------------------------------------------------------------------


// create promises
// let promise = new Promise((resolve, reject)=>{
//     // resolve(123)
//     // reject("error occured")
// })

// console.log(promise)




// return promise
// function getData(dataId, getNextData){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId)
//             resolve("successful")
//             if(getNextData){
//                 consosle.log(getNextData)
//             }
//         }, 5000);
//     })
// }




// use of promises
// const getPromise = () => {
//     return new Promise((res, rej) => {
//         console.log("i'm a promise")
//         res("success")
//         // rej("data error")
//     })
// }

// let promise = getPromise()

// promise.then((res)=>{
//     console.log("promise resolved", res)
// })
// promise.catch((err)=>{
//     console.log("promise rejected,", err)
// })



// const asyncFunc1 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data1")
//             resolve("success")
//             // reject("rejected")
//         }, 4000)
//     })
// }

// const asyncFunc2 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data2")
//             resolve("success")
//             // reject("rejected")
//         }, 4000)
//     })
// }

// const asyncFunc3 =()=>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("data3")
//         resolve("success")
//         // reject("rejected")
//         }, 4000)
//     })
// }

// console.log("fetching data1")
// asyncFunc1().then((res)=>{
//     console.log("data1", res)
// })
// asyncFunc1().catch((err)=>{
//     console.log("network error", err)
// })


// console.log("fetching data2")
// asyncFunc2().then((res)=>{
//     console.log("data2", res)
// })

// asyncFunc2().catch((err)=>{
//     console.log("some network error", err)
// })


// console.log("fetching data3...")
// asyncFunc3().then((res)=>{
//     console.log("data3", res)
// })

// asyncFunc3().catch((err)=>{
//     console.log("network error", err)
// })




// promise-chaining
// console.log("fetching data1...")
// asyncFunc1().then((res) => {
//     console.log("data1", res)
//     console.log("fetching data2...")
//     asyncFunc2().then((res) => {
//         console.log("data2", res)
//         console.log("fetching data3...")
//         asyncFunc3().then((res)=>{
//             console.log("data3", res)
//         })
//     })
// })
// asyncFunc1().catch((err)=>{
//     console.log("error1", err)
// })







// search-output
// promise-chaining
// const asyncFunc1 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data1")
//             resolve("success")
//             // reject("rejected")
//         }, 4000)
//     })
// }

// const asyncFunc2 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data2")
//             resolve("success")
//             // reject("rejected")
//         }, 4000)
//     })
// }

// const asyncFunc3 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data3")
//             resolve("success")
//             // reject("rejected")
//         }, 4000)
//     })
// }

// console.log("fetching data1...")
// asyncFunc1().then((res) => {
//     console.log("data1", res)
//     console.log("fetching data2...")
//     return asyncFunc2()
// }).then((res) => {
//     console.log("data2", res)
//     console.log("fetching data3...")
//     return asyncFunc3()
// }).then((res) => {
//     console.log("data3", res)
// }).catch((err) => {
//     console.log("error", err)
// })





// search-output
// async await
// const fetchData = async () => {
//     try {
//         console.log("fetching data1...")
//         let res = await asyncFunc1()
//         console.log("data1", res)

//         console.log("fetching data2...")
//         res = await asyncFunc2()
//         console.log("data2", res)

//         console.log("fetching data3...")
//         res = await asyncFunc3()
//         console.log("data3", res)
//     } catch (err) {
//         console.log("error", err)
//     }
// }

// fetchData()
