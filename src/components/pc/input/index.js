import React from 'react'
import CodeView from '../../../code-view'
import Highlight from 'react-highlight'
import Title from '../../title.js'
import readme from './readme.md'
import { Row, Col } from 'fit-layout'

import Basic from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!./demo/basic.js'
import basicCode from 'text!./demo/basic.js'
import basicMarkdown from './demo/basic.md'

import Callback from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!./demo/callback.js'
import callbackCode from 'text!./demo/callback.js'
import callbackMarkdown from './demo/callback.md'

import Disabled from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!./demo/disabled.js'
import disabledCode from 'text!./demo/disabled.js'
import disabledMarkdown from './demo/disabled.md'

const colStyle = {
    padding: 10
}

export default class Layout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        document.title = '输入框'
    }

    render() {
        return (
            <div className="_namespace">
                <Title>{readme}</Title>

                <Row style={colStyle}>
                    <Col style={colStyle}
                         span="12">
                        <CodeView md={basicMarkdown}
                                  code={basicCode}>
                            <Basic/>
                        </CodeView>
                    </Col>

                    <Col style={colStyle}
                         span="12">
                        <CodeView md={callbackMarkdown}
                                  code={callbackCode}>
                            <Callback/>
                        </CodeView>

                        <CodeView md={disabledMarkdown}
                                  code={disabledCode}
                                  style={{marginTop:10}}>
                            <Disabled/>
                        </CodeView>
                    </Col>
                </Row>

            </div>
        )
    }
}