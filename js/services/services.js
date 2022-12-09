
const url="http://localhost:3000/card"

const postData = async (url,data)=>{  //async - потому что отправка данних на сервер занимает время, и не успев получить ответ, js определіт res как undefined
    const res = await fetch(url, {
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: data
    })
    return await res.json()  //parses json response into javascript object
}

const getData = async (url)=>{
    const res = await fetch(url)
    return await res.json()
    if(!res.ok){
        throw new Error(`Error ${url}`)
    }
}
export{postData}
export{getData}
export{url}