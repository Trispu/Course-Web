import { PlusOutlined } from "@ant-design/icons";
import { Button, Form, Image, Input, Modal, Popconfirm, Select, Table, Upload } from "antd"
import { useForm } from "antd/es/form/Form";
import axios from "axios";
import { useEffect, useState } from "react";
import uploadFile from "../../utils/upload";
import "./index.scss";


function CourseManagement() {
  const [form]=useForm();
  const [dataSource,setDataSource] = useState([]);
  const[isOpen,setIsOpen] = useState(false);
  const handleDelete=async(id) =>{
    const response= await axios.delete(`https://6627a8deb625bf088c09302d.mockapi.io/Course/${id}`);
    console.log(response);
    const listAfterDelete= dataSource.filter((course)=>course.id!==id);
    setDataSource(listAfterDelete);
  }
  const columns = [
    {
      title: 'courseName',
      dataIndex: 'name',
      key: 'name',
    },
    
    {
      title: 'price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'category',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'image',
      dataIndex: 'image',
      key: 'image',
      render:(image)=><Image src={image} width={150}/>
    },
    {
      title: 'Action',
      dataIndex: 'id',
      key: 'id',
      render: (id) => <>
     <Popconfirm
    title="Delete the task"
    description="Are you sure to delete this task?"
    onConfirm={()=>handleDelete(id)}
  
    okText="Yes"
    cancelText="No"
  >
    <Button type="primary" danger>
      Delete
      </Button>
  </Popconfirm>
      </>
    },
  ];
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [fileList, setFileList] = useState([
    
  ]);
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };
  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
  const uploadButton = (
    <button
      style={{
        border: 0,
        background: 'none',
      }}
      type="button"
    >
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </button>
  );
  const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  async function fetchCourse(){
    const response = await axios.get("https://6627a8deb625bf088c09302d.mockapi.io/Course")
    setDataSource(response.data);
  }
  function handleShowModal(){
    setIsOpen(true);
  }
  function handleCloseModal(){
    setIsOpen(false);
  }
 async function handleSubmit(values){
console.log(values);
console.log(values.image.file.originFileObj);
const url = await uploadFile(values.image.file.originFileObj);
values.image=url;
console.log(url);
axios.post("https://6627a8deb625bf088c09302d.mockapi.io/Course",values)
setDataSource([...dataSource,values]);
form.resetFields();
handleCloseModal();
  }
  function handleOk(){
form.submit();
  }
  useEffect(()=>{
    fetchCourse();
  },[]);
  return (
    
    <div className="container11">
      
      <div className="buttonAdd">
      <Button className="button" type="primary" danger onClick={handleShowModal}>Add new Course</Button>
      </div>
      
      <Table  className="huhu" dataSource={dataSource} columns={columns} />;
      <Modal open={isOpen} title="Add new Course" onCancel={handleCloseModal} onOk={handleOk}>
        <Form labelCol={{span:24,}} form={form} onFinish={handleSubmit}>
          <Form.Item label="Course Name" name="name">
            <Input/>
          </Form.Item>
          <Form.Item label="price" name="price">
            <Input/>
          </Form.Item>
          <Form.Item label="category" name="category">
          <Select
              options={[
                { value: "BestSeller", label: <span>Best Seller</span> },
                { value: "Vip", label: <span>VIP</span> },
                { value: "Pro", label: <span>PRO</span> },
                { value: "popular", label: <span>POPULAR</span> },
              ]}
            />
          </Form.Item>
          <Form.Item label="image" name="image">
          <Upload
        action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
      >
        {fileList.length >= 8 ? null : uploadButton}
      </Upload>
          </Form.Item>
        </Form>
      </Modal>
      {previewImage && (
        <Image
          wrapperStyle={{
            display: 'none',
          }}
          preview={{
            visible: previewOpen,
            onVisibleChange: (visible) => setPreviewOpen(visible),
            afterOpenChange: (visible) => !visible && setPreviewImage(''),
          }}
          src={previewImage}
        />
      )}
    </div>
  )
}


export default CourseManagement