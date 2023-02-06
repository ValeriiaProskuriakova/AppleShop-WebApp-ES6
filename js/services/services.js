
const url="https://apple-shop-web-app-es-6-4n5w51yu0-valeriiaproskuriakova.vercel.app/card"

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
    if(!res.ok){
        throw new Error(`Error ${url}`)
    }
    return await res.json()
}
export{postData}
export{getData}
export{url}