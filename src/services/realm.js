import Realm from 'realm';

import MVPSchema from '~/Schemas/MVPSchema';

export function getRealm() {
  return Realm.open({
    schema: [MVPSchema],
  });
}
