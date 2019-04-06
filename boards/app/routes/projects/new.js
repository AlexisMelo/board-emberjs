import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({

  model() {

    return RSVP.hash({
      copy: {},
      developers: this.store.findAll('developer')
    });

  },

  actions: {
    save(project) {

      if(project.copy.name == null || project.copy.name == "")
      {
        project.copy.name = "Sans titre";
      }
      if(project.copy.descriptif == null || project.copy.descriptif == "")
      {
        project.copy.descriptif = "Descriptif non renseigné";
      }

      project.copy.creationDate = new Date(project.copy.creationDate);
      project.copy.dueDate = new Date(project.copy.dueDate);

      project = this.store.createRecord('project', project.copy);
      project.save().then(this.transitionTo('projects'));
    },

    cancel() {
      this.transitionTo('projects');
    }

  }

});
