import { YarrBootyPage } from './app.po';

describe('yarr-booty App', () => {
  let page: YarrBootyPage;

  beforeEach(() => {
    page = new YarrBootyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
