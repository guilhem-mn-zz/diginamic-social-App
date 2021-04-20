import React from 'react'
import { Row, Col, Layout, Button } from 'antd';
const { Footer } = Layout;

const Foot = () => {
    return (
       <div id="Footer">
           <Footer>
            <Row justify="center">
                    <Col span={4}>
                        <Button
                            type="text">Colonne 1</Button>
                    </Col>
                    <Col span={4}>
                        <Button
                            type="text">Colonne 2</Button>
                    </Col>
                    <Col span={4}>
                        <Button
                            type="text">Contact</Button>
                    </Col>
                    <Col span={4}>
                        <Button
                            type="text">Mentions Légales</Button>
                    </Col>
                </Row>
           </Footer>
       </div>
    )
}

export default Foot;