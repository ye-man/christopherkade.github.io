const readline = require("readline")
const fs = require("fs")

const info = (text) => {
  console.info(`\x1b[32m${text}\x1b[0m`)
}

const error = (text) => {
  console.error(`\x1b[31m${text}\x1b[0m`)
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

/**
 * Creates a promise that promps the user for input
 * When "ENTER" is pressed, resolves the promise and returns
 * the input
 * @param {*} question
 */
const generateQuestion = (question) => {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer)
    })
  })
}

const getCurrentDate = () => {
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const yyyy = today.getFullYear();
  today = `${yyyy}-${mm}-${dd}`
  return today
}

const generateArticleTemplate = (title, description, path) => {
  return `---
title: "${title}"
description: "${description}"
date: "${getCurrentDate()}"
path: "/${path}"
---`
}

/**
 * Promps the user for info about the article
 * Creates the markdown file with the initial data template
 */
const generateArticle = async () => {
  let title
  let description
  let path

  info("✨ Generating article...")

  title = await generateQuestion("Title: ")
  description = await generateQuestion("Description: ")
  path = await generateQuestion("File name: ")

  rl.close()

  info("✏️ Creating article...")

  fs.writeFile(`./src/articles/${path}.md`,
    generateArticleTemplate(title, description, path), { flag: "wx" }, (err) => {
      if (err) {
        error("❌ An article with this name already exists")
        return
      }

      info("🎉 Article created !")
    })
}

generateArticle()
