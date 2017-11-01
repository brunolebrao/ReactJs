import React, { Component } from 'react';
import axios from 'axios'
import md5 from 'md5'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      caracters: {},
      error: {}
    }
  
  }

  componentDidMount() {
    const {match} = this.props
    const hash = md5(match.params.ts + match.params.pv + match.params.pb)
    axios.get('https://gateway.marvel.com/v1/public/characters', {
      params: {
        ts: match.params.ts,
        apikey: match.params.pb,
        hash: hash
      }
    })
    .then(res => {
      this.setState({
        caracters: res.data.data,
      })
    })
    .catch(err => {
      this.setState({
        status: err.response.status
      })
    })
  }

  render() {
    const {caracters} = this.state
    console.log(caracters);
    return (
      <div className='container'>
          <BootstrapTable
            data={ caracters.results }
            pagination>
            <TableHeaderColumn headerAlign='center' width='20%' dataField='name' isKey>Nomme</TableHeaderColumn>
            <TableHeaderColumn headerAlign='center' width='60%' dataField='description'>Descrição</TableHeaderColumn>
            <TableHeaderColumn headerAlign='center' width='20%' dataField='modified'>Ultima Atualização</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

export default Home;
