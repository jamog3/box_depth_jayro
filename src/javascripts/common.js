import $ from 'jquery';
import Parallax from 'parallax-js';

$(() => {
  const $scenes = $('.js-parallax');
  const parallaxInstance = new Parallax($scenes[0]);
  parallaxInstance.enable();
});
