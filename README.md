# Shared CI validation consumer

This repository independently exercises the Shared CI reusable workflow through `workflow_call`. The workflow dispatch case IDs and expected results are in `fixtures/cases.json`. Select the exact fixture `working-directory` and any case-specific Node/capability/command inputs listed there. The caller invokes the immutable candidate SHA in `.github/workflows/validate-shared-ci.yml`.

For cache cycles, dispatch the same manager case twice. The first run should miss and save; the second should hit while still running the immutable install. For lockfile invalidation, run the `before` and `after` cases once each and compare their cache identities and misses.
