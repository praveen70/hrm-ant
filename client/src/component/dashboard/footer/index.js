import FooterToolbar from 'ant-design-pro/lib/FooterToolbar';
import { Button } from 'antd';

const Footer =() =>{
    return(
    <FooterToolbar extra="extra information">
      <Button>Cancel</Button>
      <Button type="primary">Submit</Button>
    </FooterToolbar>

    )

}


export default Footer