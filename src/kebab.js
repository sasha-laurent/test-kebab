function makeKebab(ingredients) {
    if (ingredients.indexOf('pain') === -1) {
        return 'Je ne peux pas être un kebab sans pain, voulez-vous une assiette ?';
    }

    return 'Je suis un kebab avec comme ingrédients : '+ingredients.join(', ');
}

module.exports = makeKebab;
