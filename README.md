# pulumi-template

- [README](#README)
   - [about](#about)
   - [inbox](#inbox)

## About

1. Typescript
1. Auto-import all modules in `./src`, so you don't need to import anything manually. Terraform-like behavior.

## TODO

1. Prettier as pre-commit hook formatter.

## How-to

1. Clone
1. Add `name` and `backend.url` to `Pulumi.yaml`
1. Run `./init.sh`. It creates empty `test` and `prod` stacks.
1. Add provider credentials (look up provider docs).
1. You are ready to create any resource in `./src` directory.

