document.title = document.title.split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

// Fixes the case of specific words in the document
function fixCase(text) {
    return text
        .replace(/grapheneos/gi, 'GrapheneOS')
        .replace(/vpn/gi, 'VPN');
}

const selectors = [
    'h1'
    , 'span.md-ellipsis' // nav items
    , 'label.md-nav__title' // nav titles
];

selectors.forEach(selector => {
    document.querySelectorAll(selector).forEach(element => {
        element.innerHTML = fixCase(element.innerHTML);
    });
});
