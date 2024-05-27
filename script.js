function openPopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "block";
}
  //  Esta função é chamada quando queremos exibir o pop-up. Ela obtém o elemento HTML com o ID "popup" e define seu estilo de exibição como "block", tornando-o visível.

function closePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";

    const checkbox=document.getElementById("checkbox-menu")
    checkbox.checked=false
}
  // exibição como "none", ocultando-o.

  // Event listener para o checkbox do menu
document.getElementById("checkbox-menu").addEventListener("change", function() {
    if (this.checked) {
      openPopup(); // Se o checkbox foi marcado, abre o popup
    } else {
      closePopup(); // Se o checkbox foi desmarcado, fecha o popup
    }
});
  // acionado sempre que o estado do checkbox é alterado (marcado ou desmarcado). Quando o estado muda para marcado, ele chama a função openPopup() para exibir o pop-up. Quando o estado muda para desmarcado, ele chama a função closePopup() para fechar o pop-up.

  // Event listener adicional para fechar o popup quando o checkbox é clicado novamente
document.getElementById("checkbox-menu").addEventListener("click", function() {
    if (!this.checked) {
      closePopup(); // Se o checkbox está desmarcado, fecha o popup
    }
});
  // acionado sempre que o estado do checkbox é alterado (marcado ou desmarcado). Quando o estado muda para marcado, ele chama a função openPopup() para exibir o pop-up. Quando o estado muda para desmarcado, ele chama a função closePopup() para fechar o pop-up.


