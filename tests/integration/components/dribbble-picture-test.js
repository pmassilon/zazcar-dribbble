import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('dribbble-picture', 'Integration | Component | dribbble picture', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{dribbble-picture}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#dribbble-picture}}
      template block text
    {{/dribbble-picture}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
