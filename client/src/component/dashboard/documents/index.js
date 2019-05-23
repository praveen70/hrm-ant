import React from "react";
import { withRouter } from "react-router";
import Home from "../home/home";
import Dropzone from "react-dropzone";
import { UPLOAD_FILE } from "../../../queries/index";
import { Mutation } from "react-apollo";
import axios from 'axios';



import {
  Form,
  Select,
  Input,
  Button,
  Radio,
  Icon,
  DatePicker,
  Upload,
  Modal,
  Row,
  Col,
  Card
} from "antd";
import "./documents.css";
const FormItem = Form.Item;

class Documents extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      previewVisible: false,
      previewImage: "",
      image:'',
      largeImage:'',
      fileList: [
        {
          uid: "-1",
          name: "",
          status: "done",
          url: ""
        }
      ]
    };

  }
//  fileChange=(event) =>{
//    const { name, type, value } = event.target;
//    const val = type=== 'number' ? parseFloat(value) : value;
//    this.setState({ [name]: val})
//    console.log(val)
//   // const files = event.target.files;
//   // 
//   // console.log(name, type, value)

//  }

 fileUpload = async event => {
  console.log( "i am id",this.props.match.params._id)
  const _id = this.props.match.params._id
   console.log('uploading file...')
   const files = event.target.files;
   console.log(files)
   const data = new FormData();
   data.append("file", files[0])
   data.append('upload_preset', "hrImages")
   const res = await fetch(`https://api.cloudinary.com/v1_1/doyawdeun/image/upload`, {
    method: "POST",
    body:data
  }) ;
  const file  = await res.json();
  console.log(file)
  this.setState({
    image:file.secure_url,
    loading:file.eager[0].secure_url
  })

    
     

}



  handleChangePreviousPage = () => {
    console.log("handleChangePage::");
    this.props.history.push("/employeeEducationInformation");
  };
  handleCancel = () => this.setState({ previewVisible: false });

  handlePreview = file => {
    console.log(file)
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true
    });
  };


//   router.post('/multiple_uploads', async (req, res) => {
//     /* we would receive a request of file paths as array */
//     let filePaths = req.body.filePaths;

//     let multipleUpload = new Promise(async (resolve, reject) => {
//       let upload_len = filePaths.length
//           ,upload_res = new Array();

//         for(let i = 0; i <= upload_len + 1; i++)
//         {
//             let filePath = filePaths[i];
//             await cloudinary.v2.uploader.upload(filePath, (error, result) => {

//                 if(upload_res.length === upload_len)
//                 {
//                   /* resolve promise after upload is complete */
//                   resolve(upload_res)
//                 }else if(result)
//                 {
//                   /*push public_ids in an array */  
//                   upload_res.push(result.public_id);
//                 } else if(error) {
//                   console.log(error)
//                   reject(error)
//                 }

//             })

//         } 
//     })
//     .then((result) => result)
//     .catch((error) => error)

//     /*waits until promise is resolved before sending back response to user*/
//     let upload = await multipleUpload; 
//     res.json({'response':upload})
// })

handleDrop = () => {
  console.log("fileList", this.state.fileList[0])
  // Push all the axios request promise into a single array
  const uploaders = this.state.fileList.thumbUrl.map(file => {
    // Initial FormData
    const formData = new FormData();
    formData.append("file", this.state.fileList[0].thumbUrl);
    formData.append("tags", `codeinfuse, medium, gist`);
    formData.append("upload_preset", "pvhilzh7"); // Replace the preset name with your own
    formData.append("api_key", "1234567"); // Replace API key with your own Cloudinary key
    formData.append("timestamp", (Date.now() / 1000) | 0);
    
    // Make an AJAX upload request using Axios (replace Cloudinary URL below with your own)
    return axios.post("https://api.cloudinary.com/v1_1/doyawdeun/image/upload", formData, {
      headers: { "X-Requested-With": "XMLHttpRequest" },
    }).then(response => {
      const data = response.data;
      const fileURL = data.secure_url // You should store this URL for future references in your app
      console.log(data);
    })
  });

  // Once all the files are uploaded 
  axios.all(uploaders).then(() => {
    // ... perform after upload is successful operation
  });
}


  handleSubmit= async event =>{
    const { thumbUrl } =this.state.fileList;
    console.log(thumbUrl)
    console.log(this.state.fileList[0].thumbUrl)
    const data = new FormData();
    data.append("file", this.state.fileList[0].thumbUrl)
    data.append('upload_preset', "hrImages")
    const res = await fetch(`https://api.cloudinary.com/v1_1/doyawdeun/image/upload`, {
     method: "POST",
     body:data
   }) ;
   const file  = await res.json();
  console.log(file)
  this.setState({
    image:this.state.fileList.secure_url,
    // loading:this.state.fileList.eager[0].secure_url
  })

  }

  handleChange = ( {fileList} ) => this.setState({ fileList });
  


  onDrop = async ([file]) => {
   const response = await this.props.mutate({ variables: { file } });
   console.log(response);
 };

  render() {
   
     const { file } = this.props.match.params
   
    const { thumbUrl } =this.state.fileList;
    console.log(thumbUrl)
    console.log("fileList",this.state.fileList)
    const { previewVisible, previewImage, fileList } = this.state;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };
    const props2 = {
       action: `https://api.cloudinary.com/v1_1/doyawdeun./image/upload`,
      listType: "picture",
      className: "upload-list-inline"
    };
    return (
      <Home>
      <Card
      title="Documents"
      bordered={false}
    >
 {/* <Mutation mutation={ UPLOAD_FILE }  variables= {{  file  } }  >
                  {(uploadFile, { file,  loading, error }) => {
        console.log("from render",file)
                    if (loading) {
                      return <div><loading /></div>;
                    }
   return( */}
       <div>
    


        <Form  method="post" enctype="multipart/form-data" >
          <Row className="row" type="flex" justify="start">
            <Col span={8}>
              <FormItem label="Resume" {...formItemLayout}>
                <Upload
                  name='file'
                // action="https://api.cloudinary.com/v1_1/doyawdeun./image/upload"
                  listType="picture-card"
                  onPreview={this.handlePreview}
                  onChange={this.handleChange}
                >
                  {fileList.length >= 2 ? null : uploadButton}
                </Upload>
                <Modal
                  visible={previewVisible}
                  footer={null}
                  onCancel={this.handleCancel}
                >
                  <img
                    alt="example"
                    style={{ width: "100%" }}
                    src={previewImage}
                  />
                </Modal>
              </FormItem>
            </Col>
            <Col span={8}>
              <FormItem label="Qualification" {...formItemLayout}>
                <Upload
               //   action="https://api.cloudinary.com/v1_1/doyawdeun/image/upload"
                  listType="picture-card"
                  onPreview={this.handlePreview}
                  onChange={this.handleChange}
                >
                  {fileList.length >= 10 ? null : uploadButton}
                </Upload>
                <Modal
                  visible={previewVisible}
                  footer={null}
                  onCancel={this.handleCancel}
                >
                  <img
                    alt="example"
                    style={{ width: "100%" }}
                    src={previewImage}
                  />
                </Modal>
              </FormItem>
            </Col>
            <Col span={8}>
              <FormItem label="Address proof" {...formItemLayout}>
                <Upload
                //  action="https://api.cloudinary.com/v1_1/doyawdeun/image/upload"
                  listType="picture-card"
                  onPreview={this.handlePreview}
                  onChange={this.handleChange}
                >
                  {fileList.length >= 10 ? null : uploadButton}
                </Upload>
                <Modal
                  visible={previewVisible}
                  footer={null}
                  onCancel={this.handleCancel}
                >
                  <img
                    alt="example"
                    style={{ width: "100%" }}
                    src={previewImage}
                  />
                </Modal>
              </FormItem>
            </Col>
            <Col span={8}>
              <FormItem label="photographs" {...formItemLayout}>
                <Upload
                 // action="https://api.cloudinary.com/v1_1/doyawdeun/image/upload"
                  listType="picture-card"
                  onPreview={this.handlePreview}
                  onChange={this.handleChange}
                >
                  {fileList.length >= 3 ? null : uploadButton}
                </Upload>
                <Modal
                  visible={previewVisible}
                  footer={null}
                  onCancel={this.handleCancel}
                >
                  <img
                    alt="example"
                    style={{ width: "100%" }}
                    src={previewImage}
                  />
                </Modal>
              </FormItem>
            </Col>
            <Col span={8}>
              <FormItem label="Form 16" {...formItemLayout}>
                <Upload
                 //  action="https://api.cloudinary.com/v1_1/doyawdeun/image/upload"
                  listType="picture-card"
                  onPreview={this.handlePreview}
                  onChange={this.handleChange}
                >
                  {fileList.length >= 3 ? null : uploadButton}
                </Upload>
                <Modal
                  visible={previewVisible}
                  footer={null}
                  onCancel={this.handleCancel}
                >
                  <img
                    alt="example"
                    style={{ width: "100%" }}
                    src={previewImage}
                  />
                </Modal>
              </FormItem>
            </Col>
            <Col span={8}>
              <FormItem label="A/c Statement" {...formItemLayout}>
                <Upload
                 //  action="https://api.cloudinary.com/v1_1/doyawdeun/image/upload"
                  listType="picture-card"
                  onPreview={this.handlePreview}
                  onChange={this.handleChange}
                >
                  {fileList.length >= 3 ? null : uploadButton}
                </Upload>
                <Modal
                  visible={previewVisible}
                  footer={null}
                  onCancel={this.handleCancel}
                >
                  <img
                    alt="example"
                    style={{ width: "100%" }}
                    src={previewImage}
                  />
                </Modal>
              </FormItem>
            </Col>
            <Col span={8}>
              <FormItem label="PF Details" {...formItemLayout}>
                <Upload
                  // action="https://api.cloudinary.com/v1_1/doyawdeun/image/upload"
                  listType="picture-card"
                  onPreview={this.handlePreview}
                  onChange={this.handleChange}
                >
                  {fileList.length >= 3 ? null : uploadButton}
                </Upload>
                <Modal
                  visible={previewVisible}
                  footer={null}
                  onCancel={this.handleCancel}
                >
                  <img
                    alt="example"
                    style={{ width: "100%" }}
                    src={previewImage}
                  />
                </Modal>
              </FormItem>
            </Col>
            <Col span={8}>
              <FormItem label="Pay Slip" {...formItemLayout}>
                <Upload
                // action="https://api.cloudinary.com/v1_1/doyawdeun/image/upload"
                  listType="picture-card"
                  onPreview={this.handlePreview}
                  onChange={this.handleChange}
                >
                  {fileList.length >= 3 ? null : uploadButton}
                </Upload>
                <Modal
                  visible={previewVisible}
                  footer={null}
                  onCancel={this.handleCancel}
                >
                  <img
                    alt="example"
                    style={{ width: "100%" }}
                    src={previewImage}
                  />
                </Modal>
              </FormItem>
            </Col>
            <Col span={8}>
              <FormItem label="RelievingLetter" {...formItemLayout}>
                <Upload
                 // action="https://api.cloudinary.com/v1_1/doyawdeun/image/upload"
                  listType="picture-card"
                  onPreview={this.handlePreview}
                  onChange={this.handleChange}
                >
                  {fileList.length >= 3 ? null : uploadButton}
                </Upload>
                <Modal
                  visible={previewVisible}
                  footer={null}
                  onCancel={this.handleCancel}
                >
                  <img
                    alt="example"
                    style={{ width: "100%" }}
                    src={previewImage}
                  />
                </Modal>
              </FormItem>
            </Col>
          </Row>
          <FormItem>
            {/* <FormItem>
              <Input type="file" name="file" 
              // value={this.state.image}
              onChange={event =>this.fileUpload(event)}></Input>
            </FormItem> */}

            <Button type="primary" 
            onClick={event =>this.handleSubmit(event)}
            >
              <Icon type="submit"  />
              Submit
            </Button>
          </FormItem>
        </Form>

                 </div>
                 {/* )


         }}
</Mutation> */}
                   </Card>
                 </Home>
    );
  }
}







export default withRouter(Documents);
