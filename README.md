# resume
a resume built with HTML/CSS for high quality printing and easy maintenance  

## system dependencies

Chrome 59 or higher is required to run [Headless Chromium](https://chromium.googlesource.com/chromium/src/+/lkgr/headless/README.md)

```console
sudo apt-get update
sudo apt-get -y install chromium-browser
```

## setup

```console
git clone git@github.com:pinge/resume.git
cd resume
npm install
```

## running

```console
npm start
```

## printing

```console
chromium-browser --headless --print-to-pdf="./resume.pdf" http://localhost:3000/index.html
```

## documentation and references

- [A List Apart - Printing a Book with CSS: Boom!](http://alistapart.com/article/boom)
- [Smashing Magazine - Designing For Print With CSS](https://www.smashingmagazine.com/2015/01/designing-for-print-with-css/)
