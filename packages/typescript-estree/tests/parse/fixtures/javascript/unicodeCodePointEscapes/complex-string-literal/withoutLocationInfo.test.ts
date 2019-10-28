import path from 'path';
import { testWithoutLocation } from 'test-fixture';

testWithoutLocation(
  path.resolve(
    process.cwd(),
    '..',
    'shared-fixtures',
    'fixtures/javascript/unicodeCodePointEscapes/complex-string-literal.src.js',
  ),
  {
    useJSXTextNode: false,
  },
);