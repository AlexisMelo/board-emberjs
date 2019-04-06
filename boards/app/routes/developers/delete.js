import Route from '@ember/routing/route';
import EmberObject, {set} from '@ember/object';

export default Route.extend({
  templateName: 'developers/delete',

  afterModel(model) {
    let copymodel = EmberObject.create(model.toJSON());
    set(model,'copy',copymodel);
    return model;
  },

  actions : {
    delete(dev) {
      dev.destroyRecord();
      this.transitionTo('developers');

    },

    cancel() {
      this.transitionTo('developers');
    }
  }
});
