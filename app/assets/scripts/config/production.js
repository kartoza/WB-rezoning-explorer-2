'use strict';

export default {
  environment: 'production',
  appTitle: 'REZoning Web',
  appDescription:
    'Identify and explore high potential project areas for solar, onshore wind and offshore wind development',
  appShortTitle: 'REZ',
  mbToken:
    'pk.eyJ1Ijoid2JnLWNkcnAiLCJhIjoiY2l1Z3pxZDVwMDBxcDMzcDJjYmRpYnBicSJ9.hjlLP5TEVhqbTwzhFA1rZw',
  apiEndpoint: 'https://d2b8erzy6y494p.cloudfront.net/v1',
  githubIssuesApi: 'https://api.github.com/repos/NEDJIMAbelgacem/github_rest_test/issues',
  githubIssuesAccessToken: 'Bearer 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',
  rawDataDownloadTimeout: 300000, // 5 min
  rawDataDownloadCheckInterval: 2000, // 2 sec
  indicatorsDecimals: {
    zone_score: 3,
    lcoe: 2,
    zone_output_density: 5,
    cf: 3
  }
};
