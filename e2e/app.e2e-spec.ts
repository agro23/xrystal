import { XrystalPage } from './app.po';

describe('xrystal App', () => {
  let page: XrystalPage;

  beforeEach(() => {
    page = new XrystalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
