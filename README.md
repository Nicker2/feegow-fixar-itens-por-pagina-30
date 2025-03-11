# Feegow fixar 30 itens por página

## 📌 Descrição

Este é um UserScript desenvolvido para as extensões **Tampermonkey** e **Violentmonkey**. Ele garante que a opção de **30 itens por página** permaneça sempre selecionada na lista de espera do sistema **Feegow**.

Normalmente, o sistema pode alterar essa configuração automaticamente ou permitir que o usuário a modifique manualmente. Este script impede que essa alteração ocorra, mantendo sempre o valor correto e garantindo uma experiência mais eficiente ao navegar pelos registros.

## ⚙️ Como Funciona

1. O script verifica se o número de itens por página está configurado como **30**.
2. Se estiver diferente, ele altera automaticamente para **30** e simula uma atualização na página.
3. Ele também monitora mudanças no site (como recarregamento parcial de elementos) para garantir que o valor correto seja mantido.

## 🚀 Como Instalar

1. Instale uma das extensões abaixo no seu navegador:
   - [Tampermonkey](https://www.tampermonkey.net/) (recomendado)
   - [Violentmonkey](https://violentmonkey.github.io/) (alternativa)

2. Após instalar a extensão, adicione o script manualmente ou importe o arquivo diretamente.

3. Acesse a página da **Lista de Espera** no Feegow

4. O script começará a rodar automaticamente e garantirá que o número de itens exibidos por página seja sempre **30**.

## 🔧 Requisitos

- Navegador compatível com **Tampermonkey** ou **Violentmonkey** (Chrome, Firefox, Edge, etc.).
- Extensão instalada e ativada.

## 📄 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
