All scripts in this folder run at build-time, not at run-time. They execute on the build server, not on the deployed server.

This means they cannot access HTTP requests/responses, but they CAN access the database or file system. Generally, security is not an concern with them.

It exists for NextJS's `getStaticProps()` feature and holds common utils for that feature.
