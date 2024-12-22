
!!! Warning
    `git commit --amend` overwrites the history! Make sure no one else is working with your last commit.

```sh
git commit --amend --no-edit
```

This command soft-resets to the prelast commit on current branch and commits staged changes as new commit.
