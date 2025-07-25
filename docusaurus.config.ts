import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Estação Meteorológica - Projetos de Software',
  tagline: 'Plataforma Colaborativa de Experimentos IoT',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://tempodocs.projetosdesoftware.com.br',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Projetos de Software', // Usually your GitHub org/user name.
  projectName: 'tempo', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    // image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Tempo - Projetos',
      logo: {
        alt: 'Tempo Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        }  
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentação',
          items: [
            {
              label: 'Tutoriais',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Comunidade',
          items: [
            {
              label: 'Site Mecatrônica Jovem',
              href: 'https://www.mecatronicajovem.com.br',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/sHmBawH6dT',
            },
            {
              label: 'Youtube',
              href: 'https://www.youtube.com/@InstitutoNCBNewtonCBraga',
            },
          ],
        },
        {
          title: 'Repositórios',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/orgs/projetos-de-software/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Projetos de Software.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
