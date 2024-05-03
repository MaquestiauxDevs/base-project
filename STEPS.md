# Steps for setup the base project

## First actions

Go on your repository server (e.g. [github](https://github.com) ), and create a new repository (e.g. base-project)


## Create the initial package

```bash
npm init
```

## Ensure that best practice file are in the project

- Create a README.md file. This file should contains a description of your project, installation, usage and all necessery information for a full comprehension of your project.
- Create a LICENSE file. You can find licences at [https://choosealicense.com](https://choosealicense.com)
- Create a CONTRIBUTING.md file. See information at [http://mozillascience.github.io/working-open-workshop/contributing/](http://mozillascience.github.io/working-open-workshop/contributing/) and at [https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/setting-guidelines-for-repository-contributors](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/setting-guidelines-for-repository-contributors)
- Create a CODE_OF_CONDUCT.md file. What is a code of conduct : [https://opensource.guide/code-of-conduct/](https://opensource.guide/code-of-conduct/)
- Create a .gitignore file. It should be related on the language used.

You can use the code below, **but you should review the content of each files as the script use a minimal code.** You can find example for each files. 

If you are using github, you can create the file directly on the web and they will propose you template for the LICENSE, CODE_OF_CONDUCT and .gitignore files.

```bash
echo "node_modules" > .gitignore
echo "# Base project" > README.md
echo "# Contributor Covenant Code of Conduct" > CODE_OF_CONDUCT.md
echo "# How to contribute" > CONTRIBUTING.md
echo "MIT License" > LICENSE
```
