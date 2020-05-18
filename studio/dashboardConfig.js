export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '5ec304f5530b0b5acbf79f90',
                  title: 'Sanity Studio',
                  name: 'gridsomesanity-studio',
                  apiId: 'e645ee84-f6b4-449b-87ee-6694d655ef93'
                },
                {
                  buildHookId: '5ec304f7618e50662ed21ae8',
                  title: 'Blog Website',
                  name: 'gridsomesanity',
                  apiId: 'e60a5ca8-f248-436f-a8e0-be0ae08cb99c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/chebyrashka/gridsomesanity',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://gridsomesanity.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
