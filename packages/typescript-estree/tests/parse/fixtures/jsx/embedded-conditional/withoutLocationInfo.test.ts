import path from 'path';
import { testWithoutLocation } from 'test-fixture';

testWithoutLocation(
  path.resolve(
    process.cwd(),
    '..',
    'shared-fixtures',
    'fixtures/jsx/embedded-conditional.src.js',
  ),
  {
    useJSXTextNode: false,
  },
);