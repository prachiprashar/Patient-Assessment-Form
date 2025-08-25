// src/UpdateAssessmentForm.jsx

import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Select, Slider, Row, Col, Spin, message, Card, Typography, Divider } from 'antd';
import { condition, conditionWorseOption, medicalInfo, preMedicalInfo } from './options';
import { Link } from 'react-router-dom';
import './FormStyles.css'; // Import the CSS file

const { Option } = Select;
const { TextArea } = Input;
const { Title, Paragraph } = Typography;

// Mock function to simulate fetching existing data from an API
const fetchAssessmentData = (patientID) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        patientID: patientID,
        assessmentDate: "2025-05-15",
        mainComplaint: "Chronic lower back pain after lifting incident.",
        injury: "Herniated disc L4-L5",
        injuryDate: "2024-01-20",
        surgeryDate: "",
        injuryDescription: "Injury occurred while lifting a heavy box at work. Felt a sharp pain in the lower back.",
        therapy: "Physical therapy for 6 months.",
        therapyDate: "2024-07-01",
        presentCondition: "Pain is a constant dull ache, rated at a 6/10. It becomes sharp with certain movements.",
        currentSymptoms: "Numbness and tingling that radiates down the left leg to the foot.",
        surgicalHistory: "Appendectomy in 2010.",
        doctorReferral: "Dr. Evelyn Reed",
        conditionWorse: ["Sitting", "Bending"],
        conditionBetter: ["Lying Down", "Walking"],
        prevMedicalIntervention: ["X Ray MRI", "Injection"],
        medicalInformation: ["Arthritis"],
        earlierMedication: "Ibuprofen 800mg as needed.",
        allergies: "Penicillin",
        additionalInfo: "Patient is a non-smoker. Works an office job which requires long hours of sitting.",
        endGoal: "To be able to play with my children and return to hiking without debilitating pain.",
        painScale: 6,
      });
    }, 1200); // Simulate network delay
  });
};

const UpdateAssessmentForm = () => {
  const [form] = Form.useForm();
  const [painValue, setPainValue] = useState(0);
  const [loading, setLoading] = useState(true);

  const patientID = "patient-record-456";

  useEffect(() => {
    fetchAssessmentData(patientID).then(data => {
      form.setFieldsValue(data);
      setPainValue(data.painScale || 0);
      setLoading(false);
    });
  }, [form]);

  const onFinish = (values) => {
    const updatedData = { ...values, painScale: painValue };
    console.log('Form Updated:', updatedData);
    message.success(`Assessment for ${patientID} has been updated successfully!`);
  };

  if (loading) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Spin size="large" />
        <Title level={4} style={{ marginTop: 20, color: '#555' }}>Loading Patient Data...</Title>
      </div>
    );
  }

  return (
    <div className="form-container">
      <div className="form-header">
        <Title level={2}>Update Patient Assessment</Title>
        <Paragraph>Modify the details below for the existing patient record.</Paragraph>
        <Link to="/" className="nav-button">Switch to New Assessment Form</Link>
      </div>
      <Card className="form-card">
        <Form
          form={form}
          layout="vertical"
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
              Update Assessment
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default UpdateAssessmentForm;