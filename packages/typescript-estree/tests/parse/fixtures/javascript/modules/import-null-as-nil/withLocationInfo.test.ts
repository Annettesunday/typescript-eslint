import path from 'path';
import { testWithLocation } from 'test-fixture';

testWithLocation(
  path.resolve(
    process.cwd(),
    '..',
    'shared-fixtures',
    'fixtures/javascript/modules/import-null-as-nil.src.js',
  ),
  {
    useJSXTextNode: false,
  },
);