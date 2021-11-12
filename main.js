function fillResult(entry) {
    document.getElementById("currentselected").value = entry;
    markSelected();
    hideInputs();
    refreshText();
}

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

function refreshText() {
    document.getElementById("result").value = createResult();
}

/* Copy textarea content */
function copyText() {
    document.getElementById("copybtn").onclick = function() {
        document.getElementById("result").select();
        document.execCommand('copy');
    }
}