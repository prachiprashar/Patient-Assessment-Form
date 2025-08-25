// src/SubmitAssessmentForm.jsx

import React, { useState } from 'react';
import { Form, Input, Button, Select, Slider, Row, Col, Card, Typography, Divider, message } from 'antd';
import { condition, conditionWorseOption, medicalInfo, preMedicalInfo } from './options';
import { Link } from 'react-router-dom';
import './FormStyles.css'; // Import the CSS file

const { Option } = Select;
const { TextArea } = Input;
const { Title, Paragraph } = Typography;

const SubmitAssessmentForm = () => {
  const [form] = Form.useForm();
  const [painValue, setPainValue] = useState(0);

  const generatePatientID = () => "newPatient" + Date.now();

  const initialDataForm = {
    patientID: generatePatientID(),
    assessmentDate: new Date().toISOString().split("T")[0],
    mainComplaint: "",
    injury: "",
    injuryDate: "",
    surgeryDate: "",
    injuryDescription: "",
    therapy: "",
    therapyDate: "",
    presentCondition: "",
    currentSymptoms: "",
    surgicalHistory: "",
    doctorReferral: "",
    conditionWorse: [],
    conditionBetter: [],
    prevMedicalIntervention: [],
    medicalInformation: [],
    earlierMedication: "",
    allergies: "",
    additionalInfo: "",
    endGoal: "",
    painScale: painValue,
  };

  const onFinish = (values) => {
    const finalData = { ...values, painScale: painValue };
    console.log('Form Submitted:', finalData);
    message.success('New assessment has been submitted successfully!');
    form.resetFields();
    form.setFieldsValue({ patientID: generatePatientID() });
    setPainValue(0);
  };

  return (
    <div className="form-container">
      <div className="form-header">
        <Title level={2}>Patient Assessment Form</Title>
        <Paragraph>Use this form to create a new patient assessment record.</Paragraph>
        <Link to="/update" className="nav-button">Switch to Update Form</Link>
      </div>

      <Card className="form-card">
        <Form
          form={form}
          layout="vertical"
          initialValues={initialDataForm}
          onFinish={onFinish}
        >
          <Row gutter={24}>
            <Col xs={24} sm={12}>
              <Form.Item label="Patient ID" name="patientID">
                <Input disabled />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item label="Assessment Date" name="assessmentDate">
                <Input type="date" />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item label="Main Complaint" name="mainComplaint" rules={[{ required: true, message: 'This field is required' }]}>
            <Input placeholder="e.g., Chronic lower back pain" />
          </Form.Item>
          
          <Row gutter={24}>
            <Col xs={24} sm={8}>
              <Form.Item label="Injury/Condition" name="injury">
                <Input placeholder="e.g., Herniated disc L4-L5" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={8}>
              <Form.Item label="Date of Injury" name="injuryDate">
                <Input type="date" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={8}>
              <Form.Item label="Date of Surgery" name="surgeryDate">
                <Input type="date" />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item label="Description of Injury" name="injuryDescription">
            <TextArea rows={3} placeholder="Describe how the injury occurred and the immediate symptoms." />
          </Form.Item>
          
          <Form.Item label="Present Condition & Current Symptoms" name="presentCondition">
            <TextArea rows={3} placeholder="Describe the patient's current condition and symptoms." />
          </Form.Item>

          <Row gutter={24}>
            <Col xs={24} sm={12}>
              <Form.Item label="What makes the condition worse?" name="conditionWorse">
                <Select mode="multiple" allowClear placeholder="Select factors that worsen the condition">
                  {conditionWorseOption.map(item => <Option key={item.name} value={item.name}>{item.name}</Option>)}
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item label="What makes the condition better?" name="conditionBetter">
                <Select mode="multiple" allowClear placeholder="Select factors that improve the condition">
                  {condition.map(item => <Option key={item.name} value={item.name}>{item.name}</Option>)}
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={24}>
            <Col xs={24} sm={12}>
              <Form.Item label="Previous Medical Interventions" name="prevMedicalIntervention">
                <Select mode="multiple" allowClear placeholder="Select any past interventions">
                  {preMedicalInfo.map(item => <Option key={item.name} value={item.name}>{item.name}</Option>)}
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item label="General Medical Information" name="medicalInformation">
                <Select mode="multiple" allowClear placeholder="Select relevant medical history">
                  {medicalInfo.map(item => <Option key={item.name} value={item.name}>{item.name}</Option>)}
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Form.Item label="Past Surgical History" name="surgicalHistory">
            <TextArea rows={2} placeholder="List any previous surgeries and their dates." />
          </Form.Item>
          <Form.Item label="Current or Past Medications" name="earlierMedication">
            <Input placeholder="e.g., Ibuprofen 800mg" />
          </Form.Item>
          <Form.Item label="Allergies" name="allergies">
            <Input placeholder="e.g., Penicillin, Aspirin" />
          </Form.Item>

          <Form.Item label={`Pain Scale (0-10): ${painValue}`} name="painScale">
            <Slider min={0} max={10} onChange={setPainValue} value={painValue} />
          </Form.Item>
          <Form.Item label="Patient's End Goal" name="endGoal">
            <TextArea rows={3} placeholder="What does the patient hope to achieve with this therapy?" />
          </Form.Item>

          <Divider />
          <div className="submit-button-container">
            <Button type="primary" htmlType="submit" size="large">
              Submit New Assessment
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default SubmitAssessmentForm;