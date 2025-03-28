document.title = document.title.split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

const spans = document.querySelectorAll('span.md-ellipsis');
spans.forEach(span => {
    if (span.innerHTML.toLowerCase().includes('grapheneos')) {
        span.innerHTML = span.innerHTML.replace(/grapheneos/i, 'GrapheneOS');
    }
});
