import { module, test } from 'qunit';
import { setupIntegrationTest } from 'open-event-frontend/tests/helpers/setup-integration-test';
import hbs from 'htmlbars-inline-precompile';
import { render } from '@ember/test-helpers';

module('Integration | Component | ui table/cell/admin/sales/status/cell amount', function(hooks) {
  setupIntegrationTest(hooks);

  test('it renders', async function(assert) {

    await render(hbs`{{ui-table/cell/admin/sales/status/cell-amount}}`);
    assert.ok(this.element.textContent.trim().includes(''));

  });
});
