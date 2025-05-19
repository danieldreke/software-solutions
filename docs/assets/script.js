document.title = document.title.split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

const navitems = document.querySelectorAll('span.md-ellipsis');
navitems.forEach(navitem => {
    if (navitem.innerHTML.toLowerCase().includes('grapheneos')) {
        navitem.innerHTML = navitem.innerHTML.replace(/grapheneos/i, 'GrapheneOS');
        navitem.innerHTML = navitem.innerHTML.replace(/vpn/i, 'VPN');
    }
});

const navtitles = document.querySelectorAll('label.md-nav__title');
navtitles.forEach(navtitle => {
    if (navtitle.innerHTML.toLowerCase().includes('grapheneos')) {
        navtitle.innerHTML = navtitle.innerHTML.replace(/grapheneos/i, 'GrapheneOS');
        navtitle.innerHTML = navtitle.innerHTML.replace(/vpn/i, 'VPN');
    }
});
