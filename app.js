document.addEventListener('DOMContentLoaded', () => {
    new TypeIt(".animation", {
     speed: 200,
     loop:false
    }).type('focado nos estudos em JavaScript', {delay:500}).delete(32).type('programador Full Stack',{delay:500})
    
    .go()
})