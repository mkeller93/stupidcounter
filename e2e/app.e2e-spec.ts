import { StupidcounterPage } from './app.po';

describe('stupidcounter App', () => {
  let page: StupidcounterPage;

  beforeEach(() => {
    page = new StupidcounterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
