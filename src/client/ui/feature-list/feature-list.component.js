import { shuffle } from '../../util/helpers';

import './feature-list.scss';
import placeholder from './images/placeholder.png';

const content = [
  {
    header: 'Fusce non massa',
    description: 'Suspendisse porttitor enim eros, non suscipit eros eleifend sit amet. In ornare mollis finibus. Cras ornare nunc et dolor mollis tincidunt. Quisque consequat tortor orci, quis dictum ex volutpat sit amet. Nullam pharetra velit sollicitudin arcu molestie eleifend. Morbi gravida efficitur nibh, quis pulvinar nibh lobortis a. Mauris eget fringilla lectus, in sodales lacus. Integer nec odio iaculis nulla blandit euismod eget eget quam. Sed sit amet nisi a augue pharetra dapibus.',
    image: placeholder
  },
  {
    header: 'Suspendisse porttitor',
    description: 'Fusce non massa nec purus elementum suscipit. Curabitur et quam purus. Mauris porta cursus augue, placerat facilisis mauris tincidunt rutrum. Fusce volutpat suscipit malesuada. Nam rhoncus risus nec purus ultrices, a laoreet magna consectetur. Nullam elit nulla, porttitor in semper finibus, ornare vitae magna. Morbi convallis ipsum in lectus pretium suscipit.',
    image: placeholder
  },
  {
    header: 'Android Wear Support',
    description: 'That\'s right! A feature that was requsted by no one has been added to Power Hour in the latest update.  Now when you reach the upper hundred levels and can no longer bother to look at your phone, don\'t fret because a simple glance at your wrist will tell you all you need to know!',
    image: placeholder
  },
  {
    header: 'Record your own alarm',
    description: 'If you do not like one of the many included alarm sounds do not worry!  With a tap of the microphone button, you will be able to record your very own alarm.  So think of something clever or silly that you want to hear almost one hundred times!',
    image: placeholder
  }
];

/* eslint indent: 0 */
const template = [
  '<div class="feature-list">',
    '<div class="container">',
      '<div class="row feature-list-item"',
           'ng-repeat="feature in $ctrl.content" ',
           'ng-class="{first: $first}">',
        '<feature info="feature" reverse="$odd"></feature>',
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
