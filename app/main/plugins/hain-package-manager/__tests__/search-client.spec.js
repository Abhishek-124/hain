'use strict';

jest.mock('got');

const mock_got = require('got');
const searchClient = require('../search-client');

function makeBackendContentsWith(packages, apiVersion) {
  const _newArr = [];
  for (const pkg of packages) {
    const _wrap = {
      version: [pkg.version],
      name: [pkg.name],
      description: [pkg.desc],
      author: [pkg.author],
      modified: [pkg.modified],
      keywords: [apiVersion]
    };
    _newArr.push(_wrap);
  }
  return _newArr;
}

describe('search-client.js', () => {
  describe('findCompatiblePackages', () => {
    pit('should return compatible packages from the backend', () => {
      const apiVersion = 'hain0';
      const packages = [
        {
          version: '0.0.1',
          name: 'hain-plugin-test',
          author: 'tester',
          modified: '2016-04-16',
          __modified: '2016-04-16',
          desc: 'test desc'
        }
      ];

      mock_got.mockReturnValueOnce(
        Promise.resolve({
          body: {
            results: makeBackendContentsWith(packages, apiVersion)
          }
        })
      );

      return searchClient
        .findCompatiblePackages('fakeBackend', [apiVersion])
        .then((retPackages) => {
          expect(retPackages).toEqual(packages);
        });
    });

    pit('should reject if `got` has rejected', () => {
      mock_got.mockReturnValueOnce(Promise.resolve(null));

      return searchClient.findCompatiblePackages('fakeBackend', []).then(
        (ret) => {
          throw new Error('Promise should not be resolved');
        },
        (err) => {
          // done
        }
      );
    });
  });
});
