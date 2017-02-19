import { CrossoverPage } from './app.po';

describe('crossover App', function() {
  let page: CrossoverPage;

  beforeEach(() => {
    page = new CrossoverPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
