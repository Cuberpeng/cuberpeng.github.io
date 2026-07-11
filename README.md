# Pengrui Xiang Academic Homepage

This repository is a customized version of the WowPage Jekyll template and is ready for GitHub Pages deployment at `https://cuberpeng.github.io`.

## Main files

- `_config.yml`: profile, site URL, and social links
- `_data/navigation.yml`: top navigation
- `_pages/about.md`: all homepage content
- `assets/css/home.css`: homepage styling
- `images/`: profile, publication, project, and experience images
- `files/`: paper PDFs and CV

## Deploy

1. Upload the repository contents to the root of `Cuberpeng/cuberpeng.github.io`.
2. In GitHub, open **Settings → Pages**.
3. Choose **Deploy from a branch**, select `main`, and use `/ (root)`.
4. GitHub Pages will build the Jekyll site automatically.

## Local preview

```bash
bundle install
bundle exec jekyll serve
```

Open `http://127.0.0.1:4000/`.
