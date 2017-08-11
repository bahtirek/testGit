import { Proba5Page } from './app.po';

describe('proba5 App', () => {
  let page: Proba5Page;

  beforeEach(() => {
    page = new Proba5Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
