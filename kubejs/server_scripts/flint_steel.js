ServerEvents.recipes(event => {
    // Original-Rezept entfernen
  event.remove({ output: 'minecraft:flint_and_steel' })
  // Neues Rezept hinzufügen
  event.shaped(
    Item.of('minecraft:flint_and_steel'),
    [
      'AB ',
      '   ',
      '   '
    ],
    {
      A: 'minecraft:flint',
      B: 'minecraft:iron_nugget'
    }
  )
})