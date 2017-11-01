import React, {Component} from 'react';
import axios from 'axios'
import md5 from 'md5'
import Img from 'react-image'

class Detail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            caracters: [],
            comics: []
        }
      
      }
    componentDidMount() {
        const {match} = this.props
        const pv = 'c7211b772d95c9f305f27605dac085ac50b95e2d'
        let hash = md5(match.params.ts + pv + match.params.pb)
        
        axios.get(`https://gateway.marvel.com/v1/public/characters/${match.params.id}`, {
        params: {
            ts: match.params.ts,
            apikey: match.params.pb,
            hash: hash
            }
        })
        .then(res => {
          this.setState({
            caracters: res.data.data.results
          })
        })

        axios.get(`https://gateway.marvel.com/v1/public/characters/${match.params.id}/comics`, {
            params: {
              ts: match.params.ts,
              apikey: match.params.pb,
              hash: hash
            }
          })
          .then(res => {
            this.setState({
              comics: res.data.data.results
            })
          })
      }

    render() {
        const {caracters, comics} = this.state
        return (
            <div className='container'>
                <div className='detail-box-container'>
                    <div className='detail-box-img-container'>
                       {caracters.map(item => {
                           //const teste = `${item.thumbnail.path}.${item.thumbnail.extension}`;
                        })}
                    </div>
                    <div className='detail-box-text-container'>
                        <div className='detail-box-text-top'>detail-box-text-top</div>
                        <div className='detail-box-text-botton'>etail-box-text-botton</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Detail;