//Variáveis de escopo global
let nome = "",
endereco = "",
contItens = 0,
pratoEscolhido,
bebidaEscolhida,
sobermesaEscolhida,
precoPrato,
precoBebida,
precoSobremesa,
Total,
confirma_Pedido = document.querySelector('.confirma-pedido');

/*Seleciona o prato, incrementa a variável de controle de quantidade de 
itens selecionados e chama a função itensEscolhido()*/
function prato(m){    
    const selecionado = document.querySelector('div.border-prato');
    const itemSelecionado = document.querySelector(".prato"+m);
    const icon = document.querySelector(".prato"+m+" .icon ion-icon");
    if (selecionado && selecionado !== itemSelecionado){
        const iconShow = document.querySelector('div.border-prato ion-icon');
        iconShow.classList.add("hide");
        selecionado.classList.remove('border-prato');
        contItens--;
    }    
    if(selecionado === itemSelecionado){;
        contItens--;
    }else{
        contItens++;
    }    
    icon.classList.toggle("hide");
    itemSelecionado.classList.toggle("border-prato");
    itensEscolhido();
}

/*Seleciona a bebida, incrementa a variável de controle de quantidade de 
itens selecionados e chama a função itensEscolhido()*/
function bebida(m){    
    const selecionado = document.querySelector('div.border-bebida');
    const itemSelecionado = document.querySelector(".bebida"+m);
    const icon = document.querySelector(".bebida"+m+" .icon ion-icon");
    if (selecionado && selecionado !== itemSelecionado){
        const iconShow = document.querySelector('div.border-bebida ion-icon');
        iconShow.classList.add("hide");
        selecionado.classList.remove('border-bebida');
        contItens--;
    }
    if(selecionado === itemSelecionado){
        contItens--;
    }else{
        contItens++;
    }
    icon.classList.toggle("hide");
    itemSelecionado.classList.toggle("border-bebida");
    itensEscolhido();
}

/*Seleciona a sobremesa, incrementa a variável de controle de quantidade de 
itens selecionados e chama a função itensEscolhido()*/
function sobremesa(m){    
    const selecionado = document.querySelector('div.border-sobremesa');
    const itemSelecionado = document.querySelector(".sobremesa"+m);
    const icon = document.querySelector(".sobremesa"+m+" .icon ion-icon");
    if (selecionado && selecionado !== itemSelecionado){
        const iconShow = document.querySelector('div.border-sobremesa ion-icon');
        iconShow.classList.add("hide");
        selecionado.classList.remove('border-sobremesa');
        contItens--;
    }
    if(selecionado === itemSelecionado){
        contItens--;
    }else{
        contItens++;
    }
    icon.classList.toggle("hide");
    itemSelecionado.classList.toggle("border-sobremesa");  
    itensEscolhido();
}

//Verifica se os 3 itens foram selecionados e abilita o botão fechar-pedido
const itensEscolhido= () => {
    const button = document.querySelector('div.footer p');
    if (contItens === 3){
        button.classList.remove("button");
        button.classList.add("fechar-pedido");
        button.innerHTML = "Fechar pedido"
    }else{
        button.classList.remove("fechar-pedido");
        button.classList.add("button");
        button.innerHTML = "Selecione os 3 itens<br />para fechar o pedido"
    }
}

//Preenche a tela de confirmação de pedido, solicita o nome e endereço e mostra a tela de confirmação
const fecharPedido = () => {
    if (contItens === 3){
        const button = document.querySelector('div.footer p');
        const fecharPedido = document.querySelector('div.footer .fechar-pedido');
        if (button === fecharPedido){
            pratoEscolhido = document.querySelector('div.border-prato .subtitulo').innerHTML;
            bebidaEscolhida = document.querySelector('div.border-bebida .subtitulo').innerHTML;
            sobermesaEscolhida = document.querySelector('div.border-sobremesa .subtitulo').innerHTML;
            precoPrato = document.querySelector('div.border-prato .icon .preco').innerHTML;
            precoBebida = document.querySelector('div.border-bebida .icon .preco').innerHTML;
            precoSobremesa = document.querySelector('div.border-sobremesa .icon .preco').innerHTML;
            precoPrato = precoPrato.split(" ");
            precoBebida = precoBebida.split(" ");
            precoSobremesa = precoSobremesa.split(" ");
            precoPrato[1] = precoPrato[1].replace(',', '.');
            precoBebida[1] = precoBebida[1].replace(',', '.');
            precoSobremesa[1] = precoSobremesa[1].replace(',', '.');
            Total = Number(precoPrato[1]) + Number(precoBebida[1]) + Number(precoSobremesa[1]);
            Total = Total.toFixed(2);
            Total = Total.replace('.', ',');
        }

        document.querySelector("div.confirma-pedido #prato .item").innerHTML = pratoEscolhido;
        document.querySelector("div.confirma-pedido #prato .preco").innerHTML = "R$ "+precoPrato[1].replace('.', ',');
        document.querySelector("div.confirma-pedido #bebida .item").innerHTML = bebidaEscolhida;
        document.querySelector("div.confirma-pedido #bebida .preco").innerHTML = "R$ "+precoBebida[1].replace('.', ',');
        document.querySelector("div.confirma-pedido #sobremesa .item").innerHTML = sobermesaEscolhida;
        document.querySelector("div.confirma-pedido #sobremesa .preco").innerHTML = "R$ "+precoSobremesa[1].replace('.', ',');
        document.querySelector("div.confirma-pedido #total .preco").innerHTML = "R$ "+Total;
        nome = prompt('Informe seu nome, por favor!');
        endereco = prompt('Agora, o endereço para entrega.');
        confirma_Pedido.classList.remove("hide");
    }
}

//Formata o texto para o whatsApp e abre o app para finalizar o pedido
const confirmaPedido = () => {        
        let texto = `Olá, gostaria de fazer o pedido:\n- Prato: ${pratoEscolhido}\n- Bebida: ${bebidaEscolhida}\n- Sobremesa: ${sobermesaEscolhida}\nTotal: R$ ${Total}\n\nNome: ${nome}\nEndereço: ${endereco}`;
        texto = window.encodeURIComponent(texto);
        window.open("https://wa.me/5511977640950?text="+ texto, "_blank");
    
}

//Fecha a tela de confirmação de pedido
const cancelar = () => {
    confirma_Pedido.classList.add("hide");
}
