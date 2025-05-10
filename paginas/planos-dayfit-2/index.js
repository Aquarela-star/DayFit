const buttonPlanoPadrao = document.querySelector("#plano-padrao-button")
const buttonPlanoUniversitario = document.querySelector("#plano-universitario-button")

const contentPlanoPadrao = document.querySelector("#plano-padrao")
const contentPlanoUniversitario = document.querySelector("#plano-universitario")

buttonPlanoPadrao.addEventListener('click', () => {
    if(contentPlanoPadrao.classList.contains('hidden')){
        contentPlanoPadrao.classList.remove('hidden')
        contentPlanoUniversitario.classList.add('hidden')
        buttonPlanoPadrao.classList.add('ativo')
        buttonPlanoUniversitario.classList.remove('ativo')
    }
})

buttonPlanoUniversitario.addEventListener('click', () => {
    if(contentPlanoUniversitario.classList.contains('hidden')){
        contentPlanoUniversitario.classList.remove('hidden')
        contentPlanoPadrao.classList.add('hidden')
        buttonPlanoUniversitario.classList.add('ativo')
        buttonPlanoPadrao.classList.remove('ativo')
    }
})