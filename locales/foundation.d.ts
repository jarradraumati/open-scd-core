import { LitElement } from 'lit';
/** Constructor type for defining `LitElement` mixins. */
export declare type LitElementConstructor = new (...args: any[]) => LitElement;
export { newOpenEvent } from './foundation/open-event.js';
export type { OpenEvent, OpenDetail } from './foundation/open-event.js';
export { handleEdit, isComplex, isInsert, isNamespaced, isRemove, isUpdate, newEditEvent, } from './foundation/edit-event.js';
export type { AttributeValue, Edit, EditEvent, Insert, NamespacedAttributeValue, Remove, Update, } from './foundation/edit-event.js';
export { isCreateWizard, isEditWizard, newWizardEvent, } from './foundation/wizard-event.js';
export type { CreateWizard, EditWizard, Wizard, WizardEvent, } from './foundation/wizard-event.js';
export { cyrb64 } from './foundation/cyrb64.js';
