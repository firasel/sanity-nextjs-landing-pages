export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '625d7417a065694d9473bf51',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-9t77ahqa',
                  apiId: '9bfb5138-b6fe-4be5-b18f-778441552cfe'
                },
                {
                  buildHookId: '625d7418854d194bf6909e73',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-ffdon5eh',
                  apiId: '737a964c-5266-4c91-bce1-d34569ac4692'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/firasel/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-ffdon5eh.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
