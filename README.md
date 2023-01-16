<p align="center" style="width:60%">

![Logo](https://user-images.githubusercontent.com/101503258/196723802-179cfe0a-36e8-4c16-aa91-877f413e5c02.png)

</p>

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

Welcome to our website, where you will find a curated collection of active publishers, publications, and agencies that pay fair rates for high-quality technical content. You might have heard the quote by The Joker - Heath Ledger: If you're good at something, never do it for free.

As a technical writer, I understand the value and hard work that goes into creating exceptional technical content. That's why I've created this website to help fellow technical writers find paid opportunities in the market.

My goal is to make it easy for writers to find publishers, publications, and agencies that recognize the value of their work and are willing to pay fair rates for it. I've done the research and compiled a comprehensive list of reputable companies that are actively looking for technical writers.

I hope that this website helps you find the perfect gig or connect with awesome writers.

## 👨‍💻 Tech Stack

![Vue JS](https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08D)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Gridsome](https://img.shields.io/badge/Gridsome-00A672?style=for-the-badge&logo=gridsome&logoColor=white)

## 🛠️ Installation Steps

Star and Fork the Repo 🌟 and this will keep us motivated.

Clone the repository

```bash
git clone https://github.com/ashutoshkrris/TechyWrite.git
```

Change the working directory

```bash
cd TechyWrite
```

Install dependencies

```bash
npm install
```

Run the app

```bash
gridsome develop
```

## Adding a new opportunity to the list

Found a paid technical writing opportunity we don't have yet? You can easily add it from our website: https://techywrite.vercel.app/new-source

Alternatively, you can add it using the following steps:

1. Go to the opportunities list JSON file:
   https://github.com/ashutoshkrris/TechyWrite/blob/master/src/data.json

2. Add an object to it as follows:

```json
{
  "name": "Digital Ocean",
  "type": "Publication",
  "link": "https://www.digitalocean.com/community/pages/write-for-digitalocean",
  "categories": ["Infrastructure", "Open Source"],
  "minRate": 300,
  "maxRate": 400,
  "description": "Matches payments with donations to tech-focused charities. Further opportunities for paid updates to existing tutorials."
}
```

- In case of `Publication` type, include `minRate` and `maxRate`. If there is fixed rate, then don't include `minRate`. Just include `maxRate`.
- In case of `Publisher` type, include `royaltyRate` only.
- In case of `Agency` type, include `hourlyMinRate` and `hourlyMaxRate`. If there is fixed rate, then don't include `hourlyMinRate`. Just include `hourlyMaxRate`.

3. Once done you can now raise a Pull Request to the main branch<br>

## License

This project follows the [MIT License](/LICENSE).

#### Made with ♥ by <a href="https://ashutoshkrris.in">Ashutosh Krishna</a>

[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://twitter.com/ashutoshkrris/)

<a href="https://github.com/ashutoshkrris" target="_blank">
<img src=https://img.shields.io/badge/github-%2324292e.svg?&style=for-the-badge&logo=github&logoColor=white alt=github style="margin-bottom: 5px;" />
</a>
<a href="https://www.linkedin.com/in/ashutoshkrris/" target="_blank">
<img src=https://img.shields.io/badge/linkedin-%231E77B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white alt=linkedin style="margin-bottom: 5px;" />
</a>

Thank you for visiting and I wish you all the best in your technical writing endeavors!
