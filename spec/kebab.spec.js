const makeKebab = require('../src/kebab');

describe('test1', () => {
    it('should make a kebab', () => {
        // Given
        let ingredients = ['viande', 'salade', 'pain', 'sauce'];

        // When
        let result = makeKebab(ingredients);

        // Then
        expect(result).toBe('Je suis un kebab avec comme ingrédients : viande, salade, pain, sauce')
    });
    it('should not make a kebab without bread', () => {
        // Given
        let ingredients = ['viande', 'salade', 'sauce'];

        // When
        let result = makeKebab(ingredients);

        // Then
        expect(result).toBe('Je ne peux pas être un kebab sans pain, voulez-vous une assiette ?');
    });
});
