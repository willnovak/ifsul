// -----------------------------------------------------------------------------------------------------------------------------
// Criar um elemento de parágrafo, ou qualquer outro, via js
// -----------------------------------------------------------------------------------------------------------------------------
var p = document.createElement("p");
// -----------------------------------------------------------------------------------------------------------------------------
// Adicionar um texto ao elemento, através da criação de nó (ligação)
// -----------------------------------------------------------------------------------------------------------------------------
// Cria texto
var t = document.createTextNode("BEM-VINDO A MINHA PÁGINA!");
// Adiciona ao elemento
p.appendChild(t);
// -----------------------------------------------------------------------------------------------------------------------------
// Adicionar elemento na div criada no site pelo ID
// -----------------------------------------------------------------------------------------------------------------------------
document.getElementById("postagem").appendChild(p);

// Esconde Botão de esconder foto
document.getElementById('btn2').style.display = 'none';

// -----------------------------------------------------------------------------------------------------------------------------
// Criar elemento img e setar URL da imagem
// -----------------------------------------------------------------------------------------------------------------------------
const img = document.createElement("img");

// Setar atributo
img.src = 'https://geekblog.com.br/wp-content/uploads/2021/01/7fea175e13ba4a4b29672d15b2497367.jpg';
img.alt = 'Imagem 4K';
img.id  = 'imagem';
img.style.width = '300px';
img.style.height = '180px';
//img.setAttribute('scr', "https://geekblog.com.br/wp-content/uploads/2021/01/7fea175e13ba4a4b29672d15b2497367.jpg");

// Adicionar a imagem na div e esconder ela
document.getElementById("postagem").appendChild(img);
document.getElementById("imagem").style.display = 'none'

// -----------------------------------------------------------------------------------------------------------------------------
// Função para mostrar Imagem no clique do botão
// -----------------------------------------------------------------------------------------------------------------------------
function addImg(){
    // Esconder botão de ver e mostra botão de remover
    document.getElementById("botao").style.display = 'none';
    document.getElementById('btn2').style.display = 'inline';

    // Mostrar Imagem
    document.getElementById("imagem").style.display = 'inline'
}

// -----------------------------------------------------------------------------------------------------------------------------
// Função para esconder Imagem no clique do botão
// -----------------------------------------------------------------------------------------------------------------------------
function removeImg() {
    // Mostrar botão de ver e esconder botão de remover
    document.getElementById("botao").style.display = 'inline';
    document.getElementById('btn2').style.display = 'none';

    // Esconder Imagem
    document.getElementById("imagem").style.display = 'none'
}

// -----------------------------------------------------------------------------------------------------------------------------
// Trocar cores de fundo de elementos em eventos
// -----------------------------------------------------------------------------------------------------------------------------

// Trocar cor de fundo do elemento ao digitar
function keydownFunction() {
    document.getElementById("item").style.backgroundColor = "lightgreen";
}

// Trocar cor de fundo do elemento ao parar de digitar
function keyupFunction() {
    document.getElementById("item").style.backgroundColor = "white";
}

// Trocar cor de fundo do elemento ao passar o mouse
function trocaCor(id){
    id.style.backgroundColor = 'lightblue';
}

// Trocar cor de fundo do elemento ao tirar o mouse
function tiraCor(id){
    id.style.backgroundColor = 'lightgreen';
}

// -----------------------------------------------------------------------------------------------------------------------------
// Valida se formulário foi preenchido
// -----------------------------------------------------------------------------------------------------------------------------
function validaForm(btn) {
    // Pega o campo e o formulario pelo ID
    var campo = document.getElementById('item');
    var form  = document.getElementById('form');

    // No submit do Form executa função
    form.onsubmit = function(e) {
        if (campo.value === ''){

            // Se o campo estiver nulo previne de setar valor default e dispara alert
            e.preventDefault();
            alert('Formulário não preenchido!');
            
        }
    }

}
