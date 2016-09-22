import { SomerledSheltiesPage } from './app.po';

describe('somerled-shelties App', function() {
  let page: SomerledSheltiesPage;

  beforeEach(() => {
    page = new SomerledSheltiesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
