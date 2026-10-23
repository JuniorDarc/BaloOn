
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

if (!id) {
    window.location.href = "index.html";
}


document.addEventListener("contextmenu", (e) => e.preventDefault());

document.addEventListener("keydown", function (e) {
    if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && e.key === "I") ||
        (e.ctrlKey && e.shiftKey && e.key === "J") ||
        (e.ctrlKey && e.key === "U")
    ) {
        e.preventDefault();
    }
});


const produtos = {
    1: {
        nome: "Camisa BaloOn Art White",
        imagem: "imagens/BaloOn_camisas/Baloon-white.png",
        descricao: "Camisa premium BaloOn White, feita em algodão de alta qualidade.",
        preco: "R$ 79,90"
    },
    2: {
        nome: "Camisa BaloOn Art Black",
        imagem: "imagens/BaloOn_camisas/Baloon-black.png",
        descricao: "Camisa premium BaloOn Black, feita em algodão de alta qualidade.",
        preco: "R$ 79,90"
    },
    3: {
        nome: "Camisa BaloOn Art Purple",
        imagem: "imagens/BaloOn_camisas/Baloon-purple.png",
        descricao: "Camisa premium BaloOn Purple, feita em algodão de alta qualidade.",
        preco: "R$ 79,90"
    },
  
    4: {
        nome: "Camisa Japan White",
        imagem: "imagens/BaloOn_camisas/BaloOn-Japan-White.png",
        descricao: "Linha Art Japonesa com visual White.",
        preco: "R$ 79,90"
    },
    5: {
        nome: "Camisa Japan Black",
        imagem: "imagens/BaloOn_camisas/BaloOn-Japan-Black.png",
        descricao: "Linha Art Japonesa com visual Dark.",
        preco: "R$ 79,90"
    },
    6: {
        nome: "Camisa Japan Purple",
        imagem: "imagens/BaloOn_camisas/BaloOn-Japan-Purple.png",
        descricao: "Linha Art Japonesa com visual Purple.",
        preco: "R$ 79,90"
    },
    
    7: {
        nome: "Camisa Maldade White",
        imagem: "imagens/BaloOn_camisas/BaloOn-Maldade-White.png",
        descricao: "Camisa White Art 'Filho da maldade da rua', Street-Underground",
        preco: "R$ 79,90"
    },
    8: {
        nome: "Camisa Maldade Black",
        imagem: "imagens/BaloOn_camisas/BaloOn-Maldade-Black.png",
        descricao: "Camisa Black Art 'Filho da maldade da rua', Street-Underground",
        preco: "R$ 79,90"
    },
    9: {
        nome: "Camisa Maldade Purple",
        imagem: "imagens/BaloOn_camisas/BaloOn-Maldade-Purple.png",
        descricao: "Camisa Purple Art 'Filho da maldade da rua', Street-Underground",
        preco: "R$ 79,90"
    },
    10: {
        nome: "Camisa Dark Gon",
        imagem: "imagens/BaloOn_camisas/BaloOn-Gon-Black.png",
        descricao: "Camisa Black Art Gon + MobPsycho, estilo anime cultura geek",
        preco: "R$ 79,90"
    }
};


if (produtos[id]) {
    document.getElementById("product-name").textContent = produtos[id].nome;
    document.getElementById("product-image").src = produtos[id].imagem;
    document.getElementById("product-description").textContent = produtos[id].descricao;
    document.getElementById("product-price").textContent = produtos[id].preco;
} else {
    document.querySelector(".product-page").innerHTML =
        "<h2>Produto não encontrado</h2>";
}




const numeroWhatsApp = atob("NTU4MTk4MTkwMzY5Mg=="); 

const botaoWhats = document.getElementById("whatsapp-button");

if (botaoWhats && produtos[id]) {
    botaoWhats.addEventListener("click", () => {
        const produto = produtos[id];

        const entregaInput = document.querySelector(
            'input[name="delivery"]:checked'
        );

        if (!entregaInput) {
            alert("Escolha entrega ou retirada antes de continuar.");
            return;
        }

 
        const pagamentoInput = document.querySelector(
            'input[name="payment"]:checked'
        );

        if (!pagamentoInput) {
            alert("Escolha a forma de pagamento antes de continuar.");
            return;
        }

        const entregaSelecionada = entregaInput.value;
        const pagamentoSelecionado = pagamentoInput.value;

  
        const mensagem = `
Olá! Tenho interesse neste produto:

🛍️ *${produto.nome}*
📄 ${produto.descricao}
💰 Preço: ${produto.preco}

💳 Forma de pagamento:
${pagamentoSelecionado}

🚚 Recebimento:
${entregaSelecionada}
        `;

        const mensagemCodificada = encodeURIComponent(mensagem.trim());
        const url = `https://wa.me/${numeroWhatsApp}?text=${mensagemCodificada}`;

        window.open(url, "_blank");
    });
}
