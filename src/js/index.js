import { fetchUser, fetchRepo, fetchLang, langSum } from './api'
import '../css/main.css'
import '../css/reset.css'

//const searchBtn = document.querySelector(".searchButton")

const showData = () => {
    fetchUser( $('.user-input').val() ).then(user => { // usuário
        $('.avatar').attr('src', user.avatar_url)  // imagem do usuário
        $('.git-name').html(user.name)

        if (user.bio == null) 
            $('.git-company').html('Garoto(a) de Programa') 
        else
            $('.git-company').html(user.bio)
         
        if (user.location == null)
            $('.git-location').html(`<i class="fas fa-map-marker-alt mr-1"></i>Nárnia`)
        else        
            $('.git-location').html(`<i class="fas fa-map-marker-alt mr-1"></i>${user.location}`)
        
        fetchRepo(user.repos_url).then(repos => { // respositórios
            const noForkeds = repos.filter(repo => repo.fork != true)            
            const forkeds = repos.length - noForkeds.length      
            const validsRepos = noForkeds.filter(repo => repo.language !== null)
            console.log(`Repos: ${repos.length}\nNo forkeds: ${noForkeds.length}`)
            console.log(`Forkeds: ${forkeds}\nValids: ${validsRepos.length}`)
            
            fetchLang(validsRepos).then(langsJsons => { // linguagens
                langSum(langsJsons).then(langResult => { // retorna o total de bytes escritos em cada linguagem 
                    $('.lang-ul').append(langResult) // insere as <li>s no html                       
                })                
            })
        })   
    })           
}   

/*const midRow = $('.mid-row')
const navBottom = $('.nav-bottom')
const footerView = $('.footer-view')
const footer = $('.footer')*/

$('.user-input').keyup( (event) => {
    if (event.key == 'Enter'){
        $('.home-row').hide()
        $('.home-footer').hide()
        $('.mid-row').show()
        $('.nav-bottom').show()
        $('.footer-view').show()
        $('.footer').show()
        $('.lang-ul').html('')
        showData()
    }
})

if ($('.first').css('display') != 'none')
    $('.s1').toggleClass('toggler-focus')
    $('.c1').css('background-color', 'rgba(34,34,51,1)')

//searchBtn.addEventListener("click", () => { showData() })

$('.fa-bars').click( () => {
    $('.nav-dev').toggleClass('nav-dev-toggle')
})

for (let i = 1; i < 6; i++)
    $('.container').append(`<span class="bg-dash d${i}"></span>`)

for (let i = 0; i < 13; i++){
    if (i % 4 == 0)
        $('.footer__dashes').append(`<li class="dashes__long"></li>`)
    else
        $('.footer__dashes').append(`<li class="dashes__short"></li>`)

}


/*

https://www.youtube.com/watch?v=sJspH620ZsU&t=1408s
Make like a tree, leaves



.home-footer {
  margin-top: 33%;
  margin-left: 0;
  padding: 0;
  height: 35px;
  background-color: rgba(28,28,45,1);
  color: rgba(255,255,255,0.2);
  text-align: center;
}

.home-footer .col-4 {
  height: 100%;
}
.home-footer span {
  line-height: 38px;
  vertical-align: middle;
}
.toggler-focus {
  border-top: 2px solid rgb(236, 85, 85);
  color: rgba(255,255,255,1);
}
*/