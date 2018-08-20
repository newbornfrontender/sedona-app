'use strict';

module.exports = {
  moduleFileExtensions: [                                                             /* An array of file extensions your modules use. If you require modules without specifying a file extension, these are the extensions Jest will look for */
    'js',
    'jsx',
    'json',
    'vue',
    'ts',
    'tsx'
  ],
  transform: {                                                                        /* A map from regular expressions to paths to transformers. A transformer is a module that provides a synchronous function for transforming source files */
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {                                                                 /* A map from regular expressions to module names that allow to stub out resources, like images or styles with a single module */
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  snapshotSerializers: [                                                              /* A list of paths to snapshot serializer modules Jest should use for snapshot testing */
    'jest-serializer-vue'
  ],
  testMatch: [                                                                        /* The glob patterns Jest uses to detect test files. By default it looks for .js and .jsx files inside of __tests__ folders, as well as any files with a suffix of .test or .spec (e.g. Component.test.js or Component.spec.js). It will also find files called test.js or spec.js */
    '**/test/unit/**/*.spec.(js|jsx|ts|tsx)|**/__test__/*.(js|jsx|ts|tsx)',
  ],
  testURL: 'http://localhost/',                                                       /* This option sets the URL for the jsdom environment. It is reflected in properties such as location.href */
};
