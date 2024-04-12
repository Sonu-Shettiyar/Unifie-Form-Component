import React, { useState } from 'react';
import { Radio, Form, Input, DatePicker, Checkbox, Button, message } from 'antd';
import axios from 'axios';

const BASE_URL = 'http://localhost:3000/'
const FormComponent = () => {
    const [form] = Form.useForm();
    const [anyBankIn, setAnyBankIn] = useState('');
    const [creditAmountSpecification, setCreditAmountSpecification] = useState('');
    const [availableByDate, setAvailableByDate] = useState('');
    const [atDaysAfter, setAtDaysAfter] = useState('');
    const [otherPartialShipment, setOtherPartialShipment] = useState('');
    const [otherTradeTermsAndPlace, setOtherTradeTermsAndPlace] = useState('');

    const [draftsAt, setDraftsAt] = useState({ days: null, day: null });

    const [certificateIssuedBy, setCertificateIssuedBy] = useState('');

    const [originalDocuments, setOriginalDocuments] = useState({
        CommercialInvoice: null,
        PackingList: null,
        CertificateofOriginissuedandvisaedby: null
    })
    const [copyDocuments, setCopyDocuments] = useState({
        CommercialInvoice: null,
        PackingList: null,
        CertificateofOriginissuedandvisaedby: null
    })

    const [insurancePolicy, setInsurancePolicy] = useState();

    const [insuranceRisks, setInsuranceRisks] = useState('')


    const [periodOfPresentation, setPeriodOfPresentation] = useState('');

    const [periodOfPresentationAfterDate, setPeriodOfPresentationAfterDate] = useState('');

    const [placeAndDate, setplaceAndDate] = useState();

    const handleFormSubmit = async () => {
        try {
            const formValues = form.getFieldsValue();
            const payload = {
                ...formValues,
                originalDocuments,
                copyDocuments,
                certificateIssuedBy,
                insurancePolicy,
                insuranceRisks,
                periodOfPresentation,
                periodOfPresentationAfterDate,
                placeAndDate
            }
            const res = await axios.post(BASE_URL, payload)
            message.success(res.data || 'Form Submitted Succesfully!')
        } catch (error) {
            console.log(error)
            message.error(error.message || 'Something Went Wrong, Please try again')
        }




    }
    return (
        <div id='main-container'>
            <Form form={form} >
                <div className='flex-div'>
                    <h2>To CREDIT SUISSE (Switzerland) Ltd. Trade Finance Service Center: </h2>

                    <Form.Item name="locations">
                        <Radio.Group>
                            <Radio className='rectangular-radio' value="Zurich">Zürich</Radio>
                            <Radio value="Geneva">Genève</Radio>
                            <Radio value="Lugano">Lugano</Radio>
                        </Radio.Group>
                    </Form.Item>
                </div>
                <div>
                    <p>
                        We request you to issue on our behalf and for our account the following Irrevocable Documentary Credit as per the instructions given
                        below. This credit is to be subject to the "Uniform Customs and Practice for Documentary Credits" published by the International
                        Chamber of Commerce in force at the time of the issuance.
                    </p>
                </div>

                <div className='bottom-border two-columns'>
                    <div>
                        <p>
                            Name and Address of
                            Applicant
                            to appear in the credit
                        </p>
                    </div>
                    <div className='flex-div'>
                        <Form.Item name="nameOfCreditPerson">
                            <Radio.Group>

                                <Radio value="Ourself">Ourself</Radio>
                                <br />
                                <Radio value="Third Party">Third Party(specify)</Radio>
                            </Radio.Group>
                        </Form.Item>

                        <Form.Item name="addressOfCreditPerson">
                            <Input.TextArea />
                        </Form.Item>

                    </div>
                    <div>
                        <p>Contact Person</p>
                    </div>
                    <div className='flex-div'>
                        <Form.Item name='contactPerson'>
                            <Input />
                        </Form.Item>
                        <Form.Item name='phoneNo' label='Phone No'>
                            <Input />
                        </Form.Item>
                        <Form.Item name='emailAddress' label='E-Mail Address'>
                            <Input />
                        </Form.Item>
                    </div>
                    <div>
                        <p>
                            Our Reference
                        </p>
                    </div>
                    <div>
                        <Form.Item name='ourReference' >
                            <Input />
                        </Form.Item>
                    </div>
                </div>
                <div className='bottom-border two-columns'>
                    <div>
                        <p>
                            Correspondent Bank
                        </p>
                    </div>
                    <div className='flex-div'>
                        <Form.Item name="correspondentBank">
                            <Input.TextArea />
                        </Form.Item>

                        <Form.Item name="swiftCode" label='Swift Code'>
                            <Input />
                        </Form.Item>

                    </div>
                    <div>
                        <p>40A: Form of documentary credit</p>
                    </div>
                    <div className='flex-div bottom-border'>
                        <Form.Item name='documentaryCredit'>


                            <Radio.Group className='flex-div'>

                                <Radio value="Irrevocable">Irrevocable</Radio>
                                <br />
                                <Radio value="Irrevocable and transferable">Irrevocable and transferable</Radio>
                                <Radio value={'Irrevocable Standby'}>Irrevocable Standby</Radio>
                            </Radio.Group>
                        </Form.Item>
                    </div>
                    <div>
                        <p>
                            31D: Date of expiry
                        </p>
                    </div>
                    <div className='flex-div justify-between'>
                        <Form.Item name='dateOfExpiry' >
                            <DatePicker />
                        </Form.Item>

                        <p>(DD-MM-YY)</p>
                    </div>
                    <div>
                        <p>
                            31D: Place of expiry with
                        </p>
                    </div>
                    <div className='flex-div justify-between'>



                        <Form.Item name={'placeOfExpiryWith'}>
                            <Radio.Group className='flex-div'>

                                <div>
                                    <Radio value="creditSuisse">Credit Suisse</Radio>
                                    <br />
                                    <Radio value="correspondentBank">Correspondent Bank</Radio>
                                </div>
                                <div>
                                    <Radio value={'anyBank'}>Any Bank</Radio>
                                    <br />
                                    <Radio value={anyBankIn}>Any Bank in:

                                    </Radio>
                                </div>
                                <div style={{ marginTop: '20px' }}>

                                    <Input placeholder='Country Or City' value={anyBankIn} onChange={(e) => setAnyBankIn(e.target.value)} />

                                </div>

                            </Radio.Group>
                        </Form.Item>
                    </div>
                    <div>
                        <p>
                            59: Beneficiary
                        </p>
                    </div>
                    <div className='flex-div '>



                        <Form.Item name={'beneficiarySwiftAddress'}>
                            <Input.TextArea placeholder='Enter Swift Address' maxLength={35} />
                        </Form.Item>
                        <Form.Item name={'beneficiaryFullAddress'}>
                            <Input.TextArea placeholder='Enter Full Address' />
                        </Form.Item>
                    </div>

                    <div>
                        <p>
                            32B: Currency and Amount
                        </p>
                    </div>
                    <div className='flex-div '>



                        <Form.Item name={'currency'}>
                            <Input placeholder='Enter Currency' maxLength={35} />
                        </Form.Item>
                        <Form.Item name={'amount'}>
                            <Input placeholder='Enter Amount' />
                        </Form.Item>
                    </div>

                    <div>
                        <p>
                            39: Credit Amount specification
                        </p>
                    </div>
                    <div className='flex-div '>




                        <Form.Item name={'creditAmountSpecification'}>
                            <Radio.Group className='flex-div'>

                                <div>
                                    <Radio value={'Exactly'}>Exactly</Radio>
                                    <br />
                                    <Radio value="Maximum About (+/- 10 %)">
                                        Maximum About (+/- 10 %)

                                    </Radio>
                                    <br />
                                    <Radio value="Tolerance Of"> Tolerance of</Radio>
                                </div>
                                <div style={{ marginTop: '20px' }}>
                                    <Radio value={'About (+/- 10 %)'}>About (+/- 10 %)</Radio>
                                    <br />
                                    <Radio value={creditAmountSpecification}
                                        onChange={() => setCreditAmountSpecification(' Enter Specification')}>Specify:
                                    </Radio>
                                </div>
                                <div style={{ marginTop: '40px' }}>

                                    {creditAmountSpecification && <Input value={creditAmountSpecification} onChange={(e) => setCreditAmountSpecification(e.target.value)} />}

                                </div>

                            </Radio.Group>
                        </Form.Item>
                    </div>

                    <div>
                        <p>
                            41A: Available with
                            (Place of presentation of
                            documents)
                        </p>
                    </div>
                    <div className='flex-div justify-between'>



                        <Form.Item name={'placeOfExpiryWith'}>
                            <Radio.Group className='flex-div'>

                                <div>
                                    <Radio value="creditSuisse">Credit Suisse</Radio>
                                    <br />
                                    <Radio value="correspondentBank">Correspondent Bank</Radio>
                                </div>
                                <div>
                                    <Radio value={'anyBank'}>Any Bank</Radio>
                                    <br />
                                    <Radio value={anyBankIn}>Any Bank in:

                                    </Radio>
                                </div>
                                <div style={{ marginTop: '20px' }}>

                                    <Input placeholder='Country Or City' value={anyBankIn} onChange={(e) => setAnyBankIn(e.target.value)} />

                                </div>

                            </Radio.Group>
                        </Form.Item>
                    </div>

                    <div>
                        <p>
                            41A:  Available by
                        </p>
                    </div>

                    <div>



                        <div>
                            <p>Payment</p>
                            <Form.Item name={'availableByPayment'}>
                                <Radio.Group className='flex-div'>

                                    <div>
                                        <Radio value="Payment at sight">
                                            Payment at sight
                                        </Radio>
                                        <br />
                                        <Radio value="Deferred payment (specify below)">Deferred payment (specify below)</Radio>
                                    </div>
                                    <div>
                                        <Radio value={"Mixed payment (specify below)"}>
                                            Mixed payment (specify below)

                                        </Radio>
                                        <Radio value={'Acceptance (specify below)'}>Acceptance (specify below)</Radio>
                                        <br />
                                        <Radio value="Negotiation (specify below)">   Negotiation (specify below)
                                        </Radio>
                                    </div>


                                </Radio.Group>
                            </Form.Item>
                        </div>


                        <div>
                            <p>Date</p>
                            <Form.Item name={'availableByDate'}>
                                <Radio.Group className='flex-div'>

                                    <div>
                                        <Radio value="Date of shipment">
                                            Date of shipment
                                        </Radio>
                                        <br />
                                        <Radio value="Date of Invoice">Date of Invoice</Radio>
                                    </div>
                                    <div>
                                        <Radio value="Sight">Sight</Radio>
                                        <br />
                                        <Radio value={`At ${atDaysAfter} days after`}>
                                            At <Input style={{ width: '70px' }} type='number' value={atDaysAfter} onChange={(e) => setAtDaysAfter(e.target.value)} /> days after
                                        </Radio>
                                    </div>
                                    <div>
                                        <Radio value={"define"}
                                            onChange={() => setAvailableByDate('define')}>
                                            define:

                                        </Radio>
                                        {availableByDate && <Input value={availableByDate} onChange={(e) => setAvailableByDate(e.target.value)} />}
                                    </div>

                                </Radio.Group>
                            </Form.Item>
                        </div>
                    </div>



                    <div>
                        <p> 42A: Drawee </p>
                    </div>
                    <div className='flex-div '>
                        <Form.Item name={'drawee'}>
                            <Input.TextArea maxLength={35} />
                        </Form.Item>
                    </div>


                    <div>
                        <p>42C: Drafts at…</p>
                    </div>
                    <div className='flex-div '>
                        <Form.Item name={'draftsAt'} >
                            <div className='flex-div'>
                                <Input
                                    type='number'
                                    style={{ width: '50px' }} onChange={(e) => setDraftsAt((prev) => ({ ...prev, days: e.target.value }))} value={draftsAt.days} />days from <Input
                                    onChange={(e) => setDraftsAt((prev) => ({ ...prev, day: e.target.value }))}
                                    value={draftsAt.day}
                                />
                            </div>
                        </Form.Item>
                    </div>

                    <div>
                        <p>
                            43P: Partial shipments
                        </p>
                    </div>
                    <div className='flex-div justify-between'>



                        <Form.Item name={'partialShipments'}>
                            <Radio.Group className='flex-div'>

                                <div>
                                    <Radio value="Allowed">Allowed</Radio>
                                    <Radio value="Not allowed">Not allowed</Radio>
                                    <Radio value="In lots allowed ">In lots allowed </Radio>
                                    <br />
                                    <div className='flex-div justify-between'>
                                        <Radio value={otherPartialShipment}>other:</Radio>

                                        <Input placeholder='(specify)' value={otherPartialShipment} onChange={(e) => setOtherPartialShipment(e.target.value)} />
                                    </div>
                                </div>

                            </Radio.Group>
                        </Form.Item>
                    </div>


                    <div>
                        <p>
                            43T: Transhipment
                        </p>
                    </div>
                    <div className='flex-div justify-between'>



                        <Form.Item name={'transhipment'}>
                            <Radio.Group className='flex-div'>
                                <Radio value="Allowed">Allowed</Radio>
                                <Radio value="Not allowed">Not allowed</Radio>
                            </Radio.Group>
                        </Form.Item>
                    </div>


                    <div>
                        <p>
                            44A: Place of Taking in Charge/
                            Dispatch from.../ Place of Receipt
                        </p>
                    </div>
                    <div className='flex-div justify-between'>
                        <Form.Item name={'Place of Receipt'}
                            className='full-width'
                        >
                            <Input />
                        </Form.Item>
                    </div>


                    <div>
                        <p>
                            44E: Port of Loading/ Airport of
                            Departure
                        </p>
                    </div>
                    <div className='flex-div justify-between'>
                        <Form.Item name={'portOfLoading'}
                            className='full-width'
                        >
                            <Input />
                        </Form.Item>
                    </div>


                    <div>
                        <p>
                            44F: Port of Discharge/ Airport
                            of Destination
                        </p>
                    </div>
                    <div className='flex-div justify-between'>
                        <Form.Item name={'portOfDischarge'}
                            className='full-width'
                        >
                            <Input />
                        </Form.Item>
                    </div>


                    <div>
                        <p>
                            44B: Place of Final Destination/ For
                            Transportation to../ Place of Delivery
                        </p>
                    </div>
                    <div className='flex-div justify-between'>
                        <Form.Item name={'placeOfFinalDestination'}
                            className='full-width'
                        >
                            <Input />
                        </Form.Item>
                    </div>

                    <div>
                        <p>
                            44C: Latest Date of Shipment
                        </p>
                    </div>
                    <div className='flex-div justify-between'>
                        <Form.Item name='dateOfShipment'
                        >
                            <DatePicker />
                        </Form.Item>

                        <p>(DD-MM-YY)</p>
                    </div>


                    <div>
                        <p>
                            44D: Shipment period
                        </p>
                    </div>
                    <div className='flex-div justify-between'>
                        <Form.Item name='shipmentPeriod'
                        >
                            <Input.TextArea maxLength={65} />
                        </Form.Item>
                    </div>


                    <div>
                        <p>
                            Trade terms and place
                        </p>
                    </div>
                    <div className=''>

                        <Form.Item name={'tradeTerms'}>
                            <Radio.Group >

                                <Radio value="EXW (ex works)">EXW (ex works)</Radio>
                                <Radio value=" CFR (Cost and Freight)"> CFR (Cost and Freight)</Radio>
                                <Radio value="CIP (Carriage and Insurance paid to)">CIP (Carriage and Insurance paid to)</Radio>
                                <br />
                                <Radio value="  FCA (Free Carrier)">
                                    FCA (Free Carrier)
                                </Radio>

                                <Radio value="FOB (Free on Board)">
                                    FOB (Free on Board)
                                </Radio>
                                <Radio value="CIF (Cost Insurance and Freight)">
                                    CIF (Cost Insurance and Freight)
                                </Radio>
                                <Radio value=" CPT (Carriage paid to) ">
                                    CPT (Carriage paid to)
                                </Radio>
                                <div className='flex-div'>
                                    <Radio value={otherTradeTermsAndPlace}>
                                        Other
                                    </Radio>
                                    <Input value={otherTradeTermsAndPlace} onChange={(e) => setOtherTradeTermsAndPlace(e.target.value)} />
                                </div>
                            </Radio.Group>

                        </Form.Item>

                        <Form.Item name={'tradePlace'}>
                            At <Input style={{ width: '100px', margin: '5px' }} />as per ICC-Incoterms
                        </Form.Item>

                    </div>


                    <div>
                        <p>
                            45A: Description of Goods and/or
                            Services
                            (only a brief description)
                        </p>
                    </div>
                    <div className=''>

                        <Form.Item name={'tradeTerms'}>
                            <Input.TextArea placeholder='only a brief description of the goods and/or services' />

                        </Form.Item>
                        <div className='flex-div'>

                            <Form.Item name={'goodsServicesTolerance'} >
                                <Checkbox />
                            </Form.Item>
                            Tolerance in quantity of + %<Form.Item name={'goodsServicesToleranceNumerator'}>
                                <Input style={{ width: '50px' }} />
                            </Form.Item>/ -<Form.Item name={'goodsServicesToleranceDenominator'}>
                                <Input style={{ width: '50px' }} />
                            </Form.Item>
                            `% is allowed
                        </div>

                    </div>


                    <div>
                        46A: Documents Required
                    </div>
                    <div>
                        <div className='flex-div justify-between' >
                            <Form.Item style={{ marginTop: '20px' }}>
                                <Checkbox.Group className='flex-column'>
                                    <Checkbox value={'                          Commercial Invoice'}>
                                        Commercial Invoice
                                    </Checkbox>
                                    <Checkbox value="Packing List">
                                        Packing List
                                    </Checkbox>
                                    <Checkbox value={" Certificate of Origin issued and/or visaed by"}>
                                        Certificate of Origin issued and/or visaed by
                                    </Checkbox>

                                </Checkbox.Group>
                            </Form.Item>
                            <div>
                                Original(s)
                                <br />
                                <Input style={{ width: '50px' }} type='number' value={originalDocuments.CommercialInvoice}
                                    onChange={(e) => setOriginalDocuments(prev => ({ ...prev, CommercialInvoice: e.target.value }))}
                                />
                                <br />
                                <Input style={{ width: '50px' }} type='number' value={originalDocuments.PackingList}
                                    onChange={(e) => setOriginalDocuments(prev => ({ ...prev, PackingList: e.target.value }))} />
                                <br />
                                <Input style={{ width: '50px' }} type='number' value={originalDocuments.CertificateofOriginissuedandvisaedby}
                                    onChange={(e) => setOriginalDocuments(prev => ({ ...prev, CertificateofOriginissuedandvisaedby: e.target.value }))}

                                />
                            </div>
                            <div>
                                Copy(s)
                                <br />
                                <Input style={{ width: '50px' }} type='number' value={copyDocuments.CommercialInvoice}
                                    onChange={(e) => setCopyDocuments(prev => ({ ...prev, CommercialInvoice: e.target.value }))}
                                />
                                <br />
                                <Input style={{ width: '50px' }} type='number' value={copyDocuments.PackingList}
                                    onChange={(e) => setCopyDocuments(prev => ({ ...prev, PackingList: e.target.value }))} />
                                <br />
                                <Input style={{ width: '50px' }} type='number' value={copyDocuments.CertificateofOriginissuedandvisaedby}
                                    onChange={(e) => setCopyDocuments(prev => ({ ...prev, CertificateofOriginissuedandvisaedby: e.target.value }))}

                                />
                            </div>
                        </div>
                        <div>
                            <Form.Item name={'certificateIssuedBy'} style={{ marginLeft: '50px' }}>
                                <Radio.Group className='flex-div'>
                                    <Radio value={'Chamber Of Commerce'}>
                                        <br />
                                        Chamber of Commerce</Radio>

                                    <Radio value={'Beneficiary'} className='flex-div'>
                                        Beneficiary
                                        Evidencing goods of
                                        <Input style={{ width: '50px', margin: '10px' }} value={certificateIssuedBy} onChange={(e) => setCertificateIssuedBy(e.target.value)} />
                                        origin
                                    </Radio>

                                </Radio.Group>
                            </Form.Item>
                            <div >
                                <Checkbox /> Certificate of Origin Form A (GSP)
                            </div>

                            <Form.Item name={'certificateOfOrigin'} style={{ marginLeft: '50px' }}>
                                Evidencing goods of <Input style={{ width: '200px', margin: '10px' }} /> origin
                            </Form.Item>
                        </div>

                    </div>


                    <div>
                        <p>
                            Covering Multimodal Transport
                        </p>
                    </div>
                    <div className='flex-div'>

                        <Form.Item name={'coveringMultimodalTransportFullSetOf'}>
                            <Checkbox >
                                Full set of
                            </Checkbox>

                        </Form.Item>
                        <Form.Item name={'coveringMultimodalTransport'}>
                            <Radio.Group name='coveringMultimodalTransport'>
                                <Radio value={'Multimodal transport document'}>
                                    Multimodal transport document
                                </Radio>

                                <Radio value={'other'}>
                                    Other
                                </Radio>                            </Radio.Group>
                        </Form.Item>


                    </div>


                    <div>
                        <p>
                            Covering seafreight
                        </p>
                    </div>
                    <div>

                        <div className='flex-div'>

                            <Form.Item name={'coveringSeafreightFullSetOf'}>
                                <Checkbox >
                                    Full set of
                                </Checkbox>

                            </Form.Item>
                            <Form.Item name='coveringMultimodalTransport'>
                                <Radio.Group name='coveringMultimodalTransport'>
                                    <Radio value={'Marine Bill of Lading'}>
                                        Marine Bill of Lading
                                    </Radio>
                                </Radio.Group>
                            </Form.Item>
                        </div>
                        <br />
                        <div>
                            <Form.Item name={'Made out to order and blank endorsed'}>
                                <Radio>
                                    Made out to order and blank endorsed
                                </Radio>
                            </Form.Item>
                            <div className='flex-div align-center'>
                                <Radio>
                                    Made out to order of

                                </Radio>
                                <Form.Item name={'Made out to order of'} >
                                    <Input style={{ marginTop: '10px' }} />
                                </Form.Item>
                            </div>

                            <div className='flex-div align-center'>
                                <Radio>
                                    consigned to
                                </Radio>
                                <Form.Item name={'consigned to'}>
                                    <Input />
                                </Form.Item>
                            </div>

                        </div>
                        <div className='flex-div '>
                            <div>
                                <Checkbox>
                                    Notify
                                </Checkbox>
                            </div>
                            <Form.Item name={'Notify'}>
                                <Input />
                            </Form.Item>
                        </div>
                        <div className='flex-div '>
                            <div>
                                <Checkbox>
                                    Marked
                                </Checkbox>
                            </div>
                            <Form.Item name={'Marked'}>
                                <Radio.Group>
                                    <Radio value={'Freight collect'}>
                                        Freight collect
                                    </Radio>
                                    <Radio value={'Freight prepaid'}>
                                        Freight prepaid
                                    </Radio>
                                </Radio.Group>
                            </Form.Item>
                        </div>
                        <div className='flex-div '>
                            <div>
                                <Checkbox>
                                    Issued by
                                </Checkbox>
                            </div>
                            <Form.Item name={'Issued by'} className='full-width'>
                                <Input />
                            </Form.Item>
                        </div>
                    </div>


                    <div>
                        <p>
                            Covering airfreight
                            <br />
                            Covering Inlandfreight

                        </p>
                    </div>
                    <div className='bottom-border'>
                        <Form.Item name={'Airwaybill (Original for shipper)'}>
                            <Checkbox >
                                Airwaybill (Original for shipper)

                            </Checkbox>
                        </Form.Item>
                        <div>
                            <Form.Item name={'Covering Inlandfreight'}>
                                <Checkbox.Group >


                                    <Checkbox
                                        value={"Forwarder's Certificate of Receipt (FCR)"}
                                    >
                                        Forwarder's Certificate of Receipt (FCR)
                                    </Checkbox>
                                    <Checkbox
                                        value={"International Road Waybill (CMR)"}
                                    >
                                        International Road Waybill (CMR)
                                    </Checkbox>
                                    <br />
                                    <Checkbox
                                        value="
                                        Duplicate Railwaybill
                                    ">
                                        Duplicate Railwaybill
                                    </Checkbox>
                                    <Checkbox value={"Courier Receipt consigned to"}>
                                        Courier Receipt consigned to
                                    </Checkbox>
                                </Checkbox.Group>
                                <Input />
                            </Form.Item>
                            <div className='flex-div '>
                                <div>
                                    <Checkbox value={"Notify"}>

                                        Notify
                                    </Checkbox>
                                </div>
                                <Form.Item name={'InlandfreightNotify'}>
                                    <Input />
                                </Form.Item>
                            </div>
                            <div className='flex-div '>
                                <div>
                                    <Checkbox value={"Marked"}>
                                        Marked
                                    </Checkbox>
                                </div>
                                <Form.Item name={'InlandfreightMarked'}>
                                    <Radio.Group>
                                        <Radio value={'InlandfreightFreight collect'}>
                                            Freight collect
                                        </Radio>
                                        <Radio value={'InlandfreightFreight prepaid'}>
                                            Freight prepaid
                                        </Radio>
                                    </Radio.Group>
                                </Form.Item>
                            </div>
                            <div className='flex-div bottom-border '>
                                <div>
                                    <Checkbox>
                                        Issued by
                                    </Checkbox>
                                </div>
                                <Form.Item name={'InlandfreightIssued by'} className='full-width'>
                                    <Input />
                                </Form.Item>
                            </div>

                            <div>
                                <Form.Item name={'InlandfreightInsurance'}>
                                    <Checkbox.Group>

                                        <Checkbox value={' Insurance cover taken care by the applicant'}>
                                            Insurance cover taken care by the applicant
                                        </Checkbox>

                                        <Checkbox value={` Insurance policy or certificate covering ${insurancePolicy} % of goods value and the following risks ${insuranceRisks}`}>
                                            Insurance policy or certificate covering
                                            <Input value={insurancePolicy} onChange={(e) => setInsurancePolicy(e.target.value)} type='number' style={{ width: '50px', margin: "10px" }} />
                                            % of goods value and the following risks
                                            <Input value={insuranceRisks} onChange={(e) => setInsuranceRisks(e.target.value)} type='text' style={{ margin: "10px" }} />
                                        </Checkbox>
                                    </Checkbox.Group>
                                </Form.Item>
                            </div>
                        </div>
                    </div>


                    <div className='bottom-border'>
                        <p>
                            Other documents
                            (further docs in the attachment)
                        </p>
                    </div>
                    <div className='flex-div'>
                        <div>
                            <Checkbox />

                        </div>
                        <Form.Item className='full-width' name={'Other documents                            (further docs in the attachment)'}>
                            <Input />
                        </Form.Item>
                    </div>


                    <div className='bottom-border'>
                        <p>
                            47A: Additional Conditions
                        </p>
                    </div>
                    <div className='flex-div'>
                        <Form.Item className='full-width' name={'47A: Additional Conditions'}>
                            <Input.TextArea />
                        </Form.Item>
                    </div>


                    <div className='bottom-border'>
                        <p>
                            71B: Charges
                        </p>
                    </div>
                    <div className='flex-div'>
                        <Form.Item className='full-width' name={'71B: Charges'}>

                            <Checkbox.Group>
                                <Checkbox value={" All commissions and charges for our account"}>
                                    All commissions and charges for our account

                                </Checkbox>
                                <Checkbox value={"All commissions and charges for Beneficiary's account"}>
                                    All commissions and charges for Beneficiary's account

                                </Checkbox>
                                <Checkbox value={"Your (Credit Suisse) charges for our account, foreign bank charges for beneficiary's account"}>
                                    Your (Credit Suisse) charges for our account, foreign bank charges
                                    for beneficiary's account
                                </Checkbox>
                            </Checkbox.Group>
                        </Form.Item>
                    </div>




                    <div className='bottom-border'>
                        <p>
                            Field 48: Period for Presentation
                        </p>
                    </div>
                    <div>
                        <div className='flex-div'>
                            <Form.Item className='full-width' name={'Field 48: Period for Presentation'}>

                                <Checkbox.Group>
                                    <Checkbox value={"Documents to be presented within"}>
                                        All commissions and charges for our account

                                    </Checkbox>
                                </Checkbox.Group>
                            </Form.Item>
                            <Form.Item >
                                <Radio.Group className='flex-div'>
                                    <Radio value={"21 Days"}>21 Days</Radio>
                                    <Radio value={`${periodOfPresentation}`}>
                                        Other:
                                        <Input value={periodOfPresentation} onChange={(e) => setPeriodOfPresentation(e.target.value)} />
                                    </Radio>
                                </Radio.Group>
                            </Form.Item>
                        </div>
                        <br />
                        <div className='flex-div' style={{ justifyContent: 'space-evenly' }}>
                            After the date of:
                            <Form.Item name={"After the date of:"}>
                                <Radio.Group className='flex-div'>
                                    <Radio value={"Transport document"}>Transport document</Radio>
                                    <Radio value={`${periodOfPresentationAfterDate}`}>
                                        Other:
                                        <Input value={periodOfPresentationAfterDate} onChange={(e) => setPeriodOfPresentationAfterDate(e.target.value)} />
                                    </Radio>
                                </Radio.Group>
                            </Form.Item>
                        </div>
                    </div>



                    <div className='bottom-border'>
                        <p>
                            49: Confirmation Instructions
                        </p>
                    </div>
                    <div className='flex-div'>

                        <Form.Item className='full-width justify-between' name={'49: Confirmation Instructions'}>
                            <Checkbox.Group>
                                Correspondent bank to
                                <Checkbox value="
                                Add their confirmation
                                ">
                                    Add their confirmation

                                </Checkbox>

                                <Checkbox value={"Not to add their confirmation"}>
                                    Not to add their confirmation
                                </Checkbox>
                            </Checkbox.Group>
                        </Form.Item>
                    </div>


                    <div className='bottom-border'>
                        <p>
                            Other Conditions / Remarks
                            (attachment if needed)
                        </p>
                    </div>
                    <div className='flex-div'>

                        <Form.Item className='full-width justify-between' name={'Other Conditions / Remarks                            (attachment if needed) '}>
                            <Input.TextArea />
                        </Form.Item>
                    </div>


                    <div className='bottom-border'>
                        <p>
                            72: Sender to Receiver Information
                        </p>
                    </div>
                    <div >
                        Documents to be sent to Credit Suisse as follows:
                        <br />
                        <Form.Item className='full-width justify-between' name={'72: Sender to Receiver Information'} style={{ marginLeft: '10%' }}>

                            <Checkbox.Group>
                                <Checkbox value="
                                    By courier service in
                                    ">
                                    By courier service in
                                </Checkbox>
                                <Checkbox value={"                               By registered mail in"}>
                                    By registered mail in
                                </Checkbox>
                            </Checkbox.Group>
                        </Form.Item>
                        <Form.Item name={'courier lots'} style={{ marginLeft: '20%' }}>
                            <Radio.Group>
                                <Radio value={"1 lot"}>
                                    1 lot
                                </Radio>
                                <Radio value={'2 lot'}>
                                    2 lot
                                </Radio>
                            </Radio.Group>
                        </Form.Item>
                    </div>
                </div>
            </Form >
            <div style={{ width: '100%', textAlign: 'end' }}>
                <p>
                    You are authorized to debit our account directly

                </p>
            </div>

            <div className='flex-div justify-between' style={{ margin: '30px' }} >
                <div className='flex-div align-center'>
                    <p>
                        Place and Date:</p> <Input style={{ width: '400px' }} value={placeAndDate} onChange={(e) => setplaceAndDate(e.target.value)} />
                </div>

                <div>
                    <p>
                        Stamp and Signature of the Applicant
                    </p>
                </div>
            </div>
            <div>
                <Button style={{ width: '100%', backgroundColor: 'black', color: 'white' }} onClick={handleFormSubmit}>
                    Submit
                </Button>
            </div>
        </div >
    );
};

export default FormComponent;
