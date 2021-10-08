export const state = () => ({
    cart: [

    ],
    breeds: [
        {
            id: 1,
            title: "Peruvian",
            price: "99.99",
            img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/guinea-pig-breeds-peruvian-1549311589.jpg?crop=0.641xw:1.00xh;0.295xw,0&resize=768:*",
            description: "The Peruvian's coat is the envy among all the breeds. The smooth, straight fur can grow as long as 2 feet! The soft, thick fur needs dedicated grooming time and an occasional trim. The coat also grows forward over its head, giving it a sweet fringe. This breed is known to be alert and curious, often greeting visitors who stop by its cage. A Peruvian Satin breed also exists.",
            quantity: 1


        },
        {
            id: 2,
            title: "Abyssinian ",
            price: "99.99",
            img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/guinea-pig-breeds-abyssinian-1549298269.jpg?crop=0.672xw:1.00xh;0.100xw,0&resize=768:*",
            description: 'The Abyssinian is a great choice for first-time owners because of its extremely affectionate personality. It requires only a bit of training in its eight-year lifespan. Recognize one by spotting eight symmetrical swirls (formally called rosettes), giving it a messy hairdo. You can also adopt the Abyssinian Satin breed which has a glossy fur.',
            quantity: 1
        },
        {
            id: 3,
            title: "American",
            price: "99.99",
            img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/guinea-pig-breeds-american-1549298804.jpg?crop=1.00xw:0.669xh;0,0.306xh&resize=768:*",
            description: "As the most common breed, the American Guinea Pig by default wins the popularity contest. They are known for their great temperament and also get along well with other piggies. Its short, smooth coat makes it easy to take of, particularly for children. ",
            quantity: 1
        },
        {
            id: 4,
            title: "Teddy",
            price: "99.99",
            img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/guinea-pig-breeds-teddy-1549311889.jpg?crop=0.667xw:1.00xh;0.136xw,0&resize=768:*",
            description: "Nicknamed after the famous stuffed animal, the Teddy is an easier breed to keep up with. Its short, dense coat only needs a brushing once in a while. This breed make a playful, loving partner for children. Being social with other piggies is in their DNA, but you may need to watch how they react to sharing a cage. Teddy Satin guinea pigs can also be adopted.",
            quantity: 1
        },
        {
            id: 5,
            title: "Texel",
            price: "99.99",
            img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/guinea-pig-portrait-royalty-free-image-892069972-1549485464.jpg?crop=0.668xw:1.00xh;0.0391xw,0&resize=768:*",
            description: "Texels are a rare cross breed between a Silkie and a Rex. Tangling will happen with their fur, and it can be difficult to take care of. They are known for winning first place at shows, but they make great pets as well.",
            quantity: 1
        },
        {
            id: 6,
            title: "Silkie ",
            price: "99.99",
            img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/guinea-pig-breeds-silkie-1549311704.jpg?crop=0.705xw:1.00xh;0,0&resize=768:*",
            description: "The Silkie (also named the Sheltie) has long locks which only grow backwards. Discovered in the 1970s by breeders in the UK, they are described as being the most gentle breed with laid back personalities. Because of the extensive grooming needs, they should only be cared for by adults. A Silkie Satin is another breed that can be found.",
            quantity: 1
        },
        {
            id: 7,
            title: "Rex",
            price: "99.99",
            img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/guinea-pig-breeds-rex-1549312413.jpg?crop=0.763xw:1.00xh;0.0587xw,0&resize=768:*",
            description: "The Rex has short, wool-like fur and is a big hit with children. Its droopy ears are a unique feature that make it look even more lovable. This breed likes to be held close and petted. With those curly whiskers, who could resist! It isn't recognized by the ACBA.",
            quantity: 1
        },
        {
            id: 8,
            title: "White-Crested",
            price: "99.99",
            img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/guinea-pig-breeds-white-crested-1549312144.jpg?crop=0.663xw:1.00xh;0.0864xw,0&resize=768:*",
            description: "The white crown atop of its head gave the breed its name. It can be considered the cousin of the American — sharing a short, smooth coat. They are shy, but smart creatures. Don't be surprised if yours quickly learns when it's time to eat or even recognizes your voice.",
            quantity: 1
        },
        {
            id: 9,
            title: "Himalayan",
            price: "99.99",
            img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/guinea-pig-breeds-himalayan-1549311375.jpg?crop=0.680xw:1.00xh;0.0415xw,0&resize=768:*",
            description: "Himalayans are considered the Siamese cats of the guinea pig world. This albino breed has a white coat with brown or black coloring on its ears, feet, and nose. This breed is recommended for people who live in a colder climate, and away from sun. When a Himalayan is put in direct sunlight or in hot weather, their dark spots fade. This also happens if the guinea is sick, shocked, or scared. They do best indoors and can live up to seven years. The breed isn't officially recognized by the ACBA. ",
            quantity: 1
        },
        {
            id: 10,
            title: "Sheba ",
            price: "99.99",
            img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/guinea-pig-breeds-sheba-1549313864.jpg?crop=0.753xw:1.00xh;0.131xw,0&resize=768:*",
            description: "The Sheba, formally known as the Sheba Mini Yak, is affectionally called the Bad Hair Day guinea pig. There will always be time for bonding thanks to its dense fur that requires daily maintenance. It isn't officially recognized by the ACBA",
            quantity: 1
        },
        {
            id: 11,
            title: "Merino",
            price: "99.99",
            img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/guinea-pig-breeds-merino-1549311503.jpg?crop=0.668xw:1.00xh;0.193xw,0&resize=768:*",
            description: "Merinos are an intelligent breed who enjoy exploring. It's ideal to provide a large cage and even roaming time around your home (supervised, of course!). Because of its affectionate nature, it's a popular choice for owners, but not officially recognized.",
            quantity: 1
        },
        {
            id: 12,
            title: "Lunkarya",
            price: "99.99",
            img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/guinea-pig-breeds-lunkarya-1549313622.jpg?crop=0.675xw:1.00xh;0.233xw,0&resize=768:*",
            description: "Also known as the Lunk, this guinea pig has long, rough curls. Because of the fur's thickness, it doesn't do well in extreme heat and shouldn't be near direct sun. Lunks are a curious breed that enjoy being held and can live up to eight years. The ACBA doesn't recognize it.",
            quantity: 1
        },
    ]
});

export const getters = {
    checkCart(state) {
        return state.cart;
    },
    cart(state) {
        return state.cart;
    },
    total(state) {
        let total = 0;
        for (let carts of state.cart) {
            total += carts.price * carts.quantity;
        }
        return total.toFixed(2);
    },
    cartTotal(state) {
        return state.cart.length;
    },
    getPiggyById: (state) => (id) => {
        return state.breeds.find(breed => breed.id == id)
    }
}

export const mutations = {
    pushToCart(state, breed) {
        state.cart.push(breed)
    },
    removeItem(state, carts) {
        state.cart.splice(carts, 1);
    },
    // increase(state) {
    //     state.cart.quantity += 1;
    // },
    decrease(state, carts) {
        if (carts.quantity > 1) {
            carts.quantity -= 1;
        } else {
            state.cart.splice(carts, 1);
        }
    },
    clearCart(state) {
        state.cart.splice(0, state.cart.length);
    },
};

export const actions = {
    pushToCart({ commit }, breed) {
        commit("pushToCart", breed)
    },
    removeItem({ commit }, carts) {
        commit("removeItem", carts)
    },
    decrease({ commit }, carts) {
        commit("decrease", carts)
    },
    clearCart({ commit }) {
        commit("clearCart")
    },
}


