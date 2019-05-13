export const mockState = (o?: object) => ({
    proteins: [
        'Belcampo Beef Neck',
        'A very young Rabbit',
        'Some delicious Legumes'
      ],
      sauces: ['Bernaise', 'Almondine', 'Bechamel'],
      starches: ['Arborrio Rice', 'Royal Quinoa', 'Purple Potatoes'],
      ...o
})
