let plats = [
    {
        nom: 'Tagliatelles aux truffes',
        prix: 'Prix : 25€',
        image:"images/Tagliatelles aux truffes.jpg",
        description: 'Des tagliatelles fraîches servies avec une sauce crémeuse parfumée aux truffes noires, garnies de parmesan râpé.'

    },
    {
        nom: 'Magret de canard sauce orange',
        prix: 'Prix : 30€',
        image:"images/Magret de canard sauce orange.jpg",
        description: `Magret de canard rôti accompagné d'une sauce à l'orange légèrement sucrée et d'une purée maison.`
    }, 
    {
        nom: 'Pizza Margherita',
        prix: 'Prix : 18 €',
        image:"images/Pizza Margherita.jpg",
        description: `Une pizza traditionnelle italienne avec une base tomate, mozzarella fraîche, basilic et un filet d'huile d'olive.`
    },
    {
        nom: 'Poulet tikka masala',
        prix: 'Prix : 20 €',
        image:"images/Poulet tikka masala.jpg",
        description: `Poulet mariné dans un mélange d'épices et de yaourt, cuit dans une sauce tomate épicée servie avec du riz basmati.`
    },
    {
        nom: 'Saumon grillé aux légumes',
        prix: 'Prix : 28 €',
        image:"images/Saumon grillé aux légumes.jpg",
        description: `Filet de saumon grillé accompagné de légumes de saison grillés avec une touche de citron.`
    },
    {
        nom: 'Risotto aux champignons sauvages',
        prix: 'Prix : 22 €',
        image:"images/Risotto aux champignons sauvages.jpg",
        description: `Un risotto crémeux préparé avec des champignons sauvages et du vin blanc, agrémenté d'un peu de crème fraîche et de parmesan.`
    },

]


plats.forEach((plat)=> {
    
        document.querySelector('.grid-div').innerHTML +=` 
            <div class="container">
                <img class="img" src="${plat.image}"   alt="">
                <div class="droit">
                    <h3>${plat.nom}</h3><span>${plat.prix}</span>
                    <hr class="droit-row">
                    <p>${plat.description}</p>
                </div>
            </div> `
})
