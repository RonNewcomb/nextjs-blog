All scripts in this folder run at build-time, not at run-time. They execute on the build server, not on the deployed server and not in the web browser.

This means they cannot access HTTP requests/responses, but they CAN access the database or file system. Generally, security is less of a concern with them.

It exists for NextJS's [getStaticProps()](https://nextjs.org/learn/basics/data-fetching/getstaticprops-details) feature. That function and the utils it calls in this folder are likely to use the various `.env` values. NextJS uses those values as `process.env.xxx` but which `.env` file is chosen is standardized.

`.env.local` is preferred but is ignored by git.

`.env` is the last-chance catch-all.

`.env.development`, `.env.production`, and `.env.test` are standardized names and are chosen according to NODE_ENV environment variable, which itself is set by which npm command was invoked: `npm run dev` vs the pair `npm run build` followed by `npm run start`. All three files can have `.local` appended to them, like `.env.production.local` which is ignored by git but preferred by NextJS when present.

Information about environment variables in NextJS are [here](https://nextjs.org/docs/basic-features/environment-variables).
