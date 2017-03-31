import { E2eTestRunPage } from './app.po';

describe('e2e-test-run App', function() {
  let page: E2eTestRunPage;

  beforeEach(() => {
    page = new E2eTestRunPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
