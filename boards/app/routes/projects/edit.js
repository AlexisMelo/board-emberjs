import Route from '@ember/routing/route';
import EmberObject, {set} from '@ember/object';
export default Route.extend({
  templateName: 'projects/new',

  afterModel(model) {
    let copymodel = EmberObject.create(model.toJSON());
    set(model,'copy',copymodel);
    return model;
  },
  actions : {
    save(model) {
      model.setProperties(JSON.parse(JSON.stringify(model.copy)));
      model.save().then(this.transitionTo('projects'));
    },

    cancel() {
      this.transitionTo('projects');
    }
  }

});
