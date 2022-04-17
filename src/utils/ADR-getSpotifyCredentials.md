# Why getSpotifyCredentials() is a utils function and not in the hooks folder

## Status

Implemented

## Context

In terms of folder directory, the reason this file is here and not in hooks is because it's a once off thing (whilst doing the auth flow to get the access token for the first time), and it doesn't really get used elsewhere by the react components, so didn't feel right to refer to it as a hook.