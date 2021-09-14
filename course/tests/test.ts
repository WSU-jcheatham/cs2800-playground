let html: string;

beforeAll(() => {
  html = loadDoc();
});

test('document is accessible', async () => {
  const page = await loadPage();
  await expect(page).toPassAxeTests();
});
