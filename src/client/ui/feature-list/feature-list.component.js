import { shuffle } from '../../util/helpers';

import './feature-list.scss';

import choices from './images/feature_choices.png';
import mrDrunk from './images/feature_drunk.png';
import androidWear from './images/feature_android_wear.png';
import microphone from './images/feature_microphone.png';

const content = {
  footer: 'Keep an eye out for more...',
  features: [
    {
      header: 'Multiple game presets',
      description: 'Choose from one of the preset game modes. Which include Power Hour, Century Club, or Spartan Mode.  If none of those please you, or you\'re looking for a quick (or long) game. You can create your own game mode, or edit one of the existing presets.',
      image: choices
    },
    {
      header: 'Worry free!',
      description: 'If at some point throughout the game, in a drunken haze you accidentally close the app.  Do not fear!  The game will continue to run in the background, and when it is time for a shot, it will be brought to focus and notify you.  So if you need to turn your screen off to save that precious battery, go right ahead!',
      image: mrDrunk
    },
    {
      header: 'Android Wear Support',
      description: 'That\'s right! A feature that was requested by no one has been added to Power Hour in the latest update.  Now when you reach the upper hundred levels and can no longer bother to look at your phone, don\'t fret because a simple glance at your wrist will tell you all you need to know!',
      image: androidWear
    },
    {
      header: 'Record your own alarm',
      description: 'If you do not like one of the many included alarm sounds do not worry!  With a tap of the microphone button, you will be able to record your very own alarm.  So think of something clever or silly that you want to hear almost one hundred times!',
      image: microphone
    }
  ]
};

/* eslint indent: 0 */
const template = [
  '<div class="feature-list">',
    '<div class="container">',
      '<div class="row feature-list-item"',
           'ng-repeat="feature in $ctrl.content.features" ',
           'ng-class="{first: $first}">',
        '<feature info="feature" reverse="$odd"></feature>',
      '</div>',
      '<div class="feature-list_footer">',
        '<h3>{{$ctrl.content.footer}}</h3>',
      '</div>',
    '</div>',
  '</div>'
].join('');

function controller() {
  this.content = shuffle(content);
}

const component = {
  bindings: {},
  template,
  controller
};

export default component;
