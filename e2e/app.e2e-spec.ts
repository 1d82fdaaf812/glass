import { GlassPage } from './app.po';

describe('glass App', function() {
  let page: GlassPage;

  beforeEach(() => {
    page = new GlassPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
