const apiUrl = "https://api.github.com/users/"
const token = "?access_token=28e1b122e11bf388b06cb2f1de48ef08a35ad4ed"

// fetchers: fazendo requisiçoes a api e retornando .json dos endpoints

// pegando as informações do perfil do usuário. ex: nome, email, avatar
const fetchUser = user => {
    let endpoint = `${apiUrl}${user}${token}` // chamando a api
    let json = fetch(endpoint).then(user => user.json()) // guardando a informação em um json         
    return json                  
}
// informações sobre os repositórios do usuário. ex: nome, url das linguagens usadas nele
const fetchRepo = user => {
    let endpoint = `${apiUrl}${user}/repos${token}`
    let json = fetch(endpoint).then(repos => repos.json())
    return json
}
// linguagens usadas no repositórios
const fetchLang = async langsUrls => { // endpoints é um array com as urls das linguagens, obtido na fetchRepo()
    let jsons = [] // array que conterá os JSONs obitidos com as urls
    for (url of langsUrls) {
        let json = await fetch(url).then(langs => langs.json())
        jsons.push(json)
    }
    return jsons
}

// Somando a quantidade de linhas/palavras escritas em cada linguagem
const langCalc = async langs => {
    let langResult = ''
    // css
    const cssFilter = langs.filter(value => value.CSS != undefined)
    let cssReduce = 0
    if (cssFilter.length > 0) {
        const cssMap = cssFilter.map(value => value.CSS)
        cssReduce = cssMap.reduce((total, value) => total + value, 0)
        langResult += `<li class="list-inline-item">Css<span class="badge ml-1">${cssReduce}</span></li>`
        //console.log(cssFilter, cssMap, cssReduce)
    }
    else
        console.log('nada em Css')        
    // html
    const htmlFilter = langs.filter(value => value.HTML != undefined)
    let htmlReduce = 0
    if(htmlFilter.length > 0) {
        const htmlMap = htmlFilter.map(value => value.HTML)
        htmlReduce = htmlMap.reduce((total, value) => total + value, 0)
        langResult += `<li class="list-inline-item">Html<span class="badge ml-1">${htmlReduce}</span></li>`
        //console.log(htmlFilter, htmlMap, htmlReduce)
    }
    else
        console.log('nada em html')
    // js
    const jsFilter = langs.filter(value => value.JavaScript != undefined)
    let jsReduce = 0
    if(cssFilter.length > 0) {
        const jsMap = jsFilter.map(value => value.JavaScript)
        jsReduce = jsMap.reduce((total, value) => total + value, 0)
        langResult += `<li class="list-inline-item">Js<span class="badge ml-1">${jsReduce}</span></li>\n`
        //console.log(jsFilter, jsMap, jsReduce)        
    }
    else
        console.log('nada em Js')
    // python    
    const pyFilter = langs.filter(value => value.Python != undefined)
    let pyReduce = 0
    if(pyFilter.length > 0) {        
        const pyMap = pyFilter.map(value => value.Python)
        pyReduce = pyMap.reduce((total, value) => total + value, 0)
        langResult += `<li class="list-inline-item">Py<span class="badge ml-1">${pyReduce}</span></li>`
        //console.log(pythonFilter, pythonMap, pythonR
    }
    else
        console.log('nada em python')
    // php
    const phpFilter = langs.filter(value => value.PHP != undefined)
    let phpReduce = 0
    if(phpFilter.length > 0) {    
        const phpMap = phpFilter.map(value => value.PHP)
        phpReduce = phpMap.reduce((total, value) => total + value, 0)
        langResult += `<li class="list-inline-item">Php<span class="badge ml-1">${phpReduce}</span></li>`
        //console.log(phpFilter, phpMap, phpReduce)    
    }
    else
        console.log('nada em Php')
    // c
    const cFilter = langs.filter(value => value.C != undefined)
    let cReduce = 0
    if(cFilter.length > 0) {        
        const cMap = cFilter.map(value => value.C)
        cReduce = cMap.reduce((total, value) => total + value, 0)
        langResult += `<li class="list-inline-item">C<span class="badge ml-1">${cReduce}</span></li>`
        //console.log(cFilter, cMap, cReduce)
    }
    else
        console.log('nada em C')
    // java
    const javaFilter = langs.filter(value => value.java != undefined)
    let javaReduce = 0
    if (javaFilter.length > 0) {
        const javaMap =  javaFilter.map(value => value.java)
        javaReduce =  javaMap.reduce((total, value) => total + value, 0)
        langResult += `<li class="list-inline-item">Java<span class="badge ml-1">${javaReduce}</span></li>`
    }
    else
        console.log('nada em java')
    // exibindo os resultados    
   // console.log(`${cssReduce}\n${htmlReduce}\n${jsReduce}\n${pyReduce}\n${phpReduce}\n${cReduce}\n${javaReduce}`)    
    
    return langResult
}