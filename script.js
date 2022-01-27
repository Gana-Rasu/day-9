var request = new XMLHttpRequest()
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
request.send()
request.onload=function(){
    var result = JSON.parse(request.response)
    // countries in asia
    var res1 = result.filter((ele)=>ele.region==="Asia")
    console.log(res1)
    // countries population<2l
    var res2 = result.filter((ele)=>ele.population<200000)
    console.log(res2)
    //sum of population
    var res3 = result.reduce((acc,cv)=>{ return acc+cv.population},0)
    console.log(res3)
    //name capital flag
    var res4 = result.forEach((ele)=> {
        console.log(`${ele.name}: ${ele.capital}: ${ele.flag}`)
    })
    // country using us dollar
    var res5 = result.filter((ele)=>ele.currencies[0].code==="USD")
    // var res5 = result.filter((ele)=>ele.currencies[1].name==="'United State Dollar'")
    console.log(res5)
    
}