function validateContact(event) {
    event.preventDefault()

    const nameInput = document.getElementById('contact-name')
    const emailInput = document.getElementById('contact-email')
    const messageInput = document.getElementById('contact-message')
    const resultBox = document.getElementById('contact-result')
    const resultText = document.getElementById('contact-text')

    const name = nameInput.value
    const email = emailInput.value
    const message = messageInput.value

    if(name == "") {
        alert("Erro: por favor, digite seu nome")
        resultText.innerText = "Erro: o campo nome não pode ficar vazio."
        resultBox.classList.add('show')
        return
    }

    if(email == "") {
        alert("Erro: por favor, digite seu e-mail")
        resultText.innerText = "Erro: o campo e-mail não pode ficar vazio."
        resultBox.classList.add('show')
        return
    }

    if(email.indexOf("@") == -1 || email.indexOf(".") == -1) {
        alert("Erro: e-mail inválido")
        resultText.innerText = "Erro: digite um e-mail válido para continuar."
        resultBox.classList.add('show')
        return
    }

    if(message == "") {
        alert("Erro: por favor, digite sua mensagem")
        resultText.innerText = "Erro: a mensagem não pode ficar vazia."
        resultBox.classList.add('show')
        return
    }

    if(message.length < 10) {
        alert("Erro: mensagem muito curta")
        resultText.innerText = "Erro: escreva uma mensagem com pelo menos 10 caracteres."
        resultBox.classList.add('show')
        return
    }

    resultText.innerText = "Mensagem enviada com sucesso! A equipe OrbitAgro recebeu seu contato."
    resultBox.classList.add('show')
}

function calculateRisk(event) {
    event.preventDefault()

    const soilInput = document.getElementById('soil')
    const rainInput = document.getElementById('rain')
    const temperatureInput = document.getElementById('temperature')
    const resultBox = document.getElementById('risk-result')
    const messageText = document.getElementById('risk-message')
    const levelText = document.getElementById('risk-level')

    const soil = parseInt(soilInput.value)
    const rain = parseInt(rainInput.value)
    const temperature = parseInt(temperatureInput.value)

    if(isNaN(soil)) {
        alert("Erro: digite a umidade do solo")
        messageText.innerText = "Erro: a umidade do solo não foi informada."
        levelText.innerText = "Nível de risco: erro nos dados"
        resultBox.classList.add('show')
        return
    }

    if(soil < 0) {
        alert("Erro: umidade do solo inválida")
        messageText.innerText = "Erro: a umidade do solo não pode ser menor que 0%."
        levelText.innerText = "Nível de risco: erro nos dados"
        resultBox.classList.add('show')
        return
    }

    if(soil > 100) {
        alert("Erro: umidade do solo não pode ultrapassar 100%")
        messageText.innerText = "Erro: a umidade do solo não pode ultrapassar 100%."
        levelText.innerText = "Nível de risco: erro nos dados"
        resultBox.classList.add('show')
        return
    }

    if(isNaN(rain)) {
        alert("Erro: digite a chuva acumulada")
        messageText.innerText = "Erro: a chuva acumulada não foi informada."
        levelText.innerText = "Nível de risco: erro nos dados"
        resultBox.classList.add('show')
        return
    }

    if(rain < 0) {
        alert("Erro: chuva acumulada inválida")
        messageText.innerText = "Erro: a chuva acumulada não pode ser menor que 0 mm."
        levelText.innerText = "Nível de risco: erro nos dados"
        resultBox.classList.add('show')
        return
    }

    if(rain > 500) {
        alert("Erro: chuva acumulada muito alta")
        messageText.innerText = "Erro: a chuva acumulada informada está muito alta para esta simulação."
        levelText.innerText = "Nível de risco: erro nos dados"
        resultBox.classList.add('show')
        return
    }

    if(isNaN(temperature)) {
        alert("Erro: digite a temperatura")
        messageText.innerText = "Erro: a temperatura não foi informada."
        levelText.innerText = "Nível de risco: erro nos dados"
        resultBox.classList.add('show')
        return
    }

    if(temperature < -10) {
        alert("Erro: temperatura inválida")
        messageText.innerText = "Erro: a temperatura está muito baixa para esta simulação agrícola."
        levelText.innerText = "Nível de risco: erro nos dados"
        resultBox.classList.add('show')
        return
    }

    if(temperature > 60) {
        alert("Erro: temperatura inválida")
        messageText.innerText = "Erro: a temperatura informada está muito alta para esta simulação agrícola."
        levelText.innerText = "Nível de risco: erro nos dados"
        resultBox.classList.add('show')
        return
    }

    if(soil < 30 && rain < 8 && temperature >= 34) {
        messageText.innerText = "Risco alto de seca. A umidade do solo está muito baixa, houve pouca chuva e a temperatura está elevada. Avalie a irrigação e observe as áreas mais sensíveis."
        levelText.innerText = "Nível de risco: alto"
    } else if(soil < 35 && rain < 15 && temperature >= 32) {
        messageText.innerText = "Risco médio para alto de seca. A lavoura precisa de atenção, principalmente se a próxima atualização continuar indicando pouca chuva."
        levelText.innerText = "Nível de risco: médio alto"
    } else if(rain > 120) {
        messageText.innerText = "Risco de excesso de chuva. A propriedade pode apresentar encharcamento do solo, então acompanhe áreas de baixa drenagem."
        levelText.innerText = "Nível de risco: médio"
    } else if(temperature >= 38) {
        messageText.innerText = "Risco de calor intenso. A temperatura pode causar estresse na vegetação, por isso acompanhe sinais de perda de vigor."
        levelText.innerText = "Nível de risco: médio"
    } else if(soil < 45 || rain < 20 || temperature >= 30) {
        messageText.innerText = "A propriedade precisa de atenção. Continue acompanhando os indicadores nos próximos dias."
        levelText.innerText = "Nível de risco: médio"
    } else {
        messageText.innerText = "Os indicadores estão em situação estável para esta simulação. Continue acompanhando o histórico da propriedade."
        levelText.innerText = "Nível de risco: baixo"
    }

    resultBox.classList.add('show')
}

document.addEventListener('DOMContentLoaded', function() {
    setupMenu()
    setupAccordion()
})

function setupMenu() {
    const menuBtn = document.querySelector('.menu-btn')
    const navLinks = document.querySelector('.nav-links')

    if(menuBtn == null || navLinks == null) {
        return
    }

    menuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('nav-open')

        if(navLinks.classList.contains('nav-open')) {
            menuBtn.innerText = '✕'
        } else {
            menuBtn.innerText = '☰'
        }
    })
}

function setupAccordion() {
    const questions = document.querySelectorAll('.faq-question')

    for(let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', function() {
            const card = questions[i].parentElement
            card.classList.toggle('faq-open')
        })
    }
}






function validateContact(event) {
    event.preventDefault()

    const nameInput = document.getElementById('contact-name')
    const emailInput = document.getElementById('contact-email')
    const messageInput = document.getElementById('contact-message')
    const resultBox = document.getElementById('contact-result')
    const resultText = document.getElementById('contact-text')

    const name = nameInput.value
    const email = emailInput.value
    const message = messageInput.value

    if(name == "") {
        alert("Erro: por favor, digite seu nome")
        resultText.innerText = "Erro: o campo nome não pode ficar vazio."
        resultBox.classList.add('show')
        return
    }

    if(email == "") {
        alert("Erro: por favor, digite seu e-mail")
        resultText.innerText = "Erro: o campo e-mail não pode ficar vazio."
        resultBox.classList.add('show')
        return
    }

    if(email.indexOf("@") == -1 || email.indexOf(".") == -1) {
        alert("Erro: e-mail inválido")
        resultText.innerText = "Erro: digite um e-mail válido para continuar."
        resultBox.classList.add('show')
        return
    }

    if(message == "") {
        alert("Erro: por favor, digite sua mensagem")
        resultText.innerText = "Erro: a mensagem não pode ficar vazia."
        resultBox.classList.add('show')
        return
    }

    if(message.length < 10) {
        alert("Erro: mensagem muito curta")
        resultText.innerText = "Erro: escreva uma mensagem com pelo menos 10 caracteres."
        resultBox.classList.add('show')
        return
    }

    resultText.innerText = "Mensagem enviada com sucesso! A equipe OrbitAgro recebeu seu contato."
    resultBox.classList.add('show')
}

function calculateRisk(event) {
    event.preventDefault()

    const soilInput = document.getElementById('soil')
    const rainInput = document.getElementById('rain')
    const temperatureInput = document.getElementById('temperature')
    const resultBox = document.getElementById('risk-result')
    const messageText = document.getElementById('risk-message')
    const levelText = document.getElementById('risk-level')

    const soil = parseInt(soilInput.value)
    const rain = parseInt(rainInput.value)
    const temperature = parseInt(temperatureInput.value)

    if(isNaN(soil)) {
        alert("Erro: digite a umidade do solo")
        messageText.innerText = "Erro: a umidade do solo não foi informada."
        levelText.innerText = "Nível de risco: erro nos dados"
        resultBox.classList.add('show')
        return
    }

    if(soil < 0) {
        alert("Erro: umidade do solo inválida")
        messageText.innerText = "Erro: a umidade do solo não pode ser menor que 0%."
        levelText.innerText = "Nível de risco: erro nos dados"
        resultBox.classList.add('show')
        return
    }

    if(soil > 100) {
        alert("Erro: umidade do solo não pode ultrapassar 100%")
        messageText.innerText = "Erro: a umidade do solo não pode ultrapassar 100%."
        levelText.innerText = "Nível de risco: erro nos dados"
        resultBox.classList.add('show')
        return
    }

    if(isNaN(rain)) {
        alert("Erro: digite a chuva acumulada")
        messageText.innerText = "Erro: a chuva acumulada não foi informada."
        levelText.innerText = "Nível de risco: erro nos dados"
        resultBox.classList.add('show')
        return
    }

    if(rain < 0) {
        alert("Erro: chuva acumulada inválida")
        messageText.innerText = "Erro: a chuva acumulada não pode ser menor que 0 mm."
        levelText.innerText = "Nível de risco: erro nos dados"
        resultBox.classList.add('show')
        return
    }

    if(rain > 500) {
        alert("Erro: chuva acumulada muito alta")
        messageText.innerText = "Erro: a chuva acumulada informada está muito alta para esta simulação."
        levelText.innerText = "Nível de risco: erro nos dados"
        resultBox.classList.add('show')
        return
    }

    if(isNaN(temperature)) {
        alert("Erro: digite a temperatura")
        messageText.innerText = "Erro: a temperatura não foi informada."
        levelText.innerText = "Nível de risco: erro nos dados"
        resultBox.classList.add('show')
        return
    }

    if(temperature < -10) {
        alert("Erro: temperatura inválida")
        messageText.innerText = "Erro: a temperatura está muito baixa para esta simulação agrícola."
        levelText.innerText = "Nível de risco: erro nos dados"
        resultBox.classList.add('show')
        return
    }

    if(temperature > 60) {
        alert("Erro: temperatura inválida")
        messageText.innerText = "Erro: a temperatura informada está muito alta para esta simulação agrícola."
        levelText.innerText = "Nível de risco: erro nos dados"
        resultBox.classList.add('show')
        return
    }

    if(soil < 30 && rain < 8 && temperature >= 34) {
        messageText.innerText = "Risco alto de seca. A umidade do solo está muito baixa, houve pouca chuva e a temperatura está elevada. Avalie a irrigação e observe as áreas mais sensíveis."
        levelText.innerText = "Nível de risco: alto"
    } else if(soil < 35 && rain < 15 && temperature >= 32) {
        messageText.innerText = "Risco médio para alto de seca. A lavoura precisa de atenção, principalmente se a próxima atualização continuar indicando pouca chuva."
        levelText.innerText = "Nível de risco: médio alto"
    } else if(rain > 120) {
        messageText.innerText = "Risco de excesso de chuva. A propriedade pode apresentar encharcamento do solo, então acompanhe áreas de baixa drenagem."
        levelText.innerText = "Nível de risco: médio"
    } else if(temperature >= 38) {
        messageText.innerText = "Risco de calor intenso. A temperatura pode causar estresse na vegetação, por isso acompanhe sinais de perda de vigor."
        levelText.innerText = "Nível de risco: médio"
    } else if(soil < 45 || rain < 20 || temperature >= 30) {
        messageText.innerText = "A propriedade precisa de atenção. Continue acompanhando os indicadores nos próximos dias."
        levelText.innerText = "Nível de risco: médio"
    } else {
        messageText.innerText = "Os indicadores estão em situação estável para esta simulação. Continue acompanhando o histórico da propriedade."
        levelText.innerText = "Nível de risco: baixo"
    }

    resultBox.classList.add('show')
}

document.addEventListener('DOMContentLoaded', function() {
    setupMenu()
    setupAccordion()
})

function setupMenu() {
    const menuBtn = document.querySelector('.menu-btn')
    const navLinks = document.querySelector('.nav-links')

    if(menuBtn == null || navLinks == null) {
        return
    }

    menuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('nav-open')

        if(navLinks.classList.contains('nav-open')) {
            menuBtn.innerText = '✕'
        } else {
            menuBtn.innerText = '☰'
        }
    })
}

function setupAccordion() {
    const questions = document.querySelectorAll('.faq-question')

    for(let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', function() {
            const card = questions[i].parentElement
            card.classList.toggle('faq-open')
        })
    }
}





function validateContact(event) {
    event.preventDefault()

    const nameInput = document.getElementById('contact-name')
    const emailInput = document.getElementById('contact-email')
    const messageInput = document.getElementById('contact-message')
    const resultBox = document.getElementById('contact-result')
    const resultText = document.getElementById('contact-text')

    const name = nameInput.value
    const email = emailInput.value
    const message = messageInput.value

    if(name == "") {
        alert("Erro: por favor, digite seu nome")
        resultText.innerText = "Erro: o campo nome não pode ficar vazio."
        resultBox.classList.add('show')
        return
    }

    if(email == "") {
        alert("Erro: por favor, digite seu e-mail")
        resultText.innerText = "Erro: o campo e-mail não pode ficar vazio."
        resultBox.classList.add('show')
        return
    }

    if(email.indexOf("@") == -1 || email.indexOf(".") == -1) {
        alert("Erro: e-mail inválido")
        resultText.innerText = "Erro: digite um e-mail válido para continuar."
        resultBox.classList.add('show')
        return
    }

    if(message == "") {
        alert("Erro: por favor, digite sua mensagem")
        resultText.innerText = "Erro: a mensagem não pode ficar vazia."
        resultBox.classList.add('show')
        return
    }

    if(message.length < 10) {
        alert("Erro: mensagem muito curta")
        resultText.innerText = "Erro: escreva uma mensagem com pelo menos 10 caracteres."
        resultBox.classList.add('show')
        return
    }

    resultText.innerText = "Mensagem enviada com sucesso! A equipe OrbitAgro recebeu seu contato."
    resultBox.classList.add('show')
}

function calculateRisk(event) {
    event.preventDefault()

    const soilInput = document.getElementById('soil')
    const rainInput = document.getElementById('rain')
    const temperatureInput = document.getElementById('temperature')
    const resultBox = document.getElementById('risk-result')
    const messageText = document.getElementById('risk-message')
    const levelText = document.getElementById('risk-level')

    const soil = parseInt(soilInput.value)
    const rain = parseInt(rainInput.value)
    const temperature = parseInt(temperatureInput.value)

    if(isNaN(soil)) {
        alert("Erro: digite a umidade do solo")
        messageText.innerText = "Erro: a umidade do solo não foi informada."
        levelText.innerText = "Nível de risco: erro nos dados"
        resultBox.classList.add('show')
        return
    }

    if(soil < 0) {
        alert("Erro: umidade do solo inválida")
        messageText.innerText = "Erro: a umidade do solo não pode ser menor que 0%."
        levelText.innerText = "Nível de risco: erro nos dados"
        resultBox.classList.add('show')
        return
    }

    if(soil > 100) {
        alert("Erro: umidade do solo não pode ultrapassar 100%")
        messageText.innerText = "Erro: a umidade do solo não pode ultrapassar 100%."
        levelText.innerText = "Nível de risco: erro nos dados"
        resultBox.classList.add('show')
        return
    }

    if(isNaN(rain)) {
        alert("Erro: digite a chuva acumulada")
        messageText.innerText = "Erro: a chuva acumulada não foi informada."
        levelText.innerText = "Nível de risco: erro nos dados"
        resultBox.classList.add('show')
        return
    }

    if(rain < 0) {
        alert("Erro: chuva acumulada inválida")
        messageText.innerText = "Erro: a chuva acumulada não pode ser menor que 0 mm."
        levelText.innerText = "Nível de risco: erro nos dados"
        resultBox.classList.add('show')
        return
    }

    if(rain > 500) {
        alert("Erro: chuva acumulada muito alta")
        messageText.innerText = "Erro: a chuva acumulada informada está muito alta para esta simulação."
        levelText.innerText = "Nível de risco: erro nos dados"
        resultBox.classList.add('show')
        return
    }

    if(isNaN(temperature)) {
        alert("Erro: digite a temperatura")
        messageText.innerText = "Erro: a temperatura não foi informada."
        levelText.innerText = "Nível de risco: erro nos dados"
        resultBox.classList.add('show')
        return
    }

    if(temperature < -10) {
        alert("Erro: temperatura inválida")
        messageText.innerText = "Erro: a temperatura está muito baixa para esta simulação agrícola."
        levelText.innerText = "Nível de risco: erro nos dados"
        resultBox.classList.add('show')
        return
    }

    if(temperature > 60) {
        alert("Erro: temperatura inválida")
        messageText.innerText = "Erro: a temperatura informada está muito alta para esta simulação agrícola."
        levelText.innerText = "Nível de risco: erro nos dados"
        resultBox.classList.add('show')
        return
    }

    if(soil < 30 && rain < 8 && temperature >= 34) {
        messageText.innerText = "Risco alto de seca. A umidade do solo está muito baixa, houve pouca chuva e a temperatura está elevada. Avalie a irrigação e observe as áreas mais sensíveis."
        levelText.innerText = "Nível de risco: alto"
    } else if(soil < 35 && rain < 15 && temperature >= 32) {
        messageText.innerText = "Risco médio para alto de seca. A lavoura precisa de atenção, principalmente se a próxima atualização continuar indicando pouca chuva."
        levelText.innerText = "Nível de risco: médio alto"
    } else if(rain > 120) {
        messageText.innerText = "Risco de excesso de chuva. A propriedade pode apresentar encharcamento do solo, então acompanhe áreas de baixa drenagem."
        levelText.innerText = "Nível de risco: médio"
    } else if(temperature >= 38) {
        messageText.innerText = "Risco de calor intenso. A temperatura pode causar estresse na vegetação, por isso acompanhe sinais de perda de vigor."
        levelText.innerText = "Nível de risco: médio"
    } else if(soil < 45 || rain < 20 || temperature >= 30) {
        messageText.innerText = "A propriedade precisa de atenção. Continue acompanhando os indicadores nos próximos dias."
        levelText.innerText = "Nível de risco: médio"
    } else {
        messageText.innerText = "Os indicadores estão em situação estável para esta simulação. Continue acompanhando o histórico da propriedade."
        levelText.innerText = "Nível de risco: baixo"
    }

    resultBox.classList.add('show')
}

document.addEventListener('DOMContentLoaded', function() {
    setupMenu()
    setupAccordion()
})

function setupMenu() {
    const menuBtn = document.querySelector('.menu-btn')
    const navLinks = document.querySelector('.nav-links')

    if(menuBtn == null || navLinks == null) {
        return
    }

    menuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('nav-open')

        if(navLinks.classList.contains('nav-open')) {
            menuBtn.innerText = '✕'
        } else {
            menuBtn.innerText = '☰'
        }
    })
}

function setupAccordion() {
    const questions = document.querySelectorAll('.faq-question')

    for(let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', function() {
            const card = questions[i].parentElement
            card.classList.toggle('faq-open')
        })
    }
}







function validateContact(event) {
    event.preventDefault()

    const nameInput = document.getElementById('contact-name')
    const emailInput = document.getElementById('contact-email')
    const messageInput = document.getElementById('contact-message')
    const resultBox = document.getElementById('contact-result')
    const resultText = document.getElementById('contact-text')

    const name = nameInput.value
    const email = emailInput.value
    const message = messageInput.value

    if(name == "") {
        alert("Erro: por favor, digite seu nome")
        resultText.innerText = "Erro: o campo nome não pode ficar vazio."
        resultBox.classList.add('show')
        return
    }

    if(email == "") {
        alert("Erro: por favor, digite seu e-mail")
        resultText.innerText = "Erro: o campo e-mail não pode ficar vazio."
        resultBox.classList.add('show')
        return
    }

    if(email.indexOf("@") == -1 || email.indexOf(".") == -1) {
        alert("Erro: e-mail inválido")
        resultText.innerText = "Erro: digite um e-mail válido para continuar."
        resultBox.classList.add('show')
        return
    }

    if(message == "") {
        alert("Erro: por favor, digite sua mensagem")
        resultText.innerText = "Erro: a mensagem não pode ficar vazia."
        resultBox.classList.add('show')
        return
    }

    if(message.length < 10) {
        alert("Erro: mensagem muito curta")
        resultText.innerText = "Erro: escreva uma mensagem com pelo menos 10 caracteres."
        resultBox.classList.add('show')
        return
    }

    resultText.innerText = "Mensagem enviada com sucesso! A equipe OrbitAgro recebeu seu contato."
    resultBox.classList.add('show')
}

function calculateRisk(event) {
    event.preventDefault()

    const soilInput = document.getElementById('soil')
    const rainInput = document.getElementById('rain')
    const temperatureInput = document.getElementById('temperature')
    const resultBox = document.getElementById('risk-result')
    const messageText = document.getElementById('risk-message')
    const levelText = document.getElementById('risk-level')

    const soil = parseInt(soilInput.value)
    const rain = parseInt(rainInput.value)
    const temperature = parseInt(temperatureInput.value)

    if(isNaN(soil)) {
        alert("Erro: digite a umidade do solo")
        messageText.innerText = "Erro: a umidade do solo não foi informada."
        levelText.innerText = "Nível de risco: erro nos dados"
        resultBox.classList.add('show')
        return
    }

    if(soil < 0) {
        alert("Erro: umidade do solo inválida")
        messageText.innerText = "Erro: a umidade do solo não pode ser menor que 0%."
        levelText.innerText = "Nível de risco: erro nos dados"
        resultBox.classList.add('show')
        return
    }

    if(soil > 100) {
        alert("Erro: umidade do solo não pode ultrapassar 100%")
        messageText.innerText = "Erro: a umidade do solo não pode ultrapassar 100%."
        levelText.innerText = "Nível de risco: erro nos dados"
        resultBox.classList.add('show')
        return
    }

    if(isNaN(rain)) {
        alert("Erro: digite a chuva acumulada")
        messageText.innerText = "Erro: a chuva acumulada não foi informada."
        levelText.innerText = "Nível de risco: erro nos dados"
        resultBox.classList.add('show')
        return
    }

    if(rain < 0) {
        alert("Erro: chuva acumulada inválida")
        messageText.innerText = "Erro: a chuva acumulada não pode ser menor que 0 mm."
        levelText.innerText = "Nível de risco: erro nos dados"
        resultBox.classList.add('show')
        return
    }

    if(rain > 500) {
        alert("Erro: chuva acumulada muito alta")
        messageText.innerText = "Erro: a chuva acumulada informada está muito alta para esta simulação."
        levelText.innerText = "Nível de risco: erro nos dados"
        resultBox.classList.add('show')
        return
    }

    if(isNaN(temperature)) {
        alert("Erro: digite a temperatura")
        messageText.innerText = "Erro: a temperatura não foi informada."
        levelText.innerText = "Nível de risco: erro nos dados"
        resultBox.classList.add('show')
        return
    }

    if(temperature < -10) {
        alert("Erro: temperatura inválida")
        messageText.innerText = "Erro: a temperatura está muito baixa para esta simulação agrícola."
        levelText.innerText = "Nível de risco: erro nos dados"
        resultBox.classList.add('show')
        return
    }

    if(temperature > 60) {
        alert("Erro: temperatura inválida")
        messageText.innerText = "Erro: a temperatura informada está muito alta para esta simulação agrícola."
        levelText.innerText = "Nível de risco: erro nos dados"
        resultBox.classList.add('show')
        return
    }

    if(soil < 30 && rain < 8 && temperature >= 34) {
        messageText.innerText = "Risco alto de seca. A umidade do solo está muito baixa, houve pouca chuva e a temperatura está elevada. Avalie a irrigação e observe as áreas mais sensíveis."
        levelText.innerText = "Nível de risco: alto"
    } else if(soil < 35 && rain < 15 && temperature >= 32) {
        messageText.innerText = "Risco médio para alto de seca. A lavoura precisa de atenção, principalmente se a próxima atualização continuar indicando pouca chuva."
        levelText.innerText = "Nível de risco: médio alto"
    } else if(rain > 120) {
        messageText.innerText = "Risco de excesso de chuva. A propriedade pode apresentar encharcamento do solo, então acompanhe áreas de baixa drenagem."
        levelText.innerText = "Nível de risco: médio"
    } else if(temperature >= 38) {
        messageText.innerText = "Risco de calor intenso. A temperatura pode causar estresse na vegetação, por isso acompanhe sinais de perda de vigor."
        levelText.innerText = "Nível de risco: médio"
    } else if(soil < 45 || rain < 20 || temperature >= 30) {
        messageText.innerText = "A propriedade precisa de atenção. Continue acompanhando os indicadores nos próximos dias."
        levelText.innerText = "Nível de risco: médio"
    } else {
        messageText.innerText = "Os indicadores estão em situação estável para esta simulação. Continue acompanhando o histórico da propriedade."
        levelText.innerText = "Nível de risco: baixo"
    }

    resultBox.classList.add('show')
}

document.addEventListener('DOMContentLoaded', function() {
    setupMenu()
    setupAccordion()
})

function setupMenu() {
    const menuBtn = document.querySelector('.menu-btn')
    const navLinks = document.querySelector('.nav-links')

    if(menuBtn == null || navLinks == null) {
        return
    }

    menuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('nav-open')

        if(navLinks.classList.contains('nav-open')) {
            menuBtn.innerText = '✕'
        } else {
            menuBtn.innerText = '☰'
        }
    })
}

function setupAccordion() {
    const questions = document.querySelectorAll('.faq-question')

    for(let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', function() {
            const card = questions[i].parentElement
            card.classList.toggle('faq-open')
        })
    }
}



function validateContact(event) {
    event.preventDefault()

    const nameInput = document.getElementById('contact-name')
    const emailInput = document.getElementById('contact-email')
    const messageInput = document.getElementById('contact-message')
    const resultBox = document.getElementById('contact-result')
    const resultText = document.getElementById('contact-text')

    const name = nameInput.value
    const email = emailInput.value
    const message = messageInput.value

    if(name == "") {
        alert("Erro: por favor, digite seu nome")
        resultText.innerText = "Erro: o campo nome não pode ficar vazio."
        resultBox.classList.add('show')
        return
    }

    if(email == "") {
        alert("Erro: por favor, digite seu e-mail")
        resultText.innerText = "Erro: o campo e-mail não pode ficar vazio."
        resultBox.classList.add('show')
        return
    }

    if(email.indexOf("@") == -1 || email.indexOf(".") == -1) {
        alert("Erro: e-mail inválido")
        resultText.innerText = "Erro: digite um e-mail válido para continuar."
        resultBox.classList.add('show')
        return
    }

    if(message == "") {
        alert("Erro: por favor, digite sua mensagem")
        resultText.innerText = "Erro: a mensagem não pode ficar vazia."
        resultBox.classList.add('show')
        return
    }

    if(message.length < 10) {
        alert("Erro: mensagem muito curta")
        resultText.innerText = "Erro: escreva uma mensagem com pelo menos 10 caracteres."
        resultBox.classList.add('show')
        return
    }

    resultText.innerText = "Mensagem enviada com sucesso! A equipe OrbitAgro recebeu seu contato."
    resultBox.classList.add('show')
}

function calculateRisk(event) {
    event.preventDefault()

    const soilInput = document.getElementById('soil')
    const rainInput = document.getElementById('rain')
    const temperatureInput = document.getElementById('temperature')
    const resultBox = document.getElementById('risk-result')
    const messageText = document.getElementById('risk-message')
    const levelText = document.getElementById('risk-level')

    const soil = parseInt(soilInput.value)
    const rain = parseInt(rainInput.value)
    const temperature = parseInt(temperatureInput.value)

    if(isNaN(soil)) {
        alert("Erro: digite a umidade do solo")
        messageText.innerText = "Erro: a umidade do solo não foi informada."
        levelText.innerText = "Nível de risco: erro nos dados"
        resultBox.classList.add('show')
        return
    }

    if(soil < 0) {
        alert("Erro: umidade do solo inválida")
        messageText.innerText = "Erro: a umidade do solo não pode ser menor que 0%."
        levelText.innerText = "Nível de risco: erro nos dados"
        resultBox.classList.add('show')
        return
    }

    if(soil > 100) {
        alert("Erro: umidade do solo não pode ultrapassar 100%")
        messageText.innerText = "Erro: a umidade do solo não pode ultrapassar 100%."
        levelText.innerText = "Nível de risco: erro nos dados"
        resultBox.classList.add('show')
        return
    }

    if(isNaN(rain)) {
        alert("Erro: digite a chuva acumulada")
        messageText.innerText = "Erro: a chuva acumulada não foi informada."
        levelText.innerText = "Nível de risco: erro nos dados"
        resultBox.classList.add('show')
        return
    }

    if(rain < 0) {
        alert("Erro: chuva acumulada inválida")
        messageText.innerText = "Erro: a chuva acumulada não pode ser menor que 0 mm."
        levelText.innerText = "Nível de risco: erro nos dados"
        resultBox.classList.add('show')
        return
    }

    if(rain > 500) {
        alert("Erro: chuva acumulada muito alta")
        messageText.innerText = "Erro: a chuva acumulada informada está muito alta para esta simulação."
        levelText.innerText = "Nível de risco: erro nos dados"
        resultBox.classList.add('show')
        return
    }

    if(isNaN(temperature)) {
        alert("Erro: digite a temperatura")
        messageText.innerText = "Erro: a temperatura não foi informada."
        levelText.innerText = "Nível de risco: erro nos dados"
        resultBox.classList.add('show')
        return
    }

    if(temperature < -10) {
        alert("Erro: temperatura inválida")
        messageText.innerText = "Erro: a temperatura está muito baixa para esta simulação agrícola."
        levelText.innerText = "Nível de risco: erro nos dados"
        resultBox.classList.add('show')
        return
    }

    if(temperature > 60) {
        alert("Erro: temperatura inválida")
        messageText.innerText = "Erro: a temperatura informada está muito alta para esta simulação agrícola."
        levelText.innerText = "Nível de risco: erro nos dados"
        resultBox.classList.add('show')
        return
    }

    if(soil < 30 && rain < 8 && temperature >= 34) {
        messageText.innerText = "Risco alto de seca. A umidade do solo está muito baixa, houve pouca chuva e a temperatura está elevada. Avalie a irrigação e observe as áreas mais sensíveis."
        levelText.innerText = "Nível de risco: alto"
    } else if(soil < 35 && rain < 15 && temperature >= 32) {
        messageText.innerText = "Risco médio para alto de seca. A lavoura precisa de atenção, principalmente se a próxima atualização continuar indicando pouca chuva."
        levelText.innerText = "Nível de risco: médio alto"
    } else if(rain > 120) {
        messageText.innerText = "Risco de excesso de chuva. A propriedade pode apresentar encharcamento do solo, então acompanhe áreas de baixa drenagem."
        levelText.innerText = "Nível de risco: médio"
    } else if(temperature >= 38) {
        messageText.innerText = "Risco de calor intenso. A temperatura pode causar estresse na vegetação, por isso acompanhe sinais de perda de vigor."
        levelText.innerText = "Nível de risco: médio"
    } else if(soil < 45 || rain < 20 || temperature >= 30) {
        messageText.innerText = "A propriedade precisa de atenção. Continue acompanhando os indicadores nos próximos dias."
        levelText.innerText = "Nível de risco: médio"
    } else {
        messageText.innerText = "Os indicadores estão em situação estável para esta simulação. Continue acompanhando o histórico da propriedade."
        levelText.innerText = "Nível de risco: baixo"
    }

    resultBox.classList.add('show')
}

document.addEventListener('DOMContentLoaded', function() {
    setupMenu()
    setupAccordion()
})

function setupMenu() {
    const menuBtn = document.querySelector('.menu-btn')
    const navLinks = document.querySelector('.nav-links')

    if(menuBtn == null || navLinks == null) {
        return
    }

    menuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('nav-open')

        if(navLinks.classList.contains('nav-open')) {
            menuBtn.innerText = '✕'
        } else {
            menuBtn.innerText = '☰'
        }
    })
}

function setupAccordion() {
    const questions = document.querySelectorAll('.faq-question')

    for(let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', function() {
            const card = questions[i].parentElement
            card.classList.toggle('faq-open')
        })
    }
}



function validateContact(event) {
    event.preventDefault()

    const nameInput = document.getElementById('contact-name')
    const emailInput = document.getElementById('contact-email')
    const messageInput = document.getElementById('contact-message')
    const resultBox = document.getElementById('contact-result')
    const resultText = document.getElementById('contact-text')

    const name = nameInput.value
    const email = emailInput.value
    const message = messageInput.value

    if(name == "") {
        alert("Erro: por favor, digite seu nome")
        resultText.innerText = "Erro: o campo nome não pode ficar vazio."
        resultBox.classList.add('show')
        return
    }

    if(email == "") {
        alert("Erro: por favor, digite seu e-mail")
        resultText.innerText = "Erro: o campo e-mail não pode ficar vazio."
        resultBox.classList.add('show')
        return
    }

    if(email.indexOf("@") == -1 || email.indexOf(".") == -1) {
        alert("Erro: e-mail inválido")
        resultText.innerText = "Erro: digite um e-mail válido para continuar."
        resultBox.classList.add('show')
        return
    }

    if(message == "") {
        alert("Erro: por favor, digite sua mensagem")
        resultText.innerText = "Erro: a mensagem não pode ficar vazia."
        resultBox.classList.add('show')
        return
    }

    if(message.length < 10) {
        alert("Erro: mensagem muito curta")
        resultText.innerText = "Erro: escreva uma mensagem com pelo menos 10 caracteres."
        resultBox.classList.add('show')
        return
    }

    resultText.innerText = "Mensagem enviada com sucesso! A equipe OrbitAgro recebeu seu contato."
    resultBox.classList.add('show')
}

function calculateRisk(event) {
    event.preventDefault()

    const soilInput = document.getElementById('soil')
    const rainInput = document.getElementById('rain')
    const temperatureInput = document.getElementById('temperature')
    const resultBox = document.getElementById('risk-result')
    const messageText = document.getElementById('risk-message')
    const levelText = document.getElementById('risk-level')

    const soil = parseInt(soilInput.value)
    const rain = parseInt(rainInput.value)
    const temperature = parseInt(temperatureInput.value)

    if(isNaN(soil)) {
        alert("Erro: digite a umidade do solo")
        messageText.innerText = "Erro: a umidade do solo não foi informada."
        levelText.innerText = "Nível de risco: erro nos dados"
        resultBox.classList.add('show')
        return
    }

    if(soil < 0) {
        alert("Erro: umidade do solo inválida")
        messageText.innerText = "Erro: a umidade do solo não pode ser menor que 0%."
        levelText.innerText = "Nível de risco: erro nos dados"
        resultBox.classList.add('show')
        return
    }

    if(soil > 100) {
        alert("Erro: umidade do solo não pode ultrapassar 100%")
        messageText.innerText = "Erro: a umidade do solo não pode ultrapassar 100%."
        levelText.innerText = "Nível de risco: erro nos dados"
        resultBox.classList.add('show')
        return
    }

    if(isNaN(rain)) {
        alert("Erro: digite a chuva acumulada")
        messageText.innerText = "Erro: a chuva acumulada não foi informada."
        levelText.innerText = "Nível de risco: erro nos dados"
        resultBox.classList.add('show')
        return
    }

    if(rain < 0) {
        alert("Erro: chuva acumulada inválida")
        messageText.innerText = "Erro: a chuva acumulada não pode ser menor que 0 mm."
        levelText.innerText = "Nível de risco: erro nos dados"
        resultBox.classList.add('show')
        return
    }

    if(rain > 500) {
        alert("Erro: chuva acumulada muito alta")
        messageText.innerText = "Erro: a chuva acumulada informada está muito alta para esta simulação."
        levelText.innerText = "Nível de risco: erro nos dados"
        resultBox.classList.add('show')
        return
    }

    if(isNaN(temperature)) {
        alert("Erro: digite a temperatura")
        messageText.innerText = "Erro: a temperatura não foi informada."
        levelText.innerText = "Nível de risco: erro nos dados"
        resultBox.classList.add('show')
        return
    }

    if(temperature < -10) {
        alert("Erro: temperatura inválida")
        messageText.innerText = "Erro: a temperatura está muito baixa para esta simulação agrícola."
        levelText.innerText = "Nível de risco: erro nos dados"
        resultBox.classList.add('show')
        return
    }

    if(temperature > 60) {
        alert("Erro: temperatura inválida")
        messageText.innerText = "Erro: a temperatura informada está muito alta para esta simulação agrícola."
        levelText.innerText = "Nível de risco: erro nos dados"
        resultBox.classList.add('show')
        return
    }

    if(soil < 30 && rain < 8 && temperature >= 34) {
        messageText.innerText = "Risco alto de seca. A umidade do solo está muito baixa, houve pouca chuva e a temperatura está elevada. Avalie a irrigação e observe as áreas mais sensíveis."
        levelText.innerText = "Nível de risco: alto"
    } else if(soil < 35 && rain < 15 && temperature >= 32) {
        messageText.innerText = "Risco médio para alto de seca. A lavoura precisa de atenção, principalmente se a próxima atualização continuar indicando pouca chuva."
        levelText.innerText = "Nível de risco: médio alto"
    } else if(rain > 120) {
        messageText.innerText = "Risco de excesso de chuva. A propriedade pode apresentar encharcamento do solo, então acompanhe áreas de baixa drenagem."
        levelText.innerText = "Nível de risco: médio"
    } else if(temperature >= 38) {
        messageText.innerText = "Risco de calor intenso. A temperatura pode causar estresse na vegetação, por isso acompanhe sinais de perda de vigor."
        levelText.innerText = "Nível de risco: médio"
    } else if(soil < 45 || rain < 20 || temperature >= 30) {
        messageText.innerText = "A propriedade precisa de atenção. Continue acompanhando os indicadores nos próximos dias."
        levelText.innerText = "Nível de risco: médio"
    } else {
        messageText.innerText = "Os indicadores estão em situação estável para esta simulação. Continue acompanhando o histórico da propriedade."
        levelText.innerText = "Nível de risco: baixo"
    }

    resultBox.classList.add('show')
}

document.addEventListener('DOMContentLoaded', function() {
    setupMenu()
    setupAccordion()
})

function setupMenu() {
    const menuBtn = document.querySelector('.menu-btn')
    const navLinks = document.querySelector('.nav-links')

    if(menuBtn == null || navLinks == null) {
        return
    }

    menuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('nav-open')

        if(navLinks.classList.contains('nav-open')) {
            menuBtn.innerText = '✕'
        } else {
            menuBtn.innerText = '☰'
        }
    })
}

function setupAccordion() {
    const questions = document.querySelectorAll('.faq-question')

    for(let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', function() {
            const card = questions[i].parentElement
            card.classList.toggle('faq-open')
        })
    }
}





function validateContact(event) {
    event.preventDefault()

    const nameInput = document.getElementById('contact-name')
    const emailInput = document.getElementById('contact-email')
    const messageInput = document.getElementById('contact-message')
    const resultBox = document.getElementById('contact-result')
    const resultText = document.getElementById('contact-text')

    const name = nameInput.value
    const email = emailInput.value
    const message = messageInput.value

    if(name == "") {
        alert("Erro: por favor, digite seu nome")
        resultText.innerText = "Erro: o campo nome não pode ficar vazio."
        resultBox.classList.add('show')
        return
    }

    if(email == "") {
        alert("Erro: por favor, digite seu e-mail")
        resultText.innerText = "Erro: o campo e-mail não pode ficar vazio."
        resultBox.classList.add('show')
        return
    }

    if(email.indexOf("@") == -1 || email.indexOf(".") == -1) {
        alert("Erro: e-mail inválido")
        resultText.innerText = "Erro: digite um e-mail válido para continuar."
        resultBox.classList.add('show')
        return
    }

    if(message == "") {
        alert("Erro: por favor, digite sua mensagem")
        resultText.innerText = "Erro: a mensagem não pode ficar vazia."
        resultBox.classList.add('show')
        return
    }

    if(message.length < 10) {
        alert("Erro: mensagem muito curta")
        resultText.innerText = "Erro: escreva uma mensagem com pelo menos 10 caracteres."
        resultBox.classList.add('show')
        return
    }

    resultText.innerText = "Mensagem enviada com sucesso! A equipe OrbitAgro recebeu seu contato."
    resultBox.classList.add('show')
}

function calculateRisk(event) {
    event.preventDefault()

    const soilInput = document.getElementById('soil')
    const rainInput = document.getElementById('rain')
    const temperatureInput = document.getElementById('temperature')
    const resultBox = document.getElementById('risk-result')
    const messageText = document.getElementById('risk-message')
    const levelText = document.getElementById('risk-level')

    const soil = parseInt(soilInput.value)
    const rain = parseInt(rainInput.value)
    const temperature = parseInt(temperatureInput.value)

    if(isNaN(soil)) {
        alert("Erro: digite a umidade do solo")
        messageText.innerText = "Erro: a umidade do solo não foi informada."
        levelText.innerText = "Nível de risco: erro nos dados"
        resultBox.classList.add('show')
        return
    }

    if(soil < 0) {
        alert("Erro: umidade do solo inválida")
        messageText.innerText = "Erro: a umidade do solo não pode ser menor que 0%."
        levelText.innerText = "Nível de risco: erro nos dados"
        resultBox.classList.add('show')
        return
    }

    if(soil > 100) {
        alert("Erro: umidade do solo não pode ultrapassar 100%")
        messageText.innerText = "Erro: a umidade do solo não pode ultrapassar 100%."
        levelText.innerText = "Nível de risco: erro nos dados"
        resultBox.classList.add('show')
        return
    }

    if(isNaN(rain)) {
        alert("Erro: digite a chuva acumulada")
        messageText.innerText = "Erro: a chuva acumulada não foi informada."
        levelText.innerText = "Nível de risco: erro nos dados"
        resultBox.classList.add('show')
        return
    }

    if(rain < 0) {
        alert("Erro: chuva acumulada inválida")
        messageText.innerText = "Erro: a chuva acumulada não pode ser menor que 0 mm."
        levelText.innerText = "Nível de risco: erro nos dados"
        resultBox.classList.add('show')
        return
    }

    if(rain > 500) {
        alert("Erro: chuva acumulada muito alta")
        messageText.innerText = "Erro: a chuva acumulada informada está muito alta para esta simulação."
        levelText.innerText = "Nível de risco: erro nos dados"
        resultBox.classList.add('show')
        return
    }

    if(isNaN(temperature)) {
        alert("Erro: digite a temperatura")
        messageText.innerText = "Erro: a temperatura não foi informada."
        levelText.innerText = "Nível de risco: erro nos dados"
        resultBox.classList.add('show')
        return
    }

    if(temperature < -10) {
        alert("Erro: temperatura inválida")
        messageText.innerText = "Erro: a temperatura está muito baixa para esta simulação agrícola."
        levelText.innerText = "Nível de risco: erro nos dados"
        resultBox.classList.add('show')
        return
    }

    if(temperature > 60) {
        alert("Erro: temperatura inválida")
        messageText.innerText = "Erro: a temperatura informada está muito alta para esta simulação agrícola."
        levelText.innerText = "Nível de risco: erro nos dados"
        resultBox.classList.add('show')
        return
    }

    if(soil < 30 && rain < 8 && temperature >= 34) {
        messageText.innerText = "Risco alto de seca. A umidade do solo está muito baixa, houve pouca chuva e a temperatura está elevada. Avalie a irrigação e observe as áreas mais sensíveis."
        levelText.innerText = "Nível de risco: alto"
    } else if(soil < 35 && rain < 15 && temperature >= 32) {
        messageText.innerText = "Risco médio para alto de seca. A lavoura precisa de atenção, principalmente se a próxima atualização continuar indicando pouca chuva."
        levelText.innerText = "Nível de risco: médio alto"
    } else if(rain > 120) {
        messageText.innerText = "Risco de excesso de chuva. A propriedade pode apresentar encharcamento do solo, então acompanhe áreas de baixa drenagem."
        levelText.innerText = "Nível de risco: médio"
    } else if(temperature >= 38) {
        messageText.innerText = "Risco de calor intenso. A temperatura pode causar estresse na vegetação, por isso acompanhe sinais de perda de vigor."
        levelText.innerText = "Nível de risco: médio"
    } else if(soil < 45 || rain < 20 || temperature >= 30) {
        messageText.innerText = "A propriedade precisa de atenção. Continue acompanhando os indicadores nos próximos dias."
        levelText.innerText = "Nível de risco: médio"
    } else {
        messageText.innerText = "Os indicadores estão em situação estável para esta simulação. Continue acompanhando o histórico da propriedade."
        levelText.innerText = "Nível de risco: baixo"
    }

    resultBox.classList.add('show')
}

document.addEventListener('DOMContentLoaded', function() {
    setupMenu()
    setupAccordion()
})

function setupMenu() {
    const menuBtn = document.querySelector('.menu-btn')
    const navLinks = document.querySelector('.nav-links')

    if(menuBtn == null || navLinks == null) {
        return
    }

    menuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('nav-open')

        if(navLinks.classList.contains('nav-open')) {
            menuBtn.innerText = '✕'
        } else {
            menuBtn.innerText = '☰'
        }
    })
}

function setupAccordion() {
    const questions = document.querySelectorAll('.faq-question')

    for(let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', function() {
            const card = questions[i].parentElement
            card.classList.toggle('faq-open')
        })
    }
}



function validateContact(event) {
    event.preventDefault()

    const nameInput = document.getElementById('contact-name')
    const emailInput = document.getElementById('contact-email')
    const messageInput = document.getElementById('contact-message')
    const resultBox = document.getElementById('contact-result')
    const resultText = document.getElementById('contact-text')

    const name = nameInput.value
    const email = emailInput.value
    const message = messageInput.value

    if(name == "") {
        alert("Erro: por favor, digite seu nome")
        resultText.innerText = "Erro: o campo nome não pode ficar vazio."
        resultBox.classList.add('show')
        return
    }

    if(email == "") {
        alert("Erro: por favor, digite seu e-mail")
        resultText.innerText = "Erro: o campo e-mail não pode ficar vazio."
        resultBox.classList.add('show')
        return
    }

    if(email.indexOf("@") == -1 || email.indexOf(".") == -1) {
        alert("Erro: e-mail inválido")
        resultText.innerText = "Erro: digite um e-mail válido para continuar."
        resultBox.classList.add('show')
        return
    }

    if(message == "") {
        alert("Erro: por favor, digite sua mensagem")
        resultText.innerText = "Erro: a mensagem não pode ficar vazia."
        resultBox.classList.add('show')
        return
    }

    if(message.length < 10) {
        alert("Erro: mensagem muito curta")
        resultText.innerText = "Erro: escreva uma mensagem com pelo menos 10 caracteres."
        resultBox.classList.add('show')
        return
    }

    resultText.innerText = "Mensagem enviada com sucesso! A equipe OrbitAgro recebeu seu contato."
    resultBox.classList.add('show')
}

function calculateRisk(event) {
    event.preventDefault()

    const soilInput = document.getElementById('soil')
    const rainInput = document.getElementById('rain')
    const temperatureInput = document.getElementById('temperature')
    const resultBox = document.getElementById('risk-result')
    const messageText = document.getElementById('risk-message')
    const levelText = document.getElementById('risk-level')

    const soil = parseInt(soilInput.value)
    const rain = parseInt(rainInput.value)
    const temperature = parseInt(temperatureInput.value)

    if(isNaN(soil)) {
        alert("Erro: digite a umidade do solo")
        messageText.innerText = "Erro: a umidade do solo não foi informada."
        levelText.innerText = "Nível de risco: erro nos dados"
        resultBox.classList.add('show')
        return
    }

    if(soil < 0) {
        alert("Erro: umidade do solo inválida")
        messageText.innerText = "Erro: a umidade do solo não pode ser menor que 0%."
        levelText.innerText = "Nível de risco: erro nos dados"
        resultBox.classList.add('show')
        return
    }

    if(soil > 100) {
        alert("Erro: umidade do solo não pode ultrapassar 100%")
        messageText.innerText = "Erro: a umidade do solo não pode ultrapassar 100%."
        levelText.innerText = "Nível de risco: erro nos dados"
        resultBox.classList.add('show')
        return
    }

    if(isNaN(rain)) {
        alert("Erro: digite a chuva acumulada")
        messageText.innerText = "Erro: a chuva acumulada não foi informada."
        levelText.innerText = "Nível de risco: erro nos dados"
        resultBox.classList.add('show')
        return
    }

    if(rain < 0) {
        alert("Erro: chuva acumulada inválida")
        messageText.innerText = "Erro: a chuva acumulada não pode ser menor que 0 mm."
        levelText.innerText = "Nível de risco: erro nos dados"
        resultBox.classList.add('show')
        return
    }

    if(rain > 500) {
        alert("Erro: chuva acumulada muito alta")
        messageText.innerText = "Erro: a chuva acumulada informada está muito alta para esta simulação."
        levelText.innerText = "Nível de risco: erro nos dados"
        resultBox.classList.add('show')
        return
    }

    if(isNaN(temperature)) {
        alert("Erro: digite a temperatura")
        messageText.innerText = "Erro: a temperatura não foi informada."
        levelText.innerText = "Nível de risco: erro nos dados"
        resultBox.classList.add('show')
        return
    }

    if(temperature < -10) {
        alert("Erro: temperatura inválida")
        messageText.innerText = "Erro: a temperatura está muito baixa para esta simulação agrícola."
        levelText.innerText = "Nível de risco: erro nos dados"
        resultBox.classList.add('show')
        return
    }

    if(temperature > 60) {
        alert("Erro: temperatura inválida")
        messageText.innerText = "Erro: a temperatura informada está muito alta para esta simulação agrícola."
        levelText.innerText = "Nível de risco: erro nos dados"
        resultBox.classList.add('show')
        return
    }

    if(soil < 30 && rain < 8 && temperature >= 34) {
        messageText.innerText = "Risco alto de seca. A umidade do solo está muito baixa, houve pouca chuva e a temperatura está elevada. Avalie a irrigação e observe as áreas mais sensíveis."
        levelText.innerText = "Nível de risco: alto"
    } else if(soil < 35 && rain < 15 && temperature >= 32) {
        messageText.innerText = "Risco médio para alto de seca. A lavoura precisa de atenção, principalmente se a próxima atualização continuar indicando pouca chuva."
        levelText.innerText = "Nível de risco: médio alto"
    } else if(rain > 120) {
        messageText.innerText = "Risco de excesso de chuva. A propriedade pode apresentar encharcamento do solo, então acompanhe áreas de baixa drenagem."
        levelText.innerText = "Nível de risco: médio"
    } else if(temperature >= 38) {
        messageText.innerText = "Risco de calor intenso. A temperatura pode causar estresse na vegetação, por isso acompanhe sinais de perda de vigor."
        levelText.innerText = "Nível de risco: médio"
    } else if(soil < 45 || rain < 20 || temperature >= 30) {
        messageText.innerText = "A propriedade precisa de atenção. Continue acompanhando os indicadores nos próximos dias."
        levelText.innerText = "Nível de risco: médio"
    } else {
        messageText.innerText = "Os indicadores estão em situação estável para esta simulação. Continue acompanhando o histórico da propriedade."
        levelText.innerText = "Nível de risco: baixo"
    }

    resultBox.classList.add('show')
}

document.addEventListener('DOMContentLoaded', function() {
    setupMenu()
    setupAccordion()
})

function setupMenu() {
    const menuBtn = document.querySelector('.menu-btn')
    const navLinks = document.querySelector('.nav-links')

    if(menuBtn == null || navLinks == null) {
        return
    }

    menuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('nav-open')

        if(navLinks.classList.contains('nav-open')) {
            menuBtn.innerText = '✕'
        } else {
            menuBtn.innerText = '☰'
        }
    })
}

function setupAccordion() {
    const questions = document.querySelectorAll('.faq-question')

    for(let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', function() {
            const card = questions[i].parentElement
            card.classList.toggle('faq-open')
        })
    }
}



function validateContact(event) {
    event.preventDefault()

    const nameInput = document.getElementById('contact-name')
    const emailInput = document.getElementById('contact-email')
    const messageInput = document.getElementById('contact-message')
    const resultBox = document.getElementById('contact-result')
    const resultText = document.getElementById('contact-text')

    const name = nameInput.value
    const email = emailInput.value
    const message = messageInput.value

    if(name == "") {
        alert("Erro: por favor, digite seu nome")
        resultText.innerText = "Erro: o campo nome não pode ficar vazio."
        resultBox.classList.add('show')
        return
    }

    if(email == "") {
        alert("Erro: por favor, digite seu e-mail")
        resultText.innerText = "Erro: o campo e-mail não pode ficar vazio."
        resultBox.classList.add('show')
        return
    }

    if(email.indexOf("@") == -1 || email.indexOf(".") == -1) {
        alert("Erro: e-mail inválido")
        resultText.innerText = "Erro: digite um e-mail válido para continuar."
        resultBox.classList.add('show')
        return
    }

    if(message == "") {
        alert("Erro: por favor, digite sua mensagem")
        resultText.innerText = "Erro: a mensagem não pode ficar vazia."
        resultBox.classList.add('show')
        return
    }

    if(message.length < 10) {
        alert("Erro: mensagem muito curta")
        resultText.innerText = "Erro: escreva uma mensagem com pelo menos 10 caracteres."
        resultBox.classList.add('show')
        return
    }

    resultText.innerText = "Mensagem enviada com sucesso! A equipe OrbitAgro recebeu seu contato."
    resultBox.classList.add('show')
}

function calculateRisk(event) {
    event.preventDefault()

    const soilInput = document.getElementById('soil')
    const rainInput = document.getElementById('rain')
    const temperatureInput = document.getElementById('temperature')
    const resultBox = document.getElementById('risk-result')
    const messageText = document.getElementById('risk-message')
    const levelText = document.getElementById('risk-level')

    const soil = parseInt(soilInput.value)
    const rain = parseInt(rainInput.value)
    const temperature = parseInt(temperatureInput.value)

    if(isNaN(soil)) {
        alert("Erro: digite a umidade do solo")
        messageText.innerText = "Erro: a umidade do solo não foi informada."
        levelText.innerText = "Nível de risco: erro nos dados"
        resultBox.classList.add('show')
        return
    }

    if(soil < 0) {
        alert("Erro: umidade do solo inválida")
        messageText.innerText = "Erro: a umidade do solo não pode ser menor que 0%."
        levelText.innerText = "Nível de risco: erro nos dados"
        resultBox.classList.add('show')
        return
    }

    if(soil > 100) {
        alert("Erro: umidade do solo não pode ultrapassar 100%")
        messageText.innerText = "Erro: a umidade do solo não pode ultrapassar 100%."
        levelText.innerText = "Nível de risco: erro nos dados"
        resultBox.classList.add('show')
        return
    }

    if(isNaN(rain)) {
        alert("Erro: digite a chuva acumulada")
        messageText.innerText = "Erro: a chuva acumulada não foi informada."
        levelText.innerText = "Nível de risco: erro nos dados"
        resultBox.classList.add('show')
        return
    }

    if(rain < 0) {
        alert("Erro: chuva acumulada inválida")
        messageText.innerText = "Erro: a chuva acumulada não pode ser menor que 0 mm."
        levelText.innerText = "Nível de risco: erro nos dados"
        resultBox.classList.add('show')
        return
    }

    if(rain > 500) {
        alert("Erro: chuva acumulada muito alta")
        messageText.innerText = "Erro: a chuva acumulada informada está muito alta para esta simulação."
        levelText.innerText = "Nível de risco: erro nos dados"
        resultBox.classList.add('show')
        return
    }

    if(isNaN(temperature)) {
        alert("Erro: digite a temperatura")
        messageText.innerText = "Erro: a temperatura não foi informada."
        levelText.innerText = "Nível de risco: erro nos dados"
        resultBox.classList.add('show')
        return
    }

    if(temperature < -10) {
        alert("Erro: temperatura inválida")
        messageText.innerText = "Erro: a temperatura está muito baixa para esta simulação agrícola."
        levelText.innerText = "Nível de risco: erro nos dados"
        resultBox.classList.add('show')
        return
    }

    if(temperature > 60) {
        alert("Erro: temperatura inválida")
        messageText.innerText = "Erro: a temperatura informada está muito alta para esta simulação agrícola."
        levelText.innerText = "Nível de risco: erro nos dados"
        resultBox.classList.add('show')
        return
    }

    if(soil < 30 && rain < 8 && temperature >= 34) {
        messageText.innerText = "Risco alto de seca. A umidade do solo está muito baixa, houve pouca chuva e a temperatura está elevada. Avalie a irrigação e observe as áreas mais sensíveis."
        levelText.innerText = "Nível de risco: alto"
    } else if(soil < 35 && rain < 15 && temperature >= 32) {
        messageText.innerText = "Risco médio para alto de seca. A lavoura precisa de atenção, principalmente se a próxima atualização continuar indicando pouca chuva."
        levelText.innerText = "Nível de risco: médio alto"
    } else if(rain > 120) {
        messageText.innerText = "Risco de excesso de chuva. A propriedade pode apresentar encharcamento do solo, então acompanhe áreas de baixa drenagem."
        levelText.innerText = "Nível de risco: médio"
    } else if(temperature >= 38) {
        messageText.innerText = "Risco de calor intenso. A temperatura pode causar estresse na vegetação, por isso acompanhe sinais de perda de vigor."
        levelText.innerText = "Nível de risco: médio"
    } else if(soil < 45 || rain < 20 || temperature >= 30) {
        messageText.innerText = "A propriedade precisa de atenção. Continue acompanhando os indicadores nos próximos dias."
        levelText.innerText = "Nível de risco: médio"
    } else {
        messageText.innerText = "Os indicadores estão em situação estável para esta simulação. Continue acompanhando o histórico da propriedade."
        levelText.innerText = "Nível de risco: baixo"
    }

    resultBox.classList.add('show')
}

document.addEventListener('DOMContentLoaded', function() {
    setupMenu()
    setupAccordion()
})

function setupMenu() {
    const menuBtn = document.querySelector('.menu-btn')
    const navLinks = document.querySelector('.nav-links')

    if(menuBtn == null || navLinks == null) {
        return
    }

    menuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('nav-open')

        if(navLinks.classList.contains('nav-open')) {
            menuBtn.innerText = '✕'
        } else {
            menuBtn.innerText = '☰'
        }
    })
}

function setupAccordion() {
    const questions = document.querySelectorAll('.faq-question')

    for(let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', function() {
            const card = questions[i].parentElement
            card.classList.toggle('faq-open')
        })
    }
}

function validateContact(event) {
    event.preventDefault()

    const nameInput = document.getElementById('contact-name')
    const emailInput = document.getElementById('contact-email')
    const messageInput = document.getElementById('contact-message')
    const resultBox = document.getElementById('contact-result')
    const resultText = document.getElementById('contact-text')

    const name = nameInput.value
    const email = emailInput.value
    const message = messageInput.value

    if(name == "") {
        alert("Erro: por favor, digite seu nome")
        resultText.innerText = "Erro: o campo nome não pode ficar vazio."
        resultBox.classList.add('show')
        return
    }

    if(email == "") {
        alert("Erro: por favor, digite seu e-mail")
        resultText.innerText = "Erro: o campo e-mail não pode ficar vazio."
        resultBox.classList.add('show')
        return
    }

    if(email.indexOf("@") == -1 || email.indexOf(".") == -1) {
        alert("Erro: e-mail inválido")
        resultText.innerText = "Erro: digite um e-mail válido para continuar."
        resultBox.classList.add('show')
        return
    }

    if(message == "") {
        alert("Erro: por favor, digite sua mensagem")
        resultText.innerText = "Erro: a mensagem não pode ficar vazia."
        resultBox.classList.add('show')
        return
    }

    if(message.length < 10) {
        alert("Erro: mensagem muito curta")
        resultText.innerText = "Erro: escreva uma mensagem com pelo menos 10 caracteres."
        resultBox.classList.add('show')
        return
    }

    resultText.innerText = "Mensagem enviada com sucesso! A equipe OrbitAgro recebeu seu contato."
    resultBox.classList.add('show')
}

function calculateRisk(event) {
    event.preventDefault()

    const soilInput = document.getElementById('soil')
    const rainInput = document.getElementById('rain')
    const temperatureInput = document.getElementById('temperature')
    const resultBox = document.getElementById('risk-result')
    const messageText = document.getElementById('risk-message')
    const levelText = document.getElementById('risk-level')

    const soil = parseInt(soilInput.value)
    const rain = parseInt(rainInput.value)
    const temperature = parseInt(temperatureInput.value)

    if(isNaN(soil)) {
        alert("Erro: digite a umidade do solo")
        messageText.innerText = "Erro: a umidade do solo não foi informada."
        levelText.innerText = "Nível de risco: erro nos dados"
        resultBox.classList.add('show')
        return
    }

    if(soil < 0) {
        alert("Erro: umidade do solo inválida")
        messageText.innerText = "Erro: a umidade do solo não pode ser menor que 0%."
        levelText.innerText = "Nível de risco: erro nos dados"
        resultBox.classList.add('show')
        return
    }

    if(soil > 100) {
        alert("Erro: umidade do solo não pode ultrapassar 100%")
        messageText.innerText = "Erro: a umidade do solo não pode ultrapassar 100%."
        levelText.innerText = "Nível de risco: erro nos dados"
        resultBox.classList.add('show')
        return
    }

    if(isNaN(rain)) {
        alert("Erro: digite a chuva acumulada")
        messageText.innerText = "Erro: a chuva acumulada não foi informada."
        levelText.innerText = "Nível de risco: erro nos dados"
        resultBox.classList.add('show')
        return
    }

    if(rain < 0) {
        alert("Erro: chuva acumulada inválida")
        messageText.innerText = "Erro: a chuva acumulada não pode ser menor que 0 mm."
        levelText.innerText = "Nível de risco: erro nos dados"
        resultBox.classList.add('show')
        return
    }

    if(rain > 500) {
        alert("Erro: chuva acumulada muito alta")
        messageText.innerText = "Erro: a chuva acumulada informada está muito alta para esta simulação."
        levelText.innerText = "Nível de risco: erro nos dados"
        resultBox.classList.add('show')
        return
    }

    if(isNaN(temperature)) {
        alert("Erro: digite a temperatura")
        messageText.innerText = "Erro: a temperatura não foi informada."
        levelText.innerText = "Nível de risco: erro nos dados"
        resultBox.classList.add('show')
        return
    }

    if(temperature < -10) {
        alert("Erro: temperatura inválida")
        messageText.innerText = "Erro: a temperatura está muito baixa para esta simulação agrícola."
        levelText.innerText = "Nível de risco: erro nos dados"
        resultBox.classList.add('show')
        return
    }

    if(temperature > 60) {
        alert("Erro: temperatura inválida")
        messageText.innerText = "Erro: a temperatura informada está muito alta para esta simulação agrícola."
        levelText.innerText = "Nível de risco: erro nos dados"
        resultBox.classList.add('show')
        return
    }

    if(soil < 30 && rain < 8 && temperature >= 34) {
        messageText.innerText = "Risco alto de seca. A umidade do solo está muito baixa, houve pouca chuva e a temperatura está elevada. Avalie a irrigação e observe as áreas mais sensíveis."
        levelText.innerText = "Nível de risco: alto"
    } else if(soil < 35 && rain < 15 && temperature >= 32) {
        messageText.innerText = "Risco médio para alto de seca. A lavoura precisa de atenção, principalmente se a próxima atualização continuar indicando pouca chuva."
        levelText.innerText = "Nível de risco: médio alto"
    } else if(rain > 120) {
        messageText.innerText = "Risco de excesso de chuva. A propriedade pode apresentar encharcamento do solo, então acompanhe áreas de baixa drenagem."
        levelText.innerText = "Nível de risco: médio"
    } else if(temperature >= 38) {
        messageText.innerText = "Risco de calor intenso. A temperatura pode causar estresse na vegetação, por isso acompanhe sinais de perda de vigor."
        levelText.innerText = "Nível de risco: médio"
    } else if(soil < 45 || rain < 20 || temperature >= 30) {
        messageText.innerText = "A propriedade precisa de atenção. Continue acompanhando os indicadores nos próximos dias."
        levelText.innerText = "Nível de risco: médio"
    } else {
        messageText.innerText = "Os indicadores estão em situação estável para esta simulação. Continue acompanhando o histórico da propriedade."
        levelText.innerText = "Nível de risco: baixo"
    }

    resultBox.classList.add('show')
}

document.addEventListener('DOMContentLoaded', function() {
    setupMenu()
    setupAccordion()
})

function setupMenu() {
    const menuBtn = document.querySelector('.menu-btn')
    const navLinks = document.querySelector('.nav-links')

    if(menuBtn == null || navLinks == null) {
        return
    }

    menuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('nav-open')

        if(navLinks.classList.contains('nav-open')) {
            menuBtn.innerText = '✕'
        } else {
            menuBtn.innerText = '☰'
        }
    })
}

function setupAccordion() {
    const questions = document.querySelectorAll('.faq-question')

    for(let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', function() {
            const card = questions[i].parentElement
            card.classList.toggle('faq-open')
        })
    }
}





