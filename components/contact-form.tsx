import styles from "@/styles/contact.module.scss"
import type { FormProps } from 'antd';
import { Button, Checkbox, Col, Form, Input, Row, Select } from 'antd';

type FieldType = {
  f_name: string;
  l_name: string;
  email: string;
  phone?: number;
  company?: string;
  project: string;
  category: string;
  existing_yes?: string;
  existing_unsure?: string;
  description: string;
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

function ContactForm() {
  return (
    <div className={styles.contactFormContainer}>
      <p style={{fontSize: "16pt"}}><strong>Want to get in touch? Send your info!</strong></p>
      <Form
        name="contact-form"
        labelCol={{ span: 16 }}
        labelAlign={"left"}
        // labelWrap={true}
        layout = {"vertical"}
        wrapperCol={{ span: 12 }}
        style={{ minWidth: 700 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Row style={{width: '100%'}}>
        <Col span={12}>
          <Form.Item<FieldType>
            label="First Name"
            name="f_name"
            rules={[{ required: true, message: 'Please input your first name!' }]}
            wrapperCol={{ span: 16 }}
            >
            <Input />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item<FieldType>
            label="Last Name"
            name="l_name"
            rules={[{ required: true, message: 'Please input your last name!' }]}
            wrapperCol={{ span: 16 }}
          >
            <Input />
          </Form.Item>
        </Col>
        </Row>

        <Row style={{width: '100%'}}>
        <Col span={12}>
        <Form.Item<FieldType>
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
          wrapperCol={{ span: 16 }}
        >
          <Input />
        </Form.Item>
        </Col>
        <Col span={12}>
        <Form.Item<FieldType>
          label="Phone Number"
          name="phone"
          rules={[{ required: true }]}
          wrapperCol={{ span: 16 }}
        >
          <Input/>
        </Form.Item>
        </Col>
        </Row>

        <Form.Item<FieldType>
          label="Company Name (if applicable)"
          name="company"
        >
          <Input />
        </Form.Item>

          <Row>
          <Col span={12}>
        <Form.Item<FieldType>
          label="Is this a new or existing project?"
          name="project"
          rules={[{ required: true }]}
          wrapperCol={{ span: 20 }}
        >
          <Select options={[
                { label: <span>N/A, asking a general question</span>, value: 'General question' },
                { label: <span>New project</span>, value: 'New project' },
                { label: <span>Existing project (reno/add-on)</span>, value: 'Existing project' },
          ]} />
      </Form.Item>
      </Col>

      <Col span={12}>
          {/* complex form fields */}
          <p style={{textAlign: "left"}}>If existing, have we worked on it?</p>
        <Form.Item<FieldType>
            name = "existing_yes"
            style={{ display: 'inline-block', width: 'calc(50%)' }}
          >
            <Checkbox value={"Yes"} defaultChecked={false} style={{float: 'left'}}>Yes</Checkbox>
          </Form.Item>

          <Form.Item<FieldType>
            name = "existing_unsure"
            style={{ display: 'inline-block', width: 'calc(50%)' }}
          >
            <Checkbox value={"Unsure"} defaultChecked={false} style={{float: 'left'}}>Unsure</Checkbox>
          </Form.Item>
      </Col>
      </Row>

          <Form.Item<FieldType>
          label="Is this project focused on a specific discipline?"
          name="category"
          rules={[{ required: true }]}
        >
          <Select options={[
            { value: 'Full MEP', label: <span>Full MEP</span> },
            { label: <span>HVAC Design or load calculations</span>, value: 'HVAC Design or Load Calculations' },
            { label: <span>Manufacturing Facility Design</span>, value: 'Manufacturing facility design' },
            { label: <span>Power and lighting</span>, value: 'Power and lighting' },
            { label: <span>Data/IT systems</span>, value: 'Data/IT systems' },
            { label: <span>Photometrics</span>, value: 'Photometrics' },
            { label: <span>Full plumbing system</span>, value: 'Full plumbing system' },
            { label: <span>Natural gas system design</span>, value: 'Natural gas system design' }
          ]} />
        </Form.Item>

        <Form.Item<FieldType>
          label="Description & Details"
          name="description"
          help={"Describe the project scope and/or details about the service."}
          rules={[{ required: true, message: 'Please input details about your question or project!' }]}
          wrapperCol={{ span: 20 }}
        >
          <Input.TextArea style={{width: '100%', minHeight: "120px"}}/>
        </Form.Item>

        <Form.Item wrapperCol={{ span: 24 }}>
          <Button type="primary" htmlType="submit" style={{marginTop: '1rem'}}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default ContactForm;