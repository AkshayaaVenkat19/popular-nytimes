describe('Mock Fetch Requests', () => {
  beforeEach(() => {
    cy.intercept(
      'GET',
      'https://api.nytimes.com/svc/mostpopular/v2/viewed/30.json?api-key=aoFlDUvbvyu3OjGgo7p6BuYHUzWdRkIi',
      {
        statusCode: 200,
        body: {
          results : [
            {
              uri: 'nyt://article/b4586a20-7f69-5817-b5cd-fe67e898af03',
              url: 'https://www.nytimes.com/2024/07/23/movies/barb-star-go-to-vista-del-mar-kristen-wiig.html',
              id: 100000009577050,
              asset_id: 100000009577050,
              source: 'New York Times',
              published_date: '2024-07-23',
              updated: '2024-07-23 23:54:57',
              section: 'Movies',
              subsection: '',
              nytdsection: 'movies',
              adx_keywords: 'Movies;Dornan, Jamie;Mumolo, Annie;Wiig, Kristen',
              column: null,
              byline: 'By Alissa Wilkinson',
              type: 'Article',
              title: 'This Fizzy Cocktail of a Movie Deserves a Second Chance',
              abstract:
                '“Barb and Star Go to Vista Del Mar” has been woefully neglected. Maybe it was the culottes? But it will fill the “Barbie”-size hole in your summer.',
              des_facet: ['Movies'],
              org_facet: [],
              per_facet: ['Dornan, Jamie', 'Mumolo, Annie', 'Wiig, Kristen'],
              geo_facet: [],
              media: [
                {
                  type: 'image',
                  subtype: 'photo',
                  caption:
                    'Kristen Wiig, left, and Annie Mumolo in “Barb and Star Go to Vista Del Mar.”',
                  copyright: 'Cate Cameron/Lionsgate',
                  approved_for_syndication: 0,
                  'media-metadata': [
                    {
                      url: 'https://static01.nyt.com/images/2024/07/23/multimedia/23barbstar-notebook-kqvz/23barbstar-notebook-kqvz-thumbStandard.jpg',
                      format: 'Standard Thumbnail',
                      height: 75,
                      width: 75,
                    },
                    {
                      url: 'https://static01.nyt.com/images/2024/07/23/multimedia/23barbstar-notebook-kqvz/23barbstar-notebook-kqvz-mediumThreeByTwo210.jpg',
                      format: 'mediumThreeByTwo210',
                      height: 140,
                      width: 210,
                    },
                    {
                      url: 'https://static01.nyt.com/images/2024/07/23/multimedia/23barbstar-notebook-kqvz/23barbstar-notebook-kqvz-mediumThreeByTwo440.jpg',
                      format: 'mediumThreeByTwo440',
                      height: 293,
                      width: 440,
                    },
                  ],
                },
              ],
              eta_id: 0,
            },
            {
              uri: 'nyt://article/b63fc51f-a1a4-5f67-af92-efa70db1d446',
              url: 'https://www.nytimes.com/2024/07/24/us/whale-boat-capsize-new-hampshire.html',
              id: 100000009587670,
              asset_id: 100000009587670,
              source: 'New York Times',
              published_date: '2024-07-24',
              updated: '2024-07-24 22:57:16',
              section: 'U.S.',
              subsection: '',
              nytdsection: 'u.s.',
              adx_keywords:
                'Whales and Whaling;Maritime Accidents and Safety;Boats and Boating;United States Coast Guard',
              column: null,
              byline: 'By Remy Tumin',
              type: 'Article',
              title:
                '‘Three Seconds to Act’: Boater Recounts How Whale Capsized His Vessel',
              abstract:
                'Two boaters in New Hampshire were rescued by nearby fishermen without injuries, and the dramatic flip was caught on video.',
              des_facet: [
                'Whales and Whaling',
                'Maritime Accidents and Safety',
                'Boats and Boating',
              ],
              org_facet: ['United States Coast Guard'],
              per_facet: [],
              geo_facet: [],
              media: [
                {
                  type: 'image',
                  subtype: 'photo',
                  caption: '',
                  copyright: 'Colin Yager via Storyful',
                  approved_for_syndication: 0,
                  'media-metadata': [
                    {
                      url: 'https://static01.nyt.com/images/2024/07/24/video/24vid-whale-cover/24vid-whale-cover-thumbStandard.png',
                      format: 'Standard Thumbnail',
                      height: 75,
                      width: 75,
                    },
                    {
                      url: 'https://static01.nyt.com/images/2024/07/24/video/24vid-whale-cover/24vid-whale-cover-mediumThreeByTwo210.png',
                      format: 'mediumThreeByTwo210',
                      height: 140,
                      width: 210,
                    },
                    {
                      url: 'https://static01.nyt.com/images/2024/07/24/video/24vid-whale-cover/24vid-whale-cover-mediumThreeByTwo440.png',
                      format: 'mediumThreeByTwo440',
                      height: 293,
                      width: 440,
                    },
                  ],
                },
              ],
              eta_id: 0,
            },
          ]
        },
      },
    ).as('getItems');

    cy.visit('http://localhost:3000');
  });

  it('should display mocked items', () => {
    cy.wait('@getItems'); 
    cy.get('[data-testid=articleItem]').should('have.length.greaterThan', 0);
  });
});
