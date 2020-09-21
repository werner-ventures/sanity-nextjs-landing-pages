export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f68339af64f3dc409bbed31',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-mngjx6td',
                  apiId: 'e1f6781b-8e8e-474f-8a4e-bcf6d5d1faf8'
                },
                {
                  buildHookId: '5f68339ab87d14154852c043',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-mrvbjg4z',
                  apiId: 'ffdefc67-3eee-4743-a303-975222651f29'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/werner-ventures/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-mrvbjg4z.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
