const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const dataSchema = new Schema({
  locations: String,
  nameOfCreditPerson: String,
  addressOfCreditPerson: String,
  contactPerson: String,
  phoneNo: String,
  certificateIssuedBy: String,
  certificateOfOrigin: String,
  coveringMultimodalTransport: String,
  coveringMultimodalTransportFullSetOf: String,
  coveringSeafreightFullSetOf: String,
  creditAmountSpecification: String,
  currency: String,
  dateOfExpiry: Date,
  dateOfShipment: Date,
  documentaryCredit: String,
  draftsAt: String,
  drawee: String,
  emailAddress: String,
  goodsServicesTolerance: String,
  goodsServicesToleranceDenominator: String,
  goodsServicesToleranceNumerator: String,
  insurancePolicy: String,
  insuranceRisks: String,
  ourReference: String,
  partialShipments: String,
  periodOfPresentation: String,
  periodOfPresentationAfterDate: String,
  placeAndDate: String,
  placeOfExpiryWith: String,
  placeOfFinalDestination: String,
  portOfDischarge: String,
  portOfLoading: String,
  shipmentPeriod: String,
  swiftCode: String,
  transhipment: String,
  originalDocuments: {
    CertificateofOriginissuedandvisaedby: String,
    CommercialInvoice: String,
    PackingList: String
  },
  copyDocuments: {
    CertificateofOriginissuedandvisaedby: String,
    CommercialInvoice: String,
    PackingList: String
  },
  correspondentBank: String,
  courierLots: String,
  inlandfreightInsurance: [String],
  inlandfreightIssuedBy: String,
  inlandfreightMarked: String,
  inlandfreightNotify: String,
  issuedBy: String,
  madeOutOfBlankEndorsed: String,
  madeOutOfOrderOf: String,
  marked: String,
  notify: String,
  otherDocuments: String,
  otherConditionsRemarks: String,
  coveringInlandfreight: [String],
  inlandfreightNotify: String,
  inlandfreightMarked: String,
  inlandfreightIssuedBy: String,
  airwaybillForShipper: String,
  additionalConditions: String,
  confirmationInstructions: [String],
  senderToReceiverInformation: [String]
});

const Data = mongoose.model('formData', dataSchema);

module.exports = Data;
