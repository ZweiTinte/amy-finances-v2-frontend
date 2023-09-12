exports.onCreatePage = async ({
  page,
  actions,
}: {
  page: any;
  actions: any;
}) => {
  if (page.path.match(/^\/app/)) {
    page.matchPath = "/app/*";
    actions.createPage(page);
  }
  if (page.path.match(/^\/app\/dividends/)) {
    page.matchPath = "/app/dividends/:id";
    actions.createPage(page);
  }
};
