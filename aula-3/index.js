let list = [];
let newItem = prompt(
    "Digite o nome do item ou - se não quiser adicionar"
);
while (newItem != "-") {
    list.push(newItem);
    newItem = prompt("Digite o nome do item ou - se não quiser adicionar mais itens.");
} if (list.length == 0) {
    alert ("A lista está vazia!");
} else {
    alert("Você deve comprar estes itens:");
    for (let i = 0; i < list.length; i++) {
        alert(list[i]);
    };
};