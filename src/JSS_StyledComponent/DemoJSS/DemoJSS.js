import React, { Component } from 'react';
import { Button, SmallButton } from '../Components/Button';
import { StyledLink } from '../Components/Link';
import { TextField } from '../Components/TextField';





export default class DemoJSS extends Component {



    render() {
        return (
            <div>
                <Button className="button_style" bgPrimary fontSize2x>DID YOU SEE</Button>
                <SmallButton>hello phú</SmallButton>
                <StyledLink id="abc" name="abc123">ahihi <p>grtghfgd</p></StyledLink>
                <TextField inputColor="blue" />
            </div>
        )
    }
}
