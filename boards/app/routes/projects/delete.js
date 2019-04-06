import Route from '@ember/routing/route';
import EmberObject, {set} from '@ember/object';

export default Route.extend({
  templateName: 'projects/delete',

  afterModel(model) {
    let copymodel = EmberObject.create(model.toJSON());
    set(model,'copy',copymodel);
    return model;
  },

  actions : {
    delete(project) {
      project.destroyRecord();
      this.transitionTo('projects');

    },

    cancel() {
      this.transitionTo('projects');
    }
  }
});
