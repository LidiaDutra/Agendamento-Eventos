let dataAtual = 14/ 10/ 2021

let dataEvento = 16/ 10/ 2021

if(dataAtual > dataEvento){
    console.log("Data invalida, insira nova data.")
}else{
    console.log("Data agendada, prossiga")
}

let dataNascimento = 25/ 01/ 1999

let idade = 22

if(idade < 18){
    console.log("usuario menor de idade. Agendamento cancelado")
}else{
    console.log("Idade dentro da faixa etaria permitida. Prossiga com agendamento")
}

let listaConvidados = ["Marina","Pedro", "Jose", "Lucas", "Joana"]

if(listaConvidados.length < 100){
    console.log("Agendamento foi concluido com sucesso!")
}else{
    console.log("Não foi possível concluir agendamento. Numero de convidados excede ao permitido.")
}
