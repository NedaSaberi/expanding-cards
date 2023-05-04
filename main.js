let panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    panel.addEventListener('click', function(){
        deactivateAll();
        panel.classList.add('active')
    })
});

function deactivateAll(){
    panels.forEach(panel => {
        panel.classList.remove('active')
    });
}