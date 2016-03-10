import './phone.scss';

function controller() {
  this.alt = this.alt ? this.alt : 'Screenshot';
}

const phone = {
  bindings: {
    image: '<',
    alt: '<'
  },
  controller,
  template: '<img class="phone" ng-src="{{$ctrl.image}}" alt="{{$ctrl.alt}}" />'
};

export default phone;
