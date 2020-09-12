import {Client} from "./client";

async function test()
{
    const client = new Client("1", "http://localhost:8080/auth");
    const sub = await client.verify(
        `eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvYXV0aCIsInN1YiI6ImRhbmllbEBkamFuei5kZSIsImF1ZCI6WyIxIl0sImV4cCI6MTU5OTkxNDA5MiwiaWF0IjoxNTk5OTEwNDkyLjU4MywianRpIjoiREFMSGV6SjV3cjE2YnJPSEpMZGN1U2pVIiwia2lkIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2F1dGgvZ3JhcGhxbD9xdWVyeT1xdWVyeSUyMCU3QiUyMGtleXMlMjhraWQlM0ElMjI0JTIyJTI5JTIwJTdCaWQlMkMlMjB2YWxpZFRvJTJDJTIwcHVibGljS2V5JTIwJTdEJTdEIn0.lvI4ZpxXloC05ks0XNsLQVQ5ntLcMMrSeMc-yUbSIHEQUcOFg6w2fP0kpcQpkBsSQDvFQu9cGgS02aLUYDnLPpwwLyqvfB3z2m6-9cpbCskobnAVWLJLNRbChnwh7gBxhyvYBkl4z3GrTlmfba3B7qoU623pmzFY4ehaVuv8dLHRvbC2-M45xlM2wVGw_ccFiN0kkq2hC7G3O0mNbixWVddjGDZFztDfox_qRIOS6GCwWMZZBCqkiEdv4ZN18fsxTWJBqzygacTCVrbh5nD4WzLBhEWyK5OiLjfCFZqIhcotWIuH8jCjhq_zMOZw4BJgCgZQyORWtqbo8fmqohM67w`
    )
}

test();

