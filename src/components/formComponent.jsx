import React, { useState } from 'react';
import { Radio, Form, Input, DatePicker, Checkbox } from 'antd';

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
    return (
        <div id='main-container'>
            <Form form={form}>
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
                                    <Checkbox>
                                        Commercial Invoice
                                    </Checkbox>
                                    <Checkbox>
                                        Packing List
                                    </Checkbox>
                                    <Checkbox>
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

                            <Form.Item name={'certificateOfOrigin'} style={{marginLeft:'50px'}}>
                                Evidencing goods of <Input style={{ width: '200px', margin: '10px' }} /> origin
                            </Form.Item>
                        </div>

                    </div>

                </div>
            </Form>
        </div>
    );
};

export default FormComponent;
