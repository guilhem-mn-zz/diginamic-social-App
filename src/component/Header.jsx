/*

dans projets: mettre un buildback mars/create-react-app

config var -> activer le cors, pour que l front puisse nous appeler, et coter front, elle sort a stocker l'url du back


on déclare un initialState value: 0, cet les valeurs de cet initial state permettent de tracker différentes choses (un nombre, un état etc)

ensuite on crée une méthode "Reducer" qui reçoit deux arguments (state, et un objet action décrivant ce qu'il s'est passé)

*/
/*
fonctions :

- handle connect (on store le token stocké)
- handle disconnect (on destroy le token stocké)

Si on possède le token et que le login est réussi, on affiche le bouton se déconnecter, sinon le formulaire de conenction
*/

import React from 'react'
import { PageHeader, Input, Button, Row, Col, Divider } from 'antd';
import { MailOutlined, EyeInvisibleOutlined } from '@ant-design/icons';

const Header = () => {
  return (
    <div id="Navbar">
      <Row justify="start">
        <Col span={4}>

          <PageHeader
            className="site-page-header"
            title="Socialize"
            extra={[
              <Input 
                placeholder=" Votre e-mail"
                type="email"
                prefix={<MailOutlined className="site-form-item-icon" />}
              />,
              <Input 
                placeholder=" Votre mot-de-passe"
                type="password"
                prefix={<EyeInvisibleOutlined className="site-form-item-icon" />}
              />,
              <Button 
                shape="round">
                Se connecter
              </Button>,
              <Button 
                shape="round">
                S'inscrire
              </Button>,
            ]}>
            </PageHeader>
        </Col>
        <Divider />
      </Row>
    </div>
  )
}


export default Header;

/*

<PageHeader
    className="site-page-header"
    title="Socialize"
    extra={[
        <Input 
          placeholder="e-mail ou identifiant"
          prefix={<UserOutlined className="site-form-item-icon" />}
        />,
        <Input 
          placeholder="mot de passe"
          prefix={<EyeInvisibleOutlined className="site-form-item-icon" />}
        />,
        <Button 
          shape="round">
          Se connecter
        </Button>,
      ]}>
    </PageHeader>

    */