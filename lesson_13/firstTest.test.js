describe('Our first test', () => {
  test('check boolean', async () => {
    await expect(true).toEqual(true)
  })

  test('check boolean', async () => {
    await expect(false).toEqual(false)
  })
});