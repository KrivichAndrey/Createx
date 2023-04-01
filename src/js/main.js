'use strickt';

import { offerAccourdions } from './offerAccourdion';
import { popaps } from './modal';

offerAccourdions();

if (document.querySelectorAll('[data-open-modal-cv]')) {
  popaps();
}
