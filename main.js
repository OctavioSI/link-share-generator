/**

  /==========================
  💬 Comentários ao código
  👉 🇧🇷 Versão em Português
  ==========================/

  Este arquivo contém as funções em Javascript que efetivamente darão 
  utilidade ao nosso programa. Abaixo, descrevemos em cada função qual 
  a sua utilidade bem como observações importantes.

  /==========================
  💬 Comments to the code
  👉 🇺🇸 English Version
  ==========================/
  
  This file contains the Javascript functions that will effectively give
  usefulness to our program. Below, we describe in each function its usefulness 
  as well as important observations.

*/

/**
  /==========================
  💬 Comentários ao código
  👉 🇧🇷 Versão em Português
  ==========================/
 * função: fillResult
 * parametro: entry > valor de texto (string) com a opção de rede social selecionada
 * retorno: nenhum

  Esta função atribui um valor ao input "currentselected" que é do tipo oculto (hidden)
  para que saibamos com qual tipo de mídia estamos trabalhando no momento. Assim, quando
  clicamos no botão "Facebook" ou "Twitter" esse campo guarda este valor, funcionando como
  uma "variável".

  Ainda, a função chama 3 outras funções (definidas mais adiante):
  (i)   markSelected, que marca na tela qual a opção selecionada entre as mídias sociais;
  (ii)  hideInputs, para mostrar apenas os campos relevantes de texto (input) para 
        a mídia selecionada; e
  (iii) refreshText, que atualiza no campo de resultado final o texto que deve ser copiado.

  /==========================
  💬 Comments to the code
  👉 🇺🇸 English Version
  ==========================/
  * function: fillResult
  * params: entry > string containing the selected social media option
  * return: none
  
  This function assigns a value to the input "currentselected" which is of hidden type (hidden)
  so that we know what kind of media we are working with at the moment. So when
  we click on the "Facebook" or "Twitter" button, this field stores this value, working as
  a "variable".

  Also, the function calls 3 other functions (defined later):
  (i)   markSelected, which marks on the screen which option is selected among social media;
  (ii)  hideInputs, to show only the relevant text (input) fields for
        the selected media; and
  (iii) refreshText, which updates the text to be copied in the final result field.

*/
function fillResult(entry) {
    document.getElementById("currentselected").value = entry;
    markSelected();
    hideInputs();
    refreshText();
}

/**
  /==========================
  💬 Comentários ao código
  👉 🇧🇷 Versão em Português
  ==========================/
 * função: markSelected
 * parametro: nenhum
 * retorno: nenhum
 * 
  Esta função captura o valor do input "currentselected" para verificar qual a mídia 
  social foi selecionada, e deixa o botão selecionado com uma classe de nome "selected".

  Essa classe "selected" tem um estilo próprio no arquivo main.css, e isso nos possibilita
  criar um efeito de destaque no botão.

  /==========================
  💬 Comments to the code
  👉 🇺🇸 English Version
  ==========================/
  * function: markSelected
  * params: none
  * return: none
  * 
  This function captures the value of the "currentselected" input to check which social
  media was selected, and marks the selected button with a "selected" class.

  This "selected" class has its own style in the main.css file, and this enables us to
  create a highlight effect on the button.

*/
function markSelected() {
    let entry = document.getElementById("currentselected").value;
    let buttons = document.getElementById("socials").getElementsByTagName("button");
    for (var i = 0; i < buttons.length; i++) {
        document.getElementById(buttons[i].id).classList.remove("selected");
        if (buttons[i].id == entry) {
            document.getElementById(entry).classList.add("selected");
        }
    }
}


/**
  /==========================
  💬 Comentários ao código
  👉 🇧🇷 Versão em Português
  ==========================/
 * função: hideInputs
 * parametro: nenhum
 * retorno: nenhum
 * 
  Esta função oculta todos os campos de input da tela, exibindo apenas os
  campos relevantes para a opção de mídia social selecionada.

  /==========================
  💬 Comments to the code
  👉 🇺🇸 English Version
  ==========================/
  * function: hideInputs
  * params: none
  * return: none
  * 
  This function hides all input fields on the screen, showing only the
  fields relevant to the selected social media option. 

*/
function hideInputs() {
    let entry = document.getElementById("currentselected").value;
    /* First, let's hide everything */
    document.getElementById("input-url-wrapper").style.display = "none";
    document.getElementById("input-mediaurl-wrapper").style.display = "none";
    document.getElementById("input-title-wrapper").style.display = "none";
    document.getElementById("input-content-wrapper").style.display = "none";
    // Now, for each entry let's only show what is relevant
    switch (entry) {
        case 'facebook':
        case 'linkedin':
        case 'xing':
            document.getElementById("input-url-wrapper").style.display = "table-row";
            break;
        case 'twitter':
        case 'hackernews':
            document.getElementById("input-url-wrapper").style.display = "table-row";
            document.getElementById("input-content-wrapper").style.display = "table-row";
            break;
        case 'tumblr':
            document.getElementById("input-url-wrapper").style.display = "table-row";
            document.getElementById("input-title-wrapper").style.display = "table-row";
            document.getElementById("input-content-wrapper").style.display = "table-row";
            break;
        case 'email':
            document.getElementById("input-title-wrapper").style.display = "table-row";
            document.getElementById("input-content-wrapper").style.display = "table-row";
            break;
        case 'reddit':
            document.getElementById("input-url-wrapper").style.display = "table-row";
            document.getElementById("input-title-wrapper").style.display = "table-row";
            break;
        case 'whatsapp':
            document.getElementById("input-content-wrapper").style.display = "table-row";
            break;
    }
}

/**
  /==========================
  💬 Comentários ao código
  👉 🇧🇷 Versão em Português
  ==========================/
 * função: createResult
 * parametro: nenhum
 * retorno: nenhum
 * 
  Esta função gera o conteúdo HTML desejado de acordo com as informações fornecidas.

  /==========================
  💬 Comments to the code
  👉 🇺🇸 English Version
  ==========================/
  * function: createResult
  * params: none
  * return: none
  * 
  This function generates the desired HTML content according to the information provided. 

*/

function createResult() {
    let entry = document.getElementById("currentselected").value;
    let result = '';

    let url = document.getElementById("input-url").value;
    let mediaurl = document.getElementById("input-mediaurl").value;
    let title = document.getElementById("input-title").value;
    let content = document.getElementById("input-content").value;

    console.log(url);

    switch (entry) {
        case 'facebook':
            result = "<a href=\"" +
                "https://facebook.com/sharer/sharer.php?u=" + url + "\"" +
                "\>Share on Facebook</a\>";
            break;
        case 'twitter':
            result = "<a href=\"" +
                "https://twitter.com/intent/tweet/?text=" + content + "&url=" + url + "\"" +
                "\>Share on Twitter</a\>";
            break;
        case 'tumblr':
            result = document.getElementById("result").value = "<a href=\"" +
                "https://www.tumblr.com/widgets/share/tool?posttype=link&title=" + title + "&caption=" + url + "&content=" + content + "&canonicalUrl=" + url + "&shareSource=tumblr_share_button\"" +
                "\>Share on Tumblr</a\>";
            break;
        case 'email':
            result = document.getElementById("result").value = "<a href=\"" +
                "mailto:?subject=" + title + "&body=" + content + "\"" +
                "\>Share via Email</a\>";
            break;
        case 'pinterest':
            result = document.getElementById("result").value = "<a href=\"" +
                "https://pinterest.com/pin/create/button/?url=" + url + "&media=" + mediaurl + "&description=" + content + "\"" +
                "\>Share on Pinterest</a\>";
            break;
        case 'linkedin':
            result = document.getElementById("result").value = "<a href=\"" +
                "https://www.linkedin.com/sharing/share-offsite/?url=" + url + "\"" +
                "\>Share on LinkedIn</a\>";
            break;
        case 'reddit':
            result = document.getElementById("result").value = "<a href=\"" +
                "https://reddit.com/submit/?url=" + url + "&title=" + title + "\"" +
                "\>Share on Reddit</a\>";
            break;
        case 'xing':
            result = document.getElementById("result").value = "<a href=\"" +
                "https://www.xing.com/social/share/spi?url=" + url + "\"" +
                "\>Share on Xing</a\>";
            break;
        case 'whatsapp':
            result = document.getElementById("result").value = "<a href=\"" +
                "https://api.whatsapp.com/send?text=" + content + "\"" +
                "\>Share on WhatsApp</a\>";
            break;
        case 'hackernews':
            result = document.getElementById("result").value = "<a href=\"" +
                "https://news.ycombinator.com/submitlink?u=" + url + "&t=" + content + "\"" +
                "\>Share on HackerNews</a\>";
            break;
    }

    return result;
}


/**
  /==========================
  💬 Comentários ao código
  👉 🇧🇷 Versão em Português
  ==========================/
 * função: refreshText
 * parametro: nenhum
 * retorno: nenhum
 * 
  Esta função atualiza o conteúdo do resultado.

  /==========================
  💬 Comments to the code
  👉 🇺🇸 English Version
  ==========================/
  * function: refreshText
  * params: none
  * return: none
  * 
  This function updates the result content.

*/
function refreshText() {
    document.getElementById("result").value = createResult();
}

/**
  /==========================
  💬 Comentários ao código
  👉 🇧🇷 Versão em Português
  ==========================/
 * função: copyText
 * parametro: nenhum
 * retorno: nenhum
 * 
  Esta função copia o resultado gerado no input.

  /==========================
  💬 Comments to the code
  👉 🇺🇸 English Version
  ==========================/
  * function: copyText
  * params: none
  * return: none
  * 
  This function copies the result generated in the input.

*/
function copyText() {
    document.getElementById("copybtn").onclick = function() {
        document.getElementById("result").select();
        document.execCommand('copy');
    }
}