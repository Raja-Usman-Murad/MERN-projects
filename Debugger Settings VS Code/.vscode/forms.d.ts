
import FormField = require('dw/web/FormField')
import FormGroup = require('dw/web/FormGroup');
import FormAction = require('dw/web/FormAction');
// autogeneratedfile

/** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\address.xml#2)*/
declare class FormAddress extends FormGroup {
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\address.xml#4) */
	addressId : FormField<string>
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\address.xml#5) */
	firstName : FormField<string>
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\address.xml#6) */
	lastName : FormField<string>
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\address.xml#7) */
	address1 : FormField<string>
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\address.xml#8) */
	address2 : FormField<string>
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\address.xml#9) */
	city : FormField<string>
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\address.xml#12) */
	postalCode : FormField<string>
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\address.xml#16) */
	country : FormField<string>
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\address.xml#23) */
	states : FormStates
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\address.xml#26) */
	deliveryNote : FormField<string>
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\address.xml#28) */
	phone : FormField<string>
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\address.xml#31) */
	apply : FormAction
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\address.xml#32) */
	remove : FormAction
}
/** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\billing.xml#2)*/
declare class FormBilling extends FormGroup {
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\billing.xml#3) */
	shippingAddressUseAsBillingAddress : FormField<boolean>
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\billing.xml#5) */
	paymentMethod : FormField<string>
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\billing.xml#7) */
	addressFields : FormAddress
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\billing.xml#9) */
	contactInfoFields : FormContactInfo
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\billing.xml#10) */
	creditCardFields : FormCreditCard
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\billing.xml#11) */
	subscribe : FormField<boolean>
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\billing.xml#13) */
	adyenPaymentFields : FormAdyenPayment
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\billing.xml#15) */
	country : FormField<string>
}
/** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_storefront_base\cartridge\forms\default\states.xml#2)*/
declare class FormStates extends FormGroup {
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_storefront_base\cartridge\forms\default\states.xml#3) */
	stateCode : FormField<string>
}
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\shipping.xml#2)*/
declare class FormShippingShippingAddress extends FormGroup {
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\shipping.xml#11) */
	email : FormEmail
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\shipping.xml#14) */
	addressFields : FormAddress
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\shipping.xml#17) */
	shippingMethodID : FormField<string>
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\shipping.xml#20) */
	shippingAddressUseAsBillingAddress : FormField<boolean>
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\shipping.xml#22) */
	isGift : FormField<boolean>
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\shipping.xml#23) */
	giftMessage : FormField<string>
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\shipping.xml#24) */
	privacy : FormField<boolean>
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\shipping.xml#27) */
	save : FormAction
}
/** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\shipping.xml#2)*/
declare class FormShipping extends FormGroup {
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\shipping.xml#4) */
	shipmentUUID : FormField<string>
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\shipping.xml#6) */
	productLineItemUUID : FormField<string>
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\shipping.xml#7) */
	isAddressValidated : FormField<boolean>
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\shipping.xml#10) */
	shippingAddress : FormShippingShippingAddress
}
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\profile.xml#2)*/
declare class FormProfileCustomer extends FormGroup {
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\profile.xml#4) */
	firstname : FormField<string>
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\profile.xml#13) */
	lastname : FormField<string>
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\profile.xml#22) */
	email : FormField<string>
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\profile.xml#35) */
	emailconfirm : FormField<string>
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\profile.xml#48) */
	phone : FormField<string>
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\profile.xml#57) */
	conditions : FormField<boolean>
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\profile.xml#67) */
	mailchimpOptIn : FormField<boolean>
}
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\profile.xml#2)*/
declare class FormProfileLogin extends FormGroup {
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\profile.xml#74) */
	password : FormField<string>
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\profile.xml#86) */
	passwordconfirm : FormField<string>
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\profile.xml#97) */
	currentpassword : FormField<string>
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\profile.xml#107) */
	newpasswords : FormNewPasswords
}
/** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\profile.xml#2)*/
declare class FormProfile extends FormGroup {
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\profile.xml#3) */
	customer : FormProfileCustomer
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\profile.xml#73) */
	login : FormProfileLogin
}
/** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_storefront_base\cartridge\forms\default\newPasswords.xml#2)*/
declare class FormNewPasswords extends FormGroup {
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_storefront_base\cartridge\forms\default\newPasswords.xml#3) */
	newpassword : FormField<string>
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_storefront_base\cartridge\forms\default\newPasswords.xml#13) */
	newpasswordconfirm : FormField<string>
}
/** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\creditCard.xml#2)*/
declare class FormCreditCard extends FormGroup {
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\creditCard.xml#4) */
	editNumber : FormField<string>
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\creditCard.xml#8) */
	cardType : FormField<string>
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\creditCard.xml#10) */
	cardNumber : FormField<string>
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\creditCard.xml#12) */
	cardOwner : FormField<string>
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\creditCard.xml#14) */
	expirationMonth : FormField<number>
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\creditCard.xml#32) */
	expirationYear : FormField<number>
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\creditCard.xml#38) */
	securityCode : FormField<string>
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\creditCard.xml#40) */
	email : FormField<string>
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\creditCard.xml#42) */
	phone : FormField<string>
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\creditCard.xml#44) */
	saveCard : FormField<boolean>
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\creditCard.xml#45) */
	saveCardAdyen : FormField<boolean>
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\creditCard.xml#47) */
	adyenEncryptedData : FormField<string>
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\creditCard.xml#50) */
	selectedCardID : FormField<string>
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\creditCard.xml#51) */
	terminalId : FormField<string>
}
/** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_storefront_base\cartridge\forms\default\contactInfo.xml#2)*/
declare class FormContactInfo extends FormGroup {
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_storefront_base\cartridge\forms\default\contactInfo.xml#5) */
	email : FormField<string>
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_storefront_base\cartridge\forms\default\contactInfo.xml#10) */
	phone : FormField<string>
}
/** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\int_adyen_SFRA\cartridge\forms\default\adyenPayment.xml#2)*/
declare class FormAdyenPayment extends FormGroup {
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\int_adyen_SFRA\cartridge\forms\default\adyenPayment.xml#4) */
	issuer : FormField<string>
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\int_adyen_SFRA\cartridge\forms\default\adyenPayment.xml#7) */
	dateOfBirth : FormField<string>
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\int_adyen_SFRA\cartridge\forms\default\adyenPayment.xml#8) */
	telephoneNumber : FormField<string>
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\int_adyen_SFRA\cartridge\forms\default\adyenPayment.xml#9) */
	gender : FormField<string>
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\int_adyen_SFRA\cartridge\forms\default\adyenPayment.xml#10) */
	socialSecurityNumber : FormField<string>
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\int_adyen_SFRA\cartridge\forms\default\adyenPayment.xml#11) */
	adyenFingerprint : FormField<string>
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\int_adyen_SFRA\cartridge\forms\default\adyenPayment.xml#14) */
	bankAccountOwnerName : FormField<string>
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\int_adyen_SFRA\cartridge\forms\default\adyenPayment.xml#15) */
	bankAccountNumber : FormField<string>
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\int_adyen_SFRA\cartridge\forms\default\adyenPayment.xml#16) */
	bankLocationId : FormField<string>
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\int_adyen_SFRA\cartridge\forms\default\adyenPayment.xml#19) */
	terminalId : FormField<string>
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\int_adyen_SFRA\cartridge\forms\default\adyenPayment.xml#22) */
	adyenStateData : FormField<string>
}
/** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\newsletter.xml#2)*/
declare class FormNewsletter extends FormGroup {
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\newsletter.xml#4) */
	email : FormField<string>
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\newsletter.xml#13) */
	consent : FormField<boolean>
}
/** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\newPassword.xml#2)*/
declare class FormNewPassword extends FormGroup {
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\newPassword.xml#3) */
	newpassword : FormField<string>
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\newPassword.xml#13) */
	newpasswordconfirm : FormField<string>
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\newPassword.xml#23) */
	conditions : FormField<boolean>
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\newPassword.xml#32) */
	addtoemaillist : FormField<boolean>
}
/** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\email.xml#2)*/
declare class FormEmail extends FormGroup {
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\email.xml#5) */
	email : FormField<string>
}
/** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\countries-all.xml#2)*/
declare class FormCountriesall extends FormGroup {
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\countries-all.xml#4) */
	country : FormField<string>
}

declare global {
interface SFCCForms {
	address: FormAddress
	billing: FormBilling
	states: FormStates
	shipping: FormShipping
	profile: FormProfile
	newPasswords: FormNewPasswords
	creditCard: FormCreditCard
	contactInfo: FormContactInfo
	adyenPayment: FormAdyenPayment
	newsletter: FormNewsletter
	newPassword: FormNewPassword
	email: FormEmail
	countries-all: FormCountriesall
}
}


/****** SRFA *******/

interface SfraAction {
    description: string | null;
    label: string | null;
    submitted: boolean | null;
    triggered: boolean | null;
    formType: string;
}

interface SfraFiledOptions {
	checked: boolean,
	htmlValue: string,
	label: string,
	id: string,
	selected: boolean,
	value: string
}

interface SfraFieldBoolean {
	checked: boolean;
	selected: boolean;
}

interface SfraFieldString {
	maxLength: number;
	minLength: number;
	regEx: string
}

interface SfraFieldInteger {
	maxValue: number;
	minValue: number;
}

interface SfraField<T> {
	valid: boolean;
	error: string | null
	readonly attributes: string;
	value: T;
	options: SfraFiledOptions[];
	selectedOption: string;
	formType: string;

	htmlValue: string,
	mandatory: boolean,
	dynamicHtmlName: string
	htmlName: string
}

interface SfraFormBase<T> {
	clear() : void;
	copyFrom(src: object): void;
	toObject(): any;
	valid: boolean;
	base: T
	htmlName: string,
	dynamicHtmlName: string,
	error: string | null,
	attributes: string,
	formType: 'formGroup'
}
/** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\address.xml#2)*/
interface SfraFormAddress extends SfraFormBase<FormAddress> {
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\address.xml#4) */
	addressId : SfraField<string> & SfraFieldString
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\address.xml#5) */
	firstName : SfraField<string> & SfraFieldString
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\address.xml#6) */
	lastName : SfraField<string> & SfraFieldString
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\address.xml#7) */
	address1 : SfraField<string> & SfraFieldString
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\address.xml#8) */
	address2 : SfraField<string> & SfraFieldString
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\address.xml#9) */
	city : SfraField<string> & SfraFieldString
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\address.xml#12) */
	postalCode : SfraField<string> & SfraFieldString
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\address.xml#16) */
	country : SfraField<string> & SfraFieldString
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\address.xml#23) */
	states : SfraFormStates
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\address.xml#26) */
	deliveryNote : SfraField<string> & SfraFieldString
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\address.xml#28) */
	phone : SfraField<string> & SfraFieldString
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\address.xml#31) */
	apply : SfraAction
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\address.xml#32) */
	remove : SfraAction
}
/** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\billing.xml#2)*/
interface SfraFormBilling extends SfraFormBase<FormBilling> {
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\billing.xml#3) */
	shippingAddressUseAsBillingAddress : SfraField<boolean> & SfraFieldBoolean
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\billing.xml#5) */
	paymentMethod : SfraField<string> & SfraFieldString
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\billing.xml#7) */
	addressFields : SfraFormAddress
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\billing.xml#9) */
	contactInfoFields : SfraFormContactInfo
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\billing.xml#10) */
	creditCardFields : SfraFormCreditCard
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\billing.xml#11) */
	subscribe : SfraField<boolean> & SfraFieldBoolean
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\billing.xml#13) */
	adyenPaymentFields : SfraFormAdyenPayment
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\billing.xml#15) */
	country : SfraField<string> & SfraFieldString
}
/** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_storefront_base\cartridge\forms\default\states.xml#2)*/
interface SfraFormStates extends SfraFormBase<FormStates> {
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_storefront_base\cartridge\forms\default\states.xml#3) */
	stateCode : SfraField<string> & SfraFieldString
}
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\shipping.xml#2)*/
interface SfraFormShippingShippingAddress {
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\shipping.xml#11) */
	email : SfraFormEmail
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\shipping.xml#14) */
	addressFields : SfraFormAddress
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\shipping.xml#17) */
	shippingMethodID : SfraField<string> & SfraFieldString
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\shipping.xml#20) */
	shippingAddressUseAsBillingAddress : SfraField<boolean> & SfraFieldBoolean
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\shipping.xml#22) */
	isGift : SfraField<boolean> & SfraFieldBoolean
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\shipping.xml#23) */
	giftMessage : SfraField<string> & SfraFieldString
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\shipping.xml#24) */
	privacy : SfraField<boolean> & SfraFieldBoolean
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\shipping.xml#27) */
	save : SfraAction
}
/** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\shipping.xml#2)*/
interface SfraFormShipping extends SfraFormBase<FormShipping> {
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\shipping.xml#4) */
	shipmentUUID : SfraField<string> & SfraFieldString
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\shipping.xml#6) */
	productLineItemUUID : SfraField<string> & SfraFieldString
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\shipping.xml#7) */
	isAddressValidated : SfraField<boolean> & SfraFieldBoolean
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\shipping.xml#10) */
	shippingAddress : SfraFormShippingShippingAddress
}
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\profile.xml#2)*/
interface SfraFormProfileCustomer {
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\profile.xml#4) */
	firstname : SfraField<string> & SfraFieldString
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\profile.xml#13) */
	lastname : SfraField<string> & SfraFieldString
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\profile.xml#22) */
	email : SfraField<string> & SfraFieldString
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\profile.xml#35) */
	emailconfirm : SfraField<string> & SfraFieldString
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\profile.xml#48) */
	phone : SfraField<string> & SfraFieldString
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\profile.xml#57) */
	conditions : SfraField<boolean> & SfraFieldBoolean
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\profile.xml#67) */
	mailchimpOptIn : SfraField<boolean> & SfraFieldBoolean
}
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\profile.xml#2)*/
interface SfraFormProfileLogin {
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\profile.xml#74) */
	password : SfraField<string> & SfraFieldString
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\profile.xml#86) */
	passwordconfirm : SfraField<string> & SfraFieldString
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\profile.xml#97) */
	currentpassword : SfraField<string> & SfraFieldString
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\profile.xml#107) */
	newpasswords : SfraFormNewPasswords
}
/** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\profile.xml#2)*/
interface SfraFormProfile extends SfraFormBase<FormProfile> {
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\profile.xml#3) */
	customer : SfraFormProfileCustomer
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\profile.xml#73) */
	login : SfraFormProfileLogin
}
/** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_storefront_base\cartridge\forms\default\newPasswords.xml#2)*/
interface SfraFormNewPasswords extends SfraFormBase<FormNewPasswords> {
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_storefront_base\cartridge\forms\default\newPasswords.xml#3) */
	newpassword : SfraField<string> & SfraFieldString
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_storefront_base\cartridge\forms\default\newPasswords.xml#13) */
	newpasswordconfirm : SfraField<string> & SfraFieldString
}
/** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\creditCard.xml#2)*/
interface SfraFormCreditCard extends SfraFormBase<FormCreditCard> {
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\creditCard.xml#4) */
	editNumber : SfraField<string> & SfraFieldString
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\creditCard.xml#8) */
	cardType : SfraField<string> & SfraFieldString
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\creditCard.xml#10) */
	cardNumber : SfraField<string> & SfraFieldString
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\creditCard.xml#12) */
	cardOwner : SfraField<string> & SfraFieldString
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\creditCard.xml#14) */
	expirationMonth : SfraField<number> & SfraFieldInteger
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\creditCard.xml#32) */
	expirationYear : SfraField<number> & SfraFieldInteger
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\creditCard.xml#38) */
	securityCode : SfraField<string> & SfraFieldString
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\creditCard.xml#40) */
	email : SfraField<string> & SfraFieldString
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\creditCard.xml#42) */
	phone : SfraField<string> & SfraFieldString
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\creditCard.xml#44) */
	saveCard : SfraField<boolean> & SfraFieldBoolean
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\creditCard.xml#45) */
	saveCardAdyen : SfraField<boolean> & SfraFieldBoolean
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\creditCard.xml#47) */
	adyenEncryptedData : SfraField<string> & SfraFieldString
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\creditCard.xml#50) */
	selectedCardID : SfraField<string> & SfraFieldString
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\creditCard.xml#51) */
	terminalId : SfraField<string> & SfraFieldString
}
/** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_storefront_base\cartridge\forms\default\contactInfo.xml#2)*/
interface SfraFormContactInfo extends SfraFormBase<FormContactInfo> {
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_storefront_base\cartridge\forms\default\contactInfo.xml#5) */
	email : SfraField<string> & SfraFieldString
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_storefront_base\cartridge\forms\default\contactInfo.xml#10) */
	phone : SfraField<string> & SfraFieldString
}
/** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\int_adyen_SFRA\cartridge\forms\default\adyenPayment.xml#2)*/
interface SfraFormAdyenPayment extends SfraFormBase<FormAdyenPayment> {
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\int_adyen_SFRA\cartridge\forms\default\adyenPayment.xml#4) */
	issuer : SfraField<string> & SfraFieldString
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\int_adyen_SFRA\cartridge\forms\default\adyenPayment.xml#7) */
	dateOfBirth : SfraField<string> & SfraFieldString
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\int_adyen_SFRA\cartridge\forms\default\adyenPayment.xml#8) */
	telephoneNumber : SfraField<string> & SfraFieldString
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\int_adyen_SFRA\cartridge\forms\default\adyenPayment.xml#9) */
	gender : SfraField<string> & SfraFieldString
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\int_adyen_SFRA\cartridge\forms\default\adyenPayment.xml#10) */
	socialSecurityNumber : SfraField<string> & SfraFieldString
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\int_adyen_SFRA\cartridge\forms\default\adyenPayment.xml#11) */
	adyenFingerprint : SfraField<string> & SfraFieldString
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\int_adyen_SFRA\cartridge\forms\default\adyenPayment.xml#14) */
	bankAccountOwnerName : SfraField<string> & SfraFieldString
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\int_adyen_SFRA\cartridge\forms\default\adyenPayment.xml#15) */
	bankAccountNumber : SfraField<string> & SfraFieldString
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\int_adyen_SFRA\cartridge\forms\default\adyenPayment.xml#16) */
	bankLocationId : SfraField<string> & SfraFieldString
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\int_adyen_SFRA\cartridge\forms\default\adyenPayment.xml#19) */
	terminalId : SfraField<string> & SfraFieldString
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\int_adyen_SFRA\cartridge\forms\default\adyenPayment.xml#22) */
	adyenStateData : SfraField<string> & SfraFieldString
}
/** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\newsletter.xml#2)*/
interface SfraFormNewsletter extends SfraFormBase<FormNewsletter> {
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\newsletter.xml#4) */
	email : SfraField<string> & SfraFieldString
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\newsletter.xml#13) */
	consent : SfraField<boolean> & SfraFieldBoolean
}
/** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\newPassword.xml#2)*/
interface SfraFormNewPassword extends SfraFormBase<FormNewPassword> {
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\newPassword.xml#3) */
	newpassword : SfraField<string> & SfraFieldString
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\newPassword.xml#13) */
	newpasswordconfirm : SfraField<string> & SfraFieldString
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\newPassword.xml#23) */
	conditions : SfraField<boolean> & SfraFieldBoolean
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\newPassword.xml#32) */
	addtoemaillist : SfraField<boolean> & SfraFieldBoolean
}
/** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\email.xml#2)*/
interface SfraFormEmail extends SfraFormBase<FormEmail> {
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\email.xml#5) */
	email : SfraField<string> & SfraFieldString
}
/** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\countries-all.xml#2)*/
interface SfraFormCountriesall extends SfraFormBase<FormCountriesall> {
	 /** @source [definition](file:d:\Workspace\arcturus-ecomm\cartridges\app_project\cartridge\forms\default\countries-all.xml#4) */
	country : SfraField<string> & SfraFieldString
}

declare global {
interface SFRAServerForms {
	getForm(name: 'address'): SfraFormAddress
	getForm(name: 'billing'): SfraFormBilling
	getForm(name: 'states'): SfraFormStates
	getForm(name: 'shipping'): SfraFormShipping
	getForm(name: 'profile'): SfraFormProfile
	getForm(name: 'newPasswords'): SfraFormNewPasswords
	getForm(name: 'creditCard'): SfraFormCreditCard
	getForm(name: 'contactInfo'): SfraFormContactInfo
	getForm(name: 'adyenPayment'): SfraFormAdyenPayment
	getForm(name: 'newsletter'): SfraFormNewsletter
	getForm(name: 'newPassword'): SfraFormNewPassword
	getForm(name: 'email'): SfraFormEmail
	getForm(name: 'countries-all'): SfraFormCountriesall
}
}

declare global {
interface SRFAForms {
	address: SfraFormAddress
	billing: SfraFormBilling
	states: SfraFormStates
	shipping: SfraFormShipping
	profile: SfraFormProfile
	newPasswords: SfraFormNewPasswords
	creditCard: SfraFormCreditCard
	contactInfo: SfraFormContactInfo
	adyenPayment: SfraFormAdyenPayment
	newsletter: SfraFormNewsletter
	newPassword: SfraFormNewPassword
	email: SfraFormEmail
	countries-all: SfraFormCountriesall
}
}