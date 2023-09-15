exports.onCreatePage = async ({
  page,
  actions,
}: {
  page: any;
  actions: any;
}) => {
  if (page.path.match(/^\/app\/dividends/)) {
    page.matchPath = "/app/dividends/*";
    actions.createPage(page);
  } else if (page.path.match(/^\/app\/accounts\/$/)) {
    page.matchPath = "/app/accounts/*";
    actions.createPage(page);
  } else if (page.path.match(/^\/app/)) {
    page.matchPath = "/app/*";
    actions.createPage(page);
  }
};
