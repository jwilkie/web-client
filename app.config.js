import vs from 'react-syntax-highlighter/dist/cjs/styles/prism/vs'
import vsdark from 'react-syntax-highlighter/dist/cjs/styles/prism/vsc-dark-plus'
import html from 'react-syntax-highlighter/dist/cjs/languages/prism/markup'
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css'
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript'
import bash from 'react-syntax-highlighter/dist/cjs/languages/prism/bash'

const appConfig = {
    domain: 'https://jwilkie.github.io/web-client',
    title: 'Web client',
    description: 'Bienvenue sur ce site dédié à l\'apprentissage des fondamentaux du développement web côté client. Vous y découvrirez comment les langages HTML, CSS et JavaScript interagissent pour créer des pages web dynamiques et structurées. Le HTML vous permettra de définir la structure du contenu, le CSS sert à le styliser et à le mettre en forme vos interfaces, tandis que JavaScript apporte de l\'interactivité et des comportements dynamiques à vos pages. Ce site a pour objectif de vous accompagner pas à pas dans la compréhension et la mise en pratique de ces technologies essentielles pour tout développeur web.',
    sectionName: 'module',
    code: {
        languages: {
            'html': { tag: 'HTML', renderer: html },
            'css': { tag: 'CSS', renderer: css },
            'js': { tag: 'Javascript', renderer: js },
            'console': { tag: 'Console', renderer: bash }
        },
        themes: {
            light: vs,
            dark: vsdark
        }
    }
}

export default appConfig;
