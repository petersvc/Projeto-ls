export const drm = async () => {
    const drmJasonUrl = 'https://api.myjson.com/bins/1c7p2k'
    const drmTech = await fetch(drmJasonUrl).then(drm => drm.json())
    return drmTech
}

export const legendFix = (legend) => {
    let replacer = legend.replace('-', ' ')
    return replacer
} 

export const langSum = async langsJsons => { // funçao que soma a quantidade de linhas/palavras escritas em cada linguagem
    let langsNames = []
    let langFilter = []
    let langMap = []
    let langReduce = 0
    let langTotal = 0
    let langResult = []

    langsJsons.map(lang => { // percorre o array de jsons das linguagens
        for (let langName in lang){ // percorre os nomes (propriedade) das linguagens deles           
            if (langsNames.join('').includes(langName) == false){
                langsNames.push(langName)                
            } // transforma o array dos nomes das linguagens... -> 
                                        // ...em uma string, checa se o nome não existe nela e o insere       
        }
                
    })

    langsNames.map(langName => { // percorre o array dos nomes das linguagens encontradas
        langFilter = langsJsons.filter(value => value[langName] != undefined) // filtra os jsons que contém a linguagem 
        
        if (langFilter.length > 0){ // checa se existe um ou mais arrays que contém a linguagem
            langMap =  langFilter.map(value => value[langName]) // percorre os filtrados e retorna a qtde de bytes escritos na linguagem
            langReduce =  langMap.reduce((total, value) => total + value, 0) // soma os bytes da lang filtrada
            langTotal += langReduce // acumula os bytes de todas as langs
            langResult.push([langName, langReduce]) // insere no array [linguagem, bytes]           
        }        
    })

    langResult.push(langTotal)

    return langResult // retorna [linguagem, bytes] e o total de bytes no ultimo indice
}

export const langArray = langResult => { // Cria o array completo das linguagens -> [lang, byte, percent]
    let la = [] // guarda [linguagem, bytes, porcentagem]
    let calcPercent = 0

    langResult.map(langIndex => {
        calcPercent = percentCalc(langIndex[1], langResult[langResult.length - 1])
        la.push([langIndex[0], langIndex[1], Math.round(calcPercent)]) // insere [linguagem, bytes, porcentagem] 
    })

    la.pop() // remove o indice que guarda os bytes totais

    return la
}

export const percentCalc = (langByte, total) => {
    let calc = 0
    calc = langByte * 100 / total
    return calc
}

export const langAcronym = langIndex => {
    const acronyms = {
        'ActionScript':'as',
        'ApacheConf':'ac',
        'AutoHotkey': 'ahk',
        'Clojure': 'cljr',
        'CoffeeScript': 'cs',
        'Emacs Lisp':'el',
        'Elixir': 'elx',
        'Fortran': 'fap',
        'Gherkin' : 'ghkn',
        'JavaScript': 'js',
        'Jupyter Notebook': 'jn',
        'Kotlin': 'ktln',
        'Makefile':'mf',
        'Objective-C': 'obj-c',
        'Objective-C++': 'obj-c++',
        'PostScript': 'ps',
        'POV-Ray SDL': 'p-r sdl',
        'Processing': 'proc',
        'PureScript': 'ps',
        'Python': 'py',
        'TypeScript': 'ts',
        'Vim script': 'vs'
    }

    let acronym = langIndex

    if (acronyms[acronym])
        acronym = acronyms[acronym]

    return acronym
}

export const teamData = () => {
    const profiles = [
        {
            "name": "Peter costa",
            "bio": "Mussum Ipsum, cacilds vidis litro abertis. Aenean aliquam molestie leo, vitae iaculis nisl. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit.",
            "img": 'dist/img/peter.jpg'
        },
        {
            "name": "Renato César",
            "bio": "Mussum Ipsum, cacilds vidis litro abertis. Aenean aliquam molestie leo, vitae iaculis nisl. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit.",
            "img": 'dist/img/renato.jpg'
        },
        {
            "name": "diego frazão",
            "bio": "Mussum Ipsum, cacilds vidis litro abertis. Aenean aliquam molestie leo, vitae iaculis nisl. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit.",
            "img": 'dist/img/diego.jpg'
        }
    ]

    profiles.map( profile => {
        let profileDiv = document.createElement('div');
        profileDiv.classList.add("datas__profile");
        profileDiv.innerHTML = `
            <img class="profile__img" src="${profile.img}">
            <h2 class="profile__name">${profile.name}</h2>
            <h2 class="profile__bio">${profile.bio}</h2>
            <div class="profile__social">
                <i class="fab fa-github"></i>
                <i class="fab fa-linkedin"></i>
                <i class="fab fa-facebook"></i>
            </div>
        `;
        document.querySelector('.area__datas').insertAdjacentElement("beforeend" , profileDiv);
    })
}

export const numberSort = (a, b) => {
    if (a[1] > b[1]) {
        return -1;
    } else if (a[1] < b[1]) {
        return 1;
    }
    return 0;
}

export const letterSort = (a, b) => {
    if (a[0] < b[0]) {
        return -1;
    } else if (a[0] > b[0]) {
        return 1;
    }
    return 0;
}

export const shortByte = bytes => {
    let shortBytes = 0

    if (bytes > 999999){
        shortBytes = (bytes / 1048576).toFixed(1)
        shortBytes += 'mb'
    } else if (bytes > 999){
        shortBytes = Math.round(bytes / 1024)
        shortBytes += 'kb'
    } else {
        shortBytes = Math.round(bytes)
        shortBytes += 'b'
    }

    return shortBytes
}
