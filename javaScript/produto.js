// Pega o ID da URL
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

if (!id) {
    window.location.href = "index.html";
}

document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
});

const produtos = {
    1: {
        nome: "Camisa BaloOn 01",
        imagem: "img/camisa1.jpg",
        descricao: "Camisa premium BaloOn White, feita em algodão de alta qualidade, confortável e estilosa.",
        preco: "R$ 74,90"
    },
    2: {
        nome: "Camisa BaloOn 02",
        imagem: "img/camisa2.jpg",
        descricao: "Design japonês moderno excelente para eventos casuais.",
        preco: "R$ 74,90"
    },
    3: {
        nome: "Camisa BaloOn 03",
        imagem: "img/camisa3.jpg",
        descricao: "Camisa premium BaloOn Black, feita em algodão de alta qualidade, confortável e estilosa.",
        preco: "R$ 74,90"
    },
    4: {
        nome: "Camisa BaloOn 04",
        imagem: "img/camisa4.jpg",
        descricao: "Toque minimalista com uma pegada dark! Linha anime Gon Freecss.",
        preco: "R$ 74,90"
    }
};



// Se existir produto
if (produtos[id]) {
    document.getElementById("product-name").textContent = produtos[id].nome;
    document.getElementById("product-image").src = produtos[id].imagem;
    document.getElementById("product-description").textContent = produtos[id].descricao;
    document.getElementById("product-price").textContent = produtos[id].preco;
} else {
    document.querySelector(".product-page").innerHTML = "<h2>Produto não encontrado</h2>";
}

/*Logica Compra via Whatsapp*/

const numeroWhatsApp = atob("NTU4MTk4MTkwMzY5Mg==");

// exemplo: 55 + DDD + número (sem espaços)

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

const entregaSelecionada = entregaInput.value;

    const mensagem = `
Olá! Tenho interesse neste produto:

🛍️ *${produto.nome}*
📄 ${produto.descricao}
💰 Preço: ${produto.preco}

💳 Forma de pagamento:
Pix / Cartão / Dinheiro

🚚 Recebimento:
${entregaSelecionada}
    `;

    const mensagemCodificada = encodeURIComponent(mensagem.trim());
    const url = `https://wa.me/${numeroWhatsApp}?text=${mensagemCodificada}`;
    window.open(url, "_blank");
});

}

// Bloquear teclas comuns de inspeção

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




