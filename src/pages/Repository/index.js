import React, {Component} from 'react';
import api from '../../services/api';
import { promises } from 'fs';

// import { Container } from './styles';

export default class Repository extends Component{
    async componentDidMount(){
        const { match } = this.props;

        const repoName  = decodeURIComponent(match.params.repository);

        console.log(repoName);

        const [repository, issues]= await Promise.all([
            api.get(`/repos/${repoName}`),
            api.get(`/repos/${repoName}/issues`)
        ])
        console.log(repository);
        console.log(issues);
    }
    render(){
        return <h1>Repository</h1>;
    }
}

