
### Case: You are author/committer of all commits of your local git repo

In case you want to use a different name and/or e-mail before making your git repo public or just uploading it to GitHub/GitLab, double-check the following steps with a competent AI chatbot of your choice before proceeding:

!!! Warning
    `git-filter-repo` is **destructive** and will **modify your history** permanently. First **make a backup** clone of your git repo before you start.

```sh
# Install git-filter-repo
pip install --user git-filter-repo
```

```sh
# Create a local clone without hardlink optimization
git clone --no-local ~/local/project-x ~/local/project-x-clone
# Change dir to clone repo
cd ~/local/project-x-clone
```

```sh
# Rewrite all commits/history with new author/committer
git filter-repo --commit-callback '
commit.author_name = commit.committer_name = b"New Name"
commit.author_email = commit.committer_email = b"new@email.com"
'
```
