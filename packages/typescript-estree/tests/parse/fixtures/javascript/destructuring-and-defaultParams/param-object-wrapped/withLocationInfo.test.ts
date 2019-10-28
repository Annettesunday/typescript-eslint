import path from 'path';
import { testWithLocation } from 'test-fixture';

testWithLocation(
  path.resolve(
    process.cwd(),
    '..',
    'shared-fixtures',
    'fixtures/javascript/destructuring-and-defaultParams/param-object-wrapped.src.js',
  ),
  {
    useJSXTextNode: false,
  },
);