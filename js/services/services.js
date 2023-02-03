
const url="http://localhost:8000/card"

const postData = async (url,data)=>{  
    const res = await fetch(url, {
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: data
    })
    return await res.json()  
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