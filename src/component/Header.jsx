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
import { PageHeader, Button, Row, Col, Divider } from 'antd';

const Header = () => {


  const handleDisconnect = async () => {
  };

  const handleLogin = async () => {
    
  }
  const handleRegister = async () => {

  }

  return (
    <div id="Navbar">
      <Row justify="start">
        <Col span={4}>
       
          <div>
            <PageHeader
          className="site-page-header"
          title={`Socialized`}
          extra={[
            <Button 
              shape="round"
              onClick={handleLogin}>
              Se connecter
            </Button>,
            <Button 
              shape="round"
              onClick={handleRegister}>
              S'inscrire
            </Button>
          ]}>
          </PageHeader>
          </div>
    
          <div>
            <PageHeader
              className="site-page-header"
              title={`Socialized `}
              extra={[
                <Button
                shape="round"
                onClick={handleDisconnect}>
                  Se déconnecter
                </Button>
              ]}
            >
          </PageHeader>
          </div>

        </Col>
        <Divider />
      </Row>
    </div>
  )
}

/* <header className='header p-relative background'>
      <h1>AllWalls</h1>
      <p>Join - Share - Imagine - Create</p>
      {me?.id ? (
        <div>
          <p>{`Bonjour ${me.login}`}</p>
          <button className='top-right btn-xs' onClick={handleDisconnect}>
            Deconnexion
          </button>
        </div>
      ) : (
        <Link className='top-right btn btn-xs' to='/login'>
          Login
        </Link>
      )}
  </header>
*/
export default Header;